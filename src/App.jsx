import { offers } from "./data/offers";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Exclusive Reward Offers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <Card key={index} className="rounded-2xl shadow-md">
            <CardContent className="p-4 flex flex-col items-center">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />

              <h2 className="text-lg font-semibold text-center mb-3">
                {offer.title}
              </h2>

              <Button
                className="w-full"
                onClick={() => window.open(offer.url, "_blank")}
              >
                Claim Offer
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
