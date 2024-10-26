// 'use client'

// import { useEffect, useState } from 'react'
import Time from '@/core/utils/time'

interface TimeImputProps {
  timeStamp: number,
  onChange: (stamp: number) => void
}
export default function TimeInput ({ timeStamp, onChange }: TimeImputProps) {
  const hour = () => Time.getHour(timeStamp)
  const minute = () => Time.getMinute(timeStamp)
  const second = () => Time.getSecond(timeStamp)
  const milisecond = () => Time.getMilisecond(timeStamp)

  const setStamp = (hour: number, minute: number, second: number, milisecond: number) => {
    const stamp = Time.getTimeStamp(hour, minute, second, milisecond)
    const _stamp = stamp <= 0 ? 0 : stamp
    onChange(_stamp)
  }

  const setHour = (value: number) => setStamp(value, minute(), second(), milisecond())
  const setMinute = (value: number) => setStamp(hour(), value, second(), milisecond())
  const setSecond = (value: number) => setStamp(hour(), minute(), value, milisecond())
  const setMilisecond = (value: number) => setStamp(hour(), minute(), second(), value)

  return (
    <div
      className='
        flex w-fit py-0.5 px-1 text-xs
      '
    >
      <input
        className='w-4 text-center no-arrows bg-transparent border-0 outline-none'
        type='number'
        value={hour().toLocaleString('en-US', { minimumIntegerDigits: 2 })}
        min={0}
        max={99}
        onChange={e => setHour(+e.target.value)}
      />
      <span>:</span>
      <input
        className='w-4 text-center no-arrows bg-transparent border-0 outline-none'
        type='number'
        value={minute().toLocaleString('en-US', { minimumIntegerDigits: 2 })}
        onChange={e => setMinute(+e.target.value)}
      />
      <span>:</span>
      <input
        className='w-4 text-center no-arrows bg-transparent border-0 outline-none'
        type='number'
        value={second().toLocaleString('en-US', { minimumIntegerDigits: 2 })}
        onChange={e => setSecond(+e.target.value)}
      />
      <span>.</span>
      <input
        className='w-6 no-arrows bg-transparent border-0 outline-none'
        type='number'
        value={milisecond().toLocaleString('en-US', { minimumIntegerDigits: 3 })}
        onChange={e => setMilisecond(+e.target.value)}
      />
    </div>
  )
}
