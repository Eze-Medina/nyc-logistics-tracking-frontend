import type { GuideDto } from "../../../interfaces";

export const createGuide = async (guide: GuideDto): Promise<GuideDto | null> => {

  console.log('Esta es la informacion obtenida', guide);

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

  const data: GuideDto = await resp.json();

  return data;
};