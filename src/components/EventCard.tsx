import {
  Calendar,
  Clock,
  MapPin,
  Users,
  DollarSign,
  Phone,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

export default function EventCard({ event }) {
  const EventDetailIcon = ({ Icon, label, value }) => (
    <div className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
      <Icon className="h-5 w-5 text-gray-500" />
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 uppercase">{label}</span>
        <span className="text-sm font-medium">{value}</span>
      </div>
    </div>
  );
  return (
    <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-0">
          {/* Image Section */}
          <div className="relative w-full aspect-video md:aspect-square">
            <Image
              src="/home.jpg"
              alt={`Event ${event}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="p-4 md:p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Tech Innovation Hackathon
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Join the most exciting tech challenge of the year! Collaborate,
                innovate, and push the boundaries of technology in this
                immersive hackathon experience.
              </p>

              {/* Event Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                <EventDetailIcon
                  Icon={Calendar}
                  label="Date"
                  value="December 20, 2024"
                />
                <EventDetailIcon
                  Icon={Clock}
                  label="Time"
                  value="9:00 AM - 1:00 PM"
                />
                <EventDetailIcon
                  Icon={MapPin}
                  label="Location"
                  value="Tech Hub Convention Center"
                />
                <EventDetailIcon
                  Icon={Users}
                  label="Team Size"
                  value="3-5 Members"
                />
                <EventDetailIcon
                  Icon={DollarSign}
                  label="Fee"
                  value="$50 per Team"
                />
                <EventDetailIcon
                  Icon={Phone}
                  label="Contact"
                  value="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Date Badge */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
