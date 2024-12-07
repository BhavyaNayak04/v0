import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex space-y-16 items-center justify-center flex-col">
        {/* Header */}

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
        <section className="content-container">
          <p className="text-xl text-gray-600">
            Welcome to Club Net - your gateway to campus activities and events.
            Join us in creating memorable experiences and fostering a vibrant
            community of passionate individuals.
          </p>
        </section>

        {/* Top 3 Section */}
        <section className="w-full content-container">
          <div className="flex items-center justify-between space-x-8">
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
        <section className="w-full content-container">
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {[1, 2, 3].map((event) => (
              <EventCard key={event} event={event} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
