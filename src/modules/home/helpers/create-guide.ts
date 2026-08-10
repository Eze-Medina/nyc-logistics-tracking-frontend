import type { GuideDto } from "../../../interfaces";

export const createGuide = async (guide: GuideDto): Promise<GuideDto | null> => {

  const resp = await fetch('http://localhost:3000/api/guides', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(guide),
  });

  if (!resp.ok) {
    return null;
  }

  const data = await resp.json();

  return data;
};