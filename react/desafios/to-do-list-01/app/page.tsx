'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { PlusCircle, ClipboardList, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface TasksType {
  id: string
  description: string
  isDone: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<TasksType[]>([
    { description: 'jfdlksajfldas', id: 'fldkjsafjdsal', isDone: false },
  ])

  function handleChangeChecked(id: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone }
      }
      return task
    })

    setTasks(newTasks)
  }

  return (
    <>
      <header className="flex justify-center items-center bg-gray-700 h-[200px]">
        <Image src="logo.svg" width={126} height={48} alt="Logo" />
      </header>

      <div className="max-w-[736px] mx-auto px-4">
        <div className="grid gap-2 mt-[-27px] md:grid-cols-6 max-md:grid-rows-2">
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            className="bg-gray-500 text-gray-100 p-4 placeholder:text-gray-300 border-gray-700 border-[1px] rounded-lg flex-1 md:col-span-5 focus:border-purple outline-none"
          />
          <Button className="bg-blue-dark gap-2 text-gray-100 h-[54px] md:col-span-1 focus:border-purple outline-none">
            <span className="text-base">Criar</span>
            <PlusCircle width={16} height={16} className="" />
          </Button>
        </div>

        <div className="flex flex-col mt-16">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <span className="text-blue text-base font-bold">
                Tarefas criadas
              </span>
              <span className="bg-gray-400 text-gray-200 px-2 py-[2px] rounded-full">
                0
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-purple text-base font-bold">
                Concluídas
              </span>
              <span className="bg-gray-400 text-gray-200 px-2 py-[2px] rounded-full">
                0
              </span>
            </div>
          </div>

          {tasks.length ? (
            tasks.map(({ description, id, isDone }) => {
              return (
                <div
                  className="flex items-start gap-4 justify-between bg-gray-500 p-4 rounded-[8px] mt-6"
                  key={id}
                >
                  <Checkbox
                    className="border-blue data-[state=checked]:border-purple-dark data-[state=checked]:bg-purple-dark rounded-full border-2 h-[18px] w-[18px] mt-1 "
                    id="taskCheckbox"
                    checked={isDone}
                    onClick={() => handleChangeChecked(id)}
                  />
                  <label
                    htmlFor="taskCheckbox"
                    className="text-start text-gray-100 cursor-pointer"
                  >
                    {description}
                  </label>
                  <button className="group hover:bg-gray-400 p-1 leading-none rounded">
                    <Trash2
                      className="text-gray-300 min-w-[18px] min-h-[18px] group-hover:text-danger"
                      width={18}
                      height={18}
                    />
                  </button>
                </div>
              )
            })
          ) : (
            <>
              <div className="h-px w-full bg-gray-400 mt-6" />

              <div className="flex flex-col items-center text-gray-300 text-center">
                <ClipboardList width={56} height={56} className=" mt-16 mb-4" />

                <label>Você ainda não tem tarefas cadastradas</label>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}