import type { GuideForm } from "../../../interfaces/guide/guideForm";

export const formData: GuideForm = {
  sender: {
    id_number: 0,
    id_type: '',
    name: '',
    email: '',
    phone: '',
  },
  receiver: {
    id_number: 0,
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
  items: [],
  route_type: '',
  note: '',
  paid: true,
}