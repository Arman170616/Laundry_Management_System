import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Service } from '@/types/service'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={service.imageUrl}
        alt={service.name}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <p className="text-lg font-bold">${service.price.toFixed(2)} per lb</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="w-full">Add to Order</Button>
      </CardFooter>
    </Card>
  )
}

