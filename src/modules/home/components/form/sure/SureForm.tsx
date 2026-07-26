import style from './sureForm.module.css'

interface Props {
  secure: boolean,
  declaredValue: number,
  sureValue: number,
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SureForm = (props: Props) => {
  return (
    <div className={style.sure}>
      <h2>Seguro</h2>
      <div className={style.sure_form}>
        <div>
          <label> Contratar seguro </label>
          <input type="checkbox" name="sure.secure" checked={props.secure} onChange={props.onCheckboxChange} />
        </div>
        <div className={style.guide_form__field}>
          <label className={style.guide_form__label}>Valor declarado</label>
          <input className={style.guide_form__input} type='number' placeholder='Valor declarado' name='sure.declaredValue' value={props.declaredValue} onChange={props.onInputChange} />
        </div>
      </div>
      <p>Valor seguro: {Math.round(props.declaredValue * 0.05)}</p>
    </div>
  )
}