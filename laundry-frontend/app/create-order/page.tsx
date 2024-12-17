// 'use client'

// import { useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// export default function CreateOrder() {
//   const [address, setAddress] = useState({
//     area: '',
//     road: '',
//     house: '',
//     floor: '',
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Implement order creation logic
//   }

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Create an Order</h1>
//       <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
//         <div>
//           <Label htmlFor="name">Name</Label>
//           <Input id="name" required />
//         </div>
//         <div>
//           <Label htmlFor="area">Area</Label>
//           <Input
//             id="area"
//             value={address.area}
//             onChange={(e) => setAddress({ ...address, area: e.target.value })}
//             required
//           />
//         </div>
//         {/* Add similar inputs for road, house, and floor */}
//         <div>
//           <Label htmlFor="pickup-time">Pick-up Time</Label>
//           <Input id="pickup-time" type="datetime-local" required />
//         </div>
//         <div>
//           <Label htmlFor="delivery-time">Delivery Time</Label>
//           <Input id="delivery-time" type="datetime-local" required />
//         </div>
//         {/* Add product selection component here */}
//         <div>
//           <Label htmlFor="payment-method">Payment Method</Label>
//           <Select>
//             <SelectTrigger>
//               <SelectValue placeholder="Select payment method" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="cash">Cash on Delivery</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <Button type="submit">Place Order</Button>
//       </form>
//     </div>
//   )
// }









'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function CreateOrder() {
  const [address, setAddress] = useState({
    area: '',
    road: '',
    house: '',
    floor: '',
  })

  const [pickupTime, setPickupTime] = useState('')
  const [deliveryTime, setDeliveryTime] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [progress, setProgress] = useState(0)  // To track progress
  
  const handleAddressChange = (field: string, value: string) => {
    setAddress(prev => {
      const updatedAddress = { ...prev, [field]: value }
      updateProgress(updatedAddress)
      return updatedAddress
    })
  }

  const updateProgress = (updatedAddress: any) => {
    let filledFields = Object.values(updatedAddress).filter(val => val !== '').length
    let totalFields = 4 // area, road, house, floor
    setProgress((filledFields / totalFields) * 100)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement order creation logic
  }

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Form Section */}
      <div className="w-full lg:w-2/3 p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Create an Order</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" required />
          </div>
          {/* Phone Number */}
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" required />
          </div>

          <div>
            <Label htmlFor="area">Area</Label>
            <Input
              id="area"
              value={address.area}
              onChange={(e) => handleAddressChange('area', e.target.value)}
              required
            />
          </div>
          {/* Add similar inputs for road, house, and floor */}


          <div>
            <Label htmlFor="pickup-time">Pick-up Time</Label>
            <Input
              id="pickup-time"
              type="datetime-local"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="delivery-time">Delivery Time</Label>
            <Input
              id="delivery-time"
              type="datetime-local"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="payment-method">Payment Method</Label>
            <Select value={paymentMethod} onValueChange={setPaymentMethod}>
              <SelectTrigger>
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cash">Cash on Delivery</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Place Order</Button>
        </form>
      </div>

      {/* Right-side Progress Bar (Mobile: Below Form, Large Screens: Right side) */}
      {/* <div className="lg:w-1/3 lg:fixed lg:top-1/4 lg:right-4 w-full p-4 space-y-4 bg-gray-100 rounded-lg shadow-md mt-6 lg:mt-0">
        <h3 className="text-xl font-semibold mb-4">Order Progress</h3>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase">
                {Math.round(progress)}% Completed
              </span>
            </div>
          </div>
          <div className="flex mb-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}












// 'use client'
// import { useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// export default function CreateOrder() {
//   const [address, setAddress] = useState({
//     area: '',
//     road: '',
//     house: '',
//     floor: '',
//   })

//   const [pickupTime, setPickupTime] = useState('')
//   const [deliveryTime, setDeliveryTime] = useState('')
//   const [paymentMethod, setPaymentMethod] = useState('')
//   const [progress, setProgress] = useState(0)  // To track progress
  
//   const handleAddressChange = (field: string, value: string) => {
//     setAddress(prev => {
//       const updatedAddress = { ...prev, [field]: value }
//       updateProgress(updatedAddress)
//       return updatedAddress
//     })
//   }

//   const updateProgress = (updatedAddress: any) => {
//     let filledFields = Object.values(updatedAddress).filter(val => val !== '').length
//     let totalFields = 4 // area, road, house, floor
//     setProgress((filledFields / totalFields) * 100)
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Implement order creation logic
//   }

//   return (
//     <div className="flex">
//       {/* Form Section */}
//       <div className="w-full max-w-md p-6 space-y-4">
//         <h1 className="text-2xl font-bold mb-4">Create an Order</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <Label htmlFor="name">Name</Label>
//             <Input id="name" required />
//           </div>
//           <div>
//             <Label htmlFor="area">Area</Label>
//             <Input
//               id="area"
//               value={address.area}
//               onChange={(e) => handleAddressChange('area', e.target.value)}
//               required
//             />
//           </div>
//           {/* Add similar inputs for road, house, and floor */}
//           <div>
//             <Label htmlFor="pickup-time">Pick-up Time</Label>
//             <Input
//               id="pickup-time"
//               type="datetime-local"
//               value={pickupTime}
//               onChange={(e) => setPickupTime(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="delivery-time">Delivery Time</Label>
//             <Input
//               id="delivery-time"
//               type="datetime-local"
//               value={deliveryTime}
//               onChange={(e) => setDeliveryTime(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="payment-method">Payment Method</Label>
//             <Select value={paymentMethod} onValueChange={setPaymentMethod}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select payment method" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="cash">Cash on Delivery</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <Button type="submit">Place Order</Button>
//         </form>
//       </div>

//       {/* Right-side Progress Bar */}      
//       <div className="fixed top-1/4 right-4 w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold mb-4">Order Progress</h3>
//         <div className="relative pt-1">
//           <div className="flex mb-2 items-center justify-between">
//             <div>
//               <span className="text-xs font-semibold inline-block py-1 px-2 uppercase">
//                 {Math.round(progress)}% Completed
//               </span>
//             </div>
//           </div>
//           <div className="flex mb-2">
//             <div className="w-full bg-gray-200 rounded-full h-2.5">
//               <div
//                 className="bg-primary h-2.5 rounded-full"
//                 style={{ width: `${progress}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }
