import { InputText } from '../../input/text/InputText'
import { InputSelect } from '../../input/select/InputSelect'

interface Props {
  receiverName: string,
  receiverAddress: string,
  receiverNumber: number | '',
  provinceDestination: string,
  cityDestination: string,
  receiverDirection: string,
  onInputChange: (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void;
}

const locations = [['STO', 'Santo Tome'], ['STE', 'Santa Fe'], ['RAF', 'Rafaela'], ['SUN', 'Sunchales'], ['SFR', 'San Francisco']];

export const ReceiverForm = (props: Props) => {
  return (
    <div style={{ display: 'grid', gap: '15px', gridTemplateColumns: '1fr 1fr 1fr', marginBottom: '25px' }}>
      <InputText type='text' labelName='RECEIVER NAME' name='receiverName' value={props.receiverName} placeholder='Full name or Company' onInputChange={props.onInputChange} />
      <InputText type='text' labelName='RECEIVER ADDRESS' name='receiverAddress' value={props.receiverAddress} placeholder='Full address' onInputChange={props.onInputChange} />
      <InputText type='tel' labelName='RECEIVER NUMBER' name='receiverNumber' value={props.receiverNumber} placeholder='Celphone number' onInputChange={props.onInputChange} />
      <InputSelect labelName='PROVINCE DESTINATION' name='provinceDestination' value={props.provinceDestination} onInputChange={props.onInputChange} list={locations} />
      <InputSelect labelName='CITY DESTINATION' name='cityDestination' value={props.cityDestination} onInputChange={props.onInputChange} list={locations} />
      <InputText type='text' labelName='RECEIVER DIRECTION' name='receiverDirection' value={props.receiverDirection} placeholder='full direction' onInputChange={props.onInputChange} />
    </div>
  )
}
