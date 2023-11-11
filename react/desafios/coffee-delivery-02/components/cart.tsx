'use client'

import { useStore } from '@/store'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Cart = () => {
  const cartQuantity = useStore((store) => store.cartQuantity)

  return (
    <Link
      href="/"
      className="flex justify-center items-center bg-yellow-light p-2 rounded-lg relative cursor-pointer"
    >
      {cartQuantity ? (
        <span className="absolute flex justify-center items-center text-xs bg-yellow-dark text-white w-5 h-5 rounded-full -top-2 -right-2">
          {cartQuantity}
        </span>
      ) : (
        <></>
      )}
      <ShoppingCart
        className="text-yellow-dark w-5 h-5"
        fill="rgb(196 127 23)"
      />
    </Link>
  )
}
