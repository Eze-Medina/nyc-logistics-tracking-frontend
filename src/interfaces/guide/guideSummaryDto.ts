export type GuideStatus =
  | "PENDIENTE_RETIRO"
  | "PENDIENTE_RECEPCION"
  | "EN_CAMINO_RETIRO"
  | "EN_POSESION"
  | "EN_TRANSITO"
  | "ENTREGADO"
  | "RETIRO_FALLIDO"
  | "ENTREGA_FALLIDA"
  | "INCIDENCIA"
  | "CANCELADO";

export interface GuideSummaryDto {
  code: string
  sender: string
  receiver: string
  origin: {
    province: string
    city: string
  }
  destination: {
    province: string
    city: string
  }
  status: GuideStatus
}