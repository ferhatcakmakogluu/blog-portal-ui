export interface GaleriItem {
  id: number;
  baslik: string;
  aciklama: string;
  kapakResmi: string;
  tarih: string;
  fotograflar: string[];
}

export const galeriler: GaleriItem[] = [
  {
    id: 1,
    baslik: "Doğanın Renkleri",
    aciklama: "Dört mevsim boyunca çekilen muhteşem doğa fotoğrafları",
    kapakResmi: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
    tarih: "2024-03-20",
    fotograflar: [
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
      "https://images.unsplash.com/photo-1542202229-7d93c33f5d07?w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?w=800"
    ]
  },
  {
    id: 2,
    baslik: "Şehir Manzaraları",
    aciklama: "Modern şehir yaşamından etkileyici kareler",
    kapakResmi: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
    tarih: "2024-03-19",
    fotograflar: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800",
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800",
      "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=800"
    ]
  },
  {
    id: 3,
    baslik: "Spor Müsabakaları",
    aciklama: "2024 yılının en önemli spor karşılaşmalarından kareler",
    kapakResmi: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
    tarih: "2024-03-18",
    fotograflar: [
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
      "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=800",
      "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=800",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800"
    ]
  },
  {
    id: 4,
    baslik: "Teknoloji Fuarı",
    aciklama: "En son teknolojik gelişmelerin sergilendiği fuar",
    kapakResmi: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    tarih: "2024-03-17",
    fotograflar: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800"
    ]
  },
  {
    id: 5,
    baslik: "Yemek Festivali",
    aciklama: "Dünya mutfaklarından lezzetli anlar",
    kapakResmi: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    tarih: "2024-03-16",
    fotograflar: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800"
    ]
  }
]; 