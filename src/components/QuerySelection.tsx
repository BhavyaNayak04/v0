"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const queries = [
  {
    id: 1,
    question: "How do I join the Robotics Club?",
    answer: "You can join the Robotics Club by attending their next general meeting or contacting the club president.",
    status: "Answered",
    answeredBy: "Robotics Club President",
    date: "2024-01-15"
  },
  {
    id: 2,
    question: "When is the next coding competition?",
    answer: "The next coding competition is scheduled for next month. Keep an eye on the Finite Loop Club's announcements for exact dates.",
    status: "Answered",
    answeredBy: "Finite Loop Club Coordinator",
    date: "2024-01-14"
  },
]

export function QuerySection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Queries</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {queries.map((query) => (
            <Dialog key={query.id}>
              <DialogTrigger asChild>
                <div className="cursor-pointer space-y-2 rounded-lg p-2 hover:bg-accent">
                  <h3 className="font-semibold">Q: {query.question}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">A: {query.answer}</p>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Query Details</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Question:</h4>
                    <p>{query.question}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Answer:</h4>
                    <p>{query.answer}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div>
                      <p>Status: {query.status}</p>
                      <p>Answered by: {query.answeredBy}</p>
                    </div>
                    <div className="text-right">
                      <p>Date: {query.date}</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        <Button variant="ghost" className="mt-4 w-full">View All Queries</Button>
      </CardContent>
    </Card>
  )
}

