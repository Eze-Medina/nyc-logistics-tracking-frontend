export type GuideStatus =
  | "PENDIENTE"
  | "TRANSITO"
  | "ENTREGADO"
  | "CANCELADO";

export interface GuideSummaryDto {
  code: string
  sender: string
  receiver: string
  origin: string
  destination: string
  status: GuideStatus,
}