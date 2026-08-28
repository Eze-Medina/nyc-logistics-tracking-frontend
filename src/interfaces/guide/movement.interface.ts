export interface Movement {
  date: string,
  status: string,
  move: string,
  message: string,
  location: {
    city: string,
    province: string,
  }
}