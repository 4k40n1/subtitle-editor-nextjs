'use client'

import ControlledSubtitleInput from './controlled-subtitle-input'
import SubtitleType from '@/core/types/subtitle'
import useSubtitle from '@/data/hooks/useSubtitle'

export default function SubtitleCluster() {
  const { subtitles, add, replace, merge, remove } = useSubtitle()

  const loadCluster = () => {
    return subtitles.map(
      (subtitle: SubtitleType, index: number) => {
        return (
          <ControlledSubtitleInput
            key={index}
            index={index}
            content={subtitle.content}
            startStamp={subtitle.startStamp}
            endStamp={subtitle.endStamp}
            onChange={replace}
            onClose={() => remove(index)}
            onAdd={() => add(index)}
            onMerge={() => merge(index)}
          />
        )
      }
    )
  }

  return (
    <div
      className='flex flex-col'
    >
      {loadCluster()}
    </div>
  )
}
