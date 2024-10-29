import VideoContext from '../contexts/video-context'
import { useContext } from 'react'

const useVideo = () => useContext(VideoContext)
export default useVideo
