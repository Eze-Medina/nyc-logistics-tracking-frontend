import type { GuideDto } from "../../../interfaces";
import type { GuideForm } from "../../../interfaces/guide/guideForm";

export const createGuide = async (guide: GuideForm): Promise<GuideDto | null> => {

  console.log(guide);

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