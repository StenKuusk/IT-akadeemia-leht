import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { load } from 'cheerio';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const newsPerPage = 12;
  const cacheKey = 'cachedNews';
  const cacheExpirationKey = 'cachedNewsExpiration';
  const cacheDuration = 60 * 60 * 1000;

  useEffect(() => {
    const fetchNews = async () => {
      const cachedNews = localStorage.getItem(cacheKey);
      const cacheExpiration = localStorage.getItem(cacheExpirationKey);
      const now = Date.now();

      if (cachedNews && cacheExpiration && now < parseInt(cacheExpiration)) {
        const parsedNews = JSON.parse(cachedNews);
        setNews(parsedNews);
        setMaxPages(Math.ceil(parsedNews.length / newsPerPage));
        return;
      }

      try {
        const allNews = [];
        const requests = [];
        const corsProxy = 'https://api.allorigins.win/get?url=';
        const maxPagesToFetch = 50;

        for (let page = 1; page <= maxPagesToFetch; page++) {
          requests.push(
            axios.get(corsProxy + encodeURIComponent(`https://voco.ee/uudised/page/${page}/`))
          );
        }

        const responses = await Promise.all(requests);
        for (let i = 0; i < responses.length; i++) {
          const { data } = responses[i];
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
              readMoreLink,
            });
          });

          if (pageNews.length === 0) {
            break;
          }

          allNews.push(...pageNews);

          if (pageNews.length < newsPerPage) {
            break;
          }
        }

        setNews(allNews);
        setMaxPages(Math.ceil(allNews.length / newsPerPage));

        localStorage.setItem(cacheKey, JSON.stringify(allNews));
        localStorage.setItem(cacheExpirationKey, (now + cacheDuration).toString());
      } catch (error) {
        if (cachedNews) {
          const parsedNews = JSON.parse(cachedNews);
          setNews(parsedNews);
          setMaxPages(Math.ceil(parsedNews.length / newsPerPage));
        }
      }
    };

    fetchNews();
  }, [cacheDuration]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatedNews = news.slice((currentPage - 1) * newsPerPage, currentPage * newsPerPage);

  const rows = [];
  for (let i = 0; i < paginatedNews.length; i += 3) {
    rows.push(paginatedNews.slice(i, i + 3));
  }

  const renderPagination = () => {
    const pageNumbers = [];
    const delta = 2;

    pageNumbers.push(
      <button
        key="prev"
        onClick={handlePrevPage}
        className={currentPage === 1 ? 'disabled' : ''}
        disabled={currentPage === 1}
      >
        ←
      </button>
    );

    pageNumbers.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={currentPage === 1 ? 'active' : ''}
      >
        1
      </button>
    );

    if (currentPage > delta + 2) {
      pageNumbers.push(<span key="ellipsis-start">…</span>);
    }

    const startPage = Math.max(2, currentPage - delta);
    const endPage = Math.min(maxPages - 1, currentPage + delta);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      );
    }

    if (currentPage < maxPages - delta - 1) {
      pageNumbers.push(<span key="ellipsis-end">…</span>);
    }

    if (maxPages > 1) {
      pageNumbers.push(
        <button
          key={maxPages}
          onClick={() => handlePageChange(maxPages)}
          className={currentPage === maxPages ? 'active' : ''}
        >
          {maxPages}
        </button>
      );
    }

    pageNumbers.push(
      <button
        key="next"
        onClick={handleNextPage}
        className={currentPage === maxPages ? 'disabled' : ''}
        disabled={currentPage === maxPages}
      >
        →
      </button>
    );

    return pageNumbers;
  };

  return (
    <div className="news-container">
      <h1>Uudised</h1>
      {paginatedNews.length === 0 ? (
        <p>Uudiste laadimine...</p>
      ) : (
        <>
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="news-row">
              {row.map((item, index) => (
                <div key={index} className="news-card">
                  <img src={item.image} alt={item.title} className="news-image" />
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <a href={item.readMoreLink} target="_blank" rel="noopener noreferrer">
                    Loe lisaks
                  </a>
                </div>
              ))}
            </div>
          ))}
          <div className="pagination">{renderPagination()}</div>
        </>
      )}
    </div>
  );
};

export default News;