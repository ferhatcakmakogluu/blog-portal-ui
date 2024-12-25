import React from 'react';
import { useParams } from 'react-router-dom';
import { haberler } from '../data/haberler';
import Comments from '../components/Comments';
import SocialInteractions from '../components/SocialInteractions';
import './Details.css';

const Details: React.FC = () => {
  const { id } = useParams();
  const haber = haberler.find(h => h.id === Number(id));

  if (!haber) {
    return <div className="details-container">Haber bulunamadı.</div>;
  }

  return (
    <div className="details-container">
      <article className="details-article">
        <header className="details-header">
          <h1 className="details-title">{haber.baslik}</h1>
          <div className="details-meta">
            <span>{new Date(haber.tarih).toLocaleDateString('tr-TR')}</span>
            <span>•</span>
            <span>{haber.yazar}</span>
            <span>•</span>
            <span>{haber.kategori}</span>
          </div>
        </header>

        <img 
          src={haber.resim} 
          alt={haber.baslik}
          className="details-image"
          loading="lazy"
        />

        <div className="details-content">
          {haber.icerik}
        </div>

        <SocialInteractions 
          itemId={haber.id} 
          type="haber"
        />

        <Comments 
          itemId={haber.id}
          type="haber"
        />
      </article>
    </div>
  );
};

export default Details; 