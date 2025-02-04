import { useState } from "react"
import { Search, Sliders } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import SpotCard from "./SpotCard"

interface CategoryPageProps {
  title: string
  description: string
  spots: any[]
  filters: {
    name: string
    options: string[]
  }[]
}

export default function CategoryPage({ title, description, spots, filters }: CategoryPageProps) {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{title}</h1>
      <p className="text-xl text-gray-600 mb-8">{description}</p>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
          <Input type="text" placeholder={`Search ${title.toLowerCase()}...`} className="pr-10" />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <Button onClick={() => setShowFilters(!showFilters)}>
          <Sliders className="mr-2 h-4 w-4" /> Filters
        </Button>
      </div>

      {showFilters && (
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filters.map((filter) => (
              <div key={filter.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{filter.name}</label>
                <Select>
                  <option value="">Select {filter.name}</option>
                  {filter.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {spots.map((spot, index) => (
          <SpotCard key={index} {...spot} />
        ))}
      </div>
    </div>
  )
}

