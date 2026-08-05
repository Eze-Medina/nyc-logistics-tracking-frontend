import type { Item } from "../../../../../interfaces/guide/item.interface";
import { useForm } from "../../../../../shared/hooks/useForm";
import { InputText, Checkbox } from '../../../../../shared/components/input';
import { Table } from "../../table/Table";

import style from './itemsForm.module.css'

interface Props {
  onAddItem: (item: Item) => void;
  onDeleteItem: (index: number) => void;
  items: Item[]
}

const formData: Item = {
  quantity: '',
  description: '',
  paid: '',
  remainingAmount: '',
  currentAccount: false,
}

export const ItemsForm = (props: Props) => {

  const { formState, onInputChange, onCheckboxChange, onResetForm } = useForm(formData);

  const addItem = () => {
    props.onAddItem(formState);
    onResetForm();
  };

  return (
    <div className={style.items}>
      <div className={style.item_form} >
        <InputText type='number' labelName='Cantidad' name='quantity' value={formState.quantity} placeholder='Cantidad de items' onInputChange={onInputChange} />
        <InputText type='text' labelName='Descripción' name='description' value={formState.description} placeholder='Descripción de items' onInputChange={onInputChange} />
        <InputText type='number' labelName='Pagado' name='paid' value={formState.paid} placeholder='Cantidad a pagar' onInputChange={onInputChange} />
        <InputText type='number' labelName='A cobrar' name='remainingAmount' value={formState.remainingAmount} placeholder='Cantidad a cobrar' onInputChange={onInputChange} />
      </div>

      <div className={style.items_div}>
        <Checkbox labelName='Cuenta corriente' name='currentAccount' value={formState.currentAccount} onCheckboxChange={onCheckboxChange} />
        <button
          className={style.item_form_button}
          type='button'
          onClick={addItem}>Agregar
        </button>
      </div>

      <Table items={props.items} onDelete={props.onDeleteItem} />

    </div >
  )
}