interface CPLProps {
  countList: number[]
}

export default function CPL({ countList }: CPLProps) {
  return (
    <div
      className='flex flex-col items-center text-xs'
    >
      <span className='font-sans'>CPL</span>
      <div className='flex flex-col gap-1 grow justify-center items-center'>
        {countList.map((count: number, index: number) => {
          return <div key={index}>{count}</div>
        })}
      </div>
    </div>
  )
}
