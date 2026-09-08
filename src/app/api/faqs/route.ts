import { NextResponse } from "next/server";
import { loadFaqs } from "@/lib/faq-service";
export async function GET() {
  return NextResponse.json(
    await loadFaqs({
      endpoint:
        process.env.FAQ_SOURCE === "remote"
          ? process.env.FAQ_API_URL
          : undefined,
      token: process.env.FAQ_API_TOKEN,
    }),
  );
}
