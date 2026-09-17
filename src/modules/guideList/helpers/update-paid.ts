import type { Item } from "../../../interfaces";

interface PayGuideDto {
  code: string;
  paid: boolean;
  items: Item[];
}


export const updatePaid = async (code: string, items: Item[]): Promise<void> => {

  const paid = true;

  const updatedItems = items.map(item => {
    if (item.remaining_amount > 0) {
      return {
        ...item,
        paid: item.paid + item.remaining_amount,
        remaining_amount: 0,
      };
    }

    return item;
  });

  const body: PayGuideDto = {
    code,
    paid,
    items: updatedItems,
  };

  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/guides`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  },
  );

  if (!response.ok) {
    throw new Error('No se pudo marcar la guía como pagada');
  }
};