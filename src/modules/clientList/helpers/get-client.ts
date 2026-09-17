import type { ClientDto } from "../../../interfaces";

export const getClient = async (id: number): Promise<ClientDto> => {

  const resp = await fetch(`${import.meta.env.VITE_API_URL}/api/clients/find`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });

  if (!resp.ok) {
    const error = await resp.text();

    console.error('STATUS:', resp.status);
    console.error('ERROR:', error);

    throw new Error('Error getting client');
  }

  const respuesta = await resp.json();

  return respuesta;
};