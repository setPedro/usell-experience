import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const imageURL = searchParams.get("url");
  console.log(imageURL)

  const response = await fetch(
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${imageURL}`
  );
  const data = await response.json();
  const score = await data.lighthouseResult?.categories?.performance?.score;
  return new Response(score);
}
