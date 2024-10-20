import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/assets/blue_short.svg";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center gap-2 py-6 sm:py-8">
      <p className="text-sm font-bold">Powered by</p>
      <Link href="https://www.themoviedb.org/">
        <Image src={Logo} alt="TMDB Logo" width={150} height={50} />
      </Link>
    </footer>
  );
};

export default Footer;
