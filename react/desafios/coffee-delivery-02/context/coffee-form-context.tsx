'use client'

import { useStore } from '@/store'
import React, { ReactNode, createContext, useContext, useState } from 'react'

export interface CoffeeAddType {
  id: number
  title: string
  image: string
  quantity: number
}

interface CoffeeFormContextType {
  coffeeQuantity: number

  increaseAmountCoffee: () => void
  decreaseAmountCoffee: () => void
  addCoffee: (data: CoffeeAddType) => void
}

const CoffeeFormContext = createContext({} as CoffeeFormContextType)

export const CoffeeFormProvider = ({ children }: { children: ReactNode }) => {
  const { insert, wishCoffees } = useStore()

  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  function increaseAmountCoffee() {
    setCoffeeQuantity((state) => state + 1)
  }

  function decreaseAmountCoffee() {
    setCoffeeQuantity((state) => {
      if (state <= 1) {
        return state
      } else {
        return (state = state - 1)
      }
    })
  }

  function addCoffee(data: CoffeeAddType) {
    insert(data)
    setCoffeeQuantity(1)
  }

  return (
    <CoffeeFormContext.Provider
      value={{
        decreaseAmountCoffee,
        increaseAmountCoffee,
        coffeeQuantity,
        addCoffee,
      }}
    >
      {children}
    </CoffeeFormContext.Provider>
  )
}

export const useCoffeeForm = () => useContext(CoffeeFormContext)
