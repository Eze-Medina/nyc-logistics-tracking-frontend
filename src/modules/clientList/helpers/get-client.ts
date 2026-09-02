import type { ClientDto } from "../../../interfaces";

export const getClient = async (code: string): Promise<ClientDto | null> => {

  console.log(code);

  // const resp = await fetch('http://localhost:3000/api/guides/search', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(code),
  // });

  // if (!resp.ok) {
  //   return [];
  // }

  return {
    "id": "string",
    "id_number": "string",
    "id_type": "DNI",
    "name": "string",
    "email": "string",
    "phone": "string"
  }
};