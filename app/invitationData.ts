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
  { src: "/galleries/pdp-12.jpg", alt: "Sabrang dan Yeni dalam sesi prewedding" },
  { src: "/galleries/pdp-21.jpg", alt: "Sabrang dan Yeni bersama keluarga" },
  { src: "/galleries/pdp-25.jpg", alt: "Pasangan Sabrang dan Yeni berpose anggun" },
  { src: "/galleries/pdp-24.jpg", alt: "Potret candid kebersamaan" },
  { src: "/galleries/pdp-35.jpg", alt: "Momen berdua penuh tawa" },
  { src: "/galleries/pdp-36.jpg", alt: "Momen santai Sabrang dan Yeni" },
  { src: "/galleries/pdp-42.jpg", alt: "Potret kehangatan Sabrang dan Yeni" },
  { src: "/galleries/pdp-37.jpg", alt: "Potret kehangatan Sabrang dan Yeni" },
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
    image: "/photos/pdp-68.jpg",
  },
  {
    label: "The Bride",
    name: "Yeni Kurnia Sari",
    parents: ["Putri dari Bapak Sukadi", "dan Almh. Ibu Sunarmi"],
    image: "/photos/pdp-62.jpg",
  },
];

export const weddingTimestamp = new Date(2026, 1, 8, 8, 0, 0, 0).getTime();
