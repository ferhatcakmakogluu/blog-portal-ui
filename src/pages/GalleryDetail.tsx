import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { galeriler } from '../data/galeriler';
import Comments from '../components/Comments';
import SocialInteractions from '../components/SocialInteractions';
import ImageModal from '../components/ImageModal';
import './GalleryDetail.css';

const GalleryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const galeri = galeriler.find(g => g.id === Number(id));

  if (!galeri) {
    return <div className="error">Galeri bulunamadı!</div>;
  }

  return (
    <div className="gallery-detail">
      <button className="back-button" onClick={() => navigate('/galeri')}>
        <i className="fas fa-arrow-left"></i> Geri
      </button>

      <h1>{galeri.baslik}</h1>
      <p className="gallery-description">{galeri.aciklama}</p>

      <div className="gallery-detail-container">
        <div className="gallery-main">
          <div className="photo-viewer">
            <button className="nav-button prev" onClick={() => setActiveIndex(prev => 
              prev > 0 ? prev - 1 : galeri.fotograflar.length - 1)}>
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="main-photo" onClick={() => setShowModal(true)}>
              <img src={galeri.fotograflar[activeIndex]} alt={`Fotoğraf ${activeIndex + 1}`} />
            </div>

            <button className="nav-button next" onClick={() => setActiveIndex(prev => 
              prev < galeri.fotograflar.length - 1 ? prev + 1 : 0)}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <SocialInteractions contentId={`gallery-${id}-photo-${activeIndex}`} />

          <div className="thumbnail-strip">
            {galeri.fotograflar.map((foto, index) => (
              <div
                key={index}
                className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={foto} alt={`Küçük resim ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-comments">
          <Comments contentId={`gallery-${id}-photo-${activeIndex}`} />
        </div>
      </div>

      {showModal && (
        <ImageModal
          imageUrl={galeri.fotograflar[activeIndex]}
          onClose={() => setShowModal(false)}
          onPrev={() => setActiveIndex(prev => 
            prev > 0 ? prev - 1 : galeri.fotograflar.length - 1)}
          onNext={() => setActiveIndex(prev => 
            prev < galeri.fotograflar.length - 1 ? prev + 1 : 0)}
        />
      )}
    </div>
  );
};

export default GalleryDetail; 