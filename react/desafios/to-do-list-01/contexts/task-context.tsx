'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface TasksType {
  id: string
  description: string
  isDone: boolean
}

interface TaskContextType {
  tasks: TasksType[]
  taskInput: string
  addTask: () => void
  onChangeTaskInput: (string: string) => void
  changeChecked: (id: string) => void
  deleteTask: (id: string) => void
}

const TaskContext = createContext({} as TaskContextType)

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<TasksType[]>([])
  const [taskInput, setTaskInput] = useState('')

  function addTask() {
    setTasks((state) => [
      ...state,
      { id: uuidv4(), description: taskInput, isDone: false },
    ])

    setTaskInput('')
  }

  function onChangeTaskInput(string: string) {
    setTaskInput(string)
  }

  function changeChecked(id: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone }
      }
      return task
    })

    setTasks(newTasks)
  }

  function deleteTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  return (
    <TaskContext.Provider
      value={{
        addTask,
        tasks,
        onChangeTaskInput,
        changeChecked,
        deleteTask,
        taskInput,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => useContext(TaskContext)
