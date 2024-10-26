import List from './list'
import SubtitleType from '../types/subtitle'

export default class Subtitles {
  static add = (index: number, list: SubtitleType[]) => {
    const limit = (list.length > index + 1) ?
      Math.min(list[index].endStamp + 500, list[index + 1].startStamp - 1) :
      list[index].endStamp + 500
    const _default: SubtitleType = {
      startStamp: list[index].endStamp + 1,
      endStamp: limit,
      content: ''
    }
    if (_default.startStamp < _default.endStamp)
      return new List<SubtitleType>().add(index, _default, list)
    else {
      Error.call('Range overflow.')
      return list
    }
  }

  static replace = (index: number, subtitle: SubtitleType, list: SubtitleType[]) => {
    if (subtitle.startStamp < subtitle.endStamp) {
      const lowLimit = (index > 0) ?
        Math.max(subtitle.startStamp, list[index - 1].endStamp + 1) :
        subtitle.startStamp
      const highLimit = (list.length > index + 1) ?
        Math.min(subtitle.endStamp, list[index + 1].startStamp - 1) :
        subtitle.endStamp
      const _default: SubtitleType = {
        startStamp: lowLimit,
        endStamp: highLimit,
        content: subtitle.content
      }
      return list.with(index, _default)
    } else {
      const _default: SubtitleType = {
        startStamp: list[index].startStamp,
        endStamp: list[index].endStamp,
        content: subtitle.content
      }
      return list.with(index, _default)
    }
  }

  static merge = (index: number, list: SubtitleType[]) => {
    const before = list.slice(0, index)
    const after = list.slice(index + 2, list.length)
    const merged: SubtitleType = {
      startStamp: list[index].startStamp,
      endStamp: list[index + 1].endStamp,
      content: `${list[index].content}\n${list[index + 1].content}`
    }
    return [ ...before, merged, ...after ]
  }

  static remove = (index: number, list: SubtitleType[]) => {
    return new List<SubtitleType>().remove(index, list)
  }
}
