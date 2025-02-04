"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LocationInput() {
  const [location, setLocation] = useState("")

  const handleLocationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value)
  }

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setLocation(`${latitude}, ${longitude}`)
          // Here you would typically use a reverse geocoding service to get a human-readable address
          // For now, we'll just set the coordinates
        },
        (error) => {
          console.error("Error getting location:", error)
          alert("Unable to retrieve your location. Please enter it manually.")
        },
      )
    } else {
      alert("Geolocation is not supported by your browser. Please enter your location manually.")
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Find Date Spots Near You</h2>
      <div className="flex items-center space-x-2">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Enter your location"
            className="pr-10"
            value={location}
            onChange={handleLocationInput}
          />
          <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <Button onClick={getCurrentLocation} variant="outline">
          Use My Location
        </Button>
      </div>
    </div>
  )
}

