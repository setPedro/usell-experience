export async function POST(req: Request) {
  const { input } = await req.json();
  const res = await fetch(
    `https://v2.convertapi.com/convert/web/to/png?Secret=${process.env.NEXT_PUBLIC_CONVERT_API_KEY}&Url=${input}&StoreFile=true`
  );
  const data = await res.json();
  const image_url = data.Files[0].Url;
  return new Response(image_url);
}
