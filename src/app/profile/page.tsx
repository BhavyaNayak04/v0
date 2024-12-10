import { UserProfile } from "@/components/UserProfile"
import { FollowedClubs } from "@/components/FollowedClubs"
import { NotificationBar } from "@/components/Notification"
import { QuerySection } from "@/components/QuerySelection"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ProfilePage() {
  return (
    <div>
    <Navbar />
    <div className="content-container py-8">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <UserProfile />
          <div className="mt-6">
            <FollowedClubs />
          </div>
        </div>
        <div className="space-y-6">
          <NotificationBar />
          <QuerySection />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

