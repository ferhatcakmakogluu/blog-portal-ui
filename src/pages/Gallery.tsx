import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { galeriler } from '../data/galeriler';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [searchTitle, setSearchTitle] = useState('');

  const filteredGaleriler = galeriler.filter(galeri =>
    galeri.baslik.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Fotoğraf Galerileri</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Galeri ara..."
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
      </div>

      <div className="gallery-grid">
        {filteredGaleriler.map(galeri => (
          <Link to={`/galeri/${galeri.id}`} key={galeri.id} className="gallery-card">
            <div className="gallery-image">
              <img src={galeri.kapakResmi} alt={galeri.baslik} />
              <div className="image-count">
                <i className="fas fa-images"></i>
                <span>{galeri.fotograflar.length}</span>
              </div>
            </div>
            <div className="gallery-content">
              <h2>{galeri.baslik}</h2>
              <p>{galeri.aciklama}</p>
              <span className="gallery-date">{galeri.tarih}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery; 