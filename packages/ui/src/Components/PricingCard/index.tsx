import { ChevronRight } from "lucide-react";
import { Card } from "../../card.js";
import { Heading3 } from "../../typography.js";
import { Button } from "../../button.js";

function PricingCard({
  title,
  price,
  features,
  recommended,
}: {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
}) {
  return (
    <Card className={`relative p-8 ${recommended ? "border-purple-500" : ""}`}>
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm">
          Recommended
        </div>
      )}
      <Heading3 className="mb-2">{title}</Heading3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        {price !== "Free" && <span className="text-gray-400">/month</span>}
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <ChevronRight className="w-5 h-5 text-purple-400 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button variant={recommended ? "primary" : "secondary"} fullWidth>
        Get Started
      </Button>
    </Card>
  );
}
export default PricingCard;
