import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { User } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky px-10 top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold ">Club Net</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" className="text-rose-500" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/events">Events</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/clubs">Clubs</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Avatar>
            <AvatarImage src="/" alt="User" />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </nav>
      </div>
    </header>
  );
}
