import { useEffect, useState } from 'react';
import type { GuideDto } from '../../../../interfaces';

import { getGuide } from '../../helpers/get-guide';

import { Travel } from './travel/Travel';
import { Client } from './client/Client';
import { Move } from './move/Move';
import { Items } from './items/Items';
import { ArrowLeft, RotateCwFadingClock } from 'lucide-react';

import style from './guideDetails.module.css'
import { ShipmentGuide } from '../../../guideForm/components';

const guideData: GuideDto = {
  code: 'NYC-SFE-000001',
  sender: {
    id_number: 41940600,
    id_type: 'dni',
    name: 'Ezequiel Medina',
    email: 'tec.medinaeze@gmail.com',
    phone: '3425502666',
    address: 'Las heras 7460'
  },
  'receiver': {
    id_number: 21416403029,
    id_type: 'cuit',
    name: 'Pochito Lopez',
    email: 'poc.lopez@gmail.com',
    phone: '3425406333',
    address: 'Los granitos 1430'
  },
  origin: {
    province: 'Buenos Aires',
    city: 'Mar del Plata'
  },
  destination: {
    province: 'Santa Fe',
    city: 'Santo Tomé'
  },
  insurance: {
    contracted: true,
    declaredValue: 50000,
    insuranceCost: 2500
  },
  items: [
    {
      quantity: 10,
      description: 'Item 1',
      paid: 10000,
      remainingAmount: 4500,
      currentAccount: false
    },
    {
      quantity: 10,
      description: 'Item 2',
      paid: 14000,
      remainingAmount: 5050,
      currentAccount: false
    },
    {
      quantity: 10,
      description: 'Item 3',
      paid: 3000,
      remainingAmount: 500,
      currentAccount: true
    }
  ],
  movements: [
    {
      date: '2026-08-25 09:15',
      status: 'PENDIENTE_RETIRO',
      move: 'Creación de orden',
      message: 'La orden ha sido creada y está pendiente de retiro.',
      location: {
        city: 'Santo Tomé',
        province: 'Santa Fe',
      },
    },
    {
      date: '2026-08-25 11:30',
      status: 'EN_CAMINO_RETIRO',
      move: 'Inicio del retiro',
      message: 'El vehículo se encuentra en camino a la ubicación de retiro.',
      location: {
        city: 'Santo Tomé',
        province: 'Santa Fe',
      },
    },
    {
      date: '2026-08-26 08:45',
      status: 'EN_POSESION',
      move: 'Paquete retirado',
      message: 'El paquete ha sido retirado y se encuentra en posesión de la empresa.',
      location: {
        city: 'Cordoba',
        province: 'Cordoba',
      },
    },
    {
      date: '2026-08-26 09:00',
      status: 'EN_TRANSITO',
      move: 'Inicio del traslado',
      message: 'El paquete ha iniciado su traslado directo hacia el destino.',
      location: {
        city: 'Cordoba',
        province: 'Cordoba',
      },
    }
  ],
  next_movement: {
    date: '',
    status: 'ENTREGADO',
    move: 'Entrega realizada',
    message: 'El paquete ha sido entregado correctamente en el destino.',
    location: {
      city: 'Santa Fe',
      province: 'Santa Fe',
    }
  }
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

interface Props {
  guide: string,
  onBack: () => void;
}

export const GuideDetails = (data: Props) => {

  const [guide, setGuide] = useState(guideData);

  useEffect(() => {
    // const resp = getGuide(data.guide)

    // setGuide(resp)

  }, [])

  return (
    <section className={style.container}>
      <div className={style.section}>
        <div className={style.section_header}>

          <div className={style.basics_info}>
            <div className={style.info_content}>
              <h2 className={style.basics_code}>{guide.code}</h2>
              <span className={`${style.status} ${statusClass[guide.movements.at(-1)?.status]}`}>
                {guide.movements.at(-1)?.status}
              </span>
            </div>
            <p className={style.basics_p}> <RotateCwFadingClock width={18} /> actualizado: 2026-10-26 14:30</p>
          </div>

          <div className={style.section_basics_action}>
            <button className={style.action_button} onClick={data.onBack}>
              <ArrowLeft height={18} /> Volver
            </button>
            <ShipmentGuide data={guideData} text={'PDF'} type='search' />
          </div>

        </div>
        <hr className={style.hr} />
        <div className={style.details}>
          <div className={style.details_content}>
            <Items items={guide.items} />
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
            />
            <Client
              role='DESTINATARIO'
              name={guide.sender.name}
              id_type={guide.sender.id_type}
              id_number={guide.sender.id_number}
              email={guide.sender.email}
              phone={guide.sender.phone}
            />
            <Move
              nextMove={guide.next_movement}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
