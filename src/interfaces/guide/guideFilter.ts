export interface Filter {
  code: string,
  sender: number,
  receiver: number,
  origin: {
    province: string,
    city: string
  },
  destination: {
    province: string,
    city: string
  },
  status: string
}