import type { Item } from '../../../../../interfaces';
import { updatePaid } from '../../../helpers/update-paid';
import style from './paid.module.css';

interface Props {
  items: Item[];
  code: string;
  onUpdated: () => void;
}

const getCurrentAccountTotal = (items: Item[]): number => {
  return items
    .filter(item => item.current_account)
    .reduce(
      (total, item) => total + Number(item.remaining_amount || 0),
      0
    );
};

export const Paid = ({ items, code, onUpdated }: Props) => {

  const currentAccountTotal = getCurrentAccountTotal(items);

  const handleUpdate = async () => {

    if (currentAccountTotal == 0) return;

    try {
      await updatePaid(code, items);

      onUpdated();

    } catch (error) {
      console.error(error);
    }
  };


  return (
    <section className={style.paid}>
      <div className={style.paid_title}>
        <p className={style.paid_p}>REGISTRAR PAGO PENDIENTE</p>
        <hr className={style.paid_hr} />
      </div>

      <p>
        Total pendiente: ${currentAccountTotal}
      </p>

      <button
        type="button"
        className={style.move_actions}
        onClick={handleUpdate}
      >
        Pagar
      </button>
    </section>
  );
};