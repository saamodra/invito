import type { Metadata } from "next";
import SabrangYeniClient from "./SabrangYeniClient";
import {
  couple,
  events,
  galleryImages,
  locations,
  weddingGifts,
  weddingTimestamp,
} from "../invitationData";

export const metadata: Metadata = {
  title: "Sabrang & Yeni",
};

type HomeProps = {
  searchParams?:
    | Promise<Record<string, string | string[] | undefined>>
    | Record<string, string | string[] | undefined>;
};

const fallbackName = "Tamu Istimewa";

const getInvitedName = (rawParam?: string | string[] | null): string => {
  if (!rawParam) return fallbackName;
  const raw = Array.isArray(rawParam) ? rawParam[0] : rawParam;
  try {
    return decodeURIComponent(raw).replace(/\+/g, " ").trim() || fallbackName;
  } catch {
    return raw.replace(/\+/g, " ").trim() || fallbackName;
  }
};

export default async function SabrangYeni({ searchParams }: HomeProps) {
  const params = await Promise.resolve(searchParams ?? {});
  const invitedName = getInvitedName(params.to ?? null);

  return (
    <SabrangYeniClient
      couple={couple}
      events={events}
      galleryImages={galleryImages}
      invitedName={invitedName}
      locations={locations}
      weddingGifts={weddingGifts}
      weddingTimestamp={weddingTimestamp}
    />
  );
}
