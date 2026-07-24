import type { Item } from "../../../../../interfaces/item.interface";
import { useForm } from "../../../hooks/useForm";
import { InputText } from "../../input/text/InputText"

import style from './itemsForm.module.css'

interface Props {
  onAddItem: (item: Item) => void;
}

const formData: Item = {
  quantity: '',
  description: '',
  paid: '',
  remainingAmount: '',
  currentAccount: false,
}

export const ItemsForm = (props: Props) => {

  const { formState, onInputChange, onResetForm } = useForm(formData);

  const addItem = () => {
    props.onAddItem(formState);
    onResetForm();
  };

  return (
    <div>
      <div className={style.itemForm} >
        <InputText type='number' labelName='Cantidad' name='quantity' value={formState.quantity} placeholder='Cantidad de items' onInputChange={onInputChange} />
        <InputText type='text' labelName='Descripción' name='description' value={formState.description} placeholder='Descripción de items' onInputChange={onInputChange} />
        <InputText type='number' labelName='Pagado' name='paid' value={formState.paid} placeholder='Cantidad a pagar' onInputChange={onInputChange} />
        <InputText type='number' labelName='A cobrar' name='remainingAmount' value={formState.remainingAmount} placeholder='Cantidad a cobrar' onInputChange={onInputChange} />
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="currentAccount"
            checked={formState.currentAccount}
            onChange={onInputChange}
          />

          Cuenta corriente
        </label>
        <button
          className={style.itemForm_button}
          type='button'
          onClick={addItem}>Agregar
        </button>
      </div>
    </div >
  )
}