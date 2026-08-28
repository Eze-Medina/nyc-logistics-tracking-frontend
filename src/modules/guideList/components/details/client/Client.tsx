import { Ellipsis, User } from 'lucide-react'
import style from './client.module.css'
import { ClientModal } from '../modal/client/ClientModal'
import { useState } from 'react'

interface Client {
  role: string
  name: string
  id_type: string
  id_number: number | ''
  email: string
  phone: string
}

export const Client = (data: Client) => {

  const [modal, setModal] = useState(false)

  const handelModal = () => {
    setModal(true)
  }

  return (
    <section className={style.container}>
      <div className={style.client}>
        <div className={style.client_role}>
          <User />
          <p>{data.role}</p>
        </div>
        <div
          className={style.client_action}
          onClick={handelModal}>
          <Ellipsis />
        </div>
      </div>
      <div className={style.client_data}>
        <span>{data.name}</span>
        <div className={style.client_data_list}>
          <ul className={style.client_list}>
            <li className={style.client_item}><span className={style.item_span}>{data.id_type.toLocaleUpperCase()}:</span> </li>
            <li className={style.client_item}><span className={style.item_span}>Email:</span> </li>
            <li className={style.client_item}><span className={style.item_span}>Telefono:</span> </li>
          </ul>
          <ul className={style.client_list}>
            <li className={style.client_item}><p className={style.item_p}>{data.id_number}</p></li>
            <li className={style.client_item}><p className={style.item_p}>{data.email}</p></li>
            <li className={style.client_item}><p className={style.item_p}>{data.phone}</p></li>
          </ul>
        </div>
      </div>
      {
        modal && <ClientModal setModal={setModal} role={data.role} />
      }
    </section>
  )
}
