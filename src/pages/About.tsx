import React, { useEffect } from 'react';
import './About.css';

const About: React.FC = () => {
  useEffect(() => {
    const createBubble = () => {
      const hero = document.querySelector('.about-hero');
      if (!hero) return;

      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      // Rastgele boyut (15px - 50px)
      const size = Math.random() * 35 + 15;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Rastgele x pozisyonu
      bubble.style.left = `${Math.random() * 100}%`;
      
      // Rastgele animasyon süresi (6s - 12s)
      bubble.style.animationDuration = `${Math.random() * 6 + 6}s`;
      
      // Rastgele gecikme
      bubble.style.animationDelay = `${Math.random() * 2}s`;
      
      hero.appendChild(bubble);
      
      bubble.addEventListener('animationend', () => {
        bubble.remove();
      });
    };

    // Her 200ms'de bir yeni baloncuk oluştur
    const interval = setInterval(createBubble, 200);

    // İlk yüklemede birkaç baloncuk oluştur
    for(let i = 0; i < 15; i++) {
      createBubble();
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="hero-background"></div>
        <div className="hero-animation"></div>
        <div className="hero-content">
          <h1 className="hero-title">Blog Portalı Hakkında</h1>
          <p className="hero-subtitle">Doğanın ve haberlerin buluşma noktası</p>
        </div>
        <div className="wave"></div>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <div className="section-image" data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80" 
              alt="Misyonumuz" 
            />
          </div>
          <div className="section-text" data-aos="fade-left">
            <h2>Misyonumuz</h2>
            <p>
              2023 yılında kurulan Blog Portalı, doğanın muhteşem güzelliklerini ve 
              güncel haberleri bir araya getirerek, okuyucularımıza benzersiz bir 
              deneyim sunmayı amaçlamaktadır. Amacımız, dünyamızın güzelliklerini 
              keşfederken, güncel olaylardan da haberdar olmanızı sağlamaktır.
            </p>
          </div>
        </section>

        <section className="team-section">
          <div className="section-text" data-aos="fade-right">
            <h2>Ekibimiz</h2>
            <p>
              Deneyimli editörler, yetenekli fotoğrafçılar ve tutkulu yazarlardan 
              oluşan ekibimiz, size en kaliteli içeriği sunmak için sürekli çalışmaktadır. 
              Her gün yeni hikayeleri ve muhteşem fotoğrafları sizlerle buluşturuyoruz.
            </p>
          </div>
          <div className="section-image" data-aos="fade-left">
            <img 
              src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=800&q=80" 
              alt="Ekibimiz" 
            />
          </div>
        </section>

        <section className="values-section">
          <h2 data-aos="fade-up">Değerlerimiz</h2>
          <div className="values-grid">
            <div className="value-card" data-aos="zoom-in" data-aos-delay="100">
              <i className="fas fa-camera"></i>
              <h3>Kaliteli İçerik</h3>
              <p>En yüksek kalitede fotoğraf ve haberler</p>
            </div>
            <div className="value-card" data-aos="zoom-in" data-aos-delay="200">
              <i className="fas fa-newspaper"></i>
              <h3>Güncel Haberler</h3>
              <p>Anlık güncellenen haber akışı</p>
            </div>
            <div className="value-card" data-aos="zoom-in" data-aos-delay="300">
              <i className="fas fa-users"></i>
              <h3>Topluluk Odaklı</h3>
              <p>Kullanıcı etkileşimine açık platform</p>
            </div>
            <div className="value-card" data-aos="zoom-in" data-aos-delay="400">
              <i className="fas fa-leaf"></i>
              <h3>Doğa Dostu</h3>
              <p>Çevre bilinci ve sürdürülebilirlik</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 