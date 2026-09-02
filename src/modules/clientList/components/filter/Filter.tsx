import type { ClientFilter } from '../../../../interfaces';

import { InputText } from '../../../../shared/components/input';

import style from './filter.module.css';

interface filter {
  filter: ClientFilter;
  onInputChange: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  onSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void;
  onReset: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Filter = ({ filter, onInputChange, onSubmit, onReset }: filter) => {

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <p className={style.form_p}>Identificar cliente</p>
      <div className={style.client_form}>
        <InputText type='text' labelName='Nombre' name='filter.name' value={filter.name} placeholder='Nombre completo o empresa' onInputChange={onInputChange} />
        <InputText type='text' labelName='Email' name='filter.email' value={filter.id_number} placeholder='Correo electronico' onInputChange={onInputChange} />
        <InputText type='text' labelName='DNI/CUIL/CUIT' name='filter.id_number' value={filter.id_number} placeholder='Número de identificación' onInputChange={onInputChange} />
        <InputText type='text' labelName='Telefono' name='filter.phone' value={filter.id_number} placeholder='Número de telefono' onInputChange={onInputChange} />
      </div>

      <div className={style.actions}>
        <button className={style.action_button} type="button" onClick={onReset}>Limpiar</button>
        <button className={style.action_button} type="submit">Buscar</button>
      </div>

    </form>
  );
};