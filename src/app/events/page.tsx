import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Event {
  id: string;
  clubName: string;
  clubLogo: string;
  eventName: string;
  image: string;
  location: string;
  teamSize: string;
  contact: string;
  price: string;
}

const events: Event[] = [
  {
    id: "1",
    clubName: "Finite Loop Club",
    clubLogo: "/event.jpg",
    eventName: "Digital Hunt",
    image: "/event.jpg",
    location: "LH312",
    teamSize: "2 per team",
    contact: "Call 93422343",
    price: "30$ per team",
  },
  // Repeated for demonstration
  {
    id: "2",
    clubName: "Finite Loop Club",
    clubLogo: "/event.jpg",
    eventName: "Digital Hunt",
    image: "/event.jpg",
    location: "LH312",
    teamSize: "2 per team",
    contact: "Call 93422343",
    price: "30$ per team",
  },
  {
    id: "3",
    clubName: "Finite Loop Club",
    clubLogo: "/event.jpg",
    eventName: "Digital Hunt",
    image: "/event.jpg",
    location: "LH312",
    teamSize: "2 per team",
    contact: "Call 93422343",
    price: "30$ per team",
  },
  {
    id: "4",
    clubName: "Finite Loop Club",
    clubLogo: "/event.jpg",
    eventName: "Digital Hunt",
    image: "/event.jpg",
    location: "LH312",
    teamSize: "2 per team",
    contact: "Call 93422343",
    price: "30$ per team",
  },
  {
    id: "5",
    clubName: "Finite Loop Club",
    clubLogo: "/event.jpg",
    eventName: "Digital Hunt",
    image: "/event.jpg",
    location: "LH312",
    teamSize: "2 per team",
    contact: "Call 93422343",
    price: "30$ per team",
  },
  {
    id: "6",
    clubName: "Finite Loop Club",
    clubLogo: "/event.jpg",
    eventName: "Digital Hunt",
    image: "/event.jpg",
    location: "LH312",
    teamSize: "2 per team",
    contact: "Call 93422343",
    price: "30$ per team",
  },
];

export default function EventsPage() {
  return (
    <div>
      <Navbar />
      <div className="content-container py-8">
        <h1 className="mb-8 text-3xl font-bold">Events</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 content-container p-7">
          {events.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
                <CardHeader className="flex-row items-center gap-2 p-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={event.clubLogo} alt={event.clubName} />
                    <AvatarFallback>{event.clubName[0]}</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold">{event.clubName}</span>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={event.image}
                      alt={event.eventName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 bg-rose-100 p-4">
                    <h3 className="text-xl font-bold">{event.eventName}</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p>{event.location}</p>
                        <p>{event.teamSize}</p>
                      </div>
                      <div className="text-right">
                        <p>{event.contact}</p>
                        <p>{event.price}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
