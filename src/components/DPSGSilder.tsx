import React from 'react';
import { Slider } from '@/components/ui/slider';

interface DPSGSilderProps {
  label: string;
  defaultValue?: number[];
  max?: number;
  min?: number;
  step?: number;
  onValueChange?: (value: number[]) => void;
}

const DPSGSilder: React.FC<DPSGSilderProps> = ({ label, defaultValue, max, min, step, onValueChange }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      {label && <label className="text-sm font-medium leading-none">{label}</label>}
      <Slider
        defaultValue={defaultValue}
        max={max}
        min={min}
        step={step}
        onValueChange={onValueChange}
        className="w-[60%]"
      />
    </div>
  );
};

export default DPSGSilder;
