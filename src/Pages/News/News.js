import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { load } from 'cheerio';
import './News.css';

const News = () => {
    const [news, setNews] = useState([]);
    const maxPages = 100;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                console.log('Fetching news data...');
                const allNews = [];

                for (let page = 1; page <= maxPages; page++) {
                    const { data } = await axios.get('https://api.allorigins.win/get?url=' + encodeURIComponent(`https://voco.ee/uudised/page/${page}/`));
                    console.log(`Data fetched from page ${page}:`, data);
                    const $ = load(data.contents);

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

                    allNews.push(...pageNews);
                }

                console.log('Parsed news data:', allNews);
                setNews(allNews);
            } catch (error) {
                console.error('Error fetching news data:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="news-container">
            <h1>Uudised leht</h1>
            {news.length === 0 ? (
                <p>Loading news...</p>
            ) : (
                news.map((item, index) => (
                    <div key={index} className="news-card">
                        <img src={item.image} alt={item.title} className="news-image" />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href={item.readMoreLink} target="_blank" rel="noopener noreferrer">Loe lisaks</a>
                    </div>
                ))
            )}
        </div>
    );
};

export default News;