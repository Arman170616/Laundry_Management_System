import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, WashingMachine, Truck } from "lucide-react";


const steps = [
  {
    title: "Schedule a Pickup",
    description: "Choose a convenient time for us to collect your laundry.",
    icon: <Calendar className="text-primary h-10 w-10" />, // Calendar icon for scheduling
  },
  {
    title: "We Clean Your Clothes",
    description: "Our experts carefully wash, dry, and fold your items.",
    icon: <WashingMachine className="text-primary h-10 w-10" />, // Washing machine icon for cleaning
  },
  {
    title: "Delivery",
    description: "We return your fresh, clean laundry at your chosen time.",
    icon: <Truck className="text-primary h-10 w-10" />, // Truck icon for delivery
  },
];

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">How It Works</h1>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {steps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  {step.icon}
                </div>
                <span>{step.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-muted rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Our Laundry Service?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Professional cleaning with eco-friendly detergents</li>
          <li>Convenient pickup and delivery schedule</li>
          <li>Expert handling of delicate fabrics</li>
          <li>Affordable pricing with no hidden fees</li>
          <li>Fast turnaround times</li>
        </ul>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to experience hassle-free laundry?</h2>
        <Link href="/create-order">
          <Button size="lg">Schedule Your First Pickup</Button>
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "How long does the laundry service take?",
              answer: "Our standard turnaround time is 24-48 hours, depending on the service you choose and the volume of items."
            },
            {
              question: "What if I'm not satisfied with the service?",
              answer: "We have a 100% satisfaction guarantee. If you're not happy with our service, we'll re-clean your items for free or provide a full refund."
            },
            {
              question: "Do you provide dry cleaning services?",
              answer: "Yes, we offer dry cleaning services for items that require special care. Just mark these items when scheduling your pickup."
            },
            {
              question: "How do I pay for the service?",
              answer: "We accept various payment methods including credit cards, debit cards, and digital wallets. Payment is processed securely after your order is completed."
            }
          ].map((faq, index) => (
            <div key={index}>
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

