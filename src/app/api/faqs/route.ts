import { NextResponse } from "next/server";

type FaqApiItem = {
  id: string;
  key: string;
  name: string;
  sort_order: number;
  status: string;
  faqs?: Array<{
    id: string;
    question: string;
    answer: string;
    sort_order: number;
    status: string;
  }>;
};

type FaqApiResponse = {
  data?: FaqApiItem[];
};

export async function GET() {
  const endpoint = process.env.FAQ_API_URL;
  const token = process.env.FAQ_API_TOKEN;

  if (!endpoint) {
    return NextResponse.json(
      { data: [], error: "FAQ_API_URL is not configured" },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
        // Cloudflare (error 1010) banea firmas de cliente desconocidas.
        "User-Agent": "himalaya-web/1.0",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      next: {
        revalidate: 300,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { data: [], error: "FAQ endpoint request failed" },
        { status: response.status }
      );
    }

    const payload = (await response.json()) as FaqApiResponse;

    return NextResponse.json({
      data: Array.isArray(payload.data) ? payload.data : [],
    });
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return NextResponse.json(
      { data: [], error: "FAQ endpoint unavailable" },
      { status: 502 }
    );
  }
}
