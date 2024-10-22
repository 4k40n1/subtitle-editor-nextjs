import SubtitleContext from '../contexts/subtitle-context'
import { useContext } from 'react'

const useSubtitle = () => useContext(SubtitleContext)
export default useSubtitle
