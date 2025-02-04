import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            DateSpot
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/restaurants" className="text-gray-600 hover:text-gray-800">
              Restaurants
            </Link>
            <Link href="/activities" className="text-gray-600 hover:text-gray-800">
              Activities
            </Link>
            <Link href="/bars" className="text-gray-600 hover:text-gray-800">
              Bars
            </Link>
            <Link href="/hotels" className="text-gray-600 hover:text-gray-800">
              Hotels
            </Link>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

