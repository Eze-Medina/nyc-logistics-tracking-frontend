import { useState } from 'react';

import type { ClientDto } from '../../../../interfaces';

import { ArrowLeft } from 'lucide-react';
import { Data } from './data/data';
import { Liabilities } from './liabilities/Liabilities';

import style from './clientDetails.module.css'
import { GuidesTable } from './guidesTable/GuidesTable';

const clientData: ClientDto = {
  id: '000001',
  id_number: '41940644',
  id_type: 'DNI',
  name: 'Ezequiel Medina',
  email: 'tec.medinaeze@gmail.com',
  phone: '03425502666',
}

interface Props {
  client_id: string,
  onBack: () => void;
}

export const ClientDetails = (data: Props) => {

  const [client] = useState(clientData);

  return (
    <section className={style.container}>
      <div className={style.section}>
        <div className={style.section_header}>
          <p className={style.header_name} >{client.name}</p>
          <h2 className={style.header_code}>ID: {client.id}</h2>
        </div>
        <div className={style.section_basics_action}>
          <button className={style.action_button} onClick={data.onBack}>
            <ArrowLeft height={18} /> Volver
          </button>
        </div>
      </div>
      <hr className={style.hr} />
      <div className={style.details}>
        <Data client={client} />
        <Liabilities />
      </div>
      <div className={style.guides}>
        <GuidesTable />
      </div>
    </section >
  )
}
