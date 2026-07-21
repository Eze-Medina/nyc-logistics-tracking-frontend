import type { Item } from "./item.interface";

export interface CreateGuideDto {
  sender: {
    name: string,
    email: string,
    phone: string,
    address: string
  }
  receiver: {
    name: string,
    email: string,
    phone: string,
    address: string
  }
  origin: {
    province: string,
    city: string
  }
  destination: {
    province: string,
    city: string
  }
  items: Item[];
}