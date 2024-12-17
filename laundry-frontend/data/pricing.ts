// data/pricing.ts

export interface PricingItem {
    id: number;
    service: string;
    perUnit: number;
  }
  
  export const pricingData: PricingItem[] = [
    { id: 1, service: "Shirt Iron", perUnit: 0.5 },
    { id: 2, service: "Pants Wash", perUnit: 1.0 },
    { id: 3, service: "Dry Cleaning (Jackets)", perUnit: 5.0 },
    { id: 4, service: "Bedsheet Wash", perUnit: 3.0 },
    { id: 5, service: "Pants Iron", perUnit: 0.7 },
    { id: 6, service: "Dry Cleaning (Suits)", perUnit: 6.5 },
    { id: 7, service: "Curtains Wash", perUnit: 4.0 },
    { id: 8, service: "Towel Wash", perUnit: 1.2 },
    { id: 9, service: "Dress Iron", perUnit: 0.8 },
    { id: 10, service: "Dry Cleaning (Carpets)", perUnit: 10.0 },
    { id: 11, service: "Pillow Cover Wash", perUnit: 0.5 },
    { id: 12, service: "Blanket Wash", perUnit: 8.0 },
    { id: 13, service: "Tablecloth Wash", perUnit: 2.5 },
    { id: 14, service: "Sofa Cushion Cover Wash", perUnit: 3.5 },
    { id: 15, service: "Dry Cleaning (Ties)", perUnit: 2.0 },
  ];
  