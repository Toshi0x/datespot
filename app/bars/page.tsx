"use client"

import { useState } from "react"
import { Search, Sliders, Beer, Music, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Toggle } from "@/components/ui/toggle"
import SpotCard from "../components/SpotCard"
import LocationInput from "../components/LocationInput"

const barSpots = [
  {
    name: "Skyline Rooftop Bar",
    categories: ["Rooftop/Patio Bar"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.9,
    location: "Downtown",
    priceRange: "$$$",
    vibe: "Sophisticated",
  },
  {
    name: "The Hidden Speakeasy",
    categories: ["Speakeasy"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.7,
    location: "Historic District",
    priceRange: "$$$",
    vibe: "Sophisticated",
  },
  {
    name: "Hoppy Hour Craft Beer",
    categories: ["Craft Beer Spot"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.6,
    location: "Brewery District",
    priceRange: "$$",
    vibe: "Casual & Laid-Back",
  },
  {
    name: "Jazz & Blues Lounge",
    categories: ["Lounge"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.8,
    location: "Music Quarter",
    priceRange: "$$",
    vibe: "Live Music Venue",
  },
  {
    name: "Vino & Tapas",
    categories: ["Wine Bar"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.7,
    location: "Uptown",
    priceRange: "$$$",
    vibe: "Sophisticated",
  },
  {
    name: "Sports Fan Central",
    categories: ["Sports Bar"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.5,
    location: "Stadium Area",
    priceRange: "$$",
    vibe: "High-Energy",
  },
]

const barTypes = [
  "Lounge",
  "Sports Bar",
  "Speakeasy",
  "Cocktail Bar",
  "Wine Bar",
  "Craft Beer Spot",
  "Rooftop/Patio Bar",
]

const vibes = ["Casual & Laid-Back", "Sophisticated", "High-Energy/Nightclub", "Live Music Venue", "Karaoke"]

const specialsFeatures = [
  "Happy Hour",
  "2-for-1 Deals",
  "Themed Nights",
  "DJ Music",
  "Live Jazz",
  "Rock Bands",
  "Outdoor/Patio",
]

const priceRanges = ["Budget-Friendly", "Mid-Range", "Upscale"]

const dressCodes = ["Casual", "Smart Casual", "Formal"]

export default function BarsPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [selectedBarType, setSelectedBarType] = useState("")
  const [selectedVibe, setSelectedVibe] = useState("")
  const [selectedPrice, setSelectedPrice] = useState("")
  const [selectedDressCode, setSelectedDressCode] = useState("")
  const [budget, setBudget] = useState([50])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) => (prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]))
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Bars</h1>
      <p className="text-xl text-gray-600 mb-8">Discover the perfect spot for drinks and conversation</p>

      <LocationInput />

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 mt-8">
        <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
          <Input type="text" placeholder="Search bars..." className="pr-10" />
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Bar Type</label>
              <Select value={selectedBarType} onValueChange={setSelectedBarType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select bar type" />
                </SelectTrigger>
                <SelectContent>
                  {barTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vibe</label>
              <Select value={selectedVibe} onValueChange={setSelectedVibe}>
                <SelectTrigger>
                  <SelectValue placeholder="Select vibe" />
                </SelectTrigger>
                <SelectContent>
                  {vibes.map((vibe) => (
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Dress Code</label>
              <Select value={selectedDressCode} onValueChange={setSelectedDressCode}>
                <SelectTrigger>
                  <SelectValue placeholder="Select dress code" />
                </SelectTrigger>
                <SelectContent>
                  {dressCodes.map((code) => (
                    <SelectItem key={code} value={code}>
                      {code}
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
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Specials & Features</label>
            <div className="flex flex-wrap gap-2">
              {specialsFeatures.map((feature) => (
                <Toggle
                  key={feature}
                  pressed={selectedFeatures.includes(feature)}
                  onPressedChange={() => toggleFeature(feature)}
                  variant="outline"
                  size="sm"
                >
                  {feature}
                </Toggle>
              ))}
            </div>
          </div>
          <Button className="w-full mt-6">Apply Filters</Button>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Beer className="mr-2 h-5 w-5 text-amber-500" />
          Popular Bar Types
        </h2>
        <div className="flex flex-wrap gap-2">
          {barTypes.slice(0, 5).map((type) => (
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
        {barSpots.map((spot, index) => (
          <SpotCard
            key={index}
            {...spot}
            extraInfo={
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <Music className="h-4 w-4 mr-1" />
                {spot.vibe}
              </div>
            }
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
          <Sparkles className="mr-2 h-5 w-5 text-yellow-500" />
          Trending This Week
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {barSpots.slice(0, 3).map((spot, index) => (
            <Badge key={index} variant="outline" className="text-sm py-1 px-3">
              {spot.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

