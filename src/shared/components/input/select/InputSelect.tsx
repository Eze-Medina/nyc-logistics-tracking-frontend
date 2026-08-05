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
    <div className={style.guide_form_field}>
      <label className={style.guide_form_label}>{props.labelName}</label>
      <select className={style.guide_form_input} name={props.name} value={props.value} onChange={props.onInputChange} autoComplete="off">
        <option>Seleccionar</option>
        {props.list.map(element => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    </div>
  )
}
