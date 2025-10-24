import React from 'react';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group';

interface MyRadioGroupProps {
  label: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

const MyRadioGroup: React.FC<MyRadioGroupProps> = ({ label, options, defaultValue, onValueChange }) => {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium leading-none">{label}</label>
      <RadioGroup defaultValue={defaultValue} onValueChange={onValueChange}>
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={option.value} />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default MyRadioGroup;
