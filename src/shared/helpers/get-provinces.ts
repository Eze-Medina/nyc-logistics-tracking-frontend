import type { ProvinceDto } from "../../interfaces";

export const getProvinces = async (): Promise<ProvinceDto[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/locations/provinces`
  );

  if (!response.ok) {
    throw new Error('No se pudieron obtener las provincias');
  }

  const data: ProvinceDto[] = await response.json();

  return data;
};