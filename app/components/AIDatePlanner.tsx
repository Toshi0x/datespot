"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AIDatePlanner() {
  const [suggestion, setSuggestion] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically make an API call to your AI service
    // For now, we'll just set a mock suggestion
    setSuggestion(
      "How about dinner at Sushi Fusion followed by drinks at Rooftop Lounge? The total estimated cost is £80.",
    )
  }

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">AI Date Planner</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
            Budget
          </label>
          <Input type="number" id="budget" placeholder="Enter your budget" />
        </div>
        <div>
          <label htmlFor="preferences" className="block text-sm font-medium text-gray-700 mb-1">
            Preferences
          </label>
          <Textarea
            id="preferences"
            placeholder="Tell us about your ideal date (e.g., romantic, casual, adventurous)"
          />
        </div>
        <Button type="submit">Get Suggestions</Button>
      </form>
      {suggestion && (
        <div className="mt-4 p-4 bg-purple-100 rounded-lg">
          <h4 className="font-semibold mb-2">AI Suggestion:</h4>
          <p>{suggestion}</p>
        </div>
      )}
    </div>
  )
}

