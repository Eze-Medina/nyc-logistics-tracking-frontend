import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { createGuide } from '../../../helpers/create-guide';

import type { Item } from '../../../../../interfaces/index';
import { formData } from '../../../data/formData';

import { ItemsForm, ReceiverForm, SenderForm, SureForm } from '../index';
import { Guide } from '../../../../../shared/components/guideShipment/Guide';

import style from './guideform.module.css'
import { mapFormToDataGuide } from '../../../helpers/mapFormForDataGuide';

export const GuideForm = () => {

  const { formState, setFormState, onInputChange, onCheckboxChange, onResetForm } = useForm(formData);

  const [data, setData] = useState({});

  const handleAddItem = (newItem: Item) => {
    setFormState(prev => ({
      ...prev,
      items: [...prev.items, newItem],
    }));
  };

  const handleDeleteItem = (index: number) => {
    setFormState(prev => ({
      ...prev,
      items: prev.items.filter((_, idx) => idx !== index),
    }));
  };

  const sendForm = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = mapFormToDataGuide(formState)

    setData({
      ...data
    })

    createGuide(data)

    onResetForm();
  }

  return (
    <section className={style.container}>
      <h2>Generar guia</h2>
      <form className={style.forms} onSubmit={sendForm} >
        <SenderForm
          senderId={formState.sender.id}
          senderIdType={formState.sender.idType}
          senderName={formState.sender.name}
          senderEmail={formState.sender.email}
          senderPhone={formState.sender.phone}
          senderAddress={formState.sender.address}
          provinceOrigin={formState.origin.province}
          cityOrigin={formState.origin.city}
          onInputChange={onInputChange} />

        <ReceiverForm
          receiverId={formState.receiver.id}
          receiverIdType={formState.receiver.idType}
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
          items={formState.items} />

        <SureForm
          secure={formState.sure.secure}
          declaredValue={formState.sure.declaredValue}
          sureValue={formState.sure.sureValue}
          onCheckboxChange={onCheckboxChange}
          onInputChange={onInputChange} />

        <div className={style.div_button} >
          <button
            className={style.button}
            type='submit'>
            Crear guia
          </button>
          <Guide data={data} />
        </div>
      </form>
    </section >
  )
}