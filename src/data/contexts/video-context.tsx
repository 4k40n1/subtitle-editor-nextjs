'use client'

import { ReactNode, RefObject, createContext, useRef, useState } from 'react'

export interface VideoContextProps {
  videoSrc: string,
  duration: number,
  currentTime: number,
  videoRef: RefObject<HTMLVideoElement>,
  handleFileChange: (files: FileList | null) => void,
  handleLoadedMetadata: () => void,
  handleTimeUpdate: () => void,
}

const VideoContext = createContext<VideoContextProps>({} as VideoContextProps)

export interface VideoProviderProps {
  children: ReactNode
}

export function VideoProvider({children}: VideoProviderProps) {
  const [ videoSrc, setVideoSrc ] = useState('')
  const [ duration, setDuration ] = useState(0)
  const [ currentTime, setCurrentTime ] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleFileChange = (files: FileList | null) => {
    if (!!files) {
      const file = files[0]
      const src = URL.createObjectURL(file)
      setVideoSrc(src)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current)
      setDuration(videoRef.current.duration)
  }
  
  const handleTimeUpdate = () => {
    if (videoRef.current)
      setCurrentTime(videoRef.current.currentTime)
  }

  return (
    <VideoContext.Provider
      value={{
        videoSrc,
        duration,
        currentTime,
        videoRef,
        handleFileChange,
        handleLoadedMetadata,
        handleTimeUpdate,
      }}
    >
      {children}
    </VideoContext.Provider>
  )
}

export default VideoContext
