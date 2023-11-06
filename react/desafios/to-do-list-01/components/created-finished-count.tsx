'use client'

import { useTask } from '@/contexts/task-context'
import React from 'react'

const CreatedAndFinishedCount = ({
  finished = false,
}: {
  finished: boolean
}) => {
  const { tasks } = useTask()

  const amountDoneTasks = tasks.filter((task) => task.isDone).length

  return (
    <span className="bg-gray-400 text-gray-200 px-2 py-[2px] rounded-full">
      {finished && tasks.length
        ? `${tasks ? `${amountDoneTasks} de ${tasks.length}` : '0'}`
        : `${tasks.length}`}
    </span>
  )
}

export default CreatedAndFinishedCount
