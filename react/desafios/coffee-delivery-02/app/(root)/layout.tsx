import { MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1184px] mx-auto min-h-full p-8">
      <header className="flex justify-between items-center mb-[72px]">
        <Link href="/">
          <Image src="logo.svg" alt="" width={85} height={40} />
        </Link>
        <div className="flex gap-3 justify-center items-center">
          <div className="flex justify-center items-center bg-purple-light p-2 gap-1 rounded-md">
            <MapPin className="h-5 w-5 text-purple" fillRule="evenodd" />
            <span className="text-purple-dark">Porto Alegre, RS</span>
          </div>
          <span>cart</span>
        </div>
      </header>
      {children}
    </div>
  )
}

export default layout
