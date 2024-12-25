interface Haber {
  id: number;
  baslik: string;
  ozet: string;
  icerik: string;
  tarih: string;
  resim: string;
  konu: string;
  yazar: string;
  kategori: string;
}

export const haberler: Haber[] = [
  {
    id: 1,
    baslik: "Yapay Zeka Teknolojileri",
    ozet: "ChatGPT ve benzeri yapay zeka modelleri günlük hayatımızı nasıl değiştiriyor?",
    icerik: "Yapay zeka teknolojileri hayatımızın her alanında giderek daha fazla yer almaya başladı. Özellikle dil modelleri ve görüntü işleme alanındaki gelişmeler, günlük yaşantımızı önemli ölçüde etkiliyor. ChatGPT gibi modeller, eğitimden iş dünyasına kadar pek çok alanda kullanılıyor...",
    tarih: "2024-03-20",
    resim: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    konu: "Teknoloji",
    yazar: "John Doe",
    kategori: "Doğa"
  },
  {
    id: 2,
    baslik: "Süper Lig'de Şampiyonluk Yarışı",
    ozet: "Sezonun son haftalarına girilirken şampiyonluk yarışı kızışıyor...",
    icerik: "Süper Lig'de heyecan doruk noktasına ulaştı. Son haftalara girilirken şampiyonluk yarışı kızışıyor. Takımlar arasındaki puan farkının az olması, her maçı final havasına sokuyor. Taraftarlar stadyumları doldururken, teknik direktörler en ince taktik detayları üzerinde çalışıyor...",
    tarih: "2024-03-19",
    resim: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop",
    konu: "Spor",
    yazar: "John Doe",
    kategori: "Spor"
  },
  {
    id: 3,
    baslik: "Bahar Festivalleri Başlıyor",
    ozet: "Şehrin farklı noktalarında düzenlenecek festivaller sanatseverleri bekliyor...",
    icerik: "Bahar aylarının gelmesiyle birlikte festival sezonu da açılıyor. Şehrin dört bir yanında düzenlenecek festivallerde müzikten tiyatroya, sinemadan edebiyata kadar pek çok sanat dalında etkinlikler gerçekleştirilecek. Yerli ve yabancı sanatçıların katılımıyla renklenecek festivaller...",
    tarih: "2024-03-18",
    resim: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop",
    konu: "Kültür-Sanat",
    yazar: "John Doe",
    kategori: "Kültür-Sanat"
  },
  {
    id: 4,
    baslik: "Yeni Elektrikli Araçlar",
    ozet: "Otomotiv dünyasında elektrikli araç devrimi devam ediyor...",
    icerik: "Otomotiv sektöründe elektrikli araç dönüşümü hız kazanıyor. Büyük üreticiler art arda yeni elektrikli modellerini tanıtırken, menzil ve şarj süreleri konusunda da önemli gelişmeler yaşanıyor. Çevre dostu bu araçlar, performans ve konfor özellikleriyle de dikkat çekiyor...",
    tarih: "2024-03-17",
    resim: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop",
    konu: "Otomotiv",
    yazar: "John Doe",
    kategori: "Otomotiv"
  },
  {
    id: 16,
    baslik: "Yeni Elektrikli Araç Teknolojisi Pil Ömrünü İkiye Katlıyor",
    ozet: "Geliştirilen yeni pil teknolojisi, elektrikli araçların menzilini ve pil ömrünü önemli ölçüde artırıyor.",
    icerik: "Yeni geliştirilen lityum-iyon pil teknolojisi, elektrikli araçların performansında devrim yaratmaya hazırlanıyor. Laboratuvar testlerinde pil ömrünün iki katına çıktığı gözlemlendi.",
    tarih: "2024-03-15",
    resim: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop",
    konu: "Teknoloji",
    yazar: "John Doe",
    kategori: "Teknoloji"
  },
  {
    id: 17,
    baslik: "Süper Lig'de Şampiyonluk Yarışı Kızışıyor",
    ozet: "Son haftaya girilirken üç takım arasındaki puan farkı sadece 2'ye düştü.",
    icerik: "Süper Lig'de sezonun son haftalarına girilirken şampiyonluk yarışı nefes kesiyor. Üç büyükler arasındaki çekişme taraftarları heyecanlandırıyor.",
    tarih: "2024-03-14",
    resim: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop",
    konu: "Spor",
    yazar: "John Doe",
    kategori: "Spor"
  },
  {
    id: 18,
    baslik: "Yapay Zeka Sanat Sergisi Büyük İlgi Görüyor",
    ozet: "AI tarafından üretilen sanat eserleri, geleneksel sanatla teknolojinin buluşma noktasını temsil ediyor.",
    icerik: "Modern sanat müzesinde açılan yapay zeka sergisi, teknoloji ve sanatın nasıl iç içe geçebileceğini gösteriyor. Sergi, sanatseverlerden büyük ilgi görüyor.",
    tarih: "2024-03-13",
    resim: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop",
    konu: "Kültür-Sanat",
    yazar: "John Doe",
    kategori: "Kültür-Sanat"
  },
  {
    id: 19,
    baslik: "2025 Model Spor Araçlar Görücüye Çıktı",
    ozet: "Otomotiv fuarında sergilenen yeni nesil spor araçlar, teknoloji ve performansı bir araya getiriyor.",
    icerik: "Dünyanın önde gelen otomotiv üreticileri, 2025 model spor araçlarını tanıttı. Hibrit motorlar ve gelişmiş sürüş teknolojileri dikkat çekiyor.",
    tarih: "2024-03-12",
    resim: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop",
    konu: "Otomotiv",
    yazar: "John Doe",
    kategori: "Otomotiv"
  },
  {
    id: 20,
    baslik: "Yeni Nesil İşlemciler Yapay Zeka Odaklı",
    ozet: "Çip üreticileri, yapay zeka işlemlerini hızlandıran özel işlemciler geliştiriyor.",
    icerik: "Önde gelen işlemci üreticileri, yapay zeka uygulamalarını daha verimli çalıştırmak için özel tasarlanmış yeni nesil işlemcilerini duyurdu.",
    tarih: "2024-03-11",
    resim: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    konu: "Teknoloji",
    yazar: "John Doe",
    kategori: "Teknoloji"
  },
  {
    id: 21,
    baslik: "Basketbolda Tarihi Rekor Kırıldı",
    ozet: "NBA'de oynanan maçta, tek maçta en çok sayı atma rekoru yenilendi.",
    icerik: "NBA tarihinde yeni bir sayfa açıldı. Dün gece oynanan maçta, bir oyuncu tek başına 85 sayı atarak 62 yıllık rekoru kırdı.",
    tarih: "2024-03-10",
    resim: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop",
    konu: "Spor",
    yazar: "John Doe",
    kategori: "Spor"
  },
  {
    id: 22,
    baslik: "Modern Sanat Müzesi Yeni Binasına Taşınıyor",
    ozet: "Şehrin merkezinde inşa edilen yeni müze binası, modern sanatın yeni evi olacak.",
    icerik: "Uzun süredir devam eden inşaat çalışmaları tamamlandı. Modern sanat müzesi, önümüzdeki ay yeni binasında sanatseverlerle buluşacak.",
    tarih: "2024-03-09",
    resim: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop",
    konu: "Kültür-Sanat",
    yazar: "John Doe",
    kategori: "Kültür-Sanat"
  },
  {
    id: 23,
    baslik: "Otonom Araçlar İçin Yeni Güvenlik Standartları",
    ozet: "Ulaştırma Bakanlığı, otonom araçlar için yeni güvenlik kriterleri belirledi.",
    icerik: "Otonom araç teknolojilerinin yaygınlaşmasıyla birlikte, yeni güvenlik standartları devreye giriyor. Üreticiler bu standartlara uyum sağlamak zorunda.",
    tarih: "2024-03-08",
    resim: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop",
    konu: "Otomotiv",
    yazar: "John Doe",
    kategori: "Otomotiv"
  },
  {
    id: 24,
    baslik: "Kuantum Bilgisayar Teknolojisinde Önemli Gelişme",
    ozet: "Bilim insanları, kuantum bilgisayarların kararlılığını artıran yeni bir yöntem geliştirdi.",
    icerik: "Kuantum bilgisayarların en büyük sorunu olan kararlılık problemi, yeni geliştirilen teknoloji sayesinde büyük ölçüde çözüldü.",
    tarih: "2024-03-07",
    resim: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    konu: "Teknoloji",
    yazar: "John Doe",
    kategori: "Teknoloji"
  },
  {
    id: 25,
    baslik: "E-Spor Olimpiyat Sporları Arasına Alındı",
    ozet: "2028 Olimpiyatları'nda e-spor müsabakaları da düzenlenecek.",
    icerik: "Uluslararası Olimpiyat Komitesi, e-sporu 2028 olimpiyat programına dahil etme kararı aldı. Bu karar, e-spor dünyasında büyük heyecan yarattı.",
    tarih: "2024-03-06",
    resim: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop",
    konu: "Spor",
    yazar: "John Doe",
    kategori: "Spor"
  },
  {
    id: 26,
    baslik: "Dijital Sanat NFT Pazarı Yükselişte",
    ozet: "NFT sanat eserleri, geleneksel sanat piyasasında da kabul görmeye başladı.",
    icerik: "Dijital sanat eserleri ve NFT'ler, sanat piyasasında yeni bir dönem başlatıyor. Büyük müzayede evleri NFT satışlarına başladı.",
    tarih: "2024-03-05",
    resim: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop",
    konu: "Kültür-Sanat",
    yazar: "John Doe",
    kategori: "Kültür-Sanat"
  },
  {
    id: 27,
    baslik: "Hidrojen Yakıtlı Araçlar Yaygınlaşıyor",
    ozet: "Otomotiv devleri, hidrojen yakıt hücreli araç üretimine hız veriyor.",
    icerik: "Elektrikli araçların yanı sıra hidrojen yakıt hücreli araçlar da yaygınlaşmaya başlıyor. Altyapı yatırımları hızla artıyor.",
    tarih: "2024-03-04",
    resim: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop",
    konu: "Otomotiv",
    yazar: "John Doe",
    kategori: "Otomotiv"
  },
  {
    id: 28,
    baslik: "Yapay Zeka Çip Üretiminde Devrim",
    ozet: "Yeni nesil yapay zeka çipleri, enerji tüketimini %80 azaltıyor.",
    icerik: "Geliştirilen yeni yapay zeka çipleri, düşük enerji tüketimi ve yüksek performansıyla dikkat çekiyor. Bu teknoloji mobil cihazlarda da kullanılacak.",
    tarih: "2024-03-03",
    resim: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    konu: "Teknoloji",
    yazar: "John Doe",
    kategori: "Teknoloji"
  },
  {
    id: 29,
    baslik: "Dünya Kupası'nda VAR Tartışması",
    ozet: "Yarı final maçında tartışmalı VAR kararı sonucu etkiledi.",
    icerik: "Dünya Kupası yarı finalinde alınan VAR kararı büyük tartışma yarattı. Futbol otoriteleri sistemin gözden geçirilmesini talep ediyor.",
    tarih: "2024-03-02",
    resim: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop",
    konu: "Spor",
    yazar: "John Doe",
    kategori: "Spor"
  },
  {
    id: 30,
    baslik: "Klasik Müzik Festivali Başlıyor",
    ozet: "Üç hafta sürecek festivalde dünyaca ünlü orkestralar sahne alacak.",
    icerik: "Uluslararası Klasik Müzik Festivali, bu yıl da birbirinden değerli sanatçıları ağırlayacak. Festival programında 20'den fazla konser yer alıyor.",
    tarih: "2024-03-01",
    resim: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop",
    konu: "Kültür-Sanat",
    yazar: "John Doe",
    kategori: "Kültür-Sanat"
  }
]; 