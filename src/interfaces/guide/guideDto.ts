import type { Item } from "./item.interface";

type IdType = 'dni' | 'cuit' | 'cuil';

export interface GuideDto {
  code: string
  sender: {
    id_number: number | '',
    id_type: IdType | '',
    name: string,
    email: string,
    phone: string,
    address: string
  }
  receiver: {
    id_number: number | '',
    id_type: IdType | '',
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
  insurance: {
    contracted: boolean,
    declaredValue: number,
    insuranceCost: number
  }
  items: Item[];
  status: string,
  note: string
}