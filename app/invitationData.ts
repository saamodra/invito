export type LocationKey = "main";

export type Location = {
  name: string;
  address: string;
  mapsUrl?: string;
};

export type EventDetail = {
  title: string;
  date: string;
  time: string;
  location: LocationKey;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type WeddingGift = {
  bank: string;
  name: string;
  number: string;
};

export type CoupleDetail = {
  label: string;
  name: string;
  parents: string[];
  image: string;
};

export const locations: Record<LocationKey, Location> = {
  main: {
    name: "Dukuh Purwoasri RT.01 RW.01",
    address: "Desa Karanggebang Jetis Ponorogo",
    mapsUrl: "https://maps.app.goo.gl/cgBFmjzK15mceWkYA",
  },
};

export const events: EventDetail[] = [
  {
    title: "Akad Nikah",
    date: "Sabtu, 8 Februari 2026",
    time: "08.00 WIB - Selesai",
    location: "main",
  },
  {
    title: "Resepsi Nikah",
    date: "Minggu, 8 Februari 2026",
    time: "13.00 - Selesai",
    location: "main",
  },
];

export const galleryImages: GalleryImage[] = [
  { src: "/Sabrang-Yeni/pdp-12.jpg", alt: "Sabrang dan Yeni dalam sesi prewedding" },
  { src: "/Sabrang-Yeni/pdp-25.jpg", alt: "Pasangan Sabrang dan Yeni berpose anggun" },
  { src: "/Sabrang-Yeni/pdp-42.jpg", alt: "Potret kehangatan Sabrang dan Yeni" },
];

export const weddingGifts: WeddingGift[] = [
  { bank: "Mandiri", name: "Sabrang Prasetyo", number: "1710003532994" },
  { bank: "BRI", name: "Yeni Kurnia Sari", number: "649301029544535" },
];

export const couple: CoupleDetail[] = [
  {
    label: "The Groom",
    name: "Sabrang Prasetyo",
    parents: ["Putra dari Bapak Purnomo", "dan Ibu Supini"],
    image: "/Sabrang-Yeni/pdp-68.jpg",
  },
  {
    label: "The Bride",
    name: "Yeni Kurnia Sari",
    parents: ["Putri dari Bapak Sukadi", "dan Almh. Ibu Sunarmi"],
    image: "/Sabrang-Yeni/pdp-62.jpg",
  },
];

export const weddingTimestamp = new Date(2026, 1, 8, 8, 0, 0, 0).getTime();
