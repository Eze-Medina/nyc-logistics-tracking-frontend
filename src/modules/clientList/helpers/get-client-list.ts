import type { ClientSummaryDto, ClientFilter } from "../../../interfaces";

interface GetClientList {
  filter: ClientFilter,
  page: number
}

export const getClientList = async (data: GetClientList): Promise<ClientSummaryDto[]> => {

  const cleanFilter = Object.fromEntries(
    Object.entries(data.filter).filter(
      ([_, value]) => value !== ''
    )
  );

  const client = {
    ...cleanFilter,
    page: data.page
  }

  console.log(client);

  // const resp = await fetch('http://localhost:3000/api/clients/search', {
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
      id: '001239',
      id_number: '41940644',
      id_type: 'DNI',
      name: 'Ezequiel Medina',
      email: 'tec.medinaeze@gmail.com',
      phone: '3452403944'
    },
    {
      id: '001239',
      id_number: '41940644',
      id_type: 'DNI',
      name: 'Ezequiel Medina',
      email: 'tec.medinaeze@gmail.com',
      phone: '3452403944'
    },
    {
      id: '001239',
      id_number: '41940644',
      id_type: 'DNI',
      name: 'Ezequiel Medina',
      email: 'tec.medinaeze@gmail.com',
      phone: '3452403944'
    },
    {
      id: '001239',
      id_number: '41940644',
      id_type: 'DNI',
      name: 'Ezequiel Medina',
      email: 'tec.medinaeze@gmail.com',
      phone: '3452403944'
    },
    {
      id: '001239',
      id_number: '41940644',
      id_type: 'DNI',
      name: 'Ezequiel Medina',
      email: 'tec.medinaeze@gmail.com',
      phone: '3452403944'
    },
    {
      id: '001239',
      id_number: '41940644',
      id_type: 'DNI',
      name: 'Ezequiel Medina',
      email: 'tec.medinaeze@gmail.com',
      phone: '3452403944'
    },
    {
      id: '001239',
      id_number: '41940644',
      id_type: 'DNI',
      name: 'Ezequiel Medina',
      email: 'tec.medinaeze@gmail.com',
      phone: '3452403944'
    },
    {
      id: '001239',
      id_number: '41940644',
      id_type: 'DNI',
      name: 'Ezequiel Medina',
      email: 'tec.medinaeze@gmail.com',
      phone: '3452403944'
    },
    {
      id: '001239',
      id_number: '41940644',
      id_type: 'DNI',
      name: 'Ezequiel Medina',
      email: 'tec.medinaeze@gmail.com',
      phone: '3452403944'
    },
    {
      id: '001239',
      id_number: '41940644',
      id_type: 'DNI',
      name: 'Ezequiel Medina',
      email: 'tec.medinaeze@gmail.com',
      phone: '3452403944'
    }
  ]
}