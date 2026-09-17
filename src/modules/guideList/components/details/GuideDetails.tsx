import { useEffect, useState } from 'react';
import type { GuideDto, GuideStatus } from '../../../../interfaces';

import { Travel } from './travel/Travel';
import { Client } from './client/Client';
import { Move } from './move/Move';
import { Items } from './items/Items';
import { ArrowLeft, RotateCwFadingClock } from 'lucide-react';

import style from './guideDetails.module.css'
import { ShipmentGuide } from '../../../../shared/components/guide/shipmentGuide/ShipmentGuide';
import { getGuide } from '../../helpers/get-guide';
import { Paid } from './paid/Paid';
import { Info } from './info/Info';


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

interface Props {
  guide: string,
  onBack: () => void;
}

export const GuideDetails = (data: Props) => {

  const [guide, setGuide] = useState<GuideDto>();

  useEffect(() => {
    const fetchGuide = async () => {
      const resp = await getGuide(data.guide);

      setGuide(resp);

    };

    fetchGuide();
  }, [data.guide]);

  if (!guide) {
    return <p>Cargando...</p>;
  }

  const refreshGuide = async () => {
    const resp = await getGuide(data.guide);
    setGuide(resp);
  };

  const lastMovement = guide.movements.at(-1)!;
  var latestStatus = statusClass[lastMovement.status as GuideStatus];


  return (
    <section className={style.container}>
      <div className={style.section}>
        <div className={style.section_header}>

          <div className={style.basics_info}>
            <div className={style.info_content}>
              <h2 className={style.basics_code}>{guide.code}</h2>
              <span className={`${style.status} ${latestStatus}`}>
                {guide.movements.at(-1)?.status}
              </span>
              <span
                className={`${style.status} ${guide.paid ? style.payment_paid : style.payment_pending
                  }`}
              >
                {guide.paid ? 'PAGADO' : 'PENDIENTE DE PAGO'}
              </span>
            </div>
            <p className={style.basics_p}> <RotateCwFadingClock width={18} /> actualizado: {lastMovement.date}</p>
          </div>

          <div className={style.section_basics_action}>
            <button className={style.action_button} onClick={data.onBack}>
              <ArrowLeft height={18} /> Volver
            </button>
            <ShipmentGuide data={guide} text={'PDF'} type='search' />
          </div>

        </div>
        <hr className={style.hr} />
        <div className={style.details}>
          <div className={style.details_content}>
            <Info guide={guide} />
            <Items items={guide.items} code={guide.code} onItemUpdated={refreshGuide} />
            <Travel movements={guide.movements} />
          </div>
          <div className={style.details_content}>
            <Client
              role='REMITENTE'
              name={guide.sender.name}
              id_type={guide.sender.id_type}
              id_number={guide.sender.id_number}
              email={guide.sender.email}
              phone={guide.sender.phone}
              code={guide.code}
              onUpdated={refreshGuide}
            />
            <Client
              role='DESTINATARIO'
              name={guide.receiver.name}
              id_type={guide.receiver.id_type}
              id_number={guide.receiver.id_number}
              email={guide.receiver.email}
              phone={guide.receiver.phone}
              code={guide.code}
              onUpdated={refreshGuide}
            />
            {guide.next_movement && typeof guide.next_movement === 'object' && (
              <Move
                next_movement={guide.next_movement}
                routeType={guide.route_type}
                currentSequence={
                  guide.movements[guide.movements.length - 1].sequence
                }
                city={guide.origin.city}
                code={guide.code}
                onUpdated={refreshGuide}
              />
            )}
            {!guide.paid && (<Paid items={guide.items} code={guide.code} onUpdated={refreshGuide} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
