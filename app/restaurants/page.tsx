"use client"

import { useState } from "react"
import { Search, Sliders, Coffee, Utensils, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Toggle } from "@/components/ui/toggle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SpotCard from "../components/SpotCard"
import RestaurantMap from "../components/RestaurantMap"
import LocationInput from "../components/LocationInput"

const restaurantSpots = [
  {
    name: "Gourmet Fusion",
    categories: ["Fine Dining", "Fusion", "Rooftop"],
    cuisine: "Fusion",
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.8,
    location: "Downtown",
    priceRange: "$$$",
    features: ["Romantic Ambiance", "Outdoor Seating", "Rooftop Dining"],
  },
  {
    name: "Sushi Delight",
    categories: ["Japanese", "Sushi Bar"],
    cuisine: "Japanese",
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.7,
    location: "West End",
    priceRange: "$$",
    features: ["Date Night Special", "Sake Bar"],
  },
  {
    name: "Rustic Italian Trattoria",
    categories: ["Italian", "Casual Dining", "Family-Friendly"],
    cuisine: "Italian",
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.6,
    location: "Midtown",
    priceRange: "$$",
    features: ["Live Music", "Wine Pairing", "Outdoor Patio"],
  },
  {
    name: "Vegan Paradise",
    categories: ["Vegan", "Health Food", "Organic"],
    cuisine: "Vegan",
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.5,
    location: "Uptown",
    priceRange: "$$",
    features: ["Organic Ingredients", "Gluten-Free Options"],
  },
  {
    name: "Steakhouse Supreme",
    categories: ["Steakhouse", "Fine Dining", "American"],
    cuisine: "American",
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.9,
    location: "Financial District",
    priceRange: "$$$$",
    features: ["Private Booths", "Extensive Wine List", "Dry-Aged Steaks"],
  },
  {
    name: "Seafood Harbor",
    categories: ["Seafood", "Waterfront", "Fine Dining"],
    cuisine: "Seafood",
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.7,
    location: "Waterfront",
    priceRange: "$$$",
    features: ["Ocean View", "Fresh Catch of the Day", "Raw Bar"],
  },
]

const allCategories = [
  "Fine Dining",
  "Casual Dining",
  "Italian",
  "Japanese",
  "American",
  "Seafood",
  "Vegan",
  "Fusion",
  "Steakhouse",
  "Sushi Bar",
  "Rooftop",
  "Waterfront",
  "Family-Friendly",
  "Health Food",
  "Organic",
]

const cuisineTypes = ["Italian", "Japanese", "American", "Seafood", "Vegan", "Fusion"]

const ambiances = ["Romantic", "Casual", "Upscale", "Cozy", "Modern", "Trendy", "Quiet", "Lively"]

const features = [
  "Outdoor Seating",
  "Live Music",
  "Private Dining",
  "Waterfront View",
  "Rooftop",
  "Wine Bar",
  "Craft Cocktails",
  "Chef's Table",
  "Tasting Menu",
  "BYOB",
]

const dietaryOptions = ["Vegetarian-Friendly", "Vegan Options", "Gluten-Free Options", "Halal", "Kosher"]

const priceRanges = [
  { label: "Budget-Friendly", value: "$" },
  { label: "Mid-Range", value: "$$" },
  { label: "High-End", value: "$$$" },
  { label: "Luxury", value: "$$$$" },
]

export default function RestaurantsPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedCuisine, setSelectedCuisine] = useState("")
  const [selectedAmbiance, setSelectedAmbiance] = useState("")
  const [selectedPrice, setSelectedPrice] = useState("")
  const [budget, setBudget] = useState([100])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [selectedDietary, setSelectedDietary] = useState<string[]>([])
  const [viewMode, setViewMode] = useState("grid")

  const handleCategoryChange = (value: string) => {
    setSelectedCategories(value === "all" ? [] : [value])
  }

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) => (prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]))
  }

  const toggleDietary = (option: string) => {
    setSelectedDietary((prev) => (prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]))
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Restaurants</h1>
      <p className="text-xl text-gray-600 mb-8">Discover the perfect dining spot for your date</p>

      <LocationInput />

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 mt-8">
        <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
          <Input type="text" placeholder="Search restaurants..." className="pr-10" />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex space-x-4">
          <Button onClick={() => setShowFilters(!showFilters)} variant="outline">
            <Sliders className="mr-2 h-4 w-4" /> {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
          <Tabs value={viewMode} onValueChange={setViewMode}>
            <TabsList>
              <TabsTrigger value="grid">Grid</TabsTrigger>
              <TabsTrigger value="map">Map</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {showFilters && (
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Categories</label>
              <Select value={selectedCategories[0] || ""} onValueChange={handleCategoryChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {allCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine Type</label>
              <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
                <SelectTrigger>
                  <SelectValue placeholder="Select cuisine" />
                </SelectTrigger>
                <SelectContent>
                  {cuisineTypes.map((cuisine) => (
                    <SelectItem key={cuisine} value={cuisine}>
                      {cuisine}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ambiance</label>
              <Select value={selectedAmbiance} onValueChange={setSelectedAmbiance}>
                <SelectTrigger>
                  <SelectValue placeholder="Select ambiance" />
                </SelectTrigger>
                <SelectContent>
                  {ambiances.map((ambiance) => (
                    <SelectItem key={ambiance} value={ambiance}>
                      {ambiance}
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
                    <SelectItem key={price.value} value={price.value}>
                      {price.label} ({price.value})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Budget per Person</label>
            <Slider value={budget} onValueChange={setBudget} max={300} step={10} className="mb-2" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>${budget}</span>
              <span>$300+</span>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Features</label>
            <div className="flex flex-wrap gap-2">
              {features.map((feature) => (
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
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Options</label>
            <div className="flex flex-wrap gap-2">
              {dietaryOptions.map((option) => (
                <Toggle
                  key={option}
                  pressed={selectedDietary.includes(option)}
                  onPressedChange={() => toggleDietary(option)}
                  variant="outline"
                  size="sm"
                >
                  {option}
                </Toggle>
              ))}
            </div>
          </div>
          <Button className="w-full mt-6">Apply Filters</Button>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Utensils className="mr-2 h-5 w-5 text-purple-500" />
          Popular Categories
        </h2>
        <div className="flex flex-wrap gap-2">
          {allCategories.slice(0, 8).map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="text-sm py-1 px-3 cursor-pointer hover:bg-secondary-foreground hover:text-secondary transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      <Tabs value={viewMode} className="mb-8">
        <TabsContent value="grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurantSpots.map((spot, index) => (
              <SpotCard
                key={index}
                {...spot}
                extraInfo={
                  <div className="flex flex-wrap gap-1 mt-2">
                    {spot.features.map((feature, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="map">
          <RestaurantMap restaurants={restaurantSpots} />
        </TabsContent>
      </Tabs>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
          <Star className="mr-2 h-5 w-5 text-yellow-500" />
          Top-Rated This Week
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {restaurantSpots.slice(0, 3).map((spot, index) => (
            <Badge key={index} variant="outline" className="text-sm py-1 px-3">
              {spot.name}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-gray-100 rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">Need Help Choosing?</h3>
        <p className="text-center mb-6">
          Let our AI-powered Date Planner suggest the perfect restaurant based on your preferences!
        </p>
        <div className="flex justify-center">
          <Button size="lg">
            <Coffee className="mr-2 h-5 w-5" />
            Get Personalized Recommendations
          </Button>
        </div>
      </div>
    </div>
  )
}

