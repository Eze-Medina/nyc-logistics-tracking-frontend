import { useEffect, useState } from 'react';
import { Ellipsis } from 'lucide-react';

import type { ClientDto, GuideUnpaidSummaryDto } from '../../../../../interfaces';
import { getUnpaids } from '../../../helpers/get-unpaids';

import style from './liabilities.module.css';
import { PaymentReport } from '../report/paymentReport/PaymentReport';

interface Props {
  sender: number;
  data: ClientDto
}

export const Liabilities = ({ sender, data }: Props) => {

  const [unpaids, setUnpaids] = useState<GuideUnpaidSummaryDto[]>([]);

  useEffect(() => {
    const fetchUnpaids = async () => {
      try {
        const data = await getUnpaids(sender);

        setUnpaids(data);
      } catch (error) {
        console.error('Error al obtener pagos pendientes:', error);
      }
    };

    fetchUnpaids();
  }, [sender]);

  const total = unpaids.reduce(
    (total, unpaid) =>
      total +
      unpaid.items.reduce(
        (itemsTotal, item) =>
          itemsTotal + Number(item.remaining_amount),
        0
      ),
    0
  );

  const dates = unpaids
    .map(unpaid => new Date(unpaid.date))
    .filter(date => !Number.isNaN(date.getTime()));

  const firstDate = dates.length
    ? new Date(Math.min(...dates.map(date => date.getTime())))
    : null;

  const lastDate = dates.length
    ? new Date(Math.max(...dates.map(date => date.getTime())))
    : null;

  const formatDate = (date: Date) =>
    date.toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

  return (
    <section className={style.container}>
      <div className={style.data_actions}>
        <p className={style.actions_p}>Pendientes de pago</p>

        <button className={style.actions_button}>
          <Ellipsis color="#7c7c7c04" />
        </button>
      </div>

      <hr className={style.hr} />

      <div className={style.client_data_list}>
        <div className={style.summary}>
          <div className={style.summary_item}>
            <span className={style.item_span}>
              Importe pendiente
            </span>

            <p className={style.item_amount}>
              ${' '}
              {total.toLocaleString('es-AR')}
            </p>
          </div>

          <div className={style.summary_item}>
            <span className={style.item_span}>
              Periodo comprendido
            </span>

            <p className={style.item_p}>
              {firstDate && lastDate
                ? `${formatDate(firstDate)} - ${formatDate(lastDate)}`
                : 'Sin pendientes'}
            </p>
          </div>
        </div>

        <div className={style.guides}>
          <span className={style.item_span}>
            Guías pendientes
          </span>

          <div className={style.guides_list}>
            {unpaids.length > 0 ? (
              unpaids.map((unpaid) => (
                <div
                  key={unpaid.code}
                  className={style.guide_item}
                >
                  {unpaid.code}
                </div>
              ))
            ) : (
              <p className={style.item_p}>
                No hay guías pendientes
              </p>
            )}
          </div>
        </div>

        <PaymentReport
          client={data}
          data={unpaids}
          text="Generar reporte"
        />
      </div>

    </section>
  );
};