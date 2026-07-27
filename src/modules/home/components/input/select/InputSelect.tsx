import style from './inputSelect.module.css'

interface Props {
  labelName: string,
  name: string,
  value: string,
  list: string[],
  onInputChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const InputSelect = (props: Props) => {
  return (
    <div className={style.guide_form__field}>
      <label className={style.guide_form__label}>{props.labelName}</label>
      <select className={style.guide_form__input} name={props.name} value={props.value} onChange={props.onInputChange}>
        <option>Seleccionar</option>
        {
          props.list.map((element, idx) => (
            <option key={idx} value={element}>{element}</option>
          ))
        }
      </select>
    </div>
  )
}
