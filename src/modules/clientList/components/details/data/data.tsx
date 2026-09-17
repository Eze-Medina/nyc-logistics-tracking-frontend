import { Ellipsis } from 'lucide-react';
import type { ClientDto } from '../../../../../interfaces';

import style from './data.module.css';
import { useState } from 'react';
import { ClientModal } from '../modal/client/ClientModal';

interface Props {
  client: ClientDto;
  onUpdate: () => Promise<void>
}

export const Data = ({ client, onUpdate }: Props) => {

  const [modal, setModal] = useState(false)

  const handelModal = () => {
    setModal(true)
  }

  return (
    <section className={style.container}>
      <div className={style.data_actions}>
        <p className={style.actions_p}>Detalles del cliente</p>
        <button
          className={style.actions_button} onClick={handelModal}>
          <Ellipsis color='#7c7c7c' />
        </button>
      </div>
      <hr className={style.hr} />
      <div className={style.client_data_list}>
        <ul className={style.client_list}>
          <li className={style.client_item}>
            <span className={style.item_span}>DNI/CUIL/CUIT:</span>
            <p className={style.item_p}>{client.id_type}</p>
          </li>
          <li className={style.client_item}>
            <span className={style.item_span}>Identificacion:</span>
            <p className={style.item_p}>{client.id_number}</p>
          </li>
          <li className={style.client_item}>
            <span className={style.item_span}>Email:</span>
            <p className={style.item_p}>{client.email}</p>
          </li>
          <li className={style.client_item}>
            <span className={style.item_span}>Telefono:</span>
            <p className={style.item_p}>{client.phone}</p>
          </li>
        </ul>
      </div>
      {
        modal && <ClientModal client={client} setModal={setModal} onUpdate={onUpdate} />
      }
    </section >
  );
};