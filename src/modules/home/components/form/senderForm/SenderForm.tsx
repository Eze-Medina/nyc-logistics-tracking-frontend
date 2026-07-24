import { InputText } from '../../input/text/InputText'
import { InputSelect } from '../../input/select/InputSelect'

import style from './senderForm.module.css'

interface Props {
  senderName: string,
  senderEmail: string,
  senderPhone: string,
  senderAddress: string,
  provinceOrigin: string,
  cityOrigin: string,
  onInputChange: (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void;
}

const locations = ['Santo Tome', 'Santa Fe', 'Rafaela', 'Sunchales', 'San Francisco'];

export const SenderForm = (props: Props) => {
  return (
    <div className={style.senderForm}>
      <InputText type='text' labelName='Nombre' name='senderName' value={props.senderName} placeholder='Nombre completo o empresa' onInputChange={props.onInputChange} />
      <InputText type='text' labelName='Email' name='senderEmail' value={props.senderEmail} placeholder='Correo electronico' onInputChange={props.onInputChange} />
      <InputText type='tel' labelName='Telefono' name='senderPhone' value={props.senderPhone} placeholder='Número de telefono' onInputChange={props.onInputChange} />
      <InputSelect labelName='Provincia' name='provinceOrigin' value={props.provinceOrigin} onInputChange={props.onInputChange} list={locations} />
      <InputSelect labelName='Ciudad' name='cityOrigin' value={props.cityOrigin} onInputChange={props.onInputChange} list={locations} />
      <InputText type='text' labelName='Dirección' name='senderAddress' value={props.senderAddress} placeholder='Dirección de remitente' onInputChange={props.onInputChange} />
    </div>
  )
}
