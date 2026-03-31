"use client";

import { GoogleTagManager } from "@next/third-parties/google";

export default function GtmProvider() {
  const gtmId = process.env.NEXT_PUBLIC_GTM;
  if (!gtmId) return null;
  return <GoogleTagManager gtmId={gtmId} />;
}

