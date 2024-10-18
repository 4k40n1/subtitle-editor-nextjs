import { ReactElement } from 'react'
import TimeInput from '../ui/time-input'

export default function Aside() {
  const placeholder = () => {
    const list: ReactElement[] = []
    for (let i = 0; i <= 50; i++) {
      list.push(<div key={i}>{`Output: ${i}`}</div>)
    }
    return list
  }
  return (
    <aside
      className='
        flex-1 p-8 overflow-y-scroll
      '
    >
      <TimeInput timeStamp={7385011} />
      <div>{placeholder()}</div>
    </aside>
  )
}
