"use client"

import { useState } from "react"
import { Search, Sliders, Hotel, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Toggle } from "@/components/ui/toggle"
import SpotCard from "../components/SpotCard"
import LocationInput from "../components/LocationInput"

const hotelSpots = [
  {
    name: "Luxury Skyline Hotel",
    categories: ["Luxury"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.9,
    location: "City Center",
    priceRange: "$$$",
    amenities: ["Spa", "Rooftop Bar", "Fine Dining"],
  },
  {
    name: "Romantic Boutique Inn",
    categories: ["Boutique"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.8,
    location: "Historic District",
    priceRange: "$$",
    amenities: ["Couples Massage", "Garden View", "Gourmet Breakfast"],
  },
  {
    name: "Waterfront Resort & Spa",
    categories: ["Resort"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.7,
    location: "Beachfront",
    priceRange: "$$$",
    amenities: ["Private Beach", "Water Sports", "Multiple Restaurants"],
  },
  {
    name: "Cozy Urban Loft",
    categories: ["Boutique"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.6,
    location: "Downtown",
    priceRange: "$$",
    amenities: ["Kitchenette", "City Views", "Bike Rentals"],
  },
  {
    name: "Charming Bed & Breakfast",
    categories: ["B&B"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.5,
    location: "Suburbs",
    priceRange: "$$",
    amenities: ["Home-cooked Meals", "Fireplace", "Garden"],
  },
  {
    name: "Scenic Mountain Lodge",
    categories: ["Lodge"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.8,
    location: "Mountain Range",
    priceRange: "$$$",
    amenities: ["Hiking Trails", "Panoramic Views", "Outdoor Hot Tub"],
  },
]

const hotelTypes = ["Luxury", "Boutique", "Resort", "B&B", "Lodge", "All-Inclusive"]
const locations = ["City Center", "Beachfront", "Mountain Range", "Historic District", "Suburbs", "Downtown"]
const amenities = [
  "Spa",
  "Fine Dining",
  "Pool",
  "Fitness Center",
  "Room Service",
  "Free Wi-Fi",
  "Concierge",
  "Pet-Friendly",
  "Beach Access",
  "Business Center",
]
const priceRanges = ["Budget", "Mid-range", "Luxury"]
const occasions = ["Romantic Getaway", "Anniversary", "Honeymoon", "Weekend Escape", "Business Trip"]

export default function HotelsPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [selectedHotelType, setSelectedHotelType] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedPrice, setSelectedPrice] = useState("")
  const [selectedOccasion, setSelectedOccasion] = useState("")
  const [budget, setBudget] = useState([200])
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) => (prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]))
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Hotels</h1>
      <p className="text-xl text-gray-600 mb-8">Find the perfect accommodation for your romantic getaway</p>

      <LocationInput />

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 mt-8">
        <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
          <Input type="text" placeholder="Search hotels..." className="pr-10" />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <Button onClick={() => setShowFilters(!showFilters)} variant="outline" className="w-full md:w-auto">
          <Sliders className="mr-2 h-4 w-4" /> {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      {showFilters && (
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hotel Type</label>
              <Select value={selectedHotelType} onValueChange={setSelectedHotelType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select hotel type" />
                </SelectTrigger>
                <SelectContent>
                  {hotelTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Occasion</label>
              <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
                <SelectTrigger>
                  <SelectValue placeholder="Select occasion" />
                </SelectTrigger>
                <SelectContent>
                  {occasions.map((occasion) => (
                    <SelectItem key={occasion} value={occasion}>
                      {occasion}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Budget per Night</label>
            <Slider value={budget} onValueChange={setBudget} max={1000} step={50} className="mb-2" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>${budget}</span>
              <span>$1000+</span>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
            <div className="flex flex-wrap gap-2">
              {amenities.map((amenity) => (
                <Toggle
                  key={amenity}
                  pressed={selectedAmenities.includes(amenity)}
                  onPressedChange={() => toggleAmenity(amenity)}
                  variant="outline"
                  size="sm"
                >
                  {amenity}
                </Toggle>
              ))}
            </div>
          </div>
          <Button className="w-full mt-6">Apply Filters</Button>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Hotel className="mr-2 h-5 w-5 text-purple-500" />
          Popular Hotel Types
        </h2>
        <div className="flex flex-wrap gap-2">
          {hotelTypes.map((type) => (
            <Badge
              key={type}
              variant="secondary"
              className="text-sm py-1 px-3 cursor-pointer hover:bg-secondary-foreground hover:text-secondary transition-colors"
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotelSpots.map((spot, index) => (
          <SpotCard
            key={index}
            {...spot}
            extraInfo={
              <div className="flex flex-wrap gap-1 mt-2">
                {spot.amenities.map((amenity, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {amenity}
                  </Badge>
                ))}
              </div>
            }
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
          <Sparkles className="mr-2 h-5 w-5 text-yellow-500" />
          Featured Romantic Getaways
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {hotelSpots.slice(0, 3).map((spot, index) => (
            <Badge key={index} variant="outline" className="text-sm py-1 px-3">
              {spot.name}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-gray-100 rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">Need Help Choosing?</h3>
        <p className="text-center mb-6">
          Let our AI-powered Date Planner suggest the perfect hotel based on your preferences!
        </p>
        <div className="flex justify-center">
          <Button size="lg">
            <Star className="mr-2 h-5 w-5" />
            Get Personalized Recommendations
          </Button>
        </div>
      </div>
    </div>
  )
}

