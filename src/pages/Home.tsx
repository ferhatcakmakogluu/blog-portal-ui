import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { haberler } from '../data/haberler';
import './Home.css';

const ITEMS_PER_PAGE = 15;

const Home: React.FC = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [searchTopic, setSearchTopic] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleClearFilters = () => {
    setSearchTitle('');
    setSearchDate('');
    setSearchTopic('');
    setCurrentPage(1);
  };

  const hasActiveFilters = searchTitle || searchDate || searchTopic;

  const filteredHaberler = haberler.filter(haber => {
    const matchTitle = haber.baslik.toLowerCase().includes(searchTitle.toLowerCase());
    const matchDate = searchDate ? haber.tarih.includes(searchDate) : true;
    const matchTopic = searchTopic ? haber.konu === searchTopic : true;
    return matchTitle && matchDate && matchTopic;
  });

  // Sayfalama hesaplamaları
  const totalPages = Math.ceil(filteredHaberler.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedHaberler = filteredHaberler.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Sayfa numaralarını oluştur
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const konular = ['Teknoloji', 'Spor', 'Kültür-Sanat', 'Otomotiv'];

  return (
    <div className="home">
      <div className="filter-container">
        <div className="filter-item">
          <input
            type="text"
            placeholder="Haber başlığı ara..."
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
        
        <div className="filter-item">
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            placeholder="Tarih seçin"
          />
        </div>
        
        <div className="filter-item">
          <select
            value={searchTopic}
            onChange={(e) => setSearchTopic(e.target.value)}
          >
            <option value="">Tüm Konular</option>
            {konular.map(konu => (
              <option key={konu} value={konu}>{konu}</option>
            ))}
          </select>
        </div>

        {hasActiveFilters && (
          <button 
            className="clear-filters-btn" 
            onClick={handleClearFilters}
          >
            <i className="fas fa-times"></i>
            Filtreleri Temizle
          </button>
        )}
      </div>

      <div className="haber-container">
        {paginatedHaberler.length > 0 ? (
          paginatedHaberler.map(haber => (
            <Link to={`/haber/${haber.id}`} key={haber.id} className="haber-link">
              <div className="haber-card">
                <img src={haber.resim} alt={haber.baslik} />
                <div className="haber-content">
                  <h2>{haber.baslik}</h2>
                  <p>{haber.ozet}</p>
                  <span className="tarih">{haber.tarih}</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="no-results">
            <i className="fas fa-search-minus"></i>
            <span>Arama kriterlerinize uygun haber bulunamadı.</span>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {pageNumbers.map(number => (
            <button
              key={number}
              className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          ))}

          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default Home; 