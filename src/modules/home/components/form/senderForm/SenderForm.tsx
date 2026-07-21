import { InputText } from '../../input/text/InputText'
import { InputSelect } from '../../input/select/InputSelect'

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
    <div style={{ display: 'grid', gap: '15px', gridTemplateColumns: '1fr 1fr 1fr', marginBottom: '25px' }}>
      <InputText type='text' labelName='SENDER NAME' name='senderName' value={props.senderName} placeholder='Full name or Company' onInputChange={props.onInputChange} />
      <InputText type='text' labelName='SENDER EMAIL' name='senderEmail' value={props.senderEmail} placeholder='Full email' onInputChange={props.onInputChange} />
      <InputText type='tel' labelName='SENDER PHONE' name='senderPhone' value={props.senderPhone} placeholder='Celphone number' onInputChange={props.onInputChange} />
      <InputSelect labelName='PROVINCE ORIGIN' name='provinceOrigin' value={props.provinceOrigin} onInputChange={props.onInputChange} list={locations} />
      <InputSelect labelName='CITY ORIGIN' name='cityOrigin' value={props.cityOrigin} onInputChange={props.onInputChange} list={locations} />
      <InputText type='text' labelName='SENDER ADDRESS' name='senderAddress' value={props.senderAddress} placeholder='full Address' onInputChange={props.onInputChange} />
    </div>
  )
}
