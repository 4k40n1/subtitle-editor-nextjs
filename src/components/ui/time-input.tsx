'use client'

import Time from '@/core/utils/time'
import { useEffect, useState } from 'react'

interface TimeImputProps {
  timeStamp: number,
  onChange: (stamp: number) => void
}
export default function TimeInput ({ timeStamp, onChange }: TimeImputProps) {

  // const getHour = (stamp: number) => Math.floor(stamp / 3600000)
  // const getMinute = (stamp: number) => Math.floor((stamp % 3600000) / 60000)
  // const getSecond = (stamp: number) => (Math.floor(stamp) % 60000) / 1000

  const [ hour, setHour ] = useState(Time.getHour(timeStamp))
  const [ minute, setMinute ] = useState(Time.getMinute(timeStamp))
  const [ second, setSecond ] = useState(Time.getSecond(timeStamp))
  const [ milisecond, setMilisecond ] = useState(Time.getMilisecond(timeStamp))

  useEffect(() => {
    const stamp = Time.getTimeStamp(hour, minute, second, milisecond)
    const _stamp = stamp <= 0 ? 0 : stamp
    setHour(Time.getHour(_stamp))
    setMinute(Time.getMinute(_stamp))
    setSecond(Time.getSecond(_stamp))
    setMilisecond(Time.getMilisecond(_stamp))
    onChange(_stamp)
  }, [hour, minute, second, milisecond])

  return (
    <div
      className='
        flex w-fit py-0.5 px-1 text-xs
      '
    >
      <input
        className='w-4 text-center no-arrows bg-transparent border-0 outline-none'
        type='number'
        value={hour.toLocaleString('en-US', { minimumIntegerDigits: 2 })}
        min={0}
        max={99}
        onChange={e => setHour(+e.target.value)}
      />
      <span>:</span>
      <input
        className='w-4 text-center no-arrows bg-transparent border-0 outline-none'
        type='number'
        value={minute.toLocaleString('en-US', { minimumIntegerDigits: 2 })}
        onChange={e => setMinute(+e.target.value)}
      />
      <span>:</span>
      <input
        className='w-4 text-center no-arrows bg-transparent border-0 outline-none'
        type='number'
        value={second.toLocaleString('en-US', { minimumIntegerDigits: 2 })}
        onChange={e => setSecond(+e.target.value)}
      />
      <span>.</span>
      <input
        className='w-6 no-arrows bg-transparent border-0 outline-none'
        type='number'
        value={milisecond.toLocaleString('en-US', { minimumIntegerDigits: 3 })}
        onChange={e => setMilisecond(+e.target.value)}
      />
    </div>
  )
}
