// 'use client'

import { ReactNode } from 'react'
// import useSubtitle from '@/data/hooks/useSubtitle'

interface MainProps {
  children?: ReactNode
}

export default function Main({children}: MainProps) {
  // const {converted} = useSubtitle()
  return (
    <main
      className='
        flex flex-col items-center pb-2 border-b-2 border-custom-400
        sm:grow sm:my-4 sm:pb-0 sm:px-8 sm:border-b-0 sm:border-r-2
      '
    >
      <div
        className='
          aspect-video w-full flex justify-center items-center
          sm:border border-dashed border-custom-200
          font-sans text-custom-200
        '
      >
        {children || 'Video Place'}
      </div>
      {/* <textarea className='w-full grow text-wrap' value={converted} onChange={()=>{}} /> */}
    </main>
  )
}
