import type { GuideDto } from "../../../interfaces"

export const formData: GuideDto = {
  sender: {
    id: 41940600,
    idType: 'dni',
    name: 'Ezequiel Medina',
    email: 'tec.medinaeze@gmail.com',
    phone: '3425502666',
    address: 'Las heras 7460',
  },
  receiver: {
    id: 21416403029,
    idType: 'cuit',
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
  sure: {
    secure: true,
    declaredValue: 50000,
    sureValue: 2500
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
  ]
}
