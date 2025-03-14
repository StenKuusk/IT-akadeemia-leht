const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const baseUrl = 'https://voco.ee/uudised/page/';
const maxPages = 100;

const scrapeNews = async () => {
    try {
        const news = [];

        for (let page = 1; page <= maxPages; page++) {
            const url = `${baseUrl}${page}/`;
            console.log(`Fetching data from: ${url}`);
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);

            $('.postPreview').each((index, element) => {
                const title = $(element).find('.postPreview_title a').text().trim();
                const description = $(element).find('.postPreview_excerpt').text().trim();
                const imageStyle = $(element).find('.postPreview_image').attr('style');
                const image = imageStyle ? imageStyle.match(/url\(['"]?(.*?)['"]?\)/)[1] : null;
                const readMoreLink = $(element).find('.postPreview_more').attr('href');

                news.push({
                    title,
                    description,
                    image,
                    readMoreLink
                });
            });

            // Check if there are no more news items on the current page
            if ($('.postPreview').length === 0) {
                break;
            }
        }

        fs.writeFileSync('newsData.json', JSON.stringify(news, null, 2));
        console.log('News data saved to newsData.json');
    } catch (error) {
        console.error('Error fetching news data:', error);
    }
};

scrapeNews();