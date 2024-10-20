import Footer from "@/components/Footer";
import MoviePage from "@/components/page-templates/MoviePage";
import React from "react";

const MovieIndividualpage = ({ params }: { params: { id: string } }) => {
  return (
    <main className="overflow-y-auto w-full">
      <MoviePage id={params.id} />
      <Footer />
    </main>
  );
};

export default MovieIndividualpage;
