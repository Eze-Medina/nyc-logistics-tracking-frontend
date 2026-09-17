import type { ClientDto } from "../../../interfaces";

export const updateClient = async (client: ClientDto) => {

  // const data = Object.fromEntries(
  //   Object.entries(client).filter(([key, value]) => key === 'id' || value !== '')
  // );

  const response = await fetch('http://localhost:3000/api/clients/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(client),
  });

  if (!response.ok) {
    throw new Error('No se pudo actualizar el cliente');
  }

  return await response.json();
};