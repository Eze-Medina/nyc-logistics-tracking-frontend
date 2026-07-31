import type { GuideDto } from "../../../interfaces";

export interface CreateGuideResponse {
  code: string;
  guide: GuideDto;
}

export const createGuide = async (guide: GuideDto): Promise<CreateGuideResponse | null> => {


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

  const dataPDF = {
    code: data.code,
    guide: {
      sender: data.sender,
      receiver: data.receiver,
      origin: data.origin,
      destination: data.destination,
      items: data.items,
      insurance: data.insurance
    }
  }

  console.log(dataPDF);

  return dataPDF;
};