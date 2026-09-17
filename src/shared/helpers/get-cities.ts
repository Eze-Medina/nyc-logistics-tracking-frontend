import type { CityDto } from "../../interfaces";

export const getCitys = async (province: string): Promise<CityDto[]> => {

  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/locations/cities`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: province,
    }),
  }
  );

  if (!response.ok) {
    throw new Error('No se pudieron obtener las ciudades');
  }

  const data: CityDto[] = await response.json();

  return data;
};