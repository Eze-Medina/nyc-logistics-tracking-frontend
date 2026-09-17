import type { GuideDto } from "../../../interfaces";

export const formDataDto: GuideDto = {
  code: '',
  sender: {
    id_number: '',
    id_type: '',
    name: '',
    email: '',
    phone: '',
  },
  receiver: {
    id_number: '',
    id_type: '',
    name: '',
    email: '',
    phone: '',
  },
  origin: {
    address: '',
    province: '',
    city: '',
  },
  destination: {
    address: '',
    province: '',
    city: '',
  },
  insurance: {
    contracted: false,
    declared_value: 0,
    insurance_cost: 0
  },
  route_type: '',
  items: [],
  movements: [],
  next_movement: {
    status: '',
    move: '',
    message: ''
  },
  note: '',
  paid: false
}