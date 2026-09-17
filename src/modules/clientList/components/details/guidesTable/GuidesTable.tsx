import type { Filter as FilterType, GuideSummaryDto } from '../../../../../interfaces';

import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react';

import style from './guidesTable.module.css'
import { useEffect, useState } from 'react';
import { getGuideList } from '../../../helpers/get-guide-list';

const initialFilter: FilterType = {
  code: '',
  sender: 0,
  receiver: 0,
  origin: {
    city: '',
    province: ''
  },
  destination: {
    city: '',
    province: ''
  },
  status: '',
};

const statusClass = {
  PENDIENTE_RETIRO: style.pending,
  PENDIENTE_RECEPCION: style.pending,
  PENDIENTE_PAGO: style.pending,

  EN_CAMINO_RETIRO: style.inTransit,
  EN_POSESION: style.inTransit,
  EN_TRANSITO: style.inTransit,

  ENTREGADO: style.delivered,

  RETIRO_FALLIDO: style.cancelled,
  ENTREGA_FALLIDA: style.cancelled,
  CANCELADO: style.cancelled,
  INCIDENCIA: style.cancelled,
};

interface Props {
  sender: number,
  receiver: number,
  role: string,
}

export const GuidesTable = ({ sender, receiver, role }: Props) => {

  const [list, setList] = useState<GuideSummaryDto[]>([]);
  const [page, setPage] = useState(1);
  const [offset] = useState(5);


  const loadGuides = async (pageNumber: number) => {
    const data = await getGuideList({
      filter: {
        ...initialFilter,
        sender,
        receiver
      },
      page: pageNumber,
      offset: offset,
    });

    setList(data);
  };

  useEffect(() => {
    loadGuides(page)
  }, [page])

  const nextPage = () => {
    if (list.length == offset) {
      setPage(page + 1)
    }
  }

  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1)
  }

  return (
    <div className={style.table_container}>

      <table className={style.table}>
        <thead>
          <tr className={style.table_tr}>
            <th className={style.table_th}>CODIGO</th>
            <th className={style.table_th}>{role}</th>
            <th className={style.table_th}>ORIGEN</th>
            <th className={style.table_th}>DESTINO</th>
            <th className={style.table_th}>ESTADO</th>
            <th className={style.table_th}></th>
          </tr>
        </thead>

        <tbody>
          {list.map((item, idx) => (
            <tr key={idx} className={style.table_tr}>
              <td className={style.table_td}> <p className={style.code}>{item.code}</p> </td>
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
                <span className={style.action_span}>{page}</span>
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