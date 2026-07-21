import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { DataGuide } from '../../helpers/DataGuide';

const styles = StyleSheet.create({
  page: {
    padding: 24,
    fontSize: 9,
    fontFamily: 'Helvetica',
    color: '#1a1a1a',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottom: '2px solid #1a1a1a',
    paddingBottom: 8,
    marginBottom: 8,
  },
  companyBlock: { maxWidth: 260 },
  companyName: { fontSize: 16, fontWeight: 700, marginBottom: 2 },
  smallText: { fontSize: 7.5, color: '#333', lineHeight: 1.3 },
  docTitleBlock: { alignItems: 'flex-end' },
  docTitle: { fontSize: 14, fontWeight: 700, marginBottom: 2 },
  docNumber: { fontSize: 9, marginBottom: 2 },
  badge: {
    border: '1px solid #1a1a1a',
    paddingVertical: 2,
    paddingHorizontal: 6,
    fontSize: 7,
    marginTop: 4,
    textAlign: 'center',
  },
  section: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  box: {
    flex: 1,
    border: '1px solid #999',
    padding: 6,
    marginRight: 6,
  },
  boxLast: { marginRight: 0 },
  boxTitle: {
    fontSize: 8,
    fontWeight: 700,
    marginBottom: 4,
    textTransform: 'uppercase',
    color: '#555',
  },
  fieldRow: { flexDirection: 'row', marginBottom: 2 },
  fieldLabel: { width: 65, fontSize: 8, color: '#555' },
  fieldValue: { fontSize: 8.5, flex: 1, fontWeight: 500 },
  table: {
    marginTop: 4,
    marginBottom: 8,
    border: '1px solid #1a1a1a',
  },
  tableRow: { flexDirection: 'row' },
  tableHeaderRow: {
    flexDirection: 'row',
    backgroundColor: '#e8e8e8',
    borderBottom: '1px solid #1a1a1a',
  },
  th: {
    padding: 4,
    fontSize: 7.5,
    fontWeight: 700,
    borderRight: '1px solid #1a1a1a',
  },
  td: {
    padding: 4,
    fontSize: 8.5,
    borderRight: '1px solid #ccc',
    borderTop: '1px solid #ccc',
  },
  colCant: { width: '10%' },
  colDesc: { width: '55%' },
  colCod: { width: '15%' },
  colImp: { width: '20%', textAlign: 'right' },
  totalsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTop: '2px solid #1a1a1a',
    paddingTop: 4,
    marginTop: -1,
  },
  totalLabel: { fontSize: 10, fontWeight: 700, marginRight: 8 },
  totalValue: { fontSize: 12, fontWeight: 700 },
  footerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  signBox: {
    width: '30%',
    borderTop: '1px solid #1a1a1a',
    paddingTop: 4,
    textAlign: 'center',
    fontSize: 7.5,
  },
  notes: {
    fontSize: 6.5,
    color: '#555',
    lineHeight: 1.4,
    marginTop: 10,
    borderTop: '1px solid #ccc',
    paddingTop: 6,
  },
  trackingFooter: {
    marginTop: 14,
    fontSize: 7,
    textAlign: 'center',
    color: '#555',
  },
});

// const formatMoney = (n: number) =>
//   n.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

interface dataType {
  data: DataGuide
}

export const CreatePDF = (props: dataType) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.companyBlock}>
            <Text style={styles.companyName}>N.Y.C Logística</Text>
            <Text style={styles.smallText}>Razón Social: Entrega OK S.R.L.</Text>
            <Text style={styles.smallText}>Bv. 9 de Julio 2272 - San Francisco</Text>
            <Text style={styles.smallText}>
              Tel: 3425965538 / 3425540969  | nyclogistica.st@gmail.com
            </Text>
          </View>
          <View style={styles.docTitleBlock}>
            <Text style={styles.docTitle}>Guía de Envío</Text>
            <Text style={styles.docNumber}>N° 'falta implementar'</Text>
            <Text style={styles.docNumber}>Fecha: {new Date().toLocaleDateString("es-AR")}</Text>
            <View style={styles.badge}>
              <Text>Documento no válido como factura</Text>
            </View>
          </View>
        </View>

        {/* Tracking */}
        <Text style={{ fontSize: 8, marginBottom: 8, color: '#333' }}>
          N° de Seguimiento de envío: 'falta implementar'
        </Text>

        {/* Origen / Destino */}
        <View style={styles.section}>
          <View style={styles.box}>
            <Text style={styles.boxTitle}>Origen / Remitente</Text>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Nombre:</Text>
              <Text style={styles.fieldValue}>{props.data.sender.name}</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Domicilio:</Text>
              <Text style={styles.fieldValue}>{props.data.sender.address}</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Localidad:</Text>
              <Text style={styles.fieldValue}>
                {props.data.origin.city}, {props.data.origin.province}
              </Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Teléfono:</Text>
              <Text style={styles.fieldValue}>{props.data.sender.phone}</Text>
            </View>
          </View>

          <View style={[styles.box, styles.boxLast]}>
            <Text style={styles.boxTitle}>Destino / Destinatario</Text>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Nombre:</Text>
              <Text style={styles.fieldValue}>{props.data.sender.name}</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Domicilio:</Text>
              <Text style={styles.fieldValue}>{props.data.sender.address}</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Localidad:</Text>
              <Text style={styles.fieldValue}>
                {props.data.destination.city}, {props.data.destination.province}
              </Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Teléfono:</Text>
              <Text style={styles.fieldValue}>{props.data.receiver.phone}</Text>
            </View>
          </View>
        </View>

        {/* Tabla de items */}
        <View style={styles.table}>
          <View style={styles.tableHeaderRow}>
            <Text style={[styles.th, styles.colCant]}>Cant.</Text>
            <Text style={[styles.th, styles.colDesc]}>Descripción</Text>
            <Text style={[styles.th, styles.colImp]}>Pagado</Text>
            <Text style={[styles.th, styles.colImp, { borderRight: 0 }]}>
              A Cobrar
            </Text>
          </View>

          {props.data.items.map((item, i) => (
            <View style={styles.tableRow} key={i}>
              <Text style={[styles.td, styles.colCant]}> {item.quantity} </Text>
              <Text style={[styles.td, styles.colDesc]}> {item.description} </Text>
              <Text style={[styles.td, styles.colImp]}> ${item.paid} </Text>
              <Text style={[styles.td, styles.colImp, { borderRight: 0 }]}> ${item.remainingAmount} </Text>
            </View>
          ))}
        </View>

        <View style={styles.totalsRow}>
          <Text style={styles.totalLabel}>TOTAL</Text>
          <Text style={styles.totalValue}>${1000}</Text>
        </View>

        {/* Firma */}
        <View style={styles.footerSection}>
          <View style={styles.signBox}>
            <Text>Firma</Text>
          </View>
          <View style={styles.signBox}>
            <Text>Aclaración</Text>
          </View>
          <View style={styles.signBox}>
            <Text>DNI</Text>
          </View>
        </View>

        {/* Notas legales */}
        <Text style={styles.notes}>
          Condiciones de despacho: sujeto a disposiciones de la ley nacional vigente. No se aceptan
          envíos conteniendo productos corrosivos, tóxicos, radioactivos, inflamables y/o explosivos ni
          mercaderías perecederas. La empresa no se responsabiliza por el estado del contenido, el cual
          se recibe en bulto cerrado y no verificado.
        </Text>

        <Text style={styles.trackingFooter}>
          Para seguimiento de su envío, ingrese el número de tracking en nuestro sitio web.
        </Text>
      </Page>
    </Document>
  )
};