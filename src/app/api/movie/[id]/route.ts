import {
  getMovieDetail,
  getMovieVideo,
  getMovieCredits,
} from "@/lib/TMDBEndpoints";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const id = context.params.id;

  try {
    const response = await fetch(getMovieDetail(id));
    const response2 = await fetch(getMovieVideo(id));
    const response3 = await fetch(getMovieCredits(id));

    const movieDetailData = await response.json();
    const movieVideoData = await response2.json();
    const movieCreditsData = await response3.json();

    const data = { ...movieDetailData, ...movieVideoData, ...movieCreditsData };

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error }), { status: 500 });
  }
}