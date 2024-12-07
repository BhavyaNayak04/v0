import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Club {
  id: string;
  name: string;
  image: string;
  followers: number;
  tag: string;
  description: string;
}

const clubs: Club[] = [
  {
    id: "1",
    name: "Finite Loop Club",
    image: "/club.jpg",
    followers: 1200,
    tag: "Technical",
    description:
      "A community of coding enthusiasts exploring the frontiers of technology and innovation.",
  },
  {
    id: "2",
    name: "Robotics Club",
    image: "/club.jpg",
    followers: 800,
    tag: "Technical",
    description: "Building the future with circuits, sensors, and imagination.",
  },
  {
    id: "3",
    name: "Art & Design Club",
    image: "/club.jpg",
    followers: 950,
    tag: "Creative",
    description:
      "Unleashing creativity through various forms of visual arts and design.",
  },
  {
    id: "4",
    name: "Debate Society",
    image: "/club.jpg",
    followers: 600,
    tag: "Literary",
    description:
      "Fostering critical thinking and eloquence through spirited discussions.",
  },
  {
    id: "5",
    name: "Environmental Club",
    image: "/club.jpg",
    followers: 750,
    tag: "Social",
    description:
      "Promoting sustainability and environmental awareness on campus and beyond.",
  },
  {
    id: "6",
    name: "Music Club",
    image: "/club.jpg",
    followers: 1100,
    tag: "Cultural",
    description:
      "Bringing harmony to campus life through melodies, rhythms, and performances.",
  },
];

export default function Clubs() {
  return (
    <div>
      <Navbar />
      <div className="content-container py-8">
        <h1 className="mb-8 text-3xl font-bold">Our Clubs</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clubs.map((club) => (
            <Link key={club.id} href={`/clubs/${club.id}`}>
              <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
                <CardHeader className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={club.image}
                      alt={club.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold">{club.name}</h3>
                    <Badge variant="secondary">{club.tag}</Badge>
                  </div>
                  <p className="mb-2 text-sm text-gray-600">
                    {club.description}
                  </p>
                  <div className="text-sm text-gray-500">
                    {club.followers.toLocaleString()} followers
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
