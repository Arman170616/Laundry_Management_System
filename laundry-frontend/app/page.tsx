import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


export default function Home() {
  return (
    
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/28576623/pexels-photo-28576623.jpeg"
            alt="Laundry service"
            layout="fill"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Overlay for better text visibility */}
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Laundry Service</h1>
          <p className="text-xl md:text-2xl mb-8">Experience hassle-free, professional laundry care</p>
          <Link href="/create-order">
            <Button size="lg" className="text-lg px-8 py-6">Get Started</Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Quality Service", description: "Expert cleaning for all your garments" },
              { title: "Fast Turnaround", description: "Get your clothes back in 24-48 hours" },
              { title: "Eco-Friendly", description: "We use environmentally safe cleaning methods" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            {[
              { step: "1", title: "Schedule", description: "Book a pickup time" },
              { step: "2", title: "Clean", description: "We clean your clothes" },
              { step: "3", title: "Deliver", description: "Get fresh laundry delivered" }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Clean, Fresh Laundry?</h2>
          <p className="text-xl mb-8">Experience our top-notch laundry service today!</p>
          <Link href="/create-order">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">Schedule a Pickup</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

