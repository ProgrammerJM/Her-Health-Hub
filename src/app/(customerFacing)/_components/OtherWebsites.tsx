import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OtherWebsites() {
  return (
    <div className="grid lg:grid-cols-2 justify-items-center gap-8 p-12">
      <Card>
        <CardHeader>
          <h1 className="font-bold text-3xl text-black">MENSTRUAL CYCLE</h1>
        </CardHeader>
        <CardContent className="grid grid-row-2 sm:grid-col md:grid-col lg:grid-col  gap-4">
          <Image
            src="/MenstrualCycle.jpg"
            alt="Menstrual Cycle"
            width={400}
            height={400}
          />
          <p className="text-wrap">
            Being able to predict when your next period will arrive can save you
            a lot of hassle and help you to understand your own menstrual cycle.
            Predict your next period now with Flo&apos;s easy-to-use period
            calculator.{" "}
            <Link
              href="https://flo.health/tools/menstrual-cycle-calculator"
              className="text-pink-400"
            >
              Learn more
            </Link>
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <h1 className="font-bold text-3xl text-black">SEXUAL HEALTH</h1>
        </CardHeader>
        <CardContent className="grid grid-col-2 sm:grid-col md:grid-col lg:grid-row gap-4">
          <Image
            src="/SexualHealth.png"
            alt="Sexual Health"
            width={300}
            height={300}
          />
          <p>
            Sexual health is an important part of overall health. Understanding
            your sexual health can help you make informed decisions about your
            body and your relationships. .{" "}
            <Link
              href="https://loveyourself.ph/hiv-prevention/"
              className="text-pink-400"
            >
              Learn more
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
