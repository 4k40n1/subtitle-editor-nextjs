'use client'

import SubtitleInput from './subtitle-input'
import SubtitleType from '@/core/types/subtitle'
import useSubtitle from '@/data/hooks/useSubtitle'

export default function SubtitleCluster() {
  const { subtitles } = useSubtitle()

  return (
    <div>
      {subtitles.map(
        (subtitle: SubtitleType, index: number) => {
          return (
            <div key={index}>
              <SubtitleInput
                index={index}
                startStamp={subtitle.startStamp}
                endStamp={subtitle.endStamp}
                content={subtitle.content}
              />
            </div>
          )
        }
      )}
    </div>
  )
}
