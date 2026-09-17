import type { GuideUnpaidSummaryDto } from "../../../interfaces";

export const getUnpaids = async (sender: number): Promise<GuideUnpaidSummaryDto[]> => {

  const response = await fetch('http://localhost:3000/api/guides/summary/unpaid', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sender,
    }),
  }
  );

  if (!response.ok) {
    throw new Error('No se pudieron obtener los pagos pendientes');
  }

  const data: GuideUnpaidSummaryDto[] = await response.json();

  console.log(data);

  return data;
};