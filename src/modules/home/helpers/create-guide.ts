import type { DataGuide } from "../../../shared/helpers/DataGuide";

export const createGuide = async (guide: DataGuide) => {

  console.log("Objeto que se enviaría:");
  console.log(guide);

  // const url = 'http://localhost:3000/api/guides';

  // const resp = await fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(guide),
  // });

  // const data = await resp.json();
  // console.log(data);

  // return data;
}