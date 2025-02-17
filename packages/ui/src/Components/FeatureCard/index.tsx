import { Card } from "../../card.js";
import { Heading3, Text } from "../../typography.js";

function FeatureCard({
    icon: Icon,
    title,
    description,
  }: {
    icon: React.ElementType;
    title: string;
    description: string;
  }) {
    return (
      <Card hover className="p-6">
        <Icon className="w-8 h-8 text-purple-400 mb-4" />
        <Heading3 className="mb-2">{title}</Heading3>
        <Text>{description}</Text>
      </Card>
    );
  }
  export default FeatureCard;