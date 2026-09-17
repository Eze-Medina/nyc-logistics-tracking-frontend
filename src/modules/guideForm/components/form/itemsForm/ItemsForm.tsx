import type { Item } from "../../../../../interfaces/guide/item.interface";
import { useForm } from "../../../../../shared/hooks/useForm";
import { InputText, Checkbox } from '../../../../../shared/components/input';
import { Table } from "../../table/Table";

import style from './itemsForm.module.css'

interface Props {
  onAddItem: (item: Item) => void;
  onDeleteItem: (index: number) => void;
  items: Item[];
  messagge: string;
}

const formData: Item = {
  quantity: 0,
  description: '',
  paid: 0,
  remaining_amount: 0,
  current_account: false,
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
        <InputText type='tel' labelName='Cantidad' name='quantity' value={formState.quantity === 0 ? '' : formState.quantity} placeholder='Cantidad de items' onInputChange={onInputChange} pattern="[^0-9]" />
        <InputText type='text' labelName='Descripción' name='description' value={formState.description} placeholder='Descripción de items' onInputChange={onInputChange} />
        <InputText type='tel' labelName='Pagado' name='paid' value={formState.paid === 0 ? '' : formState.paid} placeholder='Cantidad a pagar' onInputChange={onInputChange} pattern="[^0-9]" />
        <InputText type='tel' labelName='A cobrar' name='remaining_amount' value={formState.remaining_amount === 0 ? '' : formState.remaining_amount} placeholder='Cantidad a cobrar' onInputChange={onInputChange} pattern="[^0-9]" />
      </div>

      <div className={style.items_div}>
        <Checkbox
          labelName='Cuenta corriente'
          name='current_account'
          value={formState.current_account}
          onCheckboxChange={onCheckboxChange}
        />
        <div className={style.items_actions}>

          {props.messagge && (
            <span className={style.error_message}>
              {props.messagge}
            </span>
          )}
          <button
            className={style.item_form_button}
            type='button'
            onClick={addItem}
          >
            Agregar
          </button>
        </div>

      </div>

      <Table items={props.items} onDelete={props.onDeleteItem} />

    </div >
  )
}