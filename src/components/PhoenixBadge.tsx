import React from 'react';
import { Badge } from '@/components/ui/badge';

interface PhoenixBadgeProps {
  text: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const PhoenixBadge: React.FC<PhoenixBadgeProps> = ({ text, variant }) => {
  return (
    <Badge variant={variant}>
      {text}
    </Badge>
  );
};

export default PhoenixBadge;
