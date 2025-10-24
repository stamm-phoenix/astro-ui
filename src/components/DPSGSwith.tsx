import React from 'react';
import { Switch } from '@/components/ui/switch';

interface DPSGSwithProps {
  label: string;
  id: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const DPSGSwith: React.FC<DPSGSwithProps> = ({ label, id, checked, onCheckedChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export default DPSGSwith;
