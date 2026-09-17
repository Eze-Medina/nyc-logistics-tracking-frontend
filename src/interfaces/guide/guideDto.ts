import type { Item } from "./item.interface";
import type { Movement } from "./movement.interface";

type IdType = 'dni' | 'cuit' | 'cuil';

export interface GuideDto {
  code: string
  sender: {
    id_number: number | '',
    id_type: IdType | '',
    name: string,
    email: string,
    phone: string,
  }
  receiver: {
    id_number: number | '',
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
  route_type: string,
  items: Item[];
  movements: Movement[];
  next_movement: {
    status: string,
    move: string,
    message: string
  }
  note: string
  paid: boolean
}