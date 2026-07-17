export interface Form {
  senderName: string;
  senderAddress: string;
  senderNumber: number | ''; //para permitir la generacion de campos vacios por defecto
  senderDirection: string;
  provinceOrigin: string;
  cityOrigin: string;

  receiverName: string;
  receiverAddress: string;
  receiverNumber: number | ''; //para permitir la generacion de campos vacios por defecto
  receiverDirection: string;
  provinceDestination: string;
  cityDestination: string;
}