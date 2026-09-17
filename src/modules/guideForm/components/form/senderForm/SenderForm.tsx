import { useEffect, useState } from 'react';

import { InputText, InputSelect } from '../../../../../shared/components/input';

import { getProvinces } from '../../../../../shared/helpers/get-provinces';
import { getCitys } from '../../../../../shared/helpers/get-cities';

import style from './senderForm.module.css';

interface Props {
  senderId: number | '';
  senderIdType: string;
  senderName: string;
  senderEmail: string;
  senderPhone: string;
  senderAddress: string;
  provinceOrigin: string;
  cityOrigin: string;
  onInputChange: (event: | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void;
  messagge: string;
}

const types = ['DNI', 'CUIL', 'CUIT'];

export const SenderForm = (props: Props) => {
  const [provinces, setProvinces] = useState<string[]>([]);
  const [citys, setCitys] = useState<string[]>([]);

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
    const fetchCitys = async () => {
      if (!props.provinceOrigin) {
        setCitys([]);
        return;
      }

      try {
        const data = await getCitys(props.provinceOrigin);

        setCitys(data.map(city => city.name));
      } catch (error) {
        console.error('Error al obtener las ciudades:', error);
        setCitys([]);
      }
    };

    fetchCitys();
  }, [props.provinceOrigin]);

  return (
    <div className={style.sender}>
      <h2>Remitente</h2>

      <div className={style.sender_form}>
        <InputText
          type="text"
          labelName="Nombre"
          name="sender.name"
          value={props.senderName}
          placeholder="Nombre completo o empresa"
          onInputChange={props.onInputChange}
          pattern="[^a-zA-Z\s.]"
        />

        <InputText
          type="email"
          labelName="Email"
          name="sender.email"
          value={props.senderEmail}
          placeholder="Correo electronico"
          onInputChange={props.onInputChange}
          pattern="[^a-zA-Z0-9@._+-]"
        />

        <InputText
          type="tel"
          labelName="Telefono"
          name="sender.phone"
          value={props.senderPhone}
          placeholder="Número de telefono"
          onInputChange={props.onInputChange}
          pattern="[^0-9]"
        />

        <InputSelect
          labelName="Provincia"
          name="origin.province"
          value={props.provinceOrigin}
          onInputChange={props.onInputChange}
          list={provinces}
        />

        <InputSelect
          labelName="Ciudad"
          name="origin.city"
          value={props.cityOrigin}
          onInputChange={props.onInputChange}
          list={citys}
        />

        <InputText
          type="text"
          labelName="Dirección"
          name="origin.address"
          value={props.senderAddress}
          placeholder="Dirección de remitente"
          onInputChange={props.onInputChange}
        />

        <InputSelect
          labelName="Identificación"
          name="sender.id_type"
          value={props.senderIdType}
          onInputChange={props.onInputChange}
          list={types}
        />

        <InputText
          type="tel"
          labelName="DNI/CUIL/CUIT"
          name="sender.id_number"
          value={props.senderId === 0 ? '' : props.senderId}
          placeholder="Número de identificación"
          onInputChange={props.onInputChange}
          pattern="[^0-9]"
        />
        <span className={style.error_message}>
          {props.messagge}
        </span>
      </div>
    </div>
  );
};