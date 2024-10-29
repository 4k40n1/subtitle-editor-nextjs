// 'use client'

import { ReactNode } from 'react'
import VideoPlayer from '../ui/video-player'
// import useSubtitle from '@/data/hooks/useSubtitle'

interface MainProps {
  children?: ReactNode
}

export default function Main({children}: MainProps) {
  // const {converted} = useSubtitle()
  return (
    <main
      className='
        flex flex-col sm:max-w-[50vw] items-center pb-2 border-b-2 border-custom-400
        sm:grow sm:my-4 sm:pb-0 sm:px-8 sm:border-b-0 sm:border-r-2
      '
    >
      <div
        className='
          aspect-video w-full flex justify-center items-center
          sm:outline-1 sm:outline-dashed outline-custom-200 -outline-offset-1
          font-sans text-custom-200
        '
      >
        <VideoPlayer />
      </div>
      {/* <textarea className='w-full grow text-wrap' value={converted} onChange={()=>{}} /> */}
      {children}
    </main>
  )
}
