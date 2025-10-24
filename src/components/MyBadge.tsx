import React from 'react';
import { Badge } from '@/components/ui/badge';

interface MyBadgeProps {
  text: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const MyBadge: React.FC<MyBadgeProps> = ({ text, variant }) => {
  return (
    <Badge variant={variant}>
      {text}
    </Badge>
  );
};

export default MyBadge;
