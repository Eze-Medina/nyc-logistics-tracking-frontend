import type { ClientIdType } from "./clientSummaryDto";

export interface ClientFilter {
  id_number: number,
  id_type: ClientIdType | '',
  name: string,
  email: string,
  phone: number
}