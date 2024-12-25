import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { haberler } from '../data/haberler';
import Comments from '../components/Comments';
import SocialInteractions from '../components/SocialInteractions';
import './Details.css';

const Details: React.FC = () => {
  const { id } = useParams();
  const currentId = Number(id);
  const haber = haberler.find(h => h.id === currentId);

  if (!haber) return <div>Haber bulunamadı</div>;

  const previousHaber = haberler.find(h => h.id === currentId - 1);
  const nextHaber = haberler.find(h => h.id === currentId + 1);

  return (
    <div className="details">
      <div className="details-container">
        <img src={haber.resim} alt={haber.baslik} />
        <div className="details-content">
          <h1>{haber.baslik}</h1>
          <span className="tarih">{haber.tarih}</span>
          <p className="ozet">{haber.ozet}</p>
          <div className="icerik">{haber.icerik}</div>
        </div>
      </div>
      
      <SocialInteractions contentId={`haber-${currentId}`} />
      <Comments contentId={`haber-${currentId}`} />
      
      <div className="haber-navigation">
        {previousHaber && (
          <Link to={`/haber/${previousHaber.id}`} className="nav-button prev">
            <div className="nav-arrow">←</div>
            <div className="nav-content">
              <span>Önceki Haber</span>
              <p>{previousHaber.baslik}</p>
            </div>
          </Link>
        )}
        
        {nextHaber && (
          <Link to={`/haber/${nextHaber.id}`} className="nav-button next">
            <div className="nav-content">
              <span>Sonraki Haber</span>
              <p>{nextHaber.baslik}</p>
            </div>
            <div className="nav-arrow">→</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Details; 