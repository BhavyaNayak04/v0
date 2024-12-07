import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white w-full px-10">
      <div className="py-8 w-full">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">Club Net</h2>
            <p className="mt-2 text-gray-600">Never miss an event.</p>
          </div>
          <nav className="grid gap-2">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/clubs" className="text-gray-600 hover:text-gray-900">
              Clubs
            </Link>
            <Link href="/events" className="text-gray-600 hover:text-gray-900">
              Events
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
