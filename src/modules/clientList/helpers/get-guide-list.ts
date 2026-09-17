import type { Filter, GuideSummaryDto } from "../../../interfaces";

interface GetGuideList {
  filter: Filter,
  page: number,
  offset: number
}

export const getGuideList = async (data: GetGuideList): Promise<GuideSummaryDto[]> => { // getGuideList -> getSummaryGuideList

  const cleanObject = (obj: object): Record<string, unknown> => {
    return Object.fromEntries(
      Object.entries(obj)
        .map(([key, value]) => {
          if (value === "" || value === undefined || value === null || value === 0) {
            return null;
          }

          if (typeof value === "object" && !Array.isArray(value)) {
            const cleaned = cleanObject(value);

            if (Object.keys(cleaned).length === 0) {
              return null;
            }

            return [key, cleaned];
          }

          if (key === "sender" || key === "receiver") {
            return [key, Number(value)];
          }

          return [key, value];
        })
        .filter(
          (entry): entry is [string, unknown] => entry !== null
        )
    );
  };

  const cleanFilter = cleanObject(data.filter);

  const guide = {
    data: { ...cleanFilter },
    page: data.page,
    offset: data.offset
  }

  const resp = await fetch(`${import.meta.env.VITE_API_URL}/api/guides/summary`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(guide),
  });

  if (!resp.ok) {
    const error = await resp.text();

    console.error('STATUS:', resp.status);
    console.error('ERROR:', error);

    return [];
  }

  const respuesta = await resp.json();

  return respuesta;
}