'use client'

import { useAuth } from '@/components/auth-provider'
import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Profile() {
  const { user } = useAuth()

  if (!user) {
    return <div>Please log in to view your profile.</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      <form className="space-y-4 max-w-md">
        <div>
          <Label htmlFor="name">Name</Label>
          {/* <Input id="name" defaultValue={user.name} /> */}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          {/* <Input id="email" defaultValue={user.email} /> */}
        </div>
        <Button type="submit">Update Profile</Button>
      </form>
      <h2 className="text-xl font-bold mt-8 mb-4">Your Orders</h2>
      {/* Implement order list component here */}
    </div>
  )
}

