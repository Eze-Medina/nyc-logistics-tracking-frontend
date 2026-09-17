interface UpdateItemData {
  quantity?: number;
  description?: string;
  paid?: number;
  remaining_amount?: number;
  current_account?: boolean;
}

export const updateItem = async (code: string, itemId: number, changes: UpdateItemData): Promise<boolean> => {

  const item = {
    ...(itemId !== 0 && { id: itemId }),
    ...changes,
  };

  const data = {
    code,
    items: [item],
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