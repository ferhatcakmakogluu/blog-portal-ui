import React, { useState, useEffect } from 'react';
import { useAlert } from '../context/AlertContext';

interface SocialInteractionsProps {
  itemId: number;
  type: string;
}

const SocialInteractions: React.FC<SocialInteractionsProps> = ({ itemId, type }) => {
  const { showAlert } = useAlert();
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [views, setViews] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);
  const user = localStorage.getItem('user');

  useEffect(() => {
    // Görüntülenme sayısını artır
    setViews(prev => prev + 1);
    
    // Kullanıcının önceki etkileşimlerini kontrol et
    const interactions = JSON.parse(localStorage.getItem(`interactions-${itemId}`) || '{}');
    setHasLiked(interactions.liked || false);
    setHasDisliked(interactions.disliked || false);
  }, [itemId]);

  const handleLike = () => {
    if (!user) {
      showAlert('Beğenmek için giriş yapmalısınız!');
      return;
    }

    if (!hasLiked) {
      setLikes(prev => prev + 1);
      if (hasDisliked) {
        setDislikes(prev => prev - 1);
        setHasDisliked(false);
      }
      setHasLiked(true);
    } else {
      setLikes(prev => prev - 1);
      setHasLiked(false);
    }

    localStorage.setItem(`interactions-${itemId}`, JSON.stringify({
      liked: !hasLiked,
      disliked: false
    }));
  };

  const handleDislike = () => {
    if (!user) {
      showAlert('Beğenmemek için giriş yapmalısınız!');
      return;
    }

    if (!hasDisliked) {
      setDislikes(prev => prev + 1);
      if (hasLiked) {
        setLikes(prev => prev - 1);
        setHasLiked(false);
      }
      setHasDisliked(true);
    } else {
      setDislikes(prev => prev - 1);
      setHasDisliked(false);
    }

    localStorage.setItem(`interactions-${itemId}`, JSON.stringify({
      liked: false,
      disliked: !hasDisliked
    }));
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showAlert('Bağlantı kopyalandı!', 'success');
  };

  return (
    <div className="social-interactions">
      <div className="interaction-item">
        <button 
          className={`interaction-button ${hasLiked ? 'active' : ''}`}
          onClick={handleLike}
        >
          <i className="fas fa-thumbs-up"></i>
        </button>
        <span>{likes}</span>
      </div>

      <div className="interaction-item">
        <button 
          className={`interaction-button ${hasDisliked ? 'active' : ''}`}
          onClick={handleDislike}
        >
          <i className="fas fa-thumbs-down"></i>
        </button>
        <span>{dislikes}</span>
      </div>

      <div className="interaction-item">
        <button className="interaction-button" onClick={handleShare}>
          <i className="fas fa-share"></i>
        </button>
        <span>Paylaş</span>
      </div>

      <div className="interaction-item">
        <i className="fas fa-eye"></i>
        <span>{views} görüntülenme</span>
      </div>
    </div>
  );
};

export default SocialInteractions; 