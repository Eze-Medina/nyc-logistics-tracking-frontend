import style from './insuranceForm.module.css'

interface Props {
  contracted: boolean,
  declaredValue: number,
  insuranceCost: number,
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
}

export const InsuranceForm = (props: Props) => {
  return (
    <div className={style.insurance}>
      <h2>Seguro</h2>
      <div className={style.insurance_form}>
        <div>
          <label> Contratar seguro </label>
          <input type="checkbox" name="insurance.contracted" checked={props.contracted} onChange={props.onCheckboxChange} />
        </div>
        <div className={!props.contracted ? style.hide : style.show}>
          <div className={style.insurance_form_field}>
            <label className={style.insurance_form_label}>Valor declarado</label>
            <input className={style.insurance_form_input} type='number' placeholder='Valor declarado' name='insurance.declaredValue' value={props.declaredValue} onChange={props.onInputChange} />
          </div>
          <p >Valor seguro: {Math.round(props.declaredValue * 0.05).toLocaleString('es-AR')}</p>
        </div>
      </div>
    </div>
  )
}