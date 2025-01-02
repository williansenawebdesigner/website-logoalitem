'use client'

import { useState } from 'react'

interface CopyButtonProps {
  text: string
  className?: string
}

export default function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (err) {
      console.error('Falha ao copiar texto:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={className}
      type="button"
    >
      {copied ? 'Copiado!' : text}
    </button>
  )
} 