import Image from "next/image"
import { Star, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type React from "react" // Import React

interface SpotCardProps {
  name: string
  categories: string[]
  imageUrl: string
  rating: number
  location: string
  priceRange: string
  extraInfo?: React.ReactNode
}

export default function SpotCard({
  name,
  categories,
  imageUrl,
  rating,
  location,
  priceRange,
  extraInfo,
}: SpotCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <div className="flex flex-wrap gap-1 mb-2">
          {categories.map((category, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-yellow-400 mr-1" />
          <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center mb-2">
          <MapPin className="h-4 w-4 text-gray-400 mr-1" />
          <span className="text-sm text-gray-600">{location}</span>
        </div>
        <p className="text-sm text-gray-500 mb-2">{priceRange}</p>
        {extraInfo}
      </div>
    </div>
  )
}

