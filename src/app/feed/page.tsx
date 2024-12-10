import { FeedCard } from "@/components/FeedCard"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const events = [
  {
    id: "1",
    clubName: "Finite Loop Club",
    clubLogo: "/event.jpg",
    eventName: "Hackathon 2024",
    image: "/event.jpg",
    description: "Join us for a 24-hour coding marathon! Build innovative projects and win exciting prizes.",
    date: "2024-03-15",
    time: "09:00 AM",
    location: "Main Auditorium",
    likes: 120,
    comments: 25,
  },
  {
    id: "2",
    clubName: "Robotics Club",
    clubLogo: "/club.jpg",
    eventName: "Robot Wars",
    image: "/club.jpg",
    description: "Witness epic battles between student-built robots! Cheer for your favorite team and learn about robotics.",
    date: "2024-03-20",
    time: "02:00 PM",
    location: "Engineering Lab",
    likes: 95,
    comments: 18,
  },
  {
    id: "3",
    clubName: "Art & Design Club",
    clubLogo: "/club.jpg",
    eventName: "Annual Art Exhibition",
    image: "/club.jpg",
    description: "Experience a visual feast of student artworks. From paintings to sculptures, witness creativity at its best!",
    date: "2024-03-25",
    time: "10:00 AM",
    location: "Art Gallery",
    likes: 150,
    comments: 32,
  },
  {
    id: "4",
    clubName: "Debate Society",
    clubLogo: "/club.jpg",
    eventName: "Inter-College Debate Competition",
    image: "/club.jpg",
    description: "Sharpen your argumentation skills and compete with the best debaters from colleges across the region.",
    date: "2024-04-05",
    time: "11:00 AM",
    location: "Seminar Hall",
    likes: 80,
    comments: 15,
  },
  {
    id: "5",
    clubName: "Music Club",
    clubLogo: "/club.jpg",
    eventName: "Battle of the Bands",
    image: "/club.jpg",
    description: "Rock the stage with your band! Compete for the title of the best college band and win amazing prizes.",
    date: "2024-04-10",
    time: "06:00 PM",
    location: "Open Air Theatre",
    likes: 200,
    comments: 45,
  },
]

export default function FeedPage() {
  return (
    <div>
    <Navbar />
    <div className="content-container py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <FeedCard key={event.id} event={event} />
        ))}
      </div>
    </div>
    <Footer />
    </div>
  )
}

