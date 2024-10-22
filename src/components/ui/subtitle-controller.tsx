import { MdAdd, MdClose, MdOutlineVerticalAlignCenter } from 'react-icons/md'

interface SubtitleControllerTopProps {
  onClick: () => void
}

interface SubtitleControllerBottomProps {
  onClickAdd: () => void
  onClickMerge: () => void
}

export function SubtitleControllerTop({onClick}: SubtitleControllerTopProps) {
  return (
    <div
      className='absolute top-0.5 right-0.5 z-10 hidden group-hover:block'
    >
      <button
        className='border border-white hover:border-black rounded-full p-0.5'
        onClick={onClick}
      >
        <MdClose />
      </button>
    </div>
  )
}

export function SubtitleControllerBottom({
  onClickAdd, onClickMerge
}: SubtitleControllerBottomProps) {
  return (
    <div
      className='
        absolute justify-end gap-0.5 p-1 -bottom-7 w-full z-10
        hidden group-hover:flex
      '
    >
      <div
        className='flex flex-row border border-dashed border-black rounded-md bg-white'
      >
        <button
          className='text-black p-0.5 rounded-full'
          onClick={onClickAdd}
        >
          <MdAdd size={24} />
        </button>
        <button
          className='group-last:hidden text-black p-0.5 rounded-full'
          onClick={onClickMerge}
        >
          <MdOutlineVerticalAlignCenter size={24} />
        </button>
      </div>
    </div>
  )
}
