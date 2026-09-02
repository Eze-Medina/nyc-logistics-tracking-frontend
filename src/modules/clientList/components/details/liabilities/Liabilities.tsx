import { Ellipsis } from 'lucide-react'
import style from './liabilities.module.css'


export const Liabilities = () => {

  return (
    <section className={style.container}>
      <div className={style.data_actions}>
        <p className={style.actions_p}>Pendientes de pago</p>
        <button
          className={style.actions_button}>
          <Ellipsis color='#7c7c7c04' />
        </button>
      </div>
      <hr className={style.hr} />
      <div className={style.client_data_list}>
        <ul className={style.client_list}>
          <li className={style.client_item}>
            <span className={style.item_amount}>Importe: $ 150.300</span>
          </li>
          <li className={style.client_item}>
            <span className={style.item_span}>Periodo comprendido</span>
            <p className={style.item_p}>01/08/2026 - 15/08/2026</p>
          </li>
        </ul>
        <button className={style.action_button}>
          Generar reporte
        </button>
      </div>
    </section >
  )
}
