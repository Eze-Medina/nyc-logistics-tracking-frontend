import { InputText } from '../../input/text/InputText'
import { InputSelect } from '../../input/select/InputSelect'

import style from './receiverForm.module.css'

interface Props {
  receiverName: string,
  receiverEmail: string,
  receiverPhone: string,
  receiverAddress: string,
  provinceDestination: string,
  cityDestination: string,
  onInputChange: (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void;
}

const locations = ['Santo Tome', 'Santa Fe', 'Rafaela', 'Sunchales', 'San Francisco'];

export const ReceiverForm = (props: Props) => {
  return (
    <div className={style.receiverForm}>
      <InputText type='text' labelName='Nombre' name='receiverName' value={props.receiverName} placeholder='Nombre completo o empresa' onInputChange={props.onInputChange} />
      <InputText type='text' labelName='Email' name='receiverEmail' value={props.receiverEmail} placeholder='Correo electronico' onInputChange={props.onInputChange} />
      <InputText type='tel' labelName='Telefono' name='receiverPhone' value={props.receiverPhone} placeholder='Número de telefono' onInputChange={props.onInputChange} />
      <InputSelect labelName='Provincia' name='provinceDestination' value={props.provinceDestination} onInputChange={props.onInputChange} list={locations} />
      <InputSelect labelName='Ciudad' name='cityDestination' value={props.cityDestination} onInputChange={props.onInputChange} list={locations} />
      <InputText type='text' labelName='Dirección' name='receiverAddress' value={props.receiverAddress} placeholder='Dirección de destinaratio' onInputChange={props.onInputChange} />
    </div>
  )
}
