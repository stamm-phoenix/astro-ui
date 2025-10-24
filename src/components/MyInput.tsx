import React from 'react';
import { Input } from '@/components/ui/input';

interface MyInputProps extends React.ComponentProps<typeof Input> {
  label?: string;
}

const MyInput: React.FC<MyInputProps> = ({ label, id, ...props }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      {label && <label htmlFor={id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</label>}
      <Input id={id} {...props} />
    </div>
  );
};

export default MyInput;
