import { X } from 'lucide-react'
import type { Item } from '../../../../interfaces/guide/item.interface'

import style from './table.module.css'

interface Props {
  items: Item[]
  onDelete: (index: number) => void;
}

export const Table = (props: Props) => {
  return (
    <div className={style.table_container}>
      <table className={style.table}>
        <thead>
          <tr className={style.table_tr}>
            <th className={style.table_th}>CANTIDAD</th>
            <th className={style.table_th}>DESCRIPCION</th>
            <th className={style.table_th}>PAGADO</th>
            <th className={style.table_th}>A COBRAR</th>
            <th className={style.table_th}></th>
          </tr>
        </thead>

        <tbody>
          {props.items.map((item, idx) => (
            <tr key={idx} className={style.table_tr}>
              <td className={style.table_td}> {item.quantity} </td>
              <td className={style.table_td}> {item.description} </td>
              <td className={style.table_td_number}> <p>$</p> {item.paid.toLocaleString('es-AR')} </td>
              <td className={style.table_td_number}>
                {item.current_account
                  ? 'Cuenta corriente'
                  : (<div> <p>$</p> {item.remaining_amount.toLocaleString('es-AR')} </div>)
                }
              </td>
              <td className={style.table_td} style={{ textAlign: 'center' }}>
                <button
                  className={style.delete_button}
                  type="button"
                  onClick={() => props.onDelete(idx)}
                >
                  <X
                    width={15}
                    strokeWidth="5"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}