import { useEffect, useState } from 'react';

import type { Filter as FilterType } from '../../../../interfaces';

import { InputSelect, InputText } from '../../../../shared/components/input';


import style from './filter.module.css';
import { getProvinces } from '../../../../shared/helpers/get-provinces';
import { getCitys } from '../../../../shared/helpers/get-cities';

interface Props {
  filter: FilterType;
  onInputChange: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  onSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void;
  onReset: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const status = [
  'PENDIENTE_RETIRO',
  'PENDIENTE_RECEPCION',
  'EN_CAMINO_RETIRO',
  'EN_POSESION',
  'EN_TRANSITO',
  'ENTREGADO',
  'RETIRO_FALLIDO',
  'ENTREGA_FALLIDA',
  'CANCELADO',
  'INCIDENCIA',
];

export const Filter = ({
  filter,
  onInputChange,
  onSubmit,
  onReset,
}: Props) => {
  const [provinces, setProvinces] = useState<string[]>([]);
  const [originCitys, setOriginCitys] = useState<string[]>([]);
  const [destinationCitys, setDestinationCitys] = useState<string[]>([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const data = await getProvinces();

        setProvinces(data.map(province => province.name));
      } catch (error) {
        console.error('Error al obtener las provincias:', error);
      }
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchOriginCitys = async () => {
      if (!filter.origin.province) {
        setOriginCitys([]);
        return;
      }

      try {
        const data = await getCitys(filter.origin.province);

        setOriginCitys(data.map(city => city.name));
      } catch (error) {
        console.error('Error al obtener las ciudades de origen:', error);
        setOriginCitys([]);
      }
    };

    fetchOriginCitys();
  }, [filter.origin.province]);

  useEffect(() => {
    const fetchDestinationCitys = async () => {
      if (!filter.destination.province) {
        setDestinationCitys([]);
        return;
      }

      try {
        const data = await getCitys(filter.destination.province);

        setDestinationCitys(data.map(city => city.name));
      } catch (error) {
        console.error(
          'Error al obtener las ciudades de destino:',
          error
        );

        setDestinationCitys([]);
      }
    };

    fetchDestinationCitys();
  }, [filter.destination.province]);

  return (
    <form className={style.form} onSubmit={onSubmit}>

      <fieldset className={style.form_basic}>
        <InputText
          type="text"
          labelName="Código"
          name="code"
          value={filter.code}
          placeholder="Código de guía"
          onInputChange={onInputChange}
        />

        <InputText
          type="number"
          labelName="ID Remitente"
          name="sender"
          value={filter.sender === 0 ? '' : filter.sender}
          placeholder="Nombre del remitente"
          onInputChange={onInputChange}
        />

        <InputText
          type="number"
          labelName="ID Destinatario"
          name="receiver"
          value={filter.receiver === 0 ? '' : filter.receiver}
          placeholder="Nombre del destinatario"
          onInputChange={onInputChange}
        />

        <InputSelect
          labelName="Estado"
          name="status"
          value={filter.status}
          list={status}
          onInputChange={onInputChange}
        />
      </fieldset>

      <div className={style.locations}>

        <fieldset className={style.group}>
          <legend>Origen</legend>

          <InputSelect
            labelName="Provincia"
            name="origin.province"
            value={filter.origin.province}
            list={provinces}
            onInputChange={onInputChange}
          />

          <InputSelect
            labelName="Ciudad"
            name="origin.city"
            value={filter.origin.city}
            list={originCitys}
            onInputChange={onInputChange}
          />
        </fieldset>

        <fieldset className={style.group}>
          <legend>Destino</legend>

          <InputSelect
            labelName="Provincia"
            name="destination.province"
            value={filter.destination.province}
            list={provinces}
            onInputChange={onInputChange}
          />

          <InputSelect
            labelName="Ciudad"
            name="destination.city"
            value={filter.destination.city}
            list={destinationCitys}
            onInputChange={onInputChange}
          />
        </fieldset>

      </div>

      <div className={style.actions}>
        <button
          className={style.action_button}
          type="button"
          onClick={onReset}
        >
          Limpiar
        </button>

        <button
          className={style.action_button}
          type="submit"
        >
          Buscar
        </button>
      </div>

    </form>
  );
};