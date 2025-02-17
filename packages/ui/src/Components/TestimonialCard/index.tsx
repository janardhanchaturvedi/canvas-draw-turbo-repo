import { Star } from "lucide-react";
import { Card } from "../../card.js";
import { Heading3, Text } from "../../typography.js";

function TestimonialCard({
  name,
  role,
  content,
  image,
}: {
  name: string;
  role: string;
  content: string;
  image: string;
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <Heading3 className="text-white">{name}</Heading3>
          <Text className="text-sm">{role}</Text>
        </div>
      </div>
      <Text>{content}</Text>
      <div className="flex text-yellow-400 mt-4">
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
      </div>
    </Card>
  );
}

export default TestimonialCard;
