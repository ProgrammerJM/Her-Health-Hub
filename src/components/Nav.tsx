"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";

export default function Nav({ children }: { children: React.ReactNode }) {
  return (
    <nav className="text-black flex justify-center px-4 bg-pink-100">
      <div className="flex justify-between items-center w-full max-w-screen-lg">
        <Image src={"/mainLogo.png"} alt="Logo" width={40} height={40} />
      </div>
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
        pathname === props.href && "bg-background text-foreground"
      )}
    />
  );
}
