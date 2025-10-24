import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface PhoenixSelectProps {
  label?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

const PhoenixSelect: React.FC<PhoenixSelectProps> = ({ label, placeholder, options, defaultValue, onValueChange }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      {label && <label className="text-sm font-medium leading-none">{label}</label>}
      <Select defaultValue={defaultValue} onValueChange={onValueChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PhoenixSelect;
