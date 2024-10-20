import Footer from "@/components/Footer";
import TvPage from "@/components/page-templates/TvPage";
import React from "react";

const TvIndividualpage = ({ params }: { params: { id: string } }) => {
  return (
    <main className="overflow-y-auto w-full">
      <TvPage id={params.id} />
      <Footer />
    </main>
  );
};

export default TvIndividualpage;
