"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

const followedClubs = [
  { 
    name: "Finite Loop Club", 
    logo: "/placeholder.svg", 
    tag: "Technical",
    description: "A community of coding enthusiasts exploring the frontiers of technology and innovation.",
    memberCount: 150,
    events: ["Hackathon 2024", "Code Sprint", "Tech Talk Series"]
  },
  { 
    name: "Robotics Club", 
    logo: "/placeholder.svg", 
    tag: "Technical",
    description: "Building the future with circuits, sensors, and imagination.",
    memberCount: 120,
    events: ["Robot Wars", "Arduino Workshop", "IoT Seminar"]
  },
  { 
    name: "Art & Design Club", 
    logo: "/placeholder.svg", 
    tag: "Creative",
    description: "Unleashing creativity through various forms of visual arts and design.",
    memberCount: 90,
    events: ["Annual Art Exhibition", "Design Sprint", "Creative Workshop"]
  },
]

export function FollowedClubs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Followed Clubs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {followedClubs.map((club) => (
            <Dialog key={club.name}>
              <DialogTrigger asChild>
                <div className="flex cursor-pointer items-center justify-between rounded-lg p-2 hover:bg-accent">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={club.logo} alt={club.name} />
                      <AvatarFallback>{club.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{club.name}</h3>
                      <p className="text-sm text-muted-foreground">{club.tag}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{club.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={club.logo} alt={club.name} />
                      <AvatarFallback>{club.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm text-muted-foreground">{club.tag}</p>
                      <p className="text-sm text-muted-foreground">{club.memberCount} members</p>
                    </div>
                  </div>
                  <p>{club.description}</p>
                  <div>
                    <h4 className="font-semibold">Upcoming Events</h4>
                    <ul className="mt-2 space-y-2">
                      {club.events.map((event) => (
                        <li key={event} className="text-sm">{event}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        <Button variant="ghost" className="mt-4 w-full">View All Clubs</Button>
      </CardContent>
    </Card>
  )
}

