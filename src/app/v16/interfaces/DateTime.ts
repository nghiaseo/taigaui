export interface DateTime {
  time?: {
    hour: number,
    minute: number,
    second?: number
  }
  date?: {
    year: number,
    day: number,
    month: number
  }
}
