import { ReactNode } from 'react'
import { SubtitleProvider } from './subtitle-context'
import { VideoProvider } from './video-context'

interface ContextNestProps {
  children: ReactNode
}

export default function ProviderNest({children}: ContextNestProps) {
  return (
    <VideoProvider>
      <SubtitleProvider>
        {children}
      </SubtitleProvider>
    </VideoProvider>
  )
}
