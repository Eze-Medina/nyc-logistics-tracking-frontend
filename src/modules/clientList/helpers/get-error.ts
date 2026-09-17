import type { ClientDto } from "../../../interfaces";

export const getError = (client: ClientDto): string => {

  if (!client.name.trim()) {
    return 'El nombre es obligatorio';
  }

  if (!client.id_type) {
    return 'Debe seleccionar un tipo de identificación';
  }

  if (!client.id_number) {
    return 'El número de identificación es obligatorio';
  }

  return '';
};