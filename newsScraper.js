const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const baseUrl = 'https://voco.ee/uudised/page/';
const maxPages = 1;
const newsPerPage = 12;
const corsProxy = 'https://api.allorigins.win/get?url=';

const scrapeNews = async () => {
    try {
        const news = [];
        const requests = [];

        for (let page = 1; page <= maxPages; page++) {
            requests.push(axios.get(corsProxy + encodeURIComponent(`${baseUrl}${page}/`)));
        }

        const responses = await Promise.all(requests);
        for (let i = 0; i < responses.length; i++) {
            const { data } = responses[i];
            console.log(`Data fetched from page ${i + 1}:`, data);
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
                break;
            }

            news.push(...pageNews);

            if (pageNews.length < newsPerPage) {
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