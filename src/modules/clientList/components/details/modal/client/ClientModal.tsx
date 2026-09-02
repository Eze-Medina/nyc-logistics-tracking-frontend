import { useRef } from 'react';

import type { ClientDto } from '../../../../../../interfaces';

import { InputSelect, InputText } from '../../../../../../shared/components/input';

import { useForm } from '../../../../../../shared/hooks/useForm';

import { X } from 'lucide-react';

import style from './clientModal.module.css'

interface Props {
  client: ClientDto;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const types = ['DNI', 'CUIL', 'CUIT'];

export const ClientModal = (data: Props) => {

  const modalElement = useRef<HTMLDivElement>(null);


  const { formState, onInputChange } = useForm(data.client);

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
          <p className={style.modal_header_p} >Modificar datos del cliente</p>
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
            <InputText type='text' labelName='Nombre' name='name' value={formState.name} placeholder='Nombre del cliente' onInputChange={onInputChange} />
            <InputText type='number' labelName='Telefono' name='phone' value={formState.phone} placeholder='Número de telefono' onInputChange={onInputChange} />
            <InputText type='text' labelName='Email' name='email' value={formState.email} placeholder='Correo electronico' onInputChange={onInputChange} />
            <InputSelect labelName='DNI/CUIL/CUIT' name='id_type' value={formState.id_type} onInputChange={onInputChange} list={types} />
            <InputText type='number' labelName='Identificación' name='id_number' value={formState.id_number} placeholder='Cantidad a cobrar' onInputChange={onInputChange} />
          </fieldset>
          <div>
            <div className={style.form_modal_actions}>
              <button className={style.modal_action}>
                Actualizar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div >
  )
}
