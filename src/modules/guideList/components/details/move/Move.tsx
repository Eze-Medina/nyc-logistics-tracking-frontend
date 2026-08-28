import type { Movement } from '../../../../../interfaces'

import style from './move.module.css'

interface Props {
  nextMove: Movement;
}

export const Move = ({ nextMove }: Props) => {
  return (
    <section className={style.move}>
      <div className={style.move_title}>
        <p className={style.move_p} >REGISTRAR MOVIMIENTO</p>
        <hr className={style.move_hr} />
      </div>
      <div className={style.move_data}>
        <h3 className={style.content_data_move}>{nextMove.move}</h3>
        <p className={style.content_data_location}>{nextMove.location.city}, {nextMove.location.province}</p>
        <span className={style.content_data_message}>{nextMove.message}</span>
      </div>
      <button className={style.move_actions}>Actualizar Estado</button>
    </section>
  )
}
