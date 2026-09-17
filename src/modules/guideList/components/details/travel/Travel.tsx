import type { GuideStatus, Movement } from '../../../../../interfaces'

import { Route } from 'lucide-react'

import style from './travel.module.css'

interface Props {
  movements: Movement[]
}

const statusClass: Record<GuideStatus, string> = {
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

export const Travel = (data: Props) => {

  const lastMovement = data.movements.at(-1)!;
  const latestStatus = statusClass[lastMovement.status as GuideStatus];

  return (
    <section className={style.travels}>
      <h3 className={style.title}>
        <Route /> Movimientos
      </h3>
      <hr className={style.travel_hr} />
      <ol className={style.timeline}>
        {data.movements.map((movement, idx) => (
          <li className={style.timeline_item} key={idx}>

            <span className={`${style.timeline_dot} ${idx === data.movements.length - 1 ? style.active : ''}`}></span>

            <article className={style.timeline_content}>
              <div className={style.content_data}>
                <h3 className={style.content_data_move}>{movement.move}</h3>
                <p className={style.content_data_location}>{movement.city?.city}, {movement.city?.province}</p>
                <span className={style.content_data_message}>{movement.message}</span>
              </div>

              <div className={style.timeline_content_date}>
                <time className={style.content_date_time}>{movement.date}</time>
                <span className={`${style.travel_status} ${latestStatus}`}> {movement.status}</span>
              </div>
            </article>

          </li>
        ))}
      </ol>
    </section >
  )
}
