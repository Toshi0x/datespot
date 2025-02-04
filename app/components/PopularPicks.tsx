import SpotCard from "./SpotCard"

const popularSpots = [
  {
    name: "Rooftop Lounge",
    category: "Bars",
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.7,
    location: "Downtown",
    priceRange: "$$$",
  },
  {
    name: "Escape Room Challenge",
    category: "Activities",
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.8,
    location: "Midtown",
    priceRange: "$$",
  },
  {
    name: "Sushi Fusion",
    category: "Restaurants",
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.9,
    location: "West End",
    priceRange: "$$$",
  },
  {
    name: "Boutique Hotel",
    category: "Hotels",
    imageUrl: "/placeholder.svg?height=200&width=400",
    rating: 4.6,
    location: "Riverside",
    priceRange: "$$$$",
  },
]

export default function PopularPicks() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Popular Picks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {popularSpots.map((spot, index) => (
          <SpotCard key={index} {...spot} />
        ))}
      </div>
    </section>
  )
}

