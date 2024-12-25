import React, { useState } from 'react';
import './Comments.css';

interface Comment {
  id: number;
  userName: string;
  content: string;
  date: string;
}

interface CommentsProps {
  itemId: number;
  type: string;
}

const Comments: React.FC<CommentsProps> = ({ itemId, type }) => {
  const [commentsMap, setCommentsMap] = useState<Record<string, Comment[]>>({});
  const [newComment, setNewComment] = useState('');
  const user = localStorage.getItem('user');
  
  const currentComments = commentsMap[itemId] || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      alert('Yorum yapabilmek için giriş yapmalısınız!');
      return;
    }

    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      userName: user,
      content: newComment,
      date: new Date().toLocaleDateString('tr-TR')
    };

    setCommentsMap(prev => ({
      ...prev,
      [itemId]: [...(prev[itemId] || []), comment]
    }));
    setNewComment('');
  };

  return (
    <div className="comments-section">
      <h3>Yorumlar</h3>
      
      <form onSubmit={handleSubmit} className="comment-form">
        <div className="form-group">
          <textarea
            placeholder={user ? "Yorumunuz..." : "Yorum yapabilmek için giriş yapmalısınız"}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
            disabled={!user}
          />
        </div>
        <button type="submit" className="submit-btn" disabled={!user}>
          Yorum Yap
        </button>
      </form>

      <div className="comments-list">
        {currentComments.length > 0 ? (
          currentComments.map(comment => (
            <div key={comment.id} className="comment">
              <div className="comment-header">
                <span className="user-name">{comment.userName}</span>
                <span className="comment-date">{comment.date}</span>
              </div>
              <p className="comment-content">{comment.content}</p>
            </div>
          ))
        ) : (
          <p className="no-comments">Henüz yorum yapılmamış. İlk yorumu siz yapın!</p>
        )}
      </div>
    </div>
  );
};

export default Comments; 