import { SubtitleControllerBottom, SubtitleControllerTop } from './subtitle-controller'
import SubtitleInput from './subtitle-input'
import SubtitleType from '@/core/types/subtitle'

interface ControlledSubtitleInputProps {
  index: number,
  startStamp: number,
  endStamp: number,
  content: string,
  onChange: (index: number, subtitle: SubtitleType) => void,
  onClose: () => void,
  onAdd: () => void,
  onMerge: () => void,
}

export default function ControlledSubtitleInput({
  index, startStamp, endStamp, content, onChange, onClose, onAdd, onMerge
}: ControlledSubtitleInputProps) {
  return (
    <div
      className='relative group border-b last:border-0 border-custom-100 border-dotted'
    >
      <SubtitleControllerTop onClick={onClose} />
      <SubtitleInput
        index={index}
        startStamp={startStamp}
        endStamp={endStamp}
        content={content}
        onChange={onChange}
      />
      <SubtitleControllerBottom
        onClickAdd={onAdd}
        onClickMerge={onMerge}
      />
    </div>
  )
}
