import type { GuideDto } from "../../interfaces";
import type { Item } from "../../interfaces/guide/item.interface";

type IdType = 'dni' | 'cuit' | 'cuil';

export class DataGuide implements GuideDto {

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

  constructor(data: GuideDto) {
    Object.assign(this, data);
  }

}