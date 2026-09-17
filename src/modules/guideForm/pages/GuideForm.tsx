import { useState } from 'react';

import { createGuide, mapFormToGuideDto } from '../helpers';
import { useForm } from '../../../shared/hooks/useForm';
import { formData } from '../data/formData';

import type { Item } from '../../../interfaces';

import { ItemsForm, ReceiverForm, SenderForm } from '../components';

import style from './guideform.module.css';
import { Shipment } from '../components/form/shipment/Shipment';
import { setError } from '../../../shared/helpers/set-errro';

export const GuideForm = () => {

  const [errorMessage, setErrorMessage] = useState({
    sender: '',
    receiver: '',
    items: '',
    route_type: ''
  });

  const {
    formState,
    setFormState,
    onInputChange,
    onCheckboxChange,
    onResetForm
  } = useForm(formData);


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

    const errors = setError(formState);

    if (Object.values(errors).some(error => error !== '')) {
      setErrorMessage(errors);
      return;
    }

    setErrorMessage({
      sender: '',
      receiver: '',
      items: '',
      route_type: '',
    });

    const data = mapFormToGuideDto(formState);

    const resp = await createGuide(data);

    if (!resp) {
      return;
    }

    onResetForm();
  };

  return (
    <section className={style.container}>
      <div className={style.section}>
        <h2>Generar guía</h2>

        <form className={style.forms} onSubmit={sendForm}>
          <div className={style.forms_section_client}>

            <SenderForm
              senderId={formState.sender.id_number}
              senderIdType={formState.sender.id_type}
              senderName={formState.sender.name}
              senderEmail={formState.sender.email}
              senderPhone={formState.sender.phone}
              senderAddress={formState.origin.address}
              provinceOrigin={formState.origin.province}
              cityOrigin={formState.origin.city}
              onInputChange={onInputChange}
              messagge={errorMessage.sender}
            />

            <ReceiverForm
              receiverId={formState.receiver.id_number}
              receiverIdType={formState.receiver.id_type}
              receiverName={formState.receiver.name}
              receiverEmail={formState.receiver.email}
              receiverPhone={formState.receiver.phone}
              receiverAddress={formState.destination.address}
              provinceDestination={formState.destination.province}
              cityDestination={formState.destination.city}
              onInputChange={onInputChange}
              messagge={errorMessage.receiver}
            />

            <ItemsForm
              onAddItem={handleAddItem}
              onDeleteItem={handleDeleteItem}
              items={formState.items}
              messagge={errorMessage.items}
            />

          </div>

          <div className={style.forms_section_shipment}>

            <Shipment
              service={formState.route_type}
              insurance={formState.insurance}
              note={formState.note}
              onInputChange={onInputChange}
              onCheckboxChange={onCheckboxChange}
              messagge={errorMessage.route_type}
            />

            <div className={style.div_button}>
              <button
                className={style.button}
                type="submit"
              >
                Crear guía
              </button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
};