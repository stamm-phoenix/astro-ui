import React from 'react';
import { Button } from '@/components/ui/button';

interface PhoenixButtonProps {
  text: string;
  onClick?: () => void;
}

const PhoenixButton: React.FC<PhoenixButtonProps> = ({ text, onClick }) => {
  return (
    <Button onClick={onClick}>
      {text}
    </Button>
  );
};

export default PhoenixButton;
