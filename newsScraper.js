const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const baseUrl = 'https://voco.ee/uudised/page/';
const newsPerPage = 12;
const corsProxy = 'https://api.allorigins.win/get?url=';

const scrapeNews = async () => {
    try {
        const news = [];
        let page = 1;
        let hasMoreNews = true;

        while (hasMoreNews) {
            const url = corsProxy + encodeURIComponent(`${baseUrl}${page}/`);
            const { data } = await axios.get(url);
            console.log(`Data fetched from page ${page}:`, data);
            const $ = cheerio.load(data.contents);

            const pageNews = [];

            $('.postPreview').each((index, element) => {
                const title = $(element).find('.postPreview_title a').text().trim();
                const description = $(element).find('.postPreview_excerpt').text().trim();
                const imageStyle = $(element).find('.postPreview_image').attr('style');
                const image = imageStyle ? imageStyle.match(/url\(['"]?(.*?)['"]?\)/)[1] : null;
                const readMoreLink = $(element).find('.postPreview_more').attr('href');

                pageNews.push({
                    title,
                    description,
                    image,
                    readMoreLink
                });
            });

            if (pageNews.length === 0) {
                hasMoreNews = false;
            } else {
                news.push(...pageNews);
                page++;
            }
        }

        fs.writeFileSync('newsData.json', JSON.stringify(news, null, 2));
        console.log('News data saved to newsData.json');
    } catch (error) {
        console.error('Error fetching news data:', error);
    }
};

scrapeNews();