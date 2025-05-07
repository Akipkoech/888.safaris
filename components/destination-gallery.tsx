import Image from "next/image"

const destinations = [
  {
    id: 1,
    name: "Maasai Mara",
    image: "/placeholder.svg?height=400&width=600",
    description: "Experience the world-famous wildlife reserve",
  },
  {
    id: 2,
    name: "Amboseli National Park",
    image: "/placeholder.svg?height=400&width=600",
    description: "See elephants with Mt. Kilimanjaro as backdrop",
  },
  {
    id: 3,
    name: "Diani Beach",
    image: "/placeholder.svg?height=400&width=600",
    description: "Relax on pristine white sand beaches",
  },
  {
    id: 4,
    name: "Lake Nakuru",
    image: "/placeholder.svg?height=400&width=600",
    description: "Witness thousands of flamingos and diverse wildlife",
  },
  {
    id: 5,
    name: "Mount Kenya",
    image: "/placeholder.svg?height=400&width=600",
    description: "Explore Africa's second-highest mountain",
  },
  {
    id: 6,
    name: "Nairobi National Park",
    image: "/placeholder.svg?height=400&width=600",
    description: "Safari experience right next to the capital city",
  },
]

export default function DestinationGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map((destination) => (
        <div key={destination.id} className="group relative h-64 rounded-lg overflow-hidden shadow-md">
          <Image
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
            <p className="text-sm text-white/90">{destination.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
