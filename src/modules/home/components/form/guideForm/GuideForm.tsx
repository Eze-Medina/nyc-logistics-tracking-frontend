import { useEffect, useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { createGuide } from '../../../helpers/create-guide';
import { DataGuide } from '../../../../../shared/helpers/DataGuide';

import type { Form, Item } from '../../../../../interfaces/index';

import { ItemsForm, ReceiverForm, SenderForm, SureForm } from '../index';
import { InputText } from '../../input';
import { Guide } from '../../../../../shared/components/guideShipment/Guide';

import style from './guideform.module.css'

const formData: Form = {
  sender: {
    name: '',
    email: '',
    phone: '',
    address: '',
  },
  receiver: {
    name: '',
    email: '',
    phone: '',
    address: '',
  },
  origin: {
    province: '',
    city: '',
  },
  destination: {
    province: '',
    city: '',
  },
  sure: {
    secure: false,
    declaredValue: 0,
    sureValue: 0,
  },
  guia: {
    numero: 0
  }
};

const items: Item[] = [];

export const GuideForm = () => {

  const { formState, onInputChange, onCheckboxChange, onResetForm } = useForm(formData);

  const [newItems, setNewItems] = useState<Item[]>(items);
  const [data, setData] = useState<DataGuide>(new DataGuide({
    ...formState,
    items: [],
  }));

  const [first, setfirst] = useState({})

  const handleAddItem = (newItem: Item) => {
    setNewItems(prev => [...prev, newItem]);
  };

  const handleDeleteItem = (index: number) => {
    setNewItems(prevItems =>
      prevItems.filter((_, idx) => idx !== index)
    );
  };

  useEffect(() => {
    setData(
      new DataGuide({
        ...formState,
        items: newItems.map(item => ({
          ...item,
          quantity: Number(item.quantity),
          paid: Number(item.paid),
          remainingAmount: Number(item.remainingAmount),
        })),
        sure: {
          ...formState.sure,
          sureValue: formState.sure.declaredValue * 0.05,
        },
      })
    );
  }, [formState, newItems]);


  const sendForm = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    createGuide(data)

    setfirst({
      ...data
    })

    console.log(first)
    // generar pdf a partir del objeto respuesta del createGuide, utilizando un useEffecte para dispara comportamiento al recibirlo

    onResetForm();
  }

  return (
    <section className={style.container}>
      <h2>Generar guia</h2>
      <form className={style.forms} onSubmit={sendForm}>
        <SenderForm
          senderName={formState.sender.name}
          senderEmail={formState.sender.email}
          senderPhone={formState.sender.phone}
          senderAddress={formState.sender.address}
          provinceOrigin={formState.origin.province}
          cityOrigin={formState.origin.city}
          onInputChange={onInputChange} />

        <ReceiverForm
          receiverName={formState.receiver.name}
          receiverEmail={formState.receiver.email}
          receiverPhone={formState.receiver.phone}
          receiverAddress={formState.receiver.address}
          provinceDestination={formState.destination.province}
          cityDestination={formState.destination.city}
          onInputChange={onInputChange} />

        <ItemsForm
          onAddItem={handleAddItem}
          onDeleteItem={handleDeleteItem}
          items={newItems} />

        <SureForm
          secure={formState.sure.secure}
          declaredValue={formState.sure.declaredValue}
          sureValue={formState.sure.sureValue}
          onCheckboxChange={onCheckboxChange}
          onInputChange={onInputChange} />

        <div className={style.div_button} >
          <InputText type='number' labelName='Número guia' name='guia.numero' placeholder='numero de guia' value={formState.guia.numero} onInputChange={onInputChange} />
          <Guide data={data} numero={formState.guia.numero} />
          <button
            style={{ display: 'none' }}
            className={style.button}
            type='submit'>
            Crear guia
          </button>
        </div>
      </form>
    </section >
  )
}
