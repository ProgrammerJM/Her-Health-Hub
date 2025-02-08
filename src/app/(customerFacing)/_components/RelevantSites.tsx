import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import OtherWebsites from "./OtherWebsites";

export default function RelevantSites() {
  return (
    <>
      <OtherWebsites />
      <Card className="bg-pink-100 text-white">
        <CardHeader className="flex items-center justify-center">
          <div className="bg-pink-300 w-fit p-4 rounded-lg ">
            <h1 className="font-bold text-3xl text-black">
              HISTORY OF PRIDE MONTH
            </h1>
          </div>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-2 md:gap-6 sm:gap-6 items-center justify-items-center p-4 lg:p-8 md:p-6 w-[100%] ">
            <div className="bg-gray-300 rounded-xl w-[80%]">
              <p className="text-wrap font-semibold text-lg p-8 text-black">
                The origins of Pride Month trace back to a riot in June 1969, a
                pivotal moment in LGBTQ+ history. These riotsmarked the
                beginning of a more assertive and organized effort to fight for
                LGBTQ+ rights. The following year, the first Pride March was
                held, commemorating the anniversary of the Stonewall Uprising
                and setting the stage for annual Pride celebrations around the
                world.
              </p>
            </div>
            <div className="relative w-96 h-96">
              <Link href="https://loveyourself.ph/">
                <Image
                  src={"/pride.png"}
                  width={600}
                  height={800}
                  alt="Trans Banner"
                />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
