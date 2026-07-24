import { Document, Page, Text, View } from '@react-pdf/renderer';
import type { DataGuide } from '../../helpers/DataGuide';

import { styles } from './createPDF.styles'

interface dataType {
  data: DataGuide;
}

export const CreatePDF = (props: dataType) => {

  const totalRemainingAmount = props.data.items
    .filter(item => !item.currentAccount)
    .reduce(
      (acc, item) =>
        acc + Number(item.remainingAmount),
      0
    );

  const totalPaid = props.data.items.reduce(
    (acc, item) => acc + Number(item.paid),
    0
  );

  const totalQuantity = props.data.items.reduce(
    (acc, item) => acc + Number(item.quantity),
    0
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.companyBlock}>
            <Text style={styles.companyName}>N.Y.C Logística</Text>
            <Text style={styles.smallText}> Razón Social: Entrega OK S.R.L. </Text>
            <Text style={styles.smallText}> Av. Ejercito Arg 3343 - Santo Tome </Text>
            <Text style={styles.smallText}> Bv. 9 de Julio 2272 - San Francisco </Text>
            <Text style={styles.smallText}> Tel: 3425965538 / 3425540969 | nyclogistica.st@gmail.com </Text>
          </View>

          <View style={styles.docTitleBlock}>
            <Text style={styles.docTitle}>Guía de Envío</Text>
            <Text style={styles.docNumber}> N° 'falta implementar' </Text>
            <Text style={styles.docNumber}> Fecha: {new Date().toLocaleDateString('es-AR')} </Text>

            <View style={styles.badge}> <Text>Documento no válido como factura</Text> </View>
          </View>
        </View>

        {/* Tracking */}
        <Text style={{ fontSize: 8, marginBottom: 8, color: '#333' }}>
          N° de Seguimiento de envío: 'falta implementar'
        </Text>

        {/* Origen / Destino */}
        <View style={styles.section}>
          <View style={styles.box}>
            <Text style={styles.boxTitle}>Remitente</Text>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Nombre:</Text>
              <Text style={styles.fieldValue}> {props.data.sender.name} </Text>
            </View>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Domicilio:</Text>
              <Text style={styles.fieldValue}> {props.data.sender.address} </Text>
            </View>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Localidad:</Text>
              <Text style={styles.fieldValue}> {props.data.origin.city}, {props.data.origin.province} </Text>
            </View>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Teléfono:</Text>
              <Text style={styles.fieldValue}> {props.data.sender.phone} </Text>
            </View>
          </View>

          <View style={[styles.box, styles.boxLast]}>
            <Text style={styles.boxTitle}>Destinatario</Text>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Nombre:</Text>
              <Text style={styles.fieldValue}> {props.data.receiver.name} </Text>
            </View>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Domicilio:</Text>
              <Text style={styles.fieldValue}> {props.data.receiver.address} </Text>
            </View>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Localidad:</Text>
              <Text style={styles.fieldValue}> {props.data.destination.city}, {props.data.destination.province} </Text>
            </View>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Teléfono:</Text>
              <Text style={styles.fieldValue}>
                {props.data.receiver.phone}
              </Text>
            </View>
          </View>
        </View>

        {/* Tabla de items */}
        <View style={styles.table}>
          <View style={styles.tableHeaderRow}>
            <Text style={[styles.th, styles.colCant]}> Cantidad </Text>
            <Text style={[styles.th, styles.colDesc]}> Descripción </Text>
            <Text style={[styles.th, styles.colImp]}> Pagado </Text>
            <Text style={[styles.th, styles.colImp]}> A Cobrar </Text>
          </View>

          {props.data.items.map((item, i) => {
            return (
              <View style={styles.tableRow} key={i}>
                <Text style={[styles.td, styles.colCant]}> {item.quantity} </Text>
                <Text style={[styles.td, styles.colDesc]}> {item.description} </Text>
                <View style={[styles.td, styles.colImp, styles.price]}>
                  <Text>$</Text>
                  <Text>{item.paid}</Text>
                </View>

                <View style={[styles.td, styles.colImp, styles.price]}>
                  {item.currentAccount ? (
                    <Text style={{ width: '100%', textAlign: 'center' }}>
                      Cuenta corriente
                    </Text>
                  ) : (
                    <>
                      <Text>$</Text>
                      <Text>{item.remainingAmount}</Text>
                    </>
                  )}
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.table}>
          <View style={styles.tableHeaderRow}>
            <Text style={[styles.th, styles.colCant]}> {totalQuantity} </Text>
            <Text style={[styles.th, styles.colDesc]}>  </Text>
            <View style={[styles.td, styles.colImp, styles.price]}>
              <Text>$</Text>
              <Text>{totalPaid}</Text>
            </View>
            <View style={[styles.td, styles.colImp, styles.price]}>
              <Text>$</Text>
              <Text>{totalRemainingAmount}</Text>
            </View>
          </View>
        </View>

        {/* Total general */}
        <View style={styles.totalsRow}>
          <Text style={styles.totalLabel}>
            TOTAL
          </Text>

          <Text style={styles.totalValue}>
            $ {totalRemainingAmount + totalPaid}
          </Text>
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
          Condiciones de despacho: sujeto a disposiciones de la ley nacional vigente.
          No se aceptan envíos conteniendo productos corrosivos, tóxicos, radioactivos,
          inflamables y/o explosivos ni mercaderías perecederas. La empresa no se
          responsabiliza por el estado del contenido, el cual se recibe en bulto cerrado
          y no verificado.
        </Text>

        <Text style={styles.trackingFooter}>
          Para seguimiento de su envío, ingrese el número de tracking en nuestro sitio web.
        </Text>

      </Page>
    </Document>
  );
};