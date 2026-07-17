import { useForm } from "../../../hooks/useForm";
import type { Item } from "../../../../../interfaces/item.interface";

import { InputText } from "../../input/text/InputText"

interface Props {
  onAddItem: (item: Item) => void;
}

const formData: Item = {
  quantity: '',
  description: '',
  paid: '',
  remainingAmount: '',
}

export const ItemsForm = (props: Props) => {

  const { formState, onInputChange, onResetForm } = useForm(formData);

  const addItem = () => {
    props.onAddItem(formState);
    onResetForm();
  };

  return (
    <div>
      <div style={{ display: 'grid', gap: '15px', gridTemplateColumns: '1fr 1fr 1fr 1fr', marginBottom: '25px' }}>
        <InputText type='number' labelName='QUANTITY' name='quantity' value={formState.quantity} placeholder='Items quantity' onInputChange={onInputChange} />
        <InputText type='text' labelName='DESCRIPTION' name='description' value={formState.description} placeholder='Item description' onInputChange={onInputChange} />
        <InputText type='number' labelName='PAID' name='paid' value={formState.paid} placeholder='Paid amount' onInputChange={onInputChange} />
        <InputText type='number' labelName='REMAINING AMOUNT' name='remainingAmount' value={formState.remainingAmount} placeholder='Remaining Amount' onInputChange={onInputChange} />
      </div>
      <button
        style={{ border: '0px solid', backgroundColor: '#2e2e2e', color: '#dfdfdf', borderRadius: '5px', padding: '10px', margin: '0px 0px 15px 0px' }}
        type='button'
        onClick={addItem}>Agregar</button>
    </div>
  )
}
