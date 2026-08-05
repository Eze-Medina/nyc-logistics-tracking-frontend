import style from './inputText.module.css'

interface Props {
  type: string,
  labelName: string,
  name: string,
  placeholder: string,
  value: string | number | undefined,
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export const InputText = (props: Props) => {
  return (
    <div className={style.guide_form_field}>
      <label className={style.guide_form_label}>{props.labelName}</label>
      <input className={style.guide_form_input} type={props.type} placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.onInputChange} />
    </div>
  )
}
