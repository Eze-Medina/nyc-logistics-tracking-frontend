interface Props {
  labelName: string,
  name: string,
  value: boolean,
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = (props: Props) => {
  return (
    <div>
      <label> {props.labelName} </label>
      <input type='checkbox' name={props.name} checked={props.value} onChange={props.onCheckboxChange} />
    </div>
  )
}