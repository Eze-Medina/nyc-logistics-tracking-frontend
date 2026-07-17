import { InputText } from '../../input/text/InputText'
import { InputSelect } from '../../input/select/InputSelect'

interface Props {
  senderName: string,
  senderAddress: string,
  senderNumber: number | '',
  provinceOrigin: string,
  cityOrigin: string,
  senderDirection: string,
  onInputChange: (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void;
}

const locations = [['STO', 'Santo Tome'], ['STE', 'Santa Fe'], ['RAF', 'Rafaela'], ['SUN', 'Sunchales'], ['SFR', 'San Francisco']];

export const SenderForm = (props: Props) => {
  return (
    <div style={{ display: 'grid', gap: '15px', gridTemplateColumns: '1fr 1fr 1fr', marginBottom: '25px' }}>
      <InputText type='text' labelName='SENDER NAME' name='senderName' value={props.senderName} placeholder='Full name or Company' onInputChange={props.onInputChange} />
      <InputText type='text' labelName='SENDER ADDRESS' name='senderAddress' value={props.senderAddress} placeholder='Full address' onInputChange={props.onInputChange} />
      <InputText type='tel' labelName='SENDER NUMBER' name='senderNumber' value={props.senderNumber} placeholder='Celphone number' onInputChange={props.onInputChange} />
      <InputSelect labelName='PROVINCE ORIGIN' name='provinceOrigin' value={props.provinceOrigin} onInputChange={props.onInputChange} list={locations} />
      <InputSelect labelName='CITY ORIGIN' name='cityOrigin' value={props.cityOrigin} onInputChange={props.onInputChange} list={locations} />
      <InputText type='text' labelName='SENDER DIRECTION' name='senderDirection' value={props.senderDirection} placeholder='full direction' onInputChange={props.onInputChange} />
    </div>
  )
}
