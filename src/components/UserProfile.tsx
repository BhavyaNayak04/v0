"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { UpdateProfileForm } from "@/components/UpdateProfileForm"
import Link from "next/link"

export function UserProfile() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/placeholder.svg" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-2xl">John Doe</CardTitle>
          <p className="text-sm text-muted-foreground">Computer Science Engineering</p>
        </div>
        <Button variant={"secondary"} asChild><Link href="/home" className="text-red-600">Logout</Link></Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"secondary"}>Update Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] p-6">
            <DialogHeader>
              <DialogTitle>Update Profile</DialogTitle>
            </DialogHeader>
            <UpdateProfileForm />
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <dt className="font-medium">USN:</dt>
            <dd>1NT20CS123</dd>
          </div>
          <div>
            <dt className="font-medium">Email:</dt>
            <dd>john.doe@example.com</dd>
          </div>
          <div>
            <dt className="font-medium">Year:</dt>
            <dd>3rd Year</dd>
          </div>
          <div>
            <dt className="font-medium">Section:</dt>
            <dd>A</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}

