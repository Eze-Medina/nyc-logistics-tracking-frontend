import type { CreateGuideDto } from "../../interfaces/createGuideDto";
import type { Item } from "../../interfaces/item.interface";

type IdType = 'dni' | 'cuit' | 'cuil';

export class DataGuide implements CreateGuideDto {

  sender!: {
    id: number | '',
    idType: IdType,
    name: string,
    email: string,
    phone: string,
    address: string
  }
  receiver!: {
    id: number | '',
    idType: IdType,
    name: string,
    email: string,
    phone: string,
    address: string
  }
  origin!: {
    province: string,
    city: string
  }
  destination!: {
    province: string,
    city: string
  }
  sure!: {
    secure: false,
    declaredValue: number,
    sureValue: number
  }
  items!: Item[]

  constructor(data: CreateGuideDto) {
    Object.assign(this, data);
  }

}