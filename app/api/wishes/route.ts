import { NextResponse } from "next/server";

import { getAdmin, getFirestore } from "@/lib/firebaseAdmin";

const COLLECTION_NAME = "wishes";
const MAX_RESULTS = 100;
const DEFAULT_COUPLE_ID = "sabrang-yeni";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const coupleId = searchParams.get("coupleId")?.trim() || DEFAULT_COUPLE_ID;
    const firestore = getFirestore();

    const snapshot = await firestore
      .collection(COLLECTION_NAME)
      .where("coupleId", "==", coupleId)
      .orderBy("createdAt", "desc")
      .limit(MAX_RESULTS)
      .get();

    const wishes = snapshot.docs.map((doc) => {
      const data = doc.data();
      const timestamp =
        (data.createdAt as { toMillis?: () => number } | undefined)?.toMillis?.() ??
        (typeof data.timestamp === "number" ? data.timestamp : null);

      return {
        id: doc.id,
        name: typeof data.name === "string" && data.name.trim() ? data.name.trim() : "Tamu Istimewa",
        message: typeof data.message === "string" ? data.message.trim() : "",
        timestamp,
        coupleId,
      };
    });

    return NextResponse.json({ wishes });
  } catch (error) {
    console.error("Failed to fetch wishes", error);
    return NextResponse.json({ error: "Failed to fetch wishes" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const firestore = getFirestore();
    const admin = getAdmin();
    const payload = (await request.json().catch(() => null)) as Record<string, unknown> | null;

    if (!payload) {
      return NextResponse.json({ error: "Invalid body" }, { status: 400 });
    }

    const coupleId =
      typeof payload.coupleId === "string" && payload.coupleId.trim()
        ? payload.coupleId.trim()
        : DEFAULT_COUPLE_ID;
    const rawName = typeof payload.name === "string" ? payload.name : "";
    const rawMessage = typeof payload.message === "string" ? payload.message : "";
    const message = rawMessage.trim();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const name = rawName.trim() || "Tamu Istimewa";
    const docRef = await firestore.collection(COLLECTION_NAME).add({
      coupleId,
      name,
      message,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    const created = await docRef.get();
    const createdAt =
      (created.data()?.createdAt as { toMillis?: () => number } | undefined)?.toMillis?.() ?? Date.now();

    return NextResponse.json({ id: docRef.id, name, message, timestamp: createdAt }, { status: 201 });
  } catch (error) {
    console.error("Failed to save wish", error);
    return NextResponse.json({ error: "Failed to save wish" }, { status: 500 });
  }
}
