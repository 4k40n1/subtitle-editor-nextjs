'use client'

import VideoLoaderInput from './video-loader-input'
import useSubtitle from '@/data/hooks/useSubtitle'
import useVideo from '@/data/hooks/useVideo'

interface VideoPlayerProps {
  temp?: string
}

export default function VideoPlayer({}: VideoPlayerProps) {
  const {videoSrc, videoRef, handleFileChange, handleLoadedMetadata, handleTimeUpdate} = useVideo()
  const {generateVTTFile} = useSubtitle()

  return (
    <div
      className='flex justify-center items-center h-full'
    >
      {
        !videoSrc ? (
          <VideoLoaderInput handleFileChange={handleFileChange} />
        ) : (
          <video
            className='aspect-video h-full w-full m-0 z-10'
            ref={videoRef}
            controls
            // width={100}
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
          >
            <source src={videoSrc} type='video/mp4' />
            <track
              kind='subtitles'
              src={generateVTTFile()}
              srcLang='pt'
              label='Legendas'
              default
            />
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Your browser doesn't support video element.
          </video>
        )
      }
    </div>
  )
}
