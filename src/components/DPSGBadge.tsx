import React from 'react';
import { Badge } from '@/components/ui/badge';

interface DPSGBadgeProps {
  text: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const DPSGBadge: React.FC<DPSGBadgeProps> = ({ text, variant }) => {
  return (
    <Badge variant={variant}>
      {text}
    </Badge>
  );
};

export default DPSGBadge;
