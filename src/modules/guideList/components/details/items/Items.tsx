import { Package, Pen, Plus, Trash2 } from 'lucide-react'
import style from './items.module.css'
import type { Item } from '../../../../../interfaces'
import { useState } from 'react'
import { ItemModal } from '../modal/item/ItemModal'
import { deleteItem } from '../../../helpers/delete-item'

interface Props {
  items: Item[],
  code: string,
  onItemUpdated: () => void;
}

const itemInitializer: Item = {
  quantity: 0,
  description: '',
  paid: 0,
  remaining_amount: 0,
  current_account: false,
  id: 0
};

export const Items = (data: Props) => {

  const [modal, setModal] = useState(false)
  const [item, setItem] = useState<Item>(itemInitializer)

  const onEditItem = (itemSelected: Item) => {
    setItem(itemSelected);
    setModal(true)
  }

  const onDeleteItem = async (itemId: number) => {
    const success = await deleteItem(data.code, itemId);

    if (!success) {
      return;
    }

    data.onItemUpdated();
  }

  return (
    <section className={style.items}>
      <div className={style.items_header}>
        <h3 className={style.title}>
          <Package />Items
        </h3>
        <button className={style.items_action} onClick={() => { setItem(itemInitializer); setModal(true) }}> <Plus height={20} /> Agregar</button>
      </div>
      <table className={style.table}>
        <thead>
          <tr className={style.table_tr}>
            <th className={style.table_th}>CANTIDAD</th>
            <th className={style.table_th}>DESCRIPCION</th>
            <th className={style.table_th}>PAGADO</th>
            <th className={style.table_th}>A COBRAR</th>
            <th className={style.table_th}>CUENTA CORRIENTE</th>
            <th className={style.table_th}></th>
          </tr>
        </thead>

        <tbody>
          {data.items.map((item, idx) => (
            <tr key={idx} className={style.table_tr}>
              <td className={style.table_td}> {item.quantity} </td>
              <td className={style.table_td}> {item.description} </td>
              <td className={style.table_td_number}> <p>$</p> {item.paid} </td>
              <td className={style.table_td_number}> <p>$</p> {item.remaining_amount} </td>
              <td className={style.table_td_number}>
                {item.current_account
                  ? 'Si'
                  : 'No'
                }
              </td>
              <td className={`${style.table_td} ${style.table_td_button}`} style={{ textAlign: 'center' }}>
                <button
                  className={style.edit_button}
                  onClick={() => onEditItem(item)}
                  type="button"
                >
                  <Pen
                    width={15}
                  />
                </button>
                <button
                  className={style.edit_button}
                  onClick={() => onDeleteItem(item.id!)}
                  type="button"
                >
                  <Trash2 width={15} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        modal && <ItemModal item={item} code={data.code} setModal={setModal} onItemUpdated={data.onItemUpdated} />
      }
    </section>
  )
}
