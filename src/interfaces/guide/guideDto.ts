import type { Item } from "./item.interface";

type IdType = 'dni' | 'cuit' | 'cuil';

export interface GuideDto {
  sender: {
    id: number | '',
    idType: IdType,
    name: string,
    email: string,
    phone: string,
    address: string
  }
  receiver: {
    id: number | '',
    idType: IdType,
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
  sure: {
    secure: boolean,
    declaredValue: number,
    sureValue: number
  }
  items: Item[];
}