import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex flex-col md:flex-row items-center bg-amber-100 w-full p-4 md:p-8 lg:h-dvh md:h-dvh h-96 sm:h-dvh justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Flags.png"
          alt="Hero Background"
          layout="fill"
          className="object-cover"
          priority
        />
      </div>
      <div className="relative gap-2 gap-y-6 text-start lg:text-start md:text-start mb-4 md:mb-0 z-50 md:ml-8 text-wrap pb-28">
        <h1 className="text-2xl md:text-3xl lg:text-5xl">
          Wellness for Her/They/Them,
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-pink-500">
          Wellness for Life.
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-4">
          Your Hub for Health, Happiness, and Her Strength.
        </p>
        <Link href="/products">
          <Button size="lg">Shop Now</Button>
        </Link>
      </div>
    </div>
  );
}
