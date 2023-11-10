import React from 'react'
import { Coffee, Package, ShoppingCart, Timer } from 'lucide-react'
import Image from 'next/image'
import CoffeeWrapper from '@/components/coffee-wrapper'

const Home = () => {
  return (
    <>
      <div className="flex gap-11 mb-36">
        <div className="flex flex-col gap-16 w-full">
          <div className="flex flex-col gap-4">
            <strong className="text-5xl font-baloo">
              Encontre o café perfeito para qualquer hora do dia
            </strong>
            <span className="text-xl">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>
          <div className="flex gap-8 flex-wrap ">
            <div className="flex gap-2 items-center">
              <div className="flex justify-center items-center w-7 h-7 bg-yellow-dark rounded-full">
                <ShoppingCart className="w-3.5 h-3.5 text-white" fill="white" />
              </div>
              <span className="text-base">Compra simples e segura</span>
            </div>

            <div className="flex gap-2 items-center">
              <div className="flex justify-center items-center w-7 h-7 bg-base-text rounded-full">
                <Package className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-base">Embalagem mantém o café intacto</span>
            </div>

            <div className="flex gap-2 items-center">
              <div className="flex justify-center items-center w-7 h-7 bg-yellow rounded-full">
                <Timer className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-base">Entrega rápida e rastreada</span>
            </div>

            <div className="flex gap-2 items-center">
              <div className="flex justify-center items-center w-7 h-7 bg-purple rounded-full">
                <Coffee className="w-3.5 h-3.5 text-white" fill="white" />
              </div>
              <span className="text-base">
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>

        <Image src="/coffee.svg" width={476} height={360} alt="" />
      </div>

      <strong className="text-4xl font-baloo">Nossos cafés</strong>
      <CoffeeWrapper />
    </>
  )
}

export default Home
