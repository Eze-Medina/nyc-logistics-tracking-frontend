import { MapPin, MapPinCheck, MoveRight, ShieldCheck } from 'lucide-react'
import style from './info.module.css'
import type { GuideDto } from '../../../../../interfaces'

interface Props {
  guide: GuideDto
}

export const Info = ({ guide }: Props) => {
  return (
    <section className={style.container}>

      <div className={style.route}>

        <div className={style.travel_info}>
          <div className={style.icon_origin}>
            <MapPin />
          </div>

          <div className={style.travel_data}>
            <span className={style.label}>Origen</span>
            <span className={style.info_city}>
              {guide.origin.city}
            </span>
            <span className={style.info_province}>
              {guide.origin.province}
            </span>
            <span className={style.info_address}>
              {guide.origin.address}
            </span>
          </div>
        </div>

        <MoveRight className={style.arrow} />

        <div className={style.travel_info}>
          <div className={style.icon_destination}>
            <MapPinCheck />
          </div>

          <div className={style.travel_data}>
            <span className={style.label}>Destino</span>
            <span className={style.info_city}>
              {guide.destination.city}
            </span>
            <span className={style.info_province}>
              {guide.destination.province}
            </span>
            <span className={style.info_address}>
              {guide.destination.address}
            </span>
          </div>
        </div>

      </div>

      <div className={style.insurance}>

        <div className={style.insurance_header}>
          <ShieldCheck />
          <span>Seguro</span>
        </div>

        {guide.insurance.contracted ? (
          <div className={style.insurance_data}>
            <div>
              <span className={style.insurance_label}>
                Valor declarado
              </span>

              <strong>
                ${guide.insurance.declared_value}
              </strong>
            </div>

            <div>
              <span className={style.insurance_label}>
                Costo del seguro
              </span>

              <strong>
                ${guide.insurance.insurance_cost}
              </strong>
            </div>
          </div>
        ) : (
          <span className={style.no_insurance}>
            Sin seguro contratado
          </span>
        )}

      </div>

    </section>
  )
}