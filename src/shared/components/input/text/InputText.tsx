import style from './inputText.module.css'

interface Props {
  type: string,
  labelName: string,
  name: string,
  placeholder: string,
  value: string | number | undefined,
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
}


export const InputText = (props: Props) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (props.pattern) {
      const regex = new RegExp(props.pattern, 'g');
      event.target.value = value.replace(regex, '');
    }

    props.onInputChange(event);
  };

  return (
    <div className={style.guide_form_field}>
      <label className={style.guide_form_label}>{props.labelName}</label>
      <input className={style.guide_form_input} type={props.type} placeholder={props.placeholder} name={props.name} value={props.value} onChange={handleChange} />
    </div>
  )
}
