import { useRef } from 'react';

import type { Item } from '../../../../../../interfaces';

import { Checkbox, InputText } from '../../../../../../shared/components/input';

import { useForm } from '../../../../../../shared/hooks/useForm';

import { X } from 'lucide-react';

import style from './itemModal.module.css'

interface Props {
  item: Item;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
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

  const handleUpdate = async () => {

    console.log('hola')
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
            <InputText type='number' labelName='Cantidad' name='quantity' value={formState.quantity} placeholder='Cantidad de items' onInputChange={onInputChange} />
            <InputText type='text' labelName='Descripción' name='description' value={formState.description} placeholder='Descripción de items' onInputChange={onInputChange} />
            <InputText type='number' labelName='Pagado' name='paid' value={formState.paid} placeholder='Cantidad a pagar' onInputChange={onInputChange} />
            <InputText type='number' labelName='A cobrar' name='remainingAmount' value={formState.remainingAmount} placeholder='Cantidad a cobrar' onInputChange={onInputChange} />
            <Checkbox labelName='Cuenta corriente' name='currentAccount' value={formState.currentAccount} onCheckboxChange={onCheckboxChange} />
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
