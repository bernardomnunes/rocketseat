import {
  Banknote,
  CreditCardIcon,
  DollarSign,
  Landmark,
  MapPin,
} from 'lucide-react'
import React from 'react'

const Checkout = () => {
  return (
    <div className="grid grid-cols-10 gap-8">
      <div className="flex flex-col gap-4 col-span-6">
        <span className="font-baloo text-lg">Complete seu pedido</span>

        <div className="flex flex-col p-10 rounded-md bg-base-card">
          <div className="flex gap-2">
            <MapPin className="w-5 h-5 text-yellow-dark " />
            <div className="flex flex-col">
              <span className="text-sm">Endereço de Entrega</span>
              <span className="text-base">
                Informe o endereço onde deseja receber seu pedido
              </span>
            </div>
          </div>

          <div className="grid grid-rows-4 grid-cols-9 mt-8 gap-4">
            <input
              className="row-span-1 col-span-3 p-3 bg-base-input ring-base-button rounded-[4px] outline-none"
              placeholder="CEP"
            />
            <input
              className="row-start-2 col-span-9 p-3 bg-base-input ring-base-button rounded-[4px] outline-none"
              placeholder="Rua"
            />
            <input
              className="row-start-3 col-span-2 p-3 bg-base-input ring-base-button rounded-[4px] outline-none"
              placeholder="Número"
            />
            <div className="flex justify-between items-center row-start-3 col-span-7 p-3 bg-base-input ring-base-button rounded-[4px] outline-none">
              <input
                placeholder="Complemento"
                className="bg-transparent outline-none w-full"
              />
              <span className="text-base-label text-xs">Opcional</span>
            </div>
            <input
              className="row-start-4 col-span-2 p-3 bg-base-input ring-base-button rounded-[4px] outline-none"
              placeholder="Bairro"
            />
            <input
              className="row-start-4 col-span-6 p-3 bg-base-input ring-base-button rounded-[4px] outline-none"
              placeholder="Cidade"
            />
            <input
              className="row-start-4 col-span-1 p-3 bg-base-input ring-base-button rounded-[4px] outline-none"
              placeholder="UF"
            />
          </div>
        </div>

        <div className="flex flex-col p-10 rounded-md bg-base-card">
          <div className="flex gap-2">
            <div className="pt-1">
              <DollarSign className="w-5 h-5 text-purple" />
            </div>
            <div className="flex flex-col">
              <span className="text-base">Pagamento</span>
              <span className="text-sm">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>

          <div className="flex gap-3 mt-8 ">
            <div className="flex items-center bg-base-button p-4 rounded-md gap-3 flex-1">
              <CreditCardIcon className="w-4 h-4 text-purple" />
              <span className="text-base-text text-xs">CARTÃO DE CRÉDITO</span>
            </div>
            <div className="flex items-center bg-base-button p-4 rounded-md gap-3 flex-1">
              <Landmark className="w-4 h-4 text-purple" />
              <span className="text-base-text text-xs">CARTÃO DE DÉBITO</span>
            </div>
            <div className="flex items-center bg-base-button p-4 rounded-md gap-3 flex-1">
              <Banknote className="w-4 h-4 text-purple" />
              <span className="text-base-text text-xs">DINHEIRO</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 col-span-4">
        <span className="font-baloo text-lg">Cafés selecionados</span>
      </div>
    </div>
  )
}

export default Checkout
