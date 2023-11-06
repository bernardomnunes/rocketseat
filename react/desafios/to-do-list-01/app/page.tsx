import CreatedAndFinishedCount from '@/components/created-finished-count'
import FormTask from '@/components/form-task'
import { TaskWidget } from '@/components/task-widget'

import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center bg-gray-700 h-[200px]">
        <Image src="logo.svg" width={126} height={48} alt="Logo" />
      </header>

      <div className="max-w-[736px] mx-auto px-4">
        <FormTask />
        <div className="flex flex-col mt-16">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <span className="text-blue text-base font-bold">
                Tarefas criadas
              </span>
              <CreatedAndFinishedCount finished={false} />
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-purple text-base font-bold">
                Concluídas
              </span>
              <span className="bg-gray-400 text-gray-200 px-2 py-[2px] rounded-full">
                <CreatedAndFinishedCount finished={true} />
              </span>
            </div>
          </div>

          <TaskWidget />
        </div>
      </div>
    </>
  )
}
