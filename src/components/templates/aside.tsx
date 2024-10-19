import { ReactElement } from 'react'
import SubtitleInput from '../ui/subtitle-input'

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
      <SubtitleInput index={1} startStamp={0} endStamp={10000} />
      <div>{placeholder()}</div>
    </aside>
  )
}
