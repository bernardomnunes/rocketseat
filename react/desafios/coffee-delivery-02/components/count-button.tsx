'use client'

import { useCoffeeForm } from '@/context/coffee-form-context'
import { Minus, Plus } from 'lucide-react'
import React from 'react'

export const CountButton = () => {
  const { coffeeQuantity, decreaseAmountCoffee, increaseAmountCoffee } =
    useCoffeeForm()

  return (
    <div className="flex items-center p-2 gap-1.5 bg-base-button rounded-md">
      <Minus
        className="w-4 h-4 text-purple cursor-pointer"
        onClick={decreaseAmountCoffee}
      />
      <span className="text-base-title text-base">{coffeeQuantity}</span>
      <Plus
        className="w-4 h-4 text-purple cursor-pointer"
        onClick={increaseAmountCoffee}
      />
    </div>
  )
}
