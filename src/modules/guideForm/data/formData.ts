import type { GuideDto } from "../../../interfaces"

export const formData: GuideDto = {
  code: '',
  sender: {
    id_number: '',
    id_type: '',
    name: '',
    email: '',
    phone: '',
    address: '',
  },
  receiver: {
    id_number: '',
    id_type: '',
    name: '',
    email: '',
    phone: '',
    address: '',
  },
  origin: {
    province: '',
    city: '',
  },
  destination: {
    province: '',
    city: '',
  },
  insurance: {
    contracted: false,
    declaredValue: 0,
    insuranceCost: 0
  },
  items: [],
  movements: [],
  next_movement: {
    date: '',
    status: '',
    move: '',
    message: '',
    location: {
      city: '',
      province: '',
    }
  }
}