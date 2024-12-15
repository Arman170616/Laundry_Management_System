import { Service } from '@/types/service';

export const services: Service[] = [
  {
    id: '1',
    name: 'Wash & Fold',
    description: 'We wash, dry, and fold your clothes for you.',
    price: 2.5,
    imageUrl: '/placeholder.svg?height=200&width=200',
  },
  {
    id: '2',
    name: 'Dry Cleaning',
    description: 'Professional dry cleaning for your delicate garments.',
    price: 5,
    imageUrl: '/placeholder.svg?height=200&width=200',
  },
  {
    id: '3',
    name: 'Ironing',
    description: 'We iron your clothes to perfection.',
    price: 3,
    imageUrl: '/placeholder.svg?height=200&width=200',
  },
  {
    id: '4',
    name: 'Alterations',
    description: 'Expert alterations and repairs for your clothes.',
    price: 10,
    imageUrl: '/placeholder.svg?height=200&width=200',
  },
];

