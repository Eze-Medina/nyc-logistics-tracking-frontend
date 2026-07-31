import { useState } from 'react';

import { createGuide, mapFormToGuideDto } from '../../../helpers';
import { useForm } from '../../../hooks/useForm';
import { formData } from '../../../data/formData';

import type { GuideDto, Item } from '../../../../../interfaces';

import { ItemsForm, ReceiverForm, SenderForm, InsuranceForm, ShipmentGuide } from '../../';

import style from './guideform.module.css';

export const GuideForm = () => {

  const {
    formState,
    setFormState,
    onInputChange,
    onCheckboxChange,
    onResetForm
  } = useForm(formData);

  const [data, setData] = useState<GuideDto | null>(null);
  const [code, setCode] = useState<string | null>(null);

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

  const sendForm = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = mapFormToGuideDto(formState);

    const resp = await createGuide(data);

    if (!resp) {
      return;
    }

    setData(resp.guide);
    setCode(resp.code);

    onResetForm();
  };

  return (
    <section className={style.container}>
      <h2>Generar guía</h2>

      <form className={style.forms} onSubmit={sendForm}>
        <SenderForm
          senderId={formState.sender.id_number}
          senderIdType={formState.sender.id_type}
          senderName={formState.sender.name}
          senderEmail={formState.sender.email}
          senderPhone={formState.sender.phone}
          senderAddress={formState.sender.address}
          provinceOrigin={formState.origin.province}
          cityOrigin={formState.origin.city}
          onInputChange={onInputChange}
        />

        <ReceiverForm
          receiverId={formState.receiver.id_number}
          receiverIdType={formState.receiver.id_type}
          receiverName={formState.receiver.name}
          receiverEmail={formState.receiver.email}
          receiverPhone={formState.receiver.phone}
          receiverAddress={formState.receiver.address}
          provinceDestination={formState.destination.province}
          cityDestination={formState.destination.city}
          onInputChange={onInputChange}
        />

        <ItemsForm
          onAddItem={handleAddItem}
          onDeleteItem={handleDeleteItem}
          items={formState.items}
        />

        <InsuranceForm
          contracted={formState.insurance.contracted}
          declaredValue={formState.insurance.declaredValue}
          insuranceCost={formState.insurance.insuranceCost}
          onCheckboxChange={onCheckboxChange}
          onInputChange={onInputChange}
        />

        <div className={style.div_button}>
          <button
            className={style.button}
            type="submit"
          >
            Crear guía
          </button>

          <ShipmentGuide data={data} code={code} />
        </div>
      </form>
    </section>
  );
};