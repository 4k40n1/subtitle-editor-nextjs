interface CPSProps {
  startStamp: number,
  endStamp: number,
  count: number,
}

export default function CPS({ count, endStamp, startStamp }: CPSProps) {

  const handleValue = () => {
    const range = (endStamp - startStamp) / 1000
    if (range <= 0) return '--'
    else return (count / range).toFixed(0)
  }
  return (
    <div
      className='flex flex-col items-center text-xs'
    >
      <span className='font-sans'>CPS</span>
      <span>{handleValue()}</span>
    </div>
  )
}

// 'use client'

// import { useEffect, useState } from 'react'

// interface CPSProps {
//   startStamp: number,
//   endStamp: number,
//   count?: number,
// }

// export default function CPS({ endStamp, startStamp }: CPSProps) {
//   // const range = (endStamp - startStamp) / 1000
//   const [ value, setValue ] = useState(0)

//   useEffect(() => {
//     setValue((endStamp - startStamp) / 1000)
//   }, [endStamp, startStamp])
  
//   return (
//     <div>
//       <span>{`CPS: ${value}`}</span>
//     </div>
//   )
// }
