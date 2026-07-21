import { InputText } from '../../input/text/InputText'
import { InputSelect } from '../../input/select/InputSelect'

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
    <div style={{ display: 'grid', gap: '15px', gridTemplateColumns: '1fr 1fr 1fr', marginBottom: '25px' }}>
      <InputText type='text' labelName='RECEIVER NAME' name='receiverName' value={props.receiverName} placeholder='Full name or Company' onInputChange={props.onInputChange} />
      <InputText type='text' labelName='RECEIVER EMAIL' name='receiverEmail' value={props.receiverEmail} placeholder='Full email' onInputChange={props.onInputChange} />
      <InputText type='tel' labelName='RECEIVER PHONE' name='receiverPhone' value={props.receiverPhone} placeholder='Celphone number' onInputChange={props.onInputChange} />
      <InputSelect labelName='PROVINCE DESTINATION' name='provinceDestination' value={props.provinceDestination} onInputChange={props.onInputChange} list={locations} />
      <InputSelect labelName='CITY DESTINATION' name='cityDestination' value={props.cityDestination} onInputChange={props.onInputChange} list={locations} />
      <InputText type='text' labelName='RECEIVER ADDRESS' name='receiverAddress' value={props.receiverAddress} placeholder='full Address' onInputChange={props.onInputChange} />
    </div>
  )
}
