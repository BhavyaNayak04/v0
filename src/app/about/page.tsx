import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center flex-col">
      <Navbar />
      <section className="relative min-h-screen w-full">
        <Image
          src="/event.jpg"
          alt="About image"
          className="object-cover bg-center"
          fill
          priority
        />
      </section>

      <section className="py-8 content-container">
        <p className="max-w-3xl text-gray-600">
          Club Net is a platform that aims to connect students with clubs and
          organizations on campus. Our mission is to foster a vibrant community
          of passionate individuals by providing a space for students to
          discover, join, and engage with various clubs and events
        </p>
      </section>
      <section className="py-8 content-container">
        <div className="flex items-center space-x-8">
          <h2 className="text-4xl font-bold tracking-tight">
            <p>Our</p>
            <p>Team</p>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="/team.jpg"
                    alt={`Team member ${i}`}
                    width={300}
                    height={200}
                    className="object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-gray-600">Co-founder</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
