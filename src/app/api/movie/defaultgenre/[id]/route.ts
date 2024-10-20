// import { getGenreCollectionsMovie } from "@/lib/TMDBEndpoints";

// export async function GET(
//   request: Request,
//   context: { params: { id: string }; searchParams: URLSearchParams }
// ) {
//   const genreId = "28";
//   const pages = context.params.id;

//   try {
//     const response = await fetch(getGenreCollectionsMovie(genreId, pages));

//     const data = await response.json();

//     return new Response(JSON.stringify(data), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ message: error }), { status: 500 });
//   }
// }
