import { NextResponse } from "next/server";

export function middleware(req) {
  const response = new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });

  if (req.method === "OPTIONS") {
    return response;
  }

  return NextResponse.next();
}
