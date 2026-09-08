"use client";
import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ComponentProps } from "react";

export function TrackedLink({
  event,
  origin,
  ...props
}: ComponentProps<typeof Link> & { event: string; origin: string }) {
  return <Link {...props} onClick={() => track(event, { origin })} />;
}
