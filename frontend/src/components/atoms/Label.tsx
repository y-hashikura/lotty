import React from 'react'

interface LabelProps {
  htmlFor?: string
  children: React.ReactNode
  required?: boolean
  className?: string
}
export const Label = (
  { 
    htmlFor, children, required = false, className = '' 
  }
  : LabelProps
) => {
  return (
    <label 
      htmlFor={htmlFor} 
      className={`w-32 text-sm font-medium text-gray-700 flex items-center ${className}`}
    >
      {required && <span className="text-red-500 ml-1">*</span>}
      {children}
    </label>
  )
} 