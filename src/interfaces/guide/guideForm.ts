import type { Item } from "./item.interface";

type IdType = 'dni' | 'cuit' | 'cuil';

export interface GuideForm {
  sender: {
    id_number: number,
    id_type: IdType | '',
    name: string,
    email: string,
    phone: string,
  }
  receiver: {
    id_number: number,
    id_type: IdType | '',
    name: string,
    email: string,
    phone: string,
  }
  origin: {
    address: string,
    province: string,
    city: string
  }
  destination: {
    address: string,
    province: string,
    city: string
  }
  insurance: {
    contracted: boolean,
    declared_value: number,
    insurance_cost: number
  }
  items: Item[]
  route_type: string
  note: string
  paid: boolean
}