'use client'

import { ReactNode, createContext, useCallback, useEffect, useState } from 'react'
import SubtitleType from '@/core/types/subtitle'

export interface SubtitleContextProps {
  subtitles: SubtitleType[],
  add: (index: number, subtitle: SubtitleType) => void,
  replace: (index: number, subtitle: SubtitleType) => void,
  remove: (index: number) => void,
  save: () => void
}

const SubtitleContext = createContext<SubtitleContextProps>({} as SubtitleContextProps)

interface SubtitleProviderProps {
  children: ReactNode
}

export function SubtitleProvider({ children }: SubtitleProviderProps) {
  const [ subtitleList, setSubtitleList ] = useState<SubtitleType[]>([])

  const add = (index: number, subtitle: SubtitleType) => {
    const before = subtitleList.slice(0, index)
    const after = subtitleList.slice(index, subtitleList.length)
    setSubtitleList([ ...before, subtitle, ...after ])
  }

  const replace = (index: number, subtitle: SubtitleType) => {
    setSubtitleList(subtitleList.with(index, subtitle))
  }

  const remove = (index: number) => {
    const before = subtitleList.slice(0, index)
    const after = subtitleList.slice(index, subtitleList.length)
    setSubtitleList([ ...before, ...after ])
  }

  const save = async (): Promise<void> => {
    const subtitles = JSON.stringify(subtitleList)
    localStorage.setItem('subtitles', subtitles)
  }

  const load = useCallback(
    async () => {
      const subtitles = localStorage.getItem('subtitles')
      if (!subtitles) {
        setSubtitleList([{
          startStamp: 0,
          endStamp: 500,
          content: ''
        }])
      } else {
        const _subtitles =  await JSON.parse(subtitles)
        setSubtitleList(_subtitles)
      }
    }, []
  )

  useEffect(() => {
    load()
  }, [load])

  return (
    <SubtitleContext.Provider
      value={{ subtitles: subtitleList, add, replace, remove, save }}
    >
      {children}
    </SubtitleContext.Provider>
  )
}

export default SubtitleContext
