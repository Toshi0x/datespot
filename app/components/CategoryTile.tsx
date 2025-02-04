import Link from "next/link"

interface CategoryTileProps {
  name: string
  icon: string
  description: string
}

export default function CategoryTile({ name, icon, description }: CategoryTileProps) {
  return (
    <Link href={`/${name.toLowerCase()}`} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:scale-105 h-full flex flex-col justify-between">
        <span className="text-4xl mb-2 block">{icon}</span>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  )
}

