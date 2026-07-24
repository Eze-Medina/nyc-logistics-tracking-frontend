import type { Item } from '../../../../interfaces/item.interface'
// import style from './table.module.css'

interface Props {
  items: Item[]
}

export const Table = (props: Props) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <table style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', border: '1px solid #ccc' }}>
            <th style={{ textAlign: 'center', border: '1px solid #ccc', padding: '8px' }}>CANTIDAD</th>
            <th style={{ textAlign: 'center', border: '1px solid #ccc', padding: '8px' }}>DESCRIPCION</th>
            <th style={{ textAlign: 'center', border: '1px solid #ccc', padding: '8px' }}>PAGADO</th>
            <th style={{ textAlign: 'center', border: '1px solid #ccc', padding: '8px' }}>A COBRAR</th>
          </tr>
        </thead>
        <tbody>
          {
            props.items.map((item, idx) => (
              <tr key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                <td style={{ border: '1px solid #ccc', padding: '5px' }}>{item.quantity}</td>
                <td style={{ border: '1px solid #ccc', padding: '5px' }}>{item.description}</td>
                <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'end' }}>$ {item.paid}</td>
                <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'end' }}>{item.currentAccount ? 'Cuenta corriente' : `$ ${item.remainingAmount}`}</td>
              </tr>
            )
            )
          }
        </tbody>
      </table>
    </div >
  )
}