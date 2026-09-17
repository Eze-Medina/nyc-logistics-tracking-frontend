export interface Movement {
  status: string,
  sequence: number,
  city?: {
    city: string,
    province: string,
  }
  move: string,
  message: string,
  date: string,
}