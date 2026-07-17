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
            <th style={{ textAlign: 'center', border: '1px solid #ccc', padding: '8px' }}>QUANTITY</th>
            <th style={{ textAlign: 'center', border: '1px solid #ccc', padding: '8px' }}>DESCRIPTION</th>
            <th style={{ textAlign: 'center', border: '1px solid #ccc', padding: '8px' }}>PAID</th>
            <th style={{ textAlign: 'center', border: '1px solid #ccc', padding: '8px' }}>REMAINING AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {
            props.items.map((item, idx) => (
              <tr key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                <td style={{ border: '1px solid #ccc', padding: '5px' }}>{item.quantity}</td>
                <td style={{ border: '1px solid #ccc', padding: '5px' }}>{item.description}</td>
                <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'end' }}>$ {item.paid}</td>
                <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'end' }}>$ {item.remainingAmount}</td>
              </tr>
            )
            )
          }
        </tbody>
      </table>
    </div >
  )
}