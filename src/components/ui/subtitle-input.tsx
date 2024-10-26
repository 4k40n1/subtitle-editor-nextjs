import { BiSolidTag } from 'react-icons/bi'
import CPL from './cpl'
import CPS from './cps'
import RangeInput from './range-input'
import SubtitleType from '@/core/types/subtitle'

interface SubtitleInputProps {
  index: number,
  startStamp: number,
  endStamp: number,
  content: string,
  onChange: (index: number, subtitle: SubtitleType) => void,
}

export default function SubtitleInput({
  index, startStamp, endStamp, content, onChange
}: SubtitleInputProps) {
  const handleCount = (text: string) => text.replaceAll('\n', '')
  const handleContent = (value: string) => value.split('\n').map((line: string) => line.length)

  const getSubtitle = (): SubtitleType => {
    return { startStamp: startStamp, endStamp: endStamp, content: content }
  }

  const handleContentChange = (value: string) => {
    const subtitle = getSubtitle()
    subtitle.content = value
    onChange(index, subtitle)
  }

  const handleStartStampChange = (value: number) => {
    const subtitle = getSubtitle()
    subtitle.startStamp = value
    onChange(index, subtitle)
  }

  const handleEndStampChange = (value: number) => {
    const subtitle = getSubtitle()
    subtitle.endStamp = value
    onChange(index, subtitle)
  }

  return (
    <div
      className='
        p-2 flex flex-col md:flex-row items-stretch gap-2 bg-white
        selection:bg-black selection:text-white caret-black
      '
    >
      <div
        className='
          flex flex-col gap-0.5
        '
      >
        <div className='flex justify-between items-stretch gap-0.5'>
          <div className='flex flex-row items-center gap-1 mb-auto'>
            <BiSolidTag />
            <span className='font-sans font-semibold text-sm'>
              {(index + 1).toLocaleString('en-US', { minimumIntegerDigits: 3 })}
            </span>
          </div>
          <CPS
            startStamp={startStamp}
            endStamp={endStamp}
            count={handleCount(content).length}
          />
        </div>

        <RangeInput
          startStamp={startStamp}
          endStamp={endStamp}
          onChangeStart={handleStartStampChange}
          onChangeEnd={handleEndStampChange}
        />
      </div>
      <div className='flex flex-row grow overflow-hidden'>
        <CPL countList={handleContent(content)} />
        <div
          className='flex flex-col grow'
        >
          <span className='text-center text-xs font-sans'>Subtitle:</span>
          <textarea
            className='
              h-full w-full bg-transparent border-none outline-none
              content-center text-center text-sm font-serif
              resize-none rounded-sm hover:bg-black/15 overflow-y-hidden
              focus:bg-transparent
            '
            value={content}
            rows={3}
            placeholder='Insert some content.'
            onChange={e => handleContentChange(e.currentTarget.value)}
          />
        </div>
      </div>
    </div>
  )
}
