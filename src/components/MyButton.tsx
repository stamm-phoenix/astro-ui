import React from 'react';
import { Button } from '@/components/ui/button';

interface MyButtonProps {
  text: string;
  onClick?: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ text, onClick }) => {
  return (
    <Button onClick={onClick}>
      {text}
    </Button>
  );
};

export default MyButton;
