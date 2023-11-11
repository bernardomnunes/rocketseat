'use client'

import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const CoffeeSubmitButton = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center bg-purple-dark p-2.5 rounded-md"
    >
      <ShoppingCart className="h-5 w-5 text-white" fill="white" />
    </Link>
  )
}
