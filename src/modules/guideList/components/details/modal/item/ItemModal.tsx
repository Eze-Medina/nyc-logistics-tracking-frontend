import { useRef } from 'react';

import type { Item } from '../../../../../../interfaces';

import { Checkbox, InputText } from '../../../../../../shared/components/input';

import { useForm } from '../../../../../../shared/hooks/useForm';

import { X } from 'lucide-react';

import style from './itemModal.module.css'
import { updateItem } from '../../../../helpers/update-item';

interface Props {
  item: Item;
  code: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  onItemUpdated: () => void;
}

export const ItemModal = (data: Props) => {

  const modalElement = useRef<HTMLDivElement>(null);


  const { formState, onInputChange, onCheckboxChange } = useForm(data.item);

  const closeModal = () => {
    data.setModal(false);
  };

  const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      modalElement.current &&
      !modalElement.current.contains(event.target as Node)
    ) {
      closeModal();
    }
  };

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (data.item.id === undefined) {
      console.error('El item no tiene ID');
      return;
    }

    await updateItem(
      data.code,
      data.item.id,
      {
        quantity: Number(formState.quantity),
        description: formState.description,
        paid: Number(formState.paid),
        remaining_amount: Number(formState.remaining_amount),
        current_account: formState.current_account,
      }
    );

    data.setModal(false);

    data.onItemUpdated();
  };

  return (
    <div
      className={style.container}
      onClick={handleContainerClick}>
      <div className={style.modal} ref={modalElement}>
        <div className={style.modal_header}>
          <p className={style.modal_header_p} >Modificar datos de item</p>
          <button
            className={style.modal_header_action}
            type="button"
            onClick={closeModal}
          > <X />
          </button>
        </div>
        <form className={style.modal_form} onSubmit={handleUpdate} autoComplete='off'>
          <fieldset className={style.modal_form_fieldset}>
            <legend>Datos cliente</legend>
            <InputText type='number' labelName='Cantidad' name='quantity' value={formState.quantity === 0 ? '' : formState.quantity} placeholder='Cantidad de items' onInputChange={onInputChange} />
            <InputText type='text' labelName='Descripción' name='description' value={formState.description} placeholder='Descripción de items' onInputChange={onInputChange} />
            <InputText type='number' labelName='Pagado' name='paid' value={formState.paid === 0 ? '' : formState.paid} placeholder='Cantidad a pagar' onInputChange={onInputChange} />
            <InputText type='number' labelName='A cobrar' name='remaining_amount' value={formState.remaining_amount === 0 ? '' : formState.remaining_amount} placeholder='Cantidad a cobrar' onInputChange={onInputChange} />
            <Checkbox labelName='Cuenta corriente' name='current_account' value={formState.current_account} onCheckboxChange={onCheckboxChange} />
          </fieldset>
          <div>
            <div className={style.form_modal_actions}>
              <button className={style.modal_action}>
                Agregar / Actualizar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div >
  )
}
