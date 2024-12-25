import React from 'react';
import './Home.css';

function Home() {
  const haberler = [
    {
      id: 1,
      baslik: "Yeni Teknoloji Gelişmeleri",
      ozet: "Yapay zeka alanında yeni gelişmeler yaşanıyor...",
      tarih: "2024-03-20",
      resim: "https://via.placeholder.com/300x200"
    },
    {
      id: 2,
      baslik: "Spor Dünyasından Haberler",
      ozet: "Süper Lig'de heyecan dorukta...",
      tarih: "2024-03-19",
      resim: "https://via.placeholder.com/300x200"
    },
    {
      id: 3,
      baslik: "Kültür Sanat Etkinlikleri",
      ozet: "Bu hafta sonu gerçekleşecek festivaller...",
      tarih: "2024-03-18",
      resim: "https://via.placeholder.com/300x200"
    }
  ];

  return (
    <div className="home">
      <h1>Son Haberler</h1>
      <div className="haber-container">
        {haberler.map(haber => (
          <div key={haber.id} className="haber-card">
            <img src={haber.resim} alt={haber.baslik} />
            <div className="haber-content">
              <h2>{haber.baslik}</h2>
              <p>{haber.ozet}</p>
              <span className="tarih">{haber.tarih}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home; 