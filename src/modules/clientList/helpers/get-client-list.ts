import type { ClientFilter, ClientSummaryDto } from "../../../interfaces";

interface GetClientList {
  filter: ClientFilter;
  page: number;
  offset: number;
}

export const getClientList = async (data: GetClientList): Promise<ClientSummaryDto[]> => {

  const cleanObject = (obj: object): Record<string, unknown> => {
    return Object.fromEntries(
      Object.entries(obj)
        .map(([key, value]) => {

          if (value === "" || value === undefined || value === null) {
            return null;
          }

          if (
            typeof value === "object" &&
            !Array.isArray(value)
          ) {
            const cleaned = cleanObject(value);

            if (Object.keys(cleaned).length === 0) {
              return null;
            }

            return [key, cleaned];
          }

          return [key, value];
        })
        .filter(
          (entry): entry is [string, unknown] =>
            entry !== null
        )
    );
  };

  const cleanFilter = cleanObject(data.filter);

  const client = {
    data: { ...cleanFilter },
    page: data.page,
    offset: data.offset
  };

  const resp = await fetch(
    `${import.meta.env.VITE_API_URL}/api/clients/summary`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(client),
    }
  );

  if (!resp.ok) {
    const error = await resp.text();

    console.error('STATUS:', resp.status);
    console.error('ERROR:', error);

    return [];
  }

  const respuesta = await resp.json();

  return respuesta;
};