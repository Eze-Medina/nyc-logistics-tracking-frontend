export type ClientIdType =
  | "DNI"
  | "CUIT"
  | "CUIL"

export interface ClientSummaryDto {
  id: number,
  id_number: string,
  id_type: ClientIdType | '',
  name: string,
  email: string,
  phone: string
}