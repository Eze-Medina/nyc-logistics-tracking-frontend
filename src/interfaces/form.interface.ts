export interface Form {
  sender: {
    id: number | '',
    idType: string
    name: string,
    email: string,
    phone: string,
    address: string,
  }
  receiver: {
    id: number | '',
    idType: string,
    name: string,
    email: string,
    phone: string,
    address: string,
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
  note: string
  guia: {
    numero: number
  }
}