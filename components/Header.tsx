import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100 ">
            <Image
              src="https://rb.gy/vsvv2o"
              alt="header"
              // layout="fill"
              // objectFit="contain"
              width={100}
              height={100}
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
    </header>
  );
};

export default Header;
