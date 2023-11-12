'use client'

import { CoffeeAddType, useCoffeeForm } from '@/context/coffee-form-context'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Coffee } from '@/data/types/coffee'

interface CoffeeSubmitButtonProps {
  coffee: Coffee
}

export const CoffeeSubmitButton = ({ coffee }: CoffeeSubmitButtonProps) => {
  const { addCoffee, coffeeQuantity } = useCoffeeForm()

  const newCoffee = {
    id: coffee.id,
    image: coffee.image,
    quantity: coffeeQuantity,
    title: coffee.title,
  } satisfies CoffeeAddType

  return (
    <div
      className="flex items-center justify-center bg-purple-dark p-2.5 rounded-md cursor-pointer"
      onClick={() => addCoffee(newCoffee)}
    >
      <ShoppingCart className="h-5 w-5 text-white" fill="white" />
    </div>
  )
}
