// 'use client'

// import Link from 'next/link'
// import { useAuth } from './auth-provider'
// import { Button } from '@/components/ui/button'

// export default function Header() {
//   const { user, logout } = useAuth()

//   return (
//     <header className="bg-white shadow-sm">
//       <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <Link href="/" className="text-xl font-bold">
//           Laundry Service
//         </Link>
//         <div className="space-x-4">
//           <Link href="/how-it-works">How It Works</Link>
//           <Link href="/services">Services</Link>
//           <Link href="/pricing">Pricing</Link>
//           {user ? (
//             <>
//               <Link href="/profile">Profile</Link>
//               <Button onClick={logout}>Logout</Button>
//             </>
//           ) : (
//             <Link href="/login">
//               <Button>Login</Button>
//             </Link>
//           )}
//         </div>
//       </nav>
//     </header>
//   )
// }

'use client'

import Link from 'next/link'
import { useAuth } from './auth-provider'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Header() {
  const { user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle the hamburger menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Laundry Service
        </Link>

        {/* Hamburger Icon (visible only on mobile) */}
        <button
          className="lg:hidden text-2xl"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        {/* Desktop Navigation (visible only on larger screens) */}
        <div className="hidden lg:flex space-x-4">
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          {user ? (
            <>
              <Link href="/profile">Profile</Link>
              <Button onClick={logout}>Logout</Button>
            </>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </nav>

      {/* Side menu (hidden initially, shown when isMenuOpen is true) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setIsMenuOpen(false)} // Close the menu when clicking outside
      >
        <div
          className={`fixed top-0 left-0 bg-white w-2/3 h-full p-4 transition-transform transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <Link href="/" className="text-xl font-bold">
              Laundry Service
            </Link>
            <button onClick={toggleMenu} className="text-2xl">
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </button>
          </div>
          <div className="space-y-4">
            <Link href="/how-it-works" className="block py-2 text-lg">
              How It Works
            </Link>
            <Link href="/services" className="block py-2 text-lg">
              Services
            </Link>
            <Link href="/pricing" className="block py-2 text-lg">
              Pricing
            </Link>
            {user ? (
              <>
                <Link href="/profile" className="block py-2 text-lg">
                  Profile
                </Link>
                <Button onClick={logout} className="block py-2 text-lg">
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/login" className="block py-2 text-lg">
                <Button>Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

