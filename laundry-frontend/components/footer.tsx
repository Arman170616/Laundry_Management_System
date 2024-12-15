import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Laundry Service</h2>
            <p className="text-sm text-gray-600">Making your life easier, one wash at a time.</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h3 className="text-md font-semibold mb-2">Quick Links</h3>
            <nav className="space-x-4">
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/services" className="text-sm text-gray-600 hover:text-gray-900">Services</Link>
              <Link href="/how-it-works" className="text-sm text-gray-600 hover:text-gray-900">How It Works</Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link>
            </nav>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p className="text-sm text-gray-600">&copy; 2024 Laundry Service. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

