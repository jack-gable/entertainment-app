import { getGenreMovie } from "@/lib/TMDBEndpoints";

export async function GET() {
  try {
    const response = await fetch(getGenreMovie());

    const data = await response.json();

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error }), { status: 500 });
  }
}
