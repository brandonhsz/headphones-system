import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'


dayjs.extend(timezone)
dayjs.extend(utc)

export function getTime(timeToConvert: string, dayFormat: string = 'MM-DD-YYYY', timeFormat: string = 'HH:mm:ss') {
  const day = dayjs(timeToConvert).utc().format(dayFormat)
  const time = dayjs(timeToConvert).format(timeFormat)

  return { day, time }
}