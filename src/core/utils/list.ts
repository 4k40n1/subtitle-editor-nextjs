export default class List<T> {
  public add = (index: number, value: T, list: T[]) => {
    const before = list.slice(0, index + 1)
    const after = list.slice(index + 1, list.length)
    return [ ...before, value, ...after ]
  }

  public remove = (index: number, list: T[]) => {
    const before = list.slice(0, index)
    const after = list.slice(index + 1, list.length)
    return [ ...before, ...after ]
  }
}
