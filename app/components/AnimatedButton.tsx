'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { iconAnimation } from '../animations'

interface AnimatedButtonProps {
  href: string
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
  showArrow?: boolean
}

export default function AnimatedButton({ 
  href, 
  variant = 'primary', 
  children, 
  className = '',
  showArrow = true
}: AnimatedButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full flex items-center gap-2 transition duration-300 w-fit"
  const variants = {
    primary: "bg-[#1E4C9A] text-white hover:bg-[#1a4185] hover:text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white text-[#1E4C9A] hover:bg-[#f8f9fa] shadow-lg hover:shadow-xl"
  }

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      <Link 
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        <span>{children}</span>
        {showArrow && (
          <motion.svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            variants={iconAnimation}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </motion.svg>
        )}
      </Link>
    </motion.div>
  )
} 