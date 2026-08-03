import type { GuideDto } from "../../../interfaces"

export const formData: GuideDto = {
  code: '000001',
  sender: {
    id_number: 41940600,
    id_type: 'dni',
    name: 'Ezequiel Medina',
    email: 'tec.medinaeze@gmail.com',
    phone: '3425502666',
    address: 'Las heras 7460',
  },
  receiver: {
    id_number: 21416403029,
    id_type: 'cuit',
    name: 'Pochito Lopez',
    email: 'poc.lopez@gmail.com',
    phone: '3425406333',
    address: 'Los granitos 1430',
  },
  origin: {
    province: "Santa Fe",
    city: "Santa Fe"
  },
  destination: {
    province: "Santa Fe",
    city: "Santo Tomé"
  },
  insurance: {
    contracted: false,
    declaredValue: 0,
    insuranceCost: 0
  },
  items: [
    {
      quantity: 10,
      description: 'Item 1',
      paid: 10000,
      remainingAmount: 4500,
      currentAccount: false,
    },
    {
      quantity: 10,
      description: 'Item 2',
      paid: 14000,
      remainingAmount: 5050,
      currentAccount: false,
    },
    {
      quantity: 10,
      description: 'Item 3',
      paid: 3000,
      remainingAmount: 500,
      currentAccount: true,
    }
  ],
  status: 'PENDING'
}