import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

interface DPSGCardProps {
  title: string;
  description: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

const DPSGCard: React.FC<DPSGCardProps> = ({ title, description, content, footer }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {content && <CardContent>{content}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default DPSGCard;
