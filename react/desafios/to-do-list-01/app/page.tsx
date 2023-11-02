import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center bg-gray-700 h-[200px]">
        <Image src="logo.svg" width={126} height={48} alt="Logo" />
      </header>

      <div className="grid gap-2 max-w-[736px] mx-auto mt-[-27px] px-4 md:grid-cols-6 max-md:grid-rows-2">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className="bg-gray-500 text-gray-100 p-4 placeholder:text-gray-300 border-gray-700 border-[1px] rounded-lg flex-1 md:col-span-5"
        />
        <Button className="bg-blue-dark gap-2 text-gray-100 h-[54px] md:col-span-1">
          <span className="text-base">Criar</span>
          <PlusCircle width={16} height={16} className="" />
        </Button>
      </div>
    </>
  )
}
