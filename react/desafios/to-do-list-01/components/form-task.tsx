'use client'

import { PlusCircle } from 'lucide-react'
import { Button } from './ui/button'
import { useTask } from '@/contexts/task-context'
import React from 'react'

const FormTask = () => {
  const { addTask, taskInput, onChangeTaskInput } = useTask()

  function handleAddTask() {
    addTask()
  }

  function handleKeypress(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === 'Enter') {
      addTask()
    }
  }

  return (
    <div className="grid gap-2 mt-[-27px] md:grid-cols-6 max-md:grid-rows-2">
      <input
        type="text"
        value={taskInput}
        onChange={(e) => onChangeTaskInput(e.target.value)}
        onKeyDown={handleKeypress}
        placeholder="Adicione uma nova tarefa"
        className="bg-gray-500 text-gray-100 p-4 placeholder:text-gray-300 border-gray-700 border-[1px] rounded-lg flex-1 md:col-span-5 focus:border-purple outline-none"
      />
      <Button
        className="bg-blue-dark gap-2 text-gray-100 h-[54px] md:col-span-1 focus:border-purple outline-none"
        type="submit"
        onClick={handleAddTask}
      >
        <span className="text-base">Criar</span>
        <PlusCircle width={16} height={16} />
      </Button>
    </div>
  )
}

export default FormTask
