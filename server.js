const express = require('express');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const port = 3000;

let cachedNews = null;
let lastFetchTime = 0;
const cacheDuration = 60 * 60 * 1000; // 1 hour
const corsProxy = 'https://api.allorigins.win/get?url=';

const fetchNews = async () => {
    const baseUrl = 'https://voco.ee/uudised/page/';
    const news = [];
    const newsPerPage = 12;
    let page = 1;
    let hasMoreNews = true;

    while (hasMoreNews) {
        const url = corsProxy + encodeURIComponent(`${baseUrl}${page}/`);
        console.log(`Fetching data from: ${url}`);
        const { data } = await axios.get(url);
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

    return news;
};

const updateCache = async () => {
    try {
        cachedNews = await fetchNews();
        lastFetchTime = Date.now();
        fs.writeFileSync('newsData.json', JSON.stringify(cachedNews, null, 2));
        console.log('News data cached');
    } catch (error) {
        console.error('Error fetching news data:', error);
    }
};

// Pre-fetch news data when the server starts
updateCache();

app.get('/', (req, res) => {
    res.send('Server is running. Use /news to get the news data.');
});

app.get('/news', async (req, res) => {
    const currentTime = Date.now();
    if (!cachedNews || currentTime - lastFetchTime > cacheDuration) {
        await updateCache();
    }
    res.json(cachedNews);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
