
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
};

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) => {
  const baseStyles = 'px-6 py-3 rounded-md font-medium transition duration-300';

  const variantStyles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-white text-indigo-600 hover:bg-gray-100',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-indigo-600',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
