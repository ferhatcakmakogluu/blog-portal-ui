import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About: React.FC = () => {
  useEffect(() => {
    AOS.init();
    const createBubble = () => {
      const hero = document.querySelector('.about-hero');
      if (!hero) return;

      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      const size = Math.random() * 35 + 15;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 6 + 6}s`;
      bubble.style.animationDelay = `${Math.random() * 2}s`;
      
      hero.appendChild(bubble);
      
      bubble.addEventListener('animationend', () => {
        bubble.remove();
      });
    };

    const interval = setInterval(createBubble, 200);

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
      </div>

      <div className="about-content">
        <section className="mission-section">
          <div className="section-image">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80" 
              alt="Misyonumuz" 
            />
          </div>
          <div className="section-text">
            <h2>Misyonumuz</h2>
            <p>
              2023 yılında kurulan Blog Portalı, doğanın muhteşem güzelliklerini ve 
              güncel haberleri bir araya getirerek, okuyucularımıza benzersiz bir 
              deneyim sunmayı amaçlamaktadır. Amacımız, dünyamızın güzelliklerini 
              keşfederken, güncel olaylardan da haberdar olmanızı sağlamaktır.
            </p>
          </div>
        </section>

        <section className="vision-section">
          <div className="section-text">
            <h2>Vizyonumuz</h2>
            <p>
              Dijital yayıncılık alanında öncü bir platform olarak, doğa ve haber içeriklerini 
              en yüksek kalitede sunan, güvenilir ve yenilikçi bir kaynak olmayı hedefliyoruz. 
              Topluluk odaklı yaklaşımımızla, okuyucularımızın da aktif katılımcılar olduğu 
              interaktif bir platform oluşturmayı amaçlıyoruz.
            </p>
          </div>
          <div className="section-image">
            <img 
              src="https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?auto=format&fit=crop&w=800&q=80" 
              alt="Vizyonumuz" 
            />
          </div>
        </section>

        <section className="goals-section">
          <div className="section-image">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" 
              alt="Hedeflerimiz" 
            />
          </div>
          <div className="section-text">
            <h2>Hedeflerimiz</h2>
            <p>
              • Sürdürülebilir ve çevre dostu bir yayıncılık anlayışı geliştirmek<br/>
              • Genç yeteneklere fırsat tanıyarak sektöre katkıda bulunmak<br/>
              • Teknolojik yenilikleri takip ederek okuyucu deneyimini sürekli iyileştirmek<br/>
              • Toplumsal sorumluluk projeleriyle fark yaratmak<br/>
              • Global ölçekte tanınan bir marka haline gelmek
            </p>
          </div>
        </section>

        <section className="team-section">
          <div className="section-text">
            <h2>Ekibimiz</h2>
            <p>
              Deneyimli editörler, yetenekli fotoğrafçılar ve tutkulu yazarlardan 
              oluşan ekibimiz, size en kaliteli içeriği sunmak için sürekli çalışmaktadır. 
              Her gün yeni hikayeleri ve muhteşem fotoğrafları sizlerle buluşturuyoruz.
            </p>
          </div>
          <div className="section-image">
            <img 
              src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=800&q=80" 
              alt="Ekibimiz" 
            />
          </div>
        </section>

        <section className="values-section">
          <h2>Değerlerimiz</h2>
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-camera-retro"></i>
              <h3>Kaliteli İçerik</h3>
              <p>En yüksek kalitede fotoğraf ve haberler</p>
            </div>
            <div className="value-card">
              <i className="fas fa-newspaper"></i>
              <h3>Güncel Haberler</h3>
              <p>Anlık güncellenen haber akışı</p>
            </div>
            <div className="value-card">
              <i className="fas fa-users"></i>
              <h3>Topluluk Odaklı</h3>
              <p>Kullanıcı etkileşimine açık platform</p>
            </div>
            <div className="value-card">
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