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
    date: "Minggu, 8 Februari 2026",
    time: "08.00 WIB - Selesai",
    location: "main",
  },
  {
    title: "Resepsi Nikah",
    date: "Minggu, 8 Februari 2026",
    time: "13.00 WIB - Selesai",
    location: "main",
  },
];

export const galleryImages: GalleryImage[] = [
  { src: "/galleries/pdp-70.jpg", alt: "PDP 70" },
  { src: "/galleries/pdp-61.jpg", alt: "PDP 61" },
  { src: "/galleries/pdp-21.jpg", alt: "PDP 21" },
  { src: "/galleries/pdp-12.jpg", alt: "PDP 12" },
  { src: "/galleries/pdp-10.jpg", alt: "PDP 10" },
  { src: "/galleries/pdp-11.jpg", alt: "PDP 11" },
  { src: "/galleries/pdp-25.jpg", alt: "PDP 25" },
  { src: "/galleries/pdp-24.jpg", alt: "PDP 24" },
  { src: "/galleries/pdp-36.jpg", alt: "PDP 36" },
  { src: "/galleries/pdp-41.jpg", alt: "PDP 41" },
  { src: "/galleries/pdp-42.jpg", alt: "PDP 42" },
  { src: "/galleries/pdp-30.jpg", alt: "PDP 30" },
];

export const weddingGifts: WeddingGift[] = [
  { bank: "Mandiri", name: "Sabrang Prasetyo", number: "1710003532994" },
  { bank: "BRI", name: "Yeni Kurnia Sari", number: "649301029544535" },
];

export const couple: CoupleDetail[] = [
  {
    label: "Mempelai Pria",
    name: "Sabrang Prasetyo",
    parents: ["Putra dari Bapak Purnomo", "dan Ibu Supini"],
    image: "/photos/pdp-68.jpg",
  },
  {
    label: "Mempelai Wanita",
    name: "Yeni Kurnia Sari",
    parents: ["Putri dari Bapak Sukadi", "dan Almh. Ibu Sunarmi"],
    image: "/photos/pdp-62.jpg",
  },
];

export const weddingTimestamp = new Date(2026, 1, 8, 8, 0, 0, 0).getTime();
