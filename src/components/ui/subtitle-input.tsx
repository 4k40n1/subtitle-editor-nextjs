'use client'

import { BiSolidTag } from 'react-icons/bi'
import RangeInput from './range-input'
import CPS from './cps'
import { useState } from 'react'
import CPL from './cpl'

interface SubtitleInputProps {
  index: number,
  startStamp: number,
  endStamp: number,
  content?: string,
}

export default function SubtitleInput({
  index, startStamp, endStamp, content
}: SubtitleInputProps) {

  const [ _startStamp, setStartStamp ] = useState(startStamp)
  const [ _endStamp, setEndStamp ] = useState(endStamp)
  const [ _content, setContent ] = useState(content ?? '')

  const handleChangeStart = (stamp: number) => setStartStamp(stamp)
  const handleChangeEnd = (stamp: number) => setEndStamp(stamp)
  const handleCount = (text: string) => text.replaceAll('\n', '')
  const handleContent = (value: string) => value.split('\n').map((line: string) => line.length)

  return (
    <div
      className='
        p-2 border border-black flex items-stretch gap-2 bg-white
        selection:bg-black selection:text-white caret-black
      '
    >
      <div
        className='
          flex flex-col gap-0.5
        '
      >
        <div className='flex justify-between items-stretch gap-0.5'>
          <div className='flex flex-row items-center gap-1'>
            <BiSolidTag />
            <span className='font-sans font-semibold text-sm'>
              {index.toLocaleString('en-US', { minimumIntegerDigits: 3 })}
            </span>
          </div>
          <CPS
            startStamp={_startStamp}
            endStamp={_endStamp}
            count={handleCount(_content).length}
          />
        </div>

        <RangeInput
          startStamp={_startStamp}
          endStamp={_endStamp}
          onChangeStart={handleChangeStart}
          onChangeEnd={handleChangeEnd}
        />
      </div>
      <CPL countList={handleContent(_content)} />
      <div
        className='flex flex-col grow'
      >
        <span className='text-center text-xs font-sans'>Subtitle:</span>
        <textarea
          className='
            grow h-full bg-transparent border-0 outline-none
            content-center text-center text-sm font-serif
            resize-none rounded-sm hover:bg-black/15
          '
          value={_content}
          rows={3}
          placeholder='Insert some content.'
          onChange={e => setContent(e.currentTarget.value)}
        />
      </div>
    </div>
  )
}
