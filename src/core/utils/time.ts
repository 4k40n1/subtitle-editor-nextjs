export default class Time {
  static getHour = (stamp: number) => Math.floor(stamp / 3600000)
  static getMinute = (stamp: number) => Math.floor((stamp % 3600000) / 60000)
  static getSecond = (stamp: number) => Math.floor((stamp) % 60000 / 1000)
  static getMilisecond = (stamp: number) => Math.floor(stamp % 1000)

  static getTimeStamp = (hour: number, minute: number, second: number, milisecond: number) => {
    const _hour = Math.floor(hour) * 3600000
    const _minute = Math.floor(minute) * 60000
    const _seconde = Math.floor(second * 1000)
    const _milisecond = Math.floor(milisecond)
    return _hour + _minute + _seconde + _milisecond
  }

  static format = (stamp: number) => {
    return `${
      this.getHour(stamp).toLocaleString('en-US', { minimumIntegerDigits: 2 })
    }:${
      this.getMinute(stamp).toLocaleString('en-US', { minimumIntegerDigits: 2 })
    }:${
      this.getSecond(stamp).toLocaleString('en-US', { minimumIntegerDigits: 2 })
    }.${
      this.getMilisecond(stamp).toLocaleString('en-US', { minimumIntegerDigits: 3 })
    }`
  }
}
