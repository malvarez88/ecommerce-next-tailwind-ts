import Image from "next/image";
import React from "react";
import Button from "./Button";

const Landing = () => {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block">Good Art Inspires</span>
          <span className="block bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            Great Art Motivates
          </span>
          {/* <span className="block">Inspires</span> */}
        </h1>

        <div className="space-x-8">
          <Button title="Buy Now" />
          <a className="link">Learn More</a>
        </div>
      </div>

      <div className="relative hidden h-[400px] w-[500px] transition-all duration-500 md:inline lg:h-[500px] lg:w-[500px]">
        <Image
          src="/iphone13.png"
          alt=""
          // layout="fill"
          // objectFit="contain"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default Landing;
