import { BsDeviceHdd, BsHddNetwork } from 'react-icons/bs'

interface VideoLoaderInputProps {
  handleFileChange: (files: FileList | null) => void
}

export default function VideoLoaderInput({handleFileChange}: VideoLoaderInputProps) {
  return (
    <div
      className='flex gap-4 items-stretch'
    >
      <div
        className='
          flex flex-col justify-between items-center text-center text-balance
          w-32 p-4 px-6 gap-4 border border-custom-200 rounded relative
        '
      >
        <span>Open video file from local.</span>
        <BsDeviceHdd size={24} />
        <div className='absolute h-full w-full top-0'>
          <input
            className='
              relative h-full w-full file:cursor-pointer
              file:absolute file:w-full file:h-full
              file:bg-transparent file:border-none file:outline-none
              text-transparent file:text-transparent z-10
            '
            type='file'
            accept='video/*'
            onChange={e=>handleFileChange(e.currentTarget.files)}
          />
        </div>
      </div>
      <button
        className='
        flex flex-col justify-between items-center text-center text-balance
        w-32 p-4 px-6 gap-4 border border-custom-200 rounded
      '
      >
        <span>Load video from web.</span>
        <BsHddNetwork size={24} />
      </button>
    </div>
  )
}
