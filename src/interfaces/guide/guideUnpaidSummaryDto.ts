import type { Item } from "./item.interface"

export interface GuideUnpaidSummaryDto {
  code: string,
  date: string,
  insurance: boolean,
  declared_value: number,
  insurance_cost: number,
  items: Item[]
}