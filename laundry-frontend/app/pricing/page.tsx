// pages/pricing.tsx
import { pricingData, PricingItem } from "@/data/pricing";

export default function Pricing() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Laundry Pricing</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2 text-left">Service</th>
                <th className="border px-4 py-2 text-left">Price Per Unit ($)</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item: PricingItem) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.service}</td>
                  <td className="border px-4 py-2">{item.perUnit.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
