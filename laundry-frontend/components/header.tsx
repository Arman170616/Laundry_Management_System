'use client'

import Link from 'next/link'
import { useAuth } from './auth-provider'
import { Button } from '@/components/ui/button'

export default function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Laundry Service
        </Link>
        <div className="space-x-4">
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/services">Services</Link>
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
    </header>
  )
}

