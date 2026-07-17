import type { DataGuide } from "../../../shared/helpers/DataGuide";

export const createGuide = async (guide: DataGuide): Promise<boolean> => {

  console.log("Objeto que se enviaría:");
  console.log(guide);

  return true;

  /*
  const url = 'http://localhost:3000/api/guides';

  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(guide),
  });

  const data = await resp.json();
  console.log(data);

  return resp.ok;
  */
}