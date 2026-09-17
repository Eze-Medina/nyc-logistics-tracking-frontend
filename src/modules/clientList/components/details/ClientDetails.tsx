import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

import type { ClientDto } from '../../../../interfaces';

import { getClient } from '../../helpers/get-client';
import { Data } from './data/data';
import { Liabilities } from './liabilities/Liabilities';

import { GuidesTable } from './guidesTable/GuidesTable';
import style from './clientDetails.module.css'

interface Props {
  client_id: number,
  onBack: () => void;
}

export const ClientDetails = (data: Props) => {

  const [client, setClient] = useState<ClientDto>();

  const loadClient = async () => {
    const resp = await getClient(data.client_id);
    setClient(resp);
  };

  useEffect(() => {
    const fetchGuide = async () => {
      const resp = await getClient(data.client_id);

      setClient(resp);

    };

    fetchGuide();
  }, [data.client_id]);

  if (!client) {
    return <p>Cargando...</p>;
  }

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
        <Data client={client} onUpdate={loadClient} />
        <Liabilities sender={data.client_id} data={client} />
      </div>
      <div className={style.guides}>
        <p className={style.guide_title}>Envíos realizados</p>
        <GuidesTable sender={data.client_id} receiver={0} role={'DESTINATARIO'} />
        <p className={style.guide_title}>Envíos recibidos</p>
        <GuidesTable sender={0} receiver={data.client_id} role={'REMITENTE'} />
      </div>
    </section >
  )
}
