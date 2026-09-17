import { useEffect, useState } from 'react';

import { InputText, InputSelect } from '../../../../../shared/components/input';

import { getProvinces } from '../../../../../shared/helpers/get-provinces';
import { getCitys } from '../../../../../shared/helpers/get-cities';

import style from './receiverForm.module.css';

interface Props {
  receiverId: number | '';
  receiverIdType: string;
  receiverName: string;
  receiverEmail: string;
  receiverPhone: string;
  receiverAddress: string;
  provinceDestination: string;
  cityDestination: string;
  onInputChange: (event: | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void;
  messagge: string;
}

const types = ['DNI', 'CUIL', 'CUIT'];

export const ReceiverForm = (props: Props) => {
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
      if (!props.provinceDestination) {
        setCitys([]);
        return;
      }

      try {
        const data = await getCitys(props.provinceDestination);

        setCitys(data.map(city => city.name));
      } catch (error) {
        console.error('Error al obtener las ciudades:', error);
        setCitys([]);
      }
    };

    fetchCitys();
  }, [props.provinceDestination]);

  return (
    <div className={style.receiver}>
      <h2>Destinatario</h2>

      <div className={style.receiver_form}>
        <InputText
          type="text"
          labelName="Nombre"
          name="receiver.name"
          value={props.receiverName}
          placeholder="Nombre completo o empresa"
          onInputChange={props.onInputChange}
          pattern="[^a-zA-Z\s.]"
        />

        <InputText
          type="email"
          labelName="Email"
          name="receiver.email"
          value={props.receiverEmail}
          placeholder="Correo electronico"
          onInputChange={props.onInputChange}
          pattern="[^a-zA-Z0-9@._+-]"
        />

        <InputText
          type="tel"
          labelName="Telefono"
          name="receiver.phone"
          value={props.receiverPhone}
          placeholder="Número de telefono"
          onInputChange={props.onInputChange}
          pattern="[^0-9]"
        />

        <InputSelect
          labelName="Provincia"
          name="destination.province"
          value={props.provinceDestination}
          onInputChange={props.onInputChange}
          list={provinces}
        />

        <InputSelect
          labelName="Ciudad"
          name="destination.city"
          value={props.cityDestination}
          onInputChange={props.onInputChange}
          list={citys}
        />

        <InputText
          type="text"
          labelName="Dirección"
          name="destination.address"
          value={props.receiverAddress}
          placeholder="Dirección de destinatario"
          onInputChange={props.onInputChange}
        />

        <InputSelect
          labelName="Identificación"
          name="receiver.id_type"
          value={props.receiverIdType}
          onInputChange={props.onInputChange}
          list={types}
        />

        <InputText
          type="tel"
          labelName="DNI/CUIL/CUIT"
          name="receiver.id_number"
          value={props.receiverId === 0 ? '' : props.receiverId}
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