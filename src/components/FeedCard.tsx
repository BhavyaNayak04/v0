import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface Event {
  id: string
  clubName: string
  clubLogo: string
  eventName: string
  image: string
  description: string
  date: string
  time: string
  location: string
  likes: number
  comments: number
}

export function FeedCard({ event }: { event: Event }) {
  const eventDate = new Date(event.date)
  const timeUntilEvent = formatDistanceToNow(eventDate, { addSuffix: true })

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={event.clubLogo} alt={event.clubName} />
            <AvatarFallback>{event.clubName[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{event.clubName}</h3>
            <p className="text-sm text-muted-foreground">{event.location}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={event.image}
            alt={event.eventName}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 space-y-2">
          <h4 className="font-bold text-lg">{event.eventName}</h4>
          <p className="text-sm text-muted-foreground">{event.description}</p>
          <p className="text-sm font-semibold">
            {event.date} at {event.time}
          </p>
          <p className="text-sm text-muted-foreground">Event {timeUntilEvent}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
        <Button variant="ghost" size="icon">
          <Bookmark className="h-5 w-5" />
        </Button>
      </CardFooter>
      <div className="px-4 pb-4">
        <p className="text-sm font-semibold">{event.likes} likes</p>
        <p className="text-sm text-muted-foreground">
          View all {event.comments} comments
        </p>
      </div>
    </Card>
  )
}

