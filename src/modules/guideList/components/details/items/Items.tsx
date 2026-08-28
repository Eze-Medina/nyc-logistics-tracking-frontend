import { Package, Pen, Plus } from 'lucide-react'
import style from './items.module.css'
import type { Item } from '../../../../../interfaces'
import { useState } from 'react'
import { ItemModal } from '../modal/item/ItemModal'

interface Props {
  items: Item[]
}

const itemInitializer: Item = {
  quantity: '',
  description: '',
  paid: '',
  remainingAmount: '',
  currentAccount: false,
};

export const Items = (data: Props) => {

  const [modal, setModal] = useState(false)
  const [item, setItem] = useState<Item>(itemInitializer)

  const onEditItem = (itemSelected: Item) => {
    setItem(itemSelected);
    setModal(true)
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
            <th className={style.table_th}></th>
          </tr>
        </thead>

        <tbody>
          {data.items.map((item, idx) => (
            <tr key={idx} className={style.table_tr}>
              <td className={style.table_td}> {item.quantity} </td>
              <td className={style.table_td}> {item.description} </td>
              <td className={style.table_td_number}> <p>$</p> {item.paid.toLocaleString('es-AR')} </td>
              <td className={style.table_td_number}>
                {item.currentAccount
                  ? 'Cuenta corriente'
                  : (<div> <p>$</p> {item.remainingAmount.toLocaleString('es-AR')} </div>)
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        modal && <ItemModal item={item} setModal={setModal} />
      }
    </section>
  )
}
