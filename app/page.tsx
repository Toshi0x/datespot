import CategoryTile from "./components/CategoryTile"
import SpotCard from "./components/SpotCard"
import AIDatePlanner from "./components/AIDatePlanner"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, MapPin, MessageCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import LocationInput from "./components/LocationInput"

const categories = [
  { name: "Restaurants", icon: "🍽️", description: "Find a Restaurant" },
  { name: "Activities", icon: "🎭", description: "Plan an Activity" },
  { name: "Bars", icon: "🍸", description: "Discover Bars" },
  { name: "Hotels", icon: "🏨", description: "Book a Hotel" },
]

const trendingSpots = [
  {
    name: "Skyline Lounge",
    categories: ["Bars", "Rooftop"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.8,
    location: "Downtown",
    priceRange: "$$$",
  },
  {
    name: "Adrenaline Rush Escape Room",
    categories: ["Activities", "Indoor"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.9,
    location: "Midtown",
    priceRange: "$$",
  },
  {
    name: "Fusion Steakhouse",
    categories: ["Restaurants", "Fine Dining"],
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.7,
    location: "Financial District",
    priceRange: "$$$$",
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-xl overflow-hidden mb-12">
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Stylish couple enjoying a night out"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Plan Your Date</h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Discover top-rated spots and plan unforgettable experiences with ease
          </p>
          <div className="w-full max-w-md">
            <form className="bg-white rounded-lg p-4 shadow-lg">
              <Textarea
                placeholder="Hi there! Let's plan your date. What's your budget? Where would you like to go? Are you interested in multiple activities? Tell me more!"
                className="mb-2 text-gray-800"
                rows={4}
              />
              <div className="flex justify-end">
                <Button type="submit">
                  <Send className="h-4 w-4 mr-2" /> Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Location Input */}
      <section className="mb-12">
        <LocationInput />
      </section>

      {/* Category Tiles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Explore Date Ideas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryTile
              key={category.name}
              name={category.name}
              icon={category.icon}
              description={category.description}
            />
          ))}
        </div>
      </section>

      {/* Quick Filters */}
      <section className="mb-12">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Quick Filters</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline">💰 Budget</Button>
            <Button variant="outline">
              <MapPin className="h-4 w-4 mr-2" />
              Location
            </Button>
            <Button variant="outline">⭐ Rating</Button>
            <Button variant="outline">🌆 Ambience</Button>
          </div>
        </div>
      </section>

      {/* AI Date Planner */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Plan Your Date</h2>
          <p className="mb-6">Let our AI assistant help you create a memorable experience</p>
          <Button size="lg" variant="secondary">
            Plan Your Date With AI <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <AIDatePlanner />
      </section>

      {/* Trending Now */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Trending Hot Spots</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingSpots.map((spot, index) => (
            <SpotCard key={index} {...spot} />
          ))}
        </div>
      </section>

      {/* Floating Chat Icon */}
      <div className="fixed bottom-6 right-6">
        <Button size="lg" className="rounded-full w-16 h-16">
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    </div>
  )
}

