import type { CreateGuideDto } from "../../interfaces/createGuideDto";
import type { Item } from "../../interfaces/item.interface";

export class DataGuide implements CreateGuideDto {

  senderName!: string;
  senderAddress!: string;
  senderNumber!: number;
  senderDirection!: string;
  receiverName!: string;
  receiverAddress!: string;
  receiverNumber!: number;
  receiverDirection!: string;
  provinceOrigin!: string;
  cityOrigin!: string;
  provinceDestination!: string;
  cityDestination!: string;
  items!: Item[];

  constructor(data: CreateGuideDto) {
    Object.assign(this, data);
  }

}