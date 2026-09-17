import { updateNextMovement } from '../../../helpers/next-movement-guide';

import style from './move.module.css'

interface Props {
  code: string;
  next_movement: {
    status: string,
    move: string,
    message: string
  };
  routeType: string;
  city: string;
  currentSequence: number,
  onUpdated: () => void;
}

export const Move = ({ code, next_movement, routeType, currentSequence, city, onUpdated }: Props) => {

  const handleUpdate = async () => {
    try {
      await updateNextMovement(code, {
        routeType,
        nextStatus: next_movement.status,
        currentSequence,
        city,
      });

      onUpdated();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={style.move}>
      <div className={style.move_title}>
        <p className={style.move_p}>REGISTRAR MOVIMIENTO</p>
        <hr className={style.move_hr} />
      </div>

      <div className={style.move_data}>
        <h3 className={style.content_data_move}>
          {next_movement.move}
        </h3>

        <span className={style.content_data_message}>
          {next_movement.message}
        </span>
      </div>

      <button
        type="button"
        className={style.move_actions}
        onClick={handleUpdate}
      >
        Actualizar Estado
      </button>
    </section>
  )
}