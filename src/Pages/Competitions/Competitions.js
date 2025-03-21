import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { load } from 'cheerio';
import './Competitions.css';

const Competitions = () => {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPages, setMaxPages] = useState(1);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                console.log('Fetching news data...');
                const allNews = [];
                const corsProxy = 'https://api.allorigins.win/get?url=';
                let page = 1;
                let hasMoreNews = true;

                while (hasMoreNews) {
                    const url = corsProxy + encodeURIComponent(`https://voco.ee/category/opilasvoistlused/page/${page}/`);
                    const { data } = await axios.get(url);
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
                        hasMoreNews = false;
                    } else {
                        allNews.push(...pageNews);
                        page++;
                    }
                }

                console.log('Parsed news data:', allNews);
                setNews(allNews);
                setMaxPages(page - 1);
            } catch (error) {
                console.error('Error fetching news data:', error);
            }
        };

        fetchNews();
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const paginatedNews = news.slice((currentPage - 1) * 12, currentPage * 12);

    const rows = [];
    for (let i = 0; i < paginatedNews.length; i += 3) {
        rows.push(paginatedNews.slice(i, i + 3));
    }

    return (
        <div className="competition-container">
            <h1>Võistlused</h1>
            {paginatedNews.length === 0 ? (
                <p>Võistluste laadimine...</p>
            ) : (
                <>
                    {rows.map((row, rowIndex) => (
                        <div key={rowIndex} className="competition-row">
                            {row.map((item, index) => (
                                <div key={index} className="competition-card">
                                    <img src={item.image} alt={item.title} className="competition-image" />
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <a href={item.readMoreLink} target="_blank" rel="noopener noreferrer">Loe lisaks</a>
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className="pagination">
                        {Array.from({ length: maxPages }, (_, index) => (
                            <button
                                key={index + 1}
                                className={currentPage === index + 1 ? 'active' : ''}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Competitions;