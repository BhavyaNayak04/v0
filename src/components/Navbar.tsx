"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { User } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentRoute = usePathname();

  return (
    <header className="sticky px-10 top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold ">Club Net</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Button
            variant="ghost"
            asChild
            className={currentRoute === "/" ? "text-red-500" : ""}
          >
            <Link href="/">Home</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className={currentRoute === "/feedf" ? "text-red-500" : ""}
          >
            <Link href="/feed">Feed</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className={currentRoute === "/events" ? "text-red-500" : ""}
          >
            <Link href="/events">Events</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className={currentRoute === "/clubs" ? "text-red-500" : ""}
          >
            <Link href="/clubs">Clubs</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className={currentRoute === "/about" ? "text-red-500" : ""}
          >
            <Link href="/about">About</Link>
          </Button>
          <Button
            variant={"ghost"}
            asChild
            className={currentRoute === "/profile" ? "text-red-500" : ""}
          >
            <Link href="/profile">
              <Avatar>
                <AvatarImage src="/" alt="User" />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
