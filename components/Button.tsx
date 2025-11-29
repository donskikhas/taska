import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand hover:bg-brand-dark text-white shadow-[0_4px_14px_rgba(44,126,32,0.3)] hover:shadow-[0_6px_20px_rgba(44,126,32,0.4)] border border-transparent active:scale-[0.98]",
    secondary: "bg-white text-gray-800 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-100 active:scale-[0.98]",
    outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm", // Reduced from px-6 py-3 for sleeker look
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};