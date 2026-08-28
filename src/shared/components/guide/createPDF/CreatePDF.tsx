import { Document, Image, Page, Text, View } from '@react-pdf/renderer';

import type { GuideDto } from '../../../../interfaces';
import logo from '../../../../assets/logo.png';
import { styles } from './createPDF.styles'

interface dataType {
  data: GuideDto;
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

  const formatNumber = (value: number | string): string => {
    return Number(value).toLocaleString('es-AR');
  };

  const formatId = (id: string | number, idType: string) => {
    const value = String(id).replace(/\D/g, '');
    const type = idType.toLowerCase();

    if (type === 'dni') {
      return Number(value).toLocaleString('es-AR');
    }

    if (type === 'cuit' || type === 'cuil') {
      if (value.length < 3) {
        return value;
      }

      const firstTwo = value.slice(0, 2);
      const last = value.slice(-1);
      const middle = value.slice(2, -1);

      return `${firstTwo}-${middle}-${last}`;
    }

    return value;
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* Header */}
        <View style={styles.headerRow}>

          {/* Información de la empresa */}
          <View style={styles.companyBlock}>
            <Text style={styles.companyName}>N.Y.C Logística</Text>
            <Text style={styles.smallText}>
              Av. Ejercito Arg 3343 - Santo Tome
            </Text>
            <Text style={styles.smallText}>
              Bv. 9 de Julio 2272 - San Francisco
            </Text>
            <Text style={styles.smallText}>
              Tel: 3425965538 / 3425540969 | nyclogistica.st@gmail.com
            </Text>
          </View>

          {/* Logo */}
          <View style={styles.logoBlock}>
            <Image
              src={logo}
              style={styles.logo}
            />
          </View>

          {/* Información del documento */}
          <View style={styles.docTitleBlock}>

            <View style={styles.docTitleRow}>
              <Text style={styles.docTitle}>
                Guía de Envío
              </Text>

              <Text style={styles.docTitle}>
                N° {props.data.code}
              </Text>
            </View>

            <Text style={styles.docNumber}>
              Fecha: {new Date().toLocaleDateString('es-AR')}
            </Text>

            <View style={styles.badge}>
              <Text>
                Documento no válido como factura
              </Text>
            </View>

          </View>

        </View>

        {/* Tracking */}
        {/* <Text style={{ fontSize: 8, marginBottom: 8, color: '#333' }}>
          N° de Seguimiento de envío: 'falta implementar'
        </Text> */}

        {/* Origen / Destino */}
        <View style={styles.section}>
          <View style={styles.box}>
            <Text style={styles.boxTitle}>Remitente</Text>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Nombre:</Text>
              <Text style={styles.fieldValue}>
                {props.data.sender.name}
              </Text>
            </View>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>{props.data.sender.id_type.toUpperCase()}:{' '}</Text>
              <Text style={styles.fieldValue}>
                {formatId(
                  props.data.sender.id_number,
                  props.data.sender.id_type
                )}
              </Text>
            </View>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Domicilio:</Text>
              <Text style={styles.fieldValue}>
                {props.data.sender.address}
              </Text>
            </View>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Localidad:</Text>
              <Text style={styles.fieldValue}>
                {props.data.origin.city}, {props.data.origin.province}
              </Text>
            </View>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Teléfono:</Text>
              <Text style={styles.fieldValue}>
                {props.data.sender.phone}
              </Text>
            </View>
          </View>

          <View style={[styles.box, styles.boxLast]}>
            <Text style={styles.boxTitle}>Destinatario</Text>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Nombre:</Text>
              <Text style={styles.fieldValue}>
                {props.data.receiver.name}
              </Text>
            </View>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>{props.data.receiver.id_type.toUpperCase()}:{' '}</Text>
              <Text style={styles.fieldValue}>
                {formatId(
                  props.data.receiver.id_number,
                  props.data.receiver.id_type
                )}
              </Text>
            </View>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Domicilio:</Text>
              <Text style={styles.fieldValue}>
                {props.data.receiver.address}
              </Text>
            </View>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Localidad:</Text>
              <Text style={styles.fieldValue}>
                {props.data.destination.city},{' '}
                {props.data.destination.province}
              </Text>
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

          {/* Header */}
          <View style={styles.tableHeaderRow}>
            <Text style={[styles.th, styles.colCant]}>
              Cantidad
            </Text>

            <Text style={[styles.th, styles.colDesc]}>
              Descripción
            </Text>

            <Text style={[styles.th, styles.colImp]}>
              Pagado
            </Text>

            <Text style={[styles.th, styles.colImp, styles.lastColumn]}>
              A Cobrar
            </Text>
          </View>

          {/* Items */}
          {props.data.items.map((item, i) => (
            <View style={styles.tableRow} key={i}>

              <Text style={[styles.tdFirst, styles.colCant]}>
                {item.quantity}
              </Text>

              <Text style={[styles.td, styles.colDesc]}>
                {item.description}
              </Text>

              <View style={[styles.td, styles.colImp, styles.price]}>
                <Text style={styles.currencySymbol}>
                  $
                </Text>

                <Text style={styles.currencyValue}>
                  {formatNumber(item.paid)}
                </Text>
              </View>

              <View style={[styles.td, styles.colImp, styles.price, styles.lastColumn]}>
                {item.currentAccount ? (
                  <Text style={styles.currentAccount}>
                    Cuenta corriente
                  </Text>
                ) : (
                  <>
                    <Text style={styles.currencySymbol}>
                      $
                    </Text>

                    <Text style={styles.currencyValue}>
                      {formatNumber(item.remainingAmount)}
                    </Text>
                  </>
                )}
              </View>

            </View>
          ))}


          {/* Totales */}

          <View style={styles.totalsRow}>

            <Text style={[
              styles.totalsCell,
              styles.totalsCant
            ]}>
              Total: {totalQuantity}
            </Text>

            <Text style={[
              styles.totalsCell,
              styles.totalsDesc
            ]}>
            </Text>

            <View style={[
              styles.totalsCell,
              styles.totalsAmount
            ]}>
              <Text>$</Text>
              <Text>{formatNumber(totalPaid)}</Text>
            </View>

            <View style={[
              styles.totalsCell,
              styles.totalsAmount,
              styles.lastColumn
            ]}>
              <Text>$</Text>
              <Text>{formatNumber(totalRemainingAmount)}</Text>
            </View>

          </View>
        </View>

        {/* Seguro y total a pagar */}
        <View style={styles.totalInsuranceSection}>

          {/* Información del seguro */}
          <View style={styles.insuranceSection}>
            <Text style={styles.insuranceText}>
              <Text style={styles.bold}>Seguro:</Text>{' '}
              {props.data.insurance.contracted ? 'Si' : 'No'}

              {props.data.insurance.contracted && (
                <>
                  {'  |  '}
                  <Text style={styles.bold}>Valor declarado:</Text>{' '}
                  $ {formatNumber(props.data.insurance.declaredValue)}
                  {'  |  '}
                  <Text style={styles.bold}>Valor seguro:</Text>{' '}
                  $ {formatNumber(props.data.insurance.insuranceCost)}
                </>
              )}
            </Text>
          </View>

          {/* Total a pagar */}
          <View style={styles.totalToPaySection}>
            <Text style={styles.totalToPayLabel}>
              Total a pagar:
            </Text>

            <Text style={styles.totalToPayValue}>
              $ {formatNumber(totalRemainingAmount + props.data.insurance.insuranceCost)}
            </Text>
          </View>

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

        {/* <Text style={styles.trackingFooter}>
          Para seguimiento de su envío, ingrese el número de tracking en nuestro sitio web.
        </Text> */}

      </Page>
    </Document>
  );
};