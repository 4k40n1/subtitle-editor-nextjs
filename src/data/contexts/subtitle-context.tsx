'use client'

import { ReactNode, createContext, useCallback, useEffect, useState } from 'react'
import SubtitleType from '@/core/types/subtitle'
import Subtitles from '@/core/utils/subtitles'
import Time from '@/core/utils/time'

export interface SubtitleContextProps {
  subtitles: SubtitleType[],
  add: (index: number) => void,
  replace: (index: number, subtitle: SubtitleType) => void,
  merge: (index: number) => void,
  remove: (index: number) => void,
  save: () => void,
  converted: string,
}

const SubtitleContext = createContext<SubtitleContextProps>({} as SubtitleContextProps)

interface SubtitleProviderProps {
  children: ReactNode
}

export function SubtitleProvider({ children }: SubtitleProviderProps) {
  const [ subtitleList, setSubtitleList ] = useState<SubtitleType[]>([])
  const [ converted, setConverted ] = useState<string>('')

  const add = (index: number) => {
    const list = Subtitles.add(index, subtitleList)
    setSubtitleList(list)
    converter(list)
  }

  const replace = (index: number, subtitle: SubtitleType) => {
    const newList = Subtitles.replace(index, subtitle, subtitleList)
    setSubtitleList(newList)
    converter(newList)
  }

  const merge = (index: number) => {
    const list = Subtitles.merge(index, subtitleList)
    setSubtitleList(list)
    converter(list)
  }

  const remove = (index: number) => {
    const list = Subtitles.remove(index, subtitleList)
    setSubtitleList(list)
    converter(list)
  }

  const save = async (): Promise<void> => {
    const subtitles = JSON.stringify(subtitleList)
    localStorage.setItem('subtitles', subtitles)
  }

  const converter = (subtitles: SubtitleType[]) => {
    const converted = subtitles.map((value:SubtitleType, index: number) => {
      return `${
        index + 1
      }\n${
        Time.format(value.startStamp)
      } --> ${
        Time.format(value.endStamp)
      }\n${
        value.content.length > 0 ? value.content
          .replaceAll('\n\n', '\n---\n')
          .replaceAll('\n\n', '\n---\n') : '---'
      }`
    }).reduce((previous:string, current:string)=>{
      return `${previous}\n\n${current}`
    }, 'begin\n')
    setConverted(converted)
  }

  const load = useCallback(
    async () => {
      const subtitles = localStorage.getItem('subtitles')
      const _default = '[{"startStamp":0,"endStamp":500,"content":""}]'
      const _subtitles:SubtitleType[] = await JSON.parse(subtitles ?? _default)
      setSubtitleList(_subtitles)
      
      converter(_subtitles)
    }, []
  )

  useEffect(() => {
    load()
  }, [load])

  return (
    <SubtitleContext.Provider
      value={{ 
        get subtitles() {return subtitleList},
        add,
        replace,
        merge,
        remove,
        save,
        converted
      }}
    >
      {children}
    </SubtitleContext.Provider>
  )
}

export default SubtitleContext
