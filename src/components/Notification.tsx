"use client"

import { Bell } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const notifications = [
  { 
    id: 1, 
    title: "New event from Finite Loop Club",
    message: "Join us for an exciting hackathon this weekend! Register now to secure your spot.", 
    time: "2 hours ago",
    type: "event"
  },
  { 
    id: 2, 
    title: "Your query has been answered",
    message: "The Robotics Club president has responded to your question about joining the club.", 
    time: "1 day ago",
    type: "query"
  },
  { 
    id: 3, 
    title: "Reminder: Robotics workshop tomorrow",
    message: "Don't forget about the Arduino basics workshop tomorrow at 2 PM in Lab 3.", 
    time: "2 days ago",
    type: "reminder"
  },
]

export function NotificationBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Notifications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Dialog key={notification.id}>
              <DialogTrigger asChild>
                <div className="cursor-pointer space-y-1 rounded-lg p-2 hover:bg-accent">
                  <p className="text-sm">{notification.title}</p>
                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{notification.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p>{notification.message}</p>
                  <p className="text-sm text-muted-foreground">{notification.time}</p>
                  {notification.type === "event" && (
                    <Button>Register Now</Button>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        <Button variant="ghost" className="mt-4 w-full">View All Notifications</Button>
      </CardContent>
    </Card>
  )
}

