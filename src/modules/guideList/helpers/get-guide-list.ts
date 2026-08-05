import type { Filter, GuideSummaryDto } from "../../../interfaces";

interface GetGuideList {
  filter: Filter,
  page: number
}

export const getGuideList = async (data: GetGuideList): Promise<GuideSummaryDto[]> => {

  const cleanFilter = Object.fromEntries(
    Object.entries(data.filter).filter(
      ([_, value]) => value !== ""
    )
  );

  const guide = {
    ...cleanFilter,
    page: data.page
  }

  console.log(guide);

  // const resp = await fetch('http://localhost:3000/api/guides/search', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(guide),
  // });

  // if (!resp.ok) {
  //   return [];
  // }

  return [
    {
      "code": "NYC-SFE-000002",
      "sender": "Ezequiel Medina",
      "receiver": "Pochito Lopez",
      "origin": "Santa Fe, Santa Fe",
      "destination": "Santa Fe, Santo Tomé",
      "status": "PENDIENTE"
    },
    {
      "code": "NYC-SFE-000001",
      "sender": "Ezequiel Medina",
      "receiver": "Pochito Lopez",
      "origin": "Buenos Aires, Mar del Plata",
      "destination": "Santa Fe, Santo Tomé",
      "status": "PENDIENTE"
    },
    {
      "code": "NYC-SFE-000003",
      "sender": "Ezequiel Medina",
      "receiver": "Pochito Lopez",
      "origin": "Santa Fe, Santa Fe",
      "destination": "Santa Fe, Santo Tomé",
      "status": "TRANSITO"
    },
    {
      "code": "NYC-SFE-000004",
      "sender": "Ezequiel Medina",
      "receiver": "Pochito Lopez",
      "origin": "Santa Fe, Santa Fe",
      "destination": "Santa Fe, Santo Tomé",
      "status": "TRANSITO"
    },
    {
      "code": "NYC-SFE-000005",
      "sender": "Ezequiel Medina",
      "receiver": "Pochito Lopez",
      "origin": "Santa Fe, Santa Fe",
      "destination": "Santa Fe, Santo Tomé",
      "status": "CANCELADO"
    },
    {
      "code": "NYC-SFE-000006",
      "sender": "Ezequiel Medina",
      "receiver": "Pochito Lopez",
      "origin": "Santa Fe, Santa Fe",
      "destination": "Santa Fe, Santo Tomé",
      "status": "PENDIENTE"
    },
    {
      "code": "NYC-SFE-000007",
      "sender": "Ezequiel Medina",
      "receiver": "Pochito Lopez",
      "origin": "Santa Fe, Santa Fe",
      "destination": "Santa Fe, Santo Tomé",
      "status": "PENDIENTE"
    },
    {
      "code": "NYC-SFE-000008",
      "sender": "Ezequiel Medina",
      "receiver": "Pochito Lopez",
      "origin": "Santa Fe, Santa Fe",
      "destination": "Santa Fe, Santo Tomé",
      "status": "PENDIENTE"
    },
    {
      "code": "NYC-SFE-000009",
      "sender": "Ezequiel Medina",
      "receiver": "Pochito Lopez",
      "origin": "Santa Fe, Santa Fe",
      "destination": "Santa Fe, Santo Tomé",
      "status": "ENTREGADO"
    },
    {
      "code": "NYC-SFE-000010",
      "sender": "Ezequiel Medina",
      "receiver": "Pochito Lopez",
      "origin": "Santa Fe, Santa Fe",
      "destination": "Santa Fe, Santo Tomé",
      "status": "PENDIENTE"
    }
  ];
};