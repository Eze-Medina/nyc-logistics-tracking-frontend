import { useEffect, useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { createGuide } from '../../../helpers/create-guide';
import { DataGuide } from '../../../../../shared/helpers/DataGuide';
import type { Form } from '../../../../../interfaces/form.interface';
import type { Item } from '../../../../../interfaces/item.interface';

import { SenderForm } from '../senderForm/SenderForm';
import { ReceiverForm } from '../receiverForm/ReceiverForm';
import { ItemsForm } from '../itemsForm/ItemsForm';
import { Table } from '../../table/Table';
import { Guide } from '../../../../../shared/components/guideShipment/Guide';

import style from './guideform.module.css'

const formData: Form = {
  senderName: 'Ezequiel Medina',
  senderAddress: 'tec.medinaeze@gmail.com',
  senderNumber: 3425502666,
  senderDirection: 'Las heras 7460',
  provinceOrigin: 'STE',
  cityOrigin: 'STO',

  receiverName: 'Pochito Lopez',
  receiverAddress: 'poc.lopez@gmail.com',
  receiverNumber: 3425406333,
  receiverDirection: 'Los granitos 1430',
  provinceDestination: 'STE',
  cityDestination: 'STO',
}

const items: Item[] = [
  {
    quantity: 10,
    description: 'Item 1',
    paid: 10000,
    remainingAmount: 4500
  },
  {
    quantity: 10,
    description: 'Item 2',
    paid: 14000,
    remainingAmount: 5050
  },
  {
    quantity: 10,
    description: 'Item 3',
    paid: 3000,
    remainingAmount: 500
  }
]

export const GuideForm = () => {

  const { formState, onInputChange, onResetForm } = useForm(formData);

  const [newItems, setNewItems] = useState<Item[]>(items);
  const [data, setData] = useState<DataGuide>(new DataGuide({
    ...formState,
    senderNumber: Number(formState.senderNumber),
    receiverNumber: Number(formState.receiverNumber),
    items: [],
  }));

  const handleAddItem = (newItem: Item) => {
    setNewItems(prev => [...prev, newItem]);
  };

  useEffect(() => {
    setData(
      new DataGuide({
        ...formState,
        senderNumber: Number(formState.senderNumber),
        receiverNumber: Number(formState.receiverNumber),
        items: newItems.map(item => ({
          ...item,
          quantity: Number(item.quantity),
          paid: Number(item.paid),
          remainingAmount: Number(item.remainingAmount),
        })),
      })
    );
  }, [formState, newItems]);


  const sendForm = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    createGuide(data)

    // generar pdf a partir del objeto respuesta del createGuide, utilizando un useEffecte para dispara comportamiento al recibirlo

    onResetForm();
  }

  return (
    <section className={style.container}>
      <h2>Create guide</h2>
      <form className={style.forms} onSubmit={sendForm}>
        <SenderForm
          senderName={formState.senderName}
          senderAddress={formState.senderAddress}
          senderNumber={formState.senderNumber}
          senderDirection={formState.senderDirection}
          provinceOrigin={formState.provinceOrigin}
          cityOrigin={formState.cityOrigin}
          onInputChange={onInputChange} />
        <ReceiverForm
          receiverName={formState.receiverName}
          receiverAddress={formState.receiverAddress}
          receiverNumber={formState.receiverNumber}
          receiverDirection={formState.receiverDirection}
          provinceDestination={formState.provinceDestination}
          cityDestination={formState.cityDestination}
          onInputChange={onInputChange} />
        <ItemsForm
          onAddItem={handleAddItem}
        />

        <Table items={newItems} />

        <div style={{
          gridColumnStart: '1',
          gridColumnEnd: '3',
          gap: '15px',
          display: 'flex'
        }}>
          <div style={{
            display: 'flex',
            gap: '15px',
            alignItems: 'center'

          }}>
            <p style={{ margin: '5px' }}>TOTAL AMOUT</p>
            <p style={{ margin: '5px' }}>$1000</p>
          </div>
          <button
            type='submit'
            style={{
              border: '0px solid',
              backgroundColor: '#2e2e2e',
              color: '#dfdfdf',
              borderRadius: '5px',
              padding: '10px',
              margin: '15px 0px 15px 0px'
            }}>
            Create guide
          </button>
        </div>
      </form>
      <Guide data={data} />
    </section >
  )
}
