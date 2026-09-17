import style from './insuranceForm.module.css';

interface Props {
  contracted: boolean;
  declared_value: number;
  insurance_cost: number;
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const InsuranceForm = (props: Props) => {
  return (
    <div className={style.insurance}>
      <div className={style.header}>
        <div>
          <h3 className={style.title}>Seguro</h3>
        </div>

        <label className={style.toggle}>
          <input
            type="checkbox"
            name="insurance.contracted"
            checked={props.contracted}
            onChange={props.onCheckboxChange}
          />

          <span className={style.toggle_slider}></span>
        </label>
      </div>

      <div className={props.contracted ? style.details : style.details_hidden}>
        <div className={style.field}>
          <label className={style.label}>
            Valor declarado
          </label>

          <div className={style.input_wrapper}>
            <span className={style.currency}>$</span>

            <input
              className={style.input}
              type="tel"
              name="insurance.declared_value"
              value={props.declared_value === 0 ? '' : props.declared_value}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/\D/g, '');
                props.onInputChange(event);
              }}
              placeholder="0"
            />
          </div>
        </div>

        <div className={style.cost}>
          <span className={style.cost_label}>Costo del seguro</span>

          <strong className={style.cost_value}>
            ${Math.round(props.declared_value * 0.05).toLocaleString('es-AR')}
          </strong>
        </div>
      </div>
    </div>
  );
};