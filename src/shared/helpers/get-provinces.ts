import type { ProvinceDto } from "../../interfaces";

export const getProvinces = async (): Promise<ProvinceDto[]> => {
  const response = await fetch(
    'http://localhost:3000/api/locations/provinces'
  );

  if (!response.ok) {
    throw new Error('No se pudieron obtener las provincias');
  }

  const data: ProvinceDto[] = await response.json();

  return data;
};