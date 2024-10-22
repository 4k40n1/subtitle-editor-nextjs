import { TbSquareArrowLeft, TbSquareArrowRight } from 'react-icons/tb'
import TimeInput from './time-input'

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
    <div className='flex flex-row md:flex-col justify-between flex-wrap gap-0.5'>
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
