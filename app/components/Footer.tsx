import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-purple-600">DateSpot</h3>
            <p className="mt-2 text-sm text-gray-500">Discover perfect date ideas</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; 2023 DateSpot. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-purple-600 mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-purple-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

