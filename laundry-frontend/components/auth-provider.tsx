'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const AuthContext = createContext<{
  user: unknown
  login: () => void
  logout: () => void
} | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<unknown>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in (e.g., by checking local storage or making an API call)
  }, [])

  const login = async () => {
    // Implement login logic here
    // This could involve redirecting to a backend endpoint or using a library like NextAuth.js
  }

  const logout = () => {
    // Implement logout logic here
    setUser(null)
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

