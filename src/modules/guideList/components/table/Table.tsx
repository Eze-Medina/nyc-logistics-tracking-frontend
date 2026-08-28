import type { GuideSummaryDto } from '../../../../interfaces'

import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react';

import style from './table.module.css'

interface Props {
  items: GuideSummaryDto[];
  page: number;
  handleChangePage: React.Dispatch<React.SetStateAction<number>>;
  handleDetail: React.Dispatch<React.SetStateAction<string | null | undefined>>;
}

const statusClass = {
  PENDIENTE_RETIRO: style.pending,
  PENDIENTE_RECEPCION: style.pending,

  EN_CAMINO_RETIRO: style.inTransit,
  EN_POSESION: style.inTransit,
  EN_TRANSITO: style.inTransit,

  ENTREGADO: style.delivered,

  RETIRO_FALLIDO: style.cancelled,
  ENTREGA_FALLIDA: style.cancelled,
  CANCELADO: style.cancelled,
  INCIDENCIA: style.cancelled,
};

export const Table = (props: Props) => {

  const nextPage = () => {
    props.handleChangePage(props.page + 1)
  }

  const prevPage = () => {
    if (props.page === 1) return;
    props.handleChangePage(props.page - 1)
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
              <td className={`${style.table_td} ${style.table_td_location}`}>
                <span className={style.table_td_city}>{item.origin.city}</span>
                <p className={style.table_td_province}>{item.origin.province}</p>
              </td>
              <td className={`${style.table_td} ${style.table_td_location}`}>
                <span className={style.table_td_city}>{item.destination.city}</span>
                <p className={style.table_td_province}>{item.destination.province}</p>
              </td>
              <td className={style.table_td}>
                <span className={`${style.status} ${statusClass[item.status]}`}>
                  {item.status}
                </span>
              </td>
              <td className={`${style.table_td} ${style.table_td_button}`} style={{ textAlign: 'center' }}>
                <button
                  className={style.edit_button}
                  type="button"
                  onClick={() => props.handleDetail(item.code)}
                >
                  <Ellipsis
                    width={15}
                  />
                </button>
              </td>
            </tr>
          ))}
          <tr className={style.table_move}>
            <td>Cantidad de resultados</td>
            <td>
              <div className={style.table_actions}>
                <button className={style.action_prev} onClick={prevPage}>
                  <ChevronLeft color='#c0c0c0' />
                </button>
                <span className={style.action_span}>{props.page}</span>
                <button className={style.action_next} onClick={nextPage}>
                  <ChevronRight color='#c0c0c0' />
                </button>
              </div>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}