import { NextResponse } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler1(req) {
  return NextResponse.json(
    { name: "Mary Lamb" },
    {
      status: 200,
      headers: {
        "Cache-Control": "s-maxage=1, stale-while-revalidate=59",
      },
    }
  );
}
