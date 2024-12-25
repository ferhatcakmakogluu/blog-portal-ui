import React from 'react';
import './ImageModal.css';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose, onPrev, onNext }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <button className="modal-nav prev" onClick={onPrev}>
          <i className="fas fa-chevron-left"></i>
        </button>

        <img src={imageUrl} alt="Büyük görüntü" />

        <button className="modal-nav next" onClick={onNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ImageModal; 