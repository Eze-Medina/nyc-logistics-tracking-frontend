import type { ClientIdType } from "./clientSummaryDto";

export interface ClientDto {
  id: string,
  id_number: string,
  id_type: ClientIdType | '',
  name: string,
  email: string,
  phone: string
}