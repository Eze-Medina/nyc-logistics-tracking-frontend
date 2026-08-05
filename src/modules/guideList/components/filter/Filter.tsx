import type { Filter as FilterType } from '../../../../interfaces';

import { InputSelect, InputText } from '../../../../shared/components/input';

import style from './filter.module.css';

interface Props {
  filter: FilterType;
  onInputChange: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  onSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void;
  onReset: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const status = ['PENDING', 'TRAVEL', 'DISPATCH']
const provinces = ['Santa Fe', 'Cordoba', 'Entre Rios', 'Buenos aires'];
const citys = ['Santo Tome', 'Santa Fe', 'Rosario', 'Cordoba', 'Rafaela', 'Sunchales', 'San Francisco', 'Tacural', 'Esperanza', 'Coronda', 'CABA', 'GBA'];

export const Filter = ({ filter, onInputChange, onSubmit, onReset }: Props) => {

  return (
    <form className={style.form} onSubmit={onSubmit}>

      <fieldset className={style.form_basic}>
        <InputText type="text" labelName="Código" name="code" value={filter.code} placeholder="Código de guía" onInputChange={onInputChange} />
        <InputText type="text" labelName="Remitente" name="sender" value={filter.sender} placeholder="Nombre del remitente" onInputChange={onInputChange} />
        <InputText type="text" labelName="Destinatario" name="receiver" value={filter.receiver} placeholder="Nombre del destinatario" onInputChange={onInputChange} />
        <InputSelect labelName="Estado" name="status" value={filter.status} list={status} onInputChange={onInputChange} />
      </fieldset>

      <div className={style.locations}>
        <fieldset className={style.group}>
          <legend>Origen</legend>
          <InputSelect labelName="Provincia" name="origin" value={filter.origin} list={provinces} onInputChange={onInputChange} />
          <InputSelect labelName="Ciudad" name="origin" value={filter.origin} list={citys} onInputChange={onInputChange} />
        </fieldset>
        <fieldset className={style.group}>
          <legend>Destino</legend>
          <InputSelect labelName="Provincia" name="destination" value={filter.destination} list={provinces} onInputChange={onInputChange} />
          <InputSelect labelName="Ciudad" name="destination" value={filter.destination} list={citys} onInputChange={onInputChange} />
        </fieldset>
      </div>

      <div className={style.actions}>
        <button type="button" onClick={onReset}>Limpiar</button>
        <button type="submit">Buscar</button>
      </div>

    </form>
  );
};