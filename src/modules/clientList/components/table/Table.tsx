import type { ClientSummaryDto } from '../../../../interfaces'

import { ChevronLeft, ChevronRight } from 'lucide-react';

import style from './table.module.css'

interface Props {
  clients: ClientSummaryDto[];
  page: number;
  handleChangePage: React.Dispatch<React.SetStateAction<number>>;
  handleDetail: React.Dispatch<React.SetStateAction<string | undefined | null>>;
}

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
            <th className={style.table_th}>NOMBRE</th>
            <th className={style.table_th}>EMAIL</th>
            <th className={style.table_th}>DNI/CUIL/CUIT</th>
            <th className={style.table_th}>TELEFONO</th>
          </tr>
        </thead>

        <tbody>
          {props.clients.map((client, idx) => (
            <tr key={idx} className={`${style.table_tr} ${style.table_tr_item}`} onClick={() => props.handleDetail(client.id)}>
              <td className={style.table_td}> {client.name} </td>
              <td className={style.table_td}> {client.email} </td>
              <td className={style.table_td}> {client.id_number} </td>
              <td className={`${style.table_td} ${style.table_td_location}`}> {client.phone}</td>
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