import { getGenreCollectionsTV } from "@/lib/TMDBEndpoints";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const genreId = context.params.id;
  const pages = request.nextUrl.searchParams.get("page");

  try {
    const response = await fetch(getGenreCollectionsTV(genreId, pages ?? "1"));

    const data = await response.json();

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error }), { status: 500 });
  }
}
