import React from "react";

export interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onValueChange,
  disabled,
  children,
}) => {
  return (
    <div className="relative">
      <select
        className="w-full border p-2 rounded"
        value={value}
        onChange={(e) => onValueChange?.(e.target.value)}
        disabled={disabled}
      >
        {children}
      </select>
    </div>
  );
};

interface ItemProps {
  value: string;
  children: React.ReactNode;
}

export const SelectItem: React.FC<ItemProps> = ({ value, children }) => (
  <option value={value}>{children}</option>
);

export const SelectTrigger: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <>{children}</>;

export const SelectValue: React.FC<{ placeholder?: string }> = ({
  placeholder,
}) => <option value="">{placeholder}</option>;

export const SelectContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <>{children}</>;