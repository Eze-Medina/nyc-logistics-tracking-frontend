import type { Dispatch, SetStateAction } from 'react';
import type { GuideSummaryDto } from '../../../../interfaces'

import { Pen } from 'lucide-react';

import style from './table.module.css'

interface Props {
  items: GuideSummaryDto[];
  page: number;
  handleChangePage: Dispatch<SetStateAction<number>>;
}

const statusClass = {
  PENDIENTE: style.pending,
  TRANSITO: style.inTransit,
  ENTREGADO: style.delivered,
  CANCELADO: style.cancelled,
};

export const Table = (props: Props) => {

  const nextPage = () => {
    props.handleChangePage(props.page + 1)
  }

  const prevPage = () => {
    if (props.page === 1) return;
    props.handleChangePage(props.page + 1)
  }

  return (
    <div className={style.table_container}>
      <table className={style.table}>
        <thead>
          <tr className={style.table_tr}>
            <th className={style.table_th}>CODIGO</th>
            <th className={style.table_th}>REMITENTE</th>
            <th className={style.table_th}>DESTINATARIO</th>
            <th className={style.table_th}>ORIGEN</th>
            <th className={style.table_th}>DESTINO</th>
            <th className={style.table_th}>ESTADO</th>
            <th className={style.table_th}></th>
          </tr>
        </thead>

        <tbody>
          {props.items.map((item, idx) => (
            <tr key={idx} className={style.table_tr}>
              <td className={style.table_td}> <p className={style.code}>{item.code}</p> </td>
              <td className={style.table_td}> {item.sender} </td>
              <td className={style.table_td}> {item.receiver} </td>
              <td className={style.table_td}> {item.origin} </td>
              <td className={style.table_td}> {item.destination} </td>
              <td className={style.table_td}>
                <span className={`${style.status} ${statusClass[item.status]}`}>
                  {item.status}
                </span>
              </td>
              <td className={style.table_td} style={{ textAlign: 'center' }}>
                <button
                  className={style.edit_button}
                  type="button"
                >
                  <Pen
                    width={15}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
      <button onClick={prevPage}>
        -1
      </button>
      <span>{props.page}</span>
      <button onClick={nextPage}>
        +1
      </button>
    </div>
  )
}