'use client'

import { useTask } from '@/contexts/task-context'
import { Checkbox } from './ui/checkbox'
import { Trash2, ClipboardList } from 'lucide-react'

export const TaskWidget = () => {
  const { tasks, changeChecked, deleteTask } = useTask()

  return (
    <>
      {tasks.length ? (
        tasks.map(({ description, id, isDone }) => {
          return (
            <div
              className="flex items-start gap-4 justify-between bg-gray-500 p-4 rounded-[8px] mt-6"
              key={id}
            >
              <Checkbox
                className="border-blue data-[state=checked]:border-purple-dark data-[state=checked]:bg-purple-dark rounded-full border-2 h-[18px] w-[18px] mt-1 "
                id={id}
                checked={isDone}
                onCheckedChange={() => changeChecked(id)}
              />
              <label
                htmlFor={id}
                className="text-start text-gray-100 cursor-pointer"
              >
                {description}
              </label>

              <button
                className="group hover:bg-gray-400 p-1 leading-none rounded"
                onClick={() => deleteTask(id)}
              >
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
    </>
  )
}
