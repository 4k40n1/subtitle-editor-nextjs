'use client'

import { SubtitleControllerBottom, SubtitleControllerTop } from './subtitle-controller'
import SubtitleInput from './subtitle-input'
import SubtitleType from '@/core/types/subtitle'
import useSubtitle from '@/data/hooks/useSubtitle'

export default function SubtitleCluster() {
  const { subtitles } = useSubtitle()

  return (
    <div
      className='flex flex-col'
    >
      {subtitles.map(
        (subtitle: SubtitleType, index: number) => {
          return (
            <div
              className='relative group border-b last:border-0 border-custom-100 border-dotted'
              key={index}
            >
              <SubtitleControllerTop onClick={() => alert(`Remove item: ${index}`)} />
              <SubtitleInput
                index={index + 1}
                startStamp={subtitle.startStamp}
                endStamp={subtitle.endStamp}
                content={subtitle.content}
              />
              <SubtitleControllerBottom
                onClickAdd={() => alert(`Add item: ${index}`)}
                onClickMerge={() => alert(`Merge items: ${index}`)}
              />
            </div>
          )
        }
      )}
    </div>
  )
}
