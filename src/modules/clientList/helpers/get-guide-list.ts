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
      code: 'NYC-SFE-000002',
      sender: 'Ezequiel Medina',
      receiver: 'Pochito Lopez',
      origin: {
        province: 'Santa Fe',
        city: 'Santa Fe',
      },
      destination: {
        province: 'Santa Fe',
        city: 'Santo Tomé',
      },
      status: 'PENDIENTE_RECEPCION',
    },

    {
      code: 'NYC-SFE-000001',
      sender: 'Ezequiel Medina',
      receiver: 'Pochito Lopez',
      origin: {
        province: 'Buenos Aires',
        city: 'Mar del Plata',
      },
      destination: {
        province: 'Santa Fe',
        city: 'Santo Tomé',
      },
      status: 'PENDIENTE_RETIRO',
    },

    {
      code: 'NYC-SFE-000003',
      sender: 'Ezequiel Medina',
      receiver: 'Pochito Lopez',
      origin: {
        province: 'Santa Fe',
        city: 'Santa Fe',
      },
      destination: {
        province: 'Santa Fe',
        city: 'Santo Tomé',
      },
      status: 'EN_CAMINO_RETIRO',
    },

    {
      code: 'NYC-SFE-000004',
      sender: 'Ezequiel Medina',
      receiver: 'Pochito Lopez',
      origin: {
        province: 'Santa Fe',
        city: 'Santa Fe',
      },
      destination: {
        province: 'Santa Fe',
        city: 'Santo Tomé',
      },
      status: 'EN_POSESION',
    },

    {
      code: 'NYC-SFE-000005',
      sender: 'Ezequiel Medina',
      receiver: 'Pochito Lopez',
      origin: {
        province: 'Santa Fe',
        city: 'Santa Fe',
      },
      destination: {
        province: 'Santa Fe',
        city: 'Santo Tomé',
      },
      status: 'CANCELADO',
    }
  ];
};