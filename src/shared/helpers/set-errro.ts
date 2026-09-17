import type { GuideForm } from "../../interfaces";

interface ErrorMessage {
  sender: string;
  receiver: string;
  items: string;
  route_type: string;
}

export const setError = (formState: GuideForm): ErrorMessage => {

  const errors: ErrorMessage = {
    sender: '',
    receiver: '',
    items: '',
    route_type: '',
  };

  if (formState.sender.name === '') {
    errors.sender = 'El nombre del remitente es obligatorio.';
    return errors;
  }

  if (formState.origin.province === '') {
    errors.sender = 'La provincia de origen es obligatoria.';
    return errors;
  }

  if (formState.origin.city === '') {
    errors.sender = 'La ciudad de origen es obligatoria.';
    return errors;
  }

  if (formState.origin.address === '') {
    errors.sender = 'La dirección de origen es obligatoria.';
    return errors;
  }

  if (formState.sender.id_type === '') {
    errors.sender = 'El tipo de documento del remitente es obligatorio.';
    return errors;
  }

  if (formState.sender.id_number === 0) {
    errors.sender = 'El número de documento del remitente es obligatorio.';
    return errors;
  }


  if (formState.receiver.name === '') {
    errors.receiver = 'El nombre del destinatario es obligatorio.';
    return errors;
  }

  if (formState.destination.province === '') {
    errors.receiver = 'La provincia de destino es obligatoria.';
    return errors;
  }

  if (formState.destination.city === '') {
    errors.receiver = 'La ciudad de destino es obligatoria.';
    return errors;
  }

  if (formState.destination.address === '') {
    errors.receiver = 'La dirección de destino es obligatoria.';
    return errors;
  }

  if (formState.receiver.id_type === '') {
    errors.receiver = 'El tipo de documento del destinatario es obligatorio.';
    return errors;
  }

  if (formState.receiver.id_number === 0) {
    errors.receiver = 'El número de documento del destinatario es obligatorio.';
    return errors;
  }


  if (formState.items.length === 0) {
    errors.items = 'Debe agregar al menos un artículo.';
    return errors;
  }

  if (formState.route_type === '') {
    errors.route_type = 'Debe seleccionar un tipo de servicio.';
    return errors;
  }

  return errors;
};