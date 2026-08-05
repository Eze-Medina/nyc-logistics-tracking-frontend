import { InputText, InputSelect } from '../../../../../shared/components/input';

import style from './senderForm.module.css'

interface Props {
  senderId: number | '',
  senderIdType: string,
  senderName: string,
  senderEmail: string,
  senderPhone: string,
  senderAddress: string,
  provinceOrigin: string,
  cityOrigin: string,
  onInputChange: (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void;
}

const provinces = ['Santa Fe', 'Cordoba', 'Entre Rios', 'Buenos aires'];
const citys = ['Santo Tome', 'Santa Fe', 'Rosario', 'Cordoba', 'Rafaela', 'Sunchales', 'San Francisco', 'Tacural', 'Esperanza', 'Coronda', 'CABA', 'GBA'];
const types = ['DNI', 'CUIL', 'CUIT'];

export const SenderForm = (props: Props) => {
  return (
    <div className={style.sender}>
      <h2>Remitente</h2>
      <div className={style.sender_form}>
        <InputText type='text' labelName='Nombre' name='sender.name' value={props.senderName} placeholder='Nombre completo o empresa' onInputChange={props.onInputChange} />
        <InputText type='text' labelName='Email' name='sender.email' value={props.senderEmail} placeholder='Correo electronico' onInputChange={props.onInputChange} />
        <InputText type='tel' labelName='Telefono' name='sender.phone' value={props.senderPhone} placeholder='Número de telefono' onInputChange={props.onInputChange} />
        <InputSelect labelName='Provincia' name='origin.province' value={props.provinceOrigin} onInputChange={props.onInputChange} list={provinces} />
        <InputSelect labelName='Ciudad' name='origin.city' value={props.cityOrigin} onInputChange={props.onInputChange} list={citys} />
        <InputText type='text' labelName='Dirección' name='sender.address' value={props.senderAddress} placeholder='Dirección de remitente' onInputChange={props.onInputChange} />
        <InputSelect labelName='Identificación' name='sender.id_type' value={props.senderIdType} onInputChange={props.onInputChange} list={types} />
        <InputText type='number' labelName='DNI/CUIL/CUIT' name='sender.id_number' value={props.senderId} placeholder='Número de identificación' onInputChange={props.onInputChange} />
      </div>
    </div>
  )
}
