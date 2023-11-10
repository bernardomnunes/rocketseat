import React from 'react'
import { Coffee } from '@/data/types/coffee'
import { api } from '@/data/api'
import Image from 'next/image'

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
        return (
          <div
            key={coffee.id}
            className="flex flex-col items-center bg-base-card rounded-tl-md px-5 pb-5 rounded-br-md rounded-bl-[36px] rounded-tr-[36px] w-[256px] "
          >
            <Image
              src={`/${coffee.image}`}
              width={120}
              height={120}
              quality={100}
              alt=""
              className="-m-4"
            />

            <div className="flex flex-row gap-2 mt-8">
              {coffee.tags.map((tag) => {
                return (
                  <strong
                    className="text-yellow-dark bg-yellow-light px-2 py-1 text-[10px] rounded-lg"
                    key={tag}
                  >
                    {tag.toUpperCase()}
                  </strong>
                )
              })}
            </div>

            <strong className="mt-5 font-baloo text-[20px] font-bold">
              {coffee.title}
            </strong>

            <span className="text-sm text-base-label text-center mb-8">
              {coffee.description}
            </span>

            <div className="flex justify-between gap-6">
              <div className="text-base-text flex gap-1">
                <span className="text-sm self-end pb-1">R$</span>
                <span className="text-baloo text-2xl font-extrabold">9,90</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CoffeeWrapper
