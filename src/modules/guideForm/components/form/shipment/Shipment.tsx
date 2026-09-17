import { InputSelect } from '../../../../../shared/components/input';
import { InsuranceForm } from '../insurance/InsuranceForm';
import style from './shipment.module.css'

interface Props {
  service: string;
  insurance: {
    contracted: boolean;
    declared_value: number;
    insurance_cost: number;
  };
  note: string;
  messagge: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const travel = ['RETIRO', 'ENTREGA'];

export const Shipment = (data: Props) => {
  return (
    <div className={style.shipment}>
      <h2 className={style.shipment_title}>Informacion sobre el envío</h2>

      <div className={style.insurance}>
        <InsuranceForm
          contracted={data.insurance.contracted}
          declared_value={data.insurance.declared_value}
          insurance_cost={data.insurance.insurance_cost}
          onCheckboxChange={data.onCheckboxChange}
          onInputChange={data.onInputChange}
        />
      </div>

      <div className={style.route}>
        <InputSelect
          labelName="Tipo de envío"
          name="route_type"
          value={data.service}
          onInputChange={data.onInputChange}
          list={travel}
        />
      </div>

      <span className={style.error_message}>
        {data.messagge}
      </span>

      <div className={style.text}>
        <label className={style.text_label}>Notas</label>

        <textarea
          className={style.text_area}
          name="note"
          value={data.note}
          onChange={data.onInputChange}
        />
      </div>

    </div>
  )
}
