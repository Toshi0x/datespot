"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon, MapPin } from "lucide-react"

interface FilterOption {
  name: string
  options: string[]
}

interface FilterPanelProps {
  filters: FilterOption[]
}

export default function FilterPanel({ filters }: FilterPanelProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [budget, setBudget] = useState([100])
  const [location, setLocation] = useState("")
  const [usingCurrentLocation, setUsingCurrentLocation] = useState(false)

  useEffect(() => {
    if (usingCurrentLocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude}, ${position.coords.longitude}`)
        },
        (error) => {
          console.error("Error getting location:", error)
          setUsingCurrentLocation(false)
        },
      )
    }
  }, [usingCurrentLocation])

  const handleUseCurrentLocation = () => {
    setUsingCurrentLocation(true)
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={handleUseCurrentLocation} variant="outline">
            <MapPin className="h-4 w-4 mr-2" />
            Use Current
          </Button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Distance</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select distance" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Within 1 mile</SelectItem>
            <SelectItem value="5">Within 5 miles</SelectItem>
            <SelectItem value="10">Within 10 miles</SelectItem>
            <SelectItem value="20">Within 20 miles</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
        <Slider value={budget} onValueChange={setBudget} max={500} step={10} className="mb-2" />
        <div className="flex justify-between text-sm text-gray-600">
          <span>$0</span>
          <span>${budget}</span>
          <span>$500+</span>
        </div>
      </div>

      {filters.map((filter) => (
        <div key={filter.name}>
          <label className="block text-sm font-medium text-gray-700 mb-1">{filter.name}</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder={`Select ${filter.name.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              {filter.options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
        <div className="flex items-center">
          <Button
            variant="outline"
            className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? date.toDateString() : "Pick a date"}
          </Button>
        </div>
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border mt-2" />
      </div>

      <Button className="w-full">Apply Filters</Button>
    </div>
  )
}

