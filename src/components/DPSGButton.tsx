import React from 'react';
import { Button } from '@/components/ui/button';

interface DPSGButtonProps {
  text: string;
  onClick?: () => void;
}

const DPSGButton: React.FC<DPSGButtonProps> = ({ text, onClick }) => {
  return (
    <Button onClick={onClick}>
      {text}
    </Button>
  );
};

export default DPSGButton;
