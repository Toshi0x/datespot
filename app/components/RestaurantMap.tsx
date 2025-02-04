"use client"

import { MapPin } from "lucide-react"

interface Restaurant {
  name: string
  location: string
  rating: number
}

interface RestaurantMapProps {
  restaurants: Restaurant[]
}

export default function RestaurantMap({ restaurants }: RestaurantMapProps) {
  return (
    <div className="bg-gray-200 rounded-lg p-4 h-[600px] relative">
      <h3 className="text-xl font-semibold mb-4">Restaurant Map View</h3>
      <p className="mb-4">
        This is a placeholder for the restaurant map. In a real application, this would be an interactive map showing
        restaurant locations.
      </p>
      <div className="absolute inset-0 flex items-center justify-center">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="absolute"
            style={{ top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%` }}
          >
            <MapPin className="text-red-500" />
            <div className="bg-white rounded-md shadow-md p-2 mt-1">
              <p className="font-semibold">{restaurant.name}</p>
              <p className="text-sm">{restaurant.location}</p>
              <p className="text-sm">Rating: {restaurant.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

