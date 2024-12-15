'use client';

import { useState } from 'react';
import ServiceCard from '@/components/service-card';
import AdminServiceControls from '@/components/admin-service-controls';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ServicesPage() {
  // Initial services data
  const [services, setServices] = useState<Service[]>([
    {
      id: '1',
      name: 'Laundry Service',
      description: 'Premium laundry services for all types of garments.',
      price: 10,
      imageUrl: 'https://images.pexels.com/photos/4440652/pexels-photo-4440652.jpeg',  // Direct URL from Pexels
    },
    {
      id: '2',
      name: 'Dry Cleaning',
      description: 'Professional dry cleaning for your delicate clothes.',
      price: 15,
      imageUrl: 'https://images.pexels.com/photos/28576630/pexels-photo-28576630.jpeg'
    },
    {
      id: '3',
      name: 'Ironing Service',
      description: 'Perfect ironing service for wrinkle-free clothes.',
      price: 5,
      imageUrl: 'https://images.pexels.com/photos/9462667/pexels-photo-9462667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ]);

  // Add a new service
  // const addService = () => {
  //   const newService: Service = {
  //     id: (services.length + 1).toString(),
  //     name: 'New Service',
  //     description: 'Description of the new service.',
  //     price: 20,
  //     imageUrl: '/images/new-service.jpg',
  //   };
  //   setServices([...services, newService]);
  // };

  // // Remove a service
  // const removeService = (id: number) => {
  //   setServices(services.filter((service) => service.id !== id.toString()));
  // };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      {/* <AdminServiceControls /> */}
    </div>
  );
}
