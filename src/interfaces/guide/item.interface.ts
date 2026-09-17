export interface Item {
  quantity: number;
  description: string;
  paid: number;
  remaining_amount: number;
  current_account: boolean,
  id?: number
}