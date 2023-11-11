import React from 'react'
import { Coffee } from '@/data/types/coffee'
import { api } from '@/data/api'
import { CoffeeCard } from './coffee-card'

async function getCoffees(): Promise<Coffee[]> {
  const response = await api('/coffees')

  const coffees = await response.json()

  return coffees
}

const CoffeeWrapper = async () => {
  const coffees = await getCoffees()

  return (
    <div className="flex gap-8 flex-wrap mt-12">
      {coffees.map((coffee) => {
        return <CoffeeCard coffee={coffee} key={coffee.id} />
      })}
    </div>
  )
}

export default CoffeeWrapper
