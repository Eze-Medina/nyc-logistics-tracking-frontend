interface DeleteItemData {
  code: string;
  deleteItemIds: number[];
}

export const deleteItem = async (
  code: string,
  itemId: number
): Promise<boolean> => {

  const data: DeleteItemData = {
    code,
    deleteItemIds: [itemId],
  };

  const resp = await fetch('http://localhost:3000/api/guides', {
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