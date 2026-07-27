import { InputText } from '../../input/text/InputText'
import { InputSelect } from '../../input/select/InputSelect'

import style from './receiverForm.module.css'

interface Props {
  receiverId: number | '',
  receiverIdType: string,
  receiverName: string,
  receiverEmail: string,
  receiverPhone: string,
  receiverAddress: string,
  provinceDestination: string,
  cityDestination: string,
  onInputChange: (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void;
}

const provinces = ['Santa Fe', 'Cordoba', 'Entre Rios', 'Buenos aires'];
const citys = ['Santo Tome', 'Santa Fe', 'Rafaela', 'Sunchales', 'San Francisco'];
const types = ['DNI', 'CUIL', 'CUIT'];

export const ReceiverForm = (props: Props) => {
  return (
    <div className={style.receiver}>
      <h2>Destinatario</h2>
      <div className={style.receiver_form}>
        <InputText type='text' labelName='Nombre' name='receiver.name' value={props.receiverName} placeholder='Nombre completo o empresa' onInputChange={props.onInputChange} />
        <InputText type='text' labelName='Email' name='receiver.email' value={props.receiverEmail} placeholder='Correo electronico' onInputChange={props.onInputChange} />
        <InputText type='tel' labelName='Telefono' name='receiver.phone' value={props.receiverPhone} placeholder='Número de telefono' onInputChange={props.onInputChange} />
        <InputSelect labelName='Provincia' name='destination.province' value={props.provinceDestination} onInputChange={props.onInputChange} list={provinces} />
        <InputSelect labelName='Ciudad' name='destination.city' value={props.cityDestination} onInputChange={props.onInputChange} list={citys} />
        <InputText type='text' labelName='Dirección' name='receiver.address' value={props.receiverAddress} placeholder='Dirección de destinaratio' onInputChange={props.onInputChange} />
        <InputSelect labelName='DNI/CUIL/CUIT' name='receiver.idType' value={props.receiverIdType} onInputChange={props.onInputChange} list={types} />
        <InputText type='number' labelName='DNI/CUIT' name='receiver.id' value={props.receiverId} placeholder='Número de identificación' onInputChange={props.onInputChange} />
      </div>
    </div>
  )
}
