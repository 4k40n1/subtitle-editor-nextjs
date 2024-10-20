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
      className='flex flex-row md:flex-col items-center text-xs'
    >
      <span className='font-sans'>CPS</span>
      <span className='block pr-1 md:hidden'>:</span>
      <span>{handleValue()}</span>
    </div>
  )
}
