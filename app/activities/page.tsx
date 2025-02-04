"use client"

import { useState } from "react"
import { Search, Sliders, Sparkles, Clock, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import SpotCard from "../components/SpotCard"
import LocationInput from "../components/LocationInput"

const activitySpots = [
  {
    name: "Escape Room Challenge",
    categories: ["Indoor Fun"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.8,
    location: "Downtown",
    priceRange: "$$",
    timeOfDay: "Evening",
  },
  {
    name: "Sunset Kayaking",
    categories: ["Outdoor Adventures"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.9,
    location: "Riverside",
    priceRange: "$$",
    timeOfDay: "Evening",
  },
  {
    name: "Art Gallery Tour",
    categories: ["Cultural"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.6,
    location: "Arts District",
    priceRange: "$",
    timeOfDay: "Daytime",
  },
  {
    name: "Couples Cooking Class",
    categories: ["Workshops/Classes"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.7,
    location: "Midtown",
    priceRange: "$$$",
    timeOfDay: "Evening",
  },
  {
    name: "Mini-Golf Adventure",
    categories: ["Sports & Events"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.5,
    location: "Suburbs",
    priceRange: "$",
    timeOfDay: "Any",
  },
  {
    name: "Rooftop Yoga Session",
    categories: ["Workshops/Classes"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.7,
    location: "City Center",
    priceRange: "$$",
    timeOfDay: "Morning",
  },
]

const categoryTypes = ["Outdoor Adventures", "Indoor Fun", "Cultural", "Workshops/Classes", "Sports & Events"]
const vibeThemes = ["Relaxed/Chill", "Action/Adrenaline", "Creative", "Group/Double-Date Friendly", "Seasonal"]
const priceRanges = ["Free/Low-Cost", "Moderate", "Premium"]
const timesOfDay = ["Morning", "Daytime", "Evening", "Late Night"]

export default function ActivitiesPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedVibe, setSelectedVibe] = useState("")
  const [selectedPrice, setSelectedPrice] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [budget, setBudget] = useState([50])

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Activities</h1>
      <p className="text-xl text-gray-600 mb-8">Discover exciting activities for memorable dates</p>

      <LocationInput />

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 mt-8">
        <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
          <Input type="text" placeholder="Search activities..." className="pr-10" />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <Button onClick={() => setShowFilters(!showFilters)} variant="outline" className="w-full md:w-auto">
          <Sliders className="mr-2 h-4 w-4" /> {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      {showFilters && (
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category Type</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categoryTypes.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vibe/Theme</label>
              <Select value={selectedVibe} onValueChange={setSelectedVibe}>
                <SelectTrigger>
                  <SelectValue placeholder="Select vibe" />
                </SelectTrigger>
                <SelectContent>
                  {vibeThemes.map((vibe) => (
                    <SelectItem key={vibe} value={vibe}>
                      {vibe}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
              <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                <SelectTrigger>
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((price) => (
                    <SelectItem key={price} value={price}>
                      {price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time of Day</label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timesOfDay.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
            <Slider value={budget} onValueChange={setBudget} max={200} step={10} className="mb-2" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>${budget}</span>
              <span>$200+</span>
            </div>
          </div>
          <Button className="w-full mt-6">Apply Filters</Button>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Sparkles className="mr-2 h-5 w-5 text-yellow-500" />
          Trending Activities
        </h2>
        <div className="flex flex-wrap gap-2">
          {["Escape Rooms", "Outdoor Yoga", "Paint & Sip", "Food Tours", "Virtual Reality"].map((activity) => (
            <Badge
              key={activity}
              variant="secondary"
              className="text-sm py-1 px-3 cursor-pointer hover:bg-secondary-foreground hover:text-secondary transition-colors"
            >
              {activity}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activitySpots.map((spot, index) => (
          <SpotCard
            key={index}
            {...spot}
            extraInfo={
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {spot.timeOfDay}
              </div>
            }
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
          <TrendingUp className="mr-2 h-5 w-5 text-purple-500" />
          Top-Rated This Week
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {activitySpots.slice(0, 3).map((spot, index) => (
            <Badge key={index} variant="outline" className="text-sm py-1 px-3">
              {spot.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

