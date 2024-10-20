import { getAiringTodayTV } from "@/lib/TMDBEndpoints";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const page = context.params.id;

  try {
    const response = await fetch(getAiringTodayTV(page));

    const data = await response.json();

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error }), { status: 500 });
  }
}
