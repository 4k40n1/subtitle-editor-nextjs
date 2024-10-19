import TimeInput from './time-input'
import { TbSquareArrowLeft, TbSquareArrowRight } from 'react-icons/tb'

interface RangeInputProps {
  startStamp: number,
  endStamp: number,
  onChangeStart: (stamp: number) => void,
  onChangeEnd: (stamp: number) => void
}

export default function RangeInput({
  startStamp, endStamp, onChangeStart, onChangeEnd
}: RangeInputProps) {
  return (
    <div className='flex flex-col gap-0.5'>
      <div
        className='flex items-center rounded-sm hover:bg-black/15'
      >
        <TbSquareArrowRight />
        <TimeInput timeStamp={startStamp} onChange={onChangeStart}/>
      </div>
      <div
        className='flex items-center rounded-sm hover:bg-black/15'
      >
        <TbSquareArrowLeft />
        <TimeInput timeStamp={endStamp} onChange={onChangeEnd}/>
      </div>
    </div>
  )
}
