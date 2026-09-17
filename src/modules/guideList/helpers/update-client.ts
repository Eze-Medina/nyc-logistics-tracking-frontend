type ClientRole = 'REMITENTE' | 'DESTINATARIO';

const roleMap: Record<ClientRole, 'sender' | 'receiver'> = {
  REMITENTE: 'sender',
  DESTINATARIO: 'receiver',
};

interface UpdateClientData {
  id: number;
  name: string;
}

export const updateClient = async (
  code: string,
  role: ClientRole,
  client: UpdateClientData
): Promise<boolean> => {

  const data = {
    code,
    [roleMap[role]]: {
      id: client.id,
      name: client.name,
    },
  };

  const resp = await fetch(`${import.meta.env.VITE_API_URL}/api/guides`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!resp.ok) {
    const error = await resp.text();

    console.error('STATUS:', resp.status);
    console.error('ERROR:', error);

    return false;
  }

  return true;
};