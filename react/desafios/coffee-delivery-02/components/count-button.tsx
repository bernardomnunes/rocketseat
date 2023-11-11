'use client'

import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

export const CountButton = () => {
  const [CoffeeQuantity, setCoffeeQuantity] = useState(1)

  return (
    <div className="flex items-center p-2 gap-1.5 bg-base-button rounded-md">
      <Minus
        className="w-4 h-4 text-purple cursor-pointer"
        onClick={() =>
          setCoffeeQuantity((state) => {
            if (state <= 1) {
              return state
            } else {
              return (state = state - 1)
            }
          })
        }
      />
      <span className="text-base-title text-base">{CoffeeQuantity}</span>
      <Plus
        className="w-4 h-4 text-purple cursor-pointer"
        onClick={() => setCoffeeQuantity((state) => state + 1)}
      />
    </div>
  )
}
