import React from 'react';
import { Textarea } from '@/components/ui/textarea';

interface MyTextareaProps extends React.ComponentProps<typeof Textarea> {
  label?: string;
}

const MyTextarea: React.FC<MyTextareaProps> = ({ label, id, ...props }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      {label && <label htmlFor={id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</label>}
      <Textarea id={id} {...props} />
    </div>
  );
};

export default MyTextarea;
