import Image from "next/image";
import { MapPin, Ticket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center flex-col">
      {/* Header */}
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen w-full">
        <Image
          src="/home.jpg"
          alt="Hero image"
          className="object-cover bg-center"
          fill
          priority
        />
      </section>

      {/* Description */}
      <section className="py-8 content-container">
        <p className="max-w-3xl text-gray-600">
          Welcome to Club Net - your gateway to campus activities and events.
          Join us in creating memorable experiences and fostering a vibrant
          community of passionate individuals.
        </p>
      </section>

      {/* Top 3 Section */}
      <section className="py-8 content-container">
        <div className="flex items-center space-x-8">
          <h2 className="text-4xl font-bold tracking-tight">
            <p>T</p>
            <p>O</p>
            <p>P</p>
            <p>-</p>
            <p>3</p>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="/event.jpg"
                    alt={`Top ${i} club`}
                    width={300}
                    height={200}
                    className="object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">Finite Loop Club</h3>
                    <p className="text-sm text-gray-600">Technical Club</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-8 w-full content-container">
        <div className="grid gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="flex gap-4 p-4">
                <Image
                  src="/home.jpg"
                  alt={`Event ${i}`}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <div className="flex flex-1 gap-8 justify-between">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">LOREM IPSUM</h3>
                    <p className="text-sm text-gray-600">
                      LOREM IPSOUM dolear drthodhgl dfdfdsikk kdfjsklfjdskljf
                      jlfksdjfklsjf ldfsdklj
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Location</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Ticket className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          Get Tickets
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-rose-100 px-4 py-2">
                    <span className="text-sm text-rose-600">SAT</span>
                    <span className="text-2xl font-bold text-rose-600">20</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
