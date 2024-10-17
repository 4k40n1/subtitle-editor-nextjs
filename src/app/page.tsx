import Aside from '@/components/templates/aside'
import Header from '@/components/templates/header'
import Main from '@/components/templates/main'

export default function Home() {
  return (
    <div
      className='flex flex-col h-screen w-full select-none bg-custom-500'
    >
      <div className='fixed w-full'>
        <Header />
      </div>
      <div
        className='flex flex-col sm:flex-row h-full pt-10 justify-stretch w-full'
      >
        <Main />
        <Aside />
      </div>
    </div>
  )
}
