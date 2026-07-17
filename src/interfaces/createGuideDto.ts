import type { Item } from "./item.interface";

export interface CreateGuideDto {
  senderName: string;
  senderAddress: string;
  senderNumber: number;
  senderDirection: string;
  receiverName: string;
  receiverAddress: string;
  receiverNumber: number;
  receiverDirection: string;
  provinceOrigin: string;
  cityOrigin: string;
  provinceDestination: string;
  cityDestination: string;
  items: Item[];
}