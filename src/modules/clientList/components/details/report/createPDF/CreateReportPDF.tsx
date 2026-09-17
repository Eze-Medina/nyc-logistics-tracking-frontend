import { Document, Image, Page, Text, View } from "@react-pdf/renderer";

import logo from "../../../../../../assets/logo.png";
import type {
  ClientDto,
  GuideUnpaidSummaryDto,
} from "../../../../../../interfaces";

import { styles } from "./createReport.styles";

interface Props {
  client: ClientDto;
  data: GuideUnpaidSummaryDto[];
}

export const CreateReportPDF = ({
  client,
  data,
}: Props) => {

  const formatMoney = (value: number | string): string => {
    return Number(value).toLocaleString("es-AR");
  };

  const formatId = (
    id: string | number,
    idType: string
  ) => {
    const value = String(id).replace(/\D/g, "");
    const type = idType.toLowerCase();

    if (type === "dni") {
      return Number(value).toLocaleString("es-AR");
    }

    if (type === "cuit" || type === "cuil") {
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

  const getItemsRemaining = (
    guide: GuideUnpaidSummaryDto
  ) => {
    return guide.items.reduce(
      (total, item) =>
        total + Number(item.remaining_amount),
      0
    );
  };

  const getGuideTotal = (
    guide: GuideUnpaidSummaryDto
  ) => {
    return (
      getItemsRemaining(guide) +
      Number(guide.insurance_cost)
    );
  };

  const totalItems = data.reduce(
    (total, guide) =>
      total + getItemsRemaining(guide),
    0
  );

  const totalInsurance = data.reduce(
    (total, guide) =>
      total + Number(guide.insurance_cost),
    0
  );

  const totalToPay =
    totalItems + totalInsurance;

  return (
    <Document>
      <Page
        size="A4"
        style={styles.page}
      >

        {/* HEADER */}

        <View style={styles.header}>

          <View style={styles.companyBlock}>
            <Text style={styles.companyName}>
              N.Y.C Logística
            </Text>

            <Text style={styles.smallText}>
              Av. Ejercito Arg 3343 - Santo Tome
            </Text>

            <Text style={styles.smallText}>
              Bv. 9 de Julio 2272 - San Francisco
            </Text>

            <Text style={styles.smallText}>
              Tel: 3425965538 / 3425540969
            </Text>

            <Text style={styles.smallText}>
              nyclogistica.st@gmail.com
            </Text>
          </View>

          <View style={styles.logoBlock}>
            <Image
              src={logo}
              style={styles.logo}
            />
          </View>

          <View style={styles.documentBlock}>

            <Text style={styles.documentTitle}>
              ESTADO DE CUENTA
            </Text>

            <Text style={styles.documentSubtitle}>
              Reporte de pagos
            </Text>

            <Text style={styles.documentDate}>
              Fecha:{" "}
              {new Date().toLocaleDateString("es-AR")}
            </Text>

          </View>

        </View>

        {/* LINEA */}

        <View style={styles.divider} />

        {/* CLIENTE */}

        <View style={styles.clientSection}>

          <Text style={styles.sectionTitle}>
            Datos del cliente
          </Text>

          <View style={styles.clientBox}>

            <View style={styles.clientColumn}>

              <View style={styles.fieldRow}>
                <Text style={styles.fieldLabel}>
                  Nombre:
                </Text>

                <Text style={styles.fieldValue}>
                  {client.name}
                </Text>
              </View>

              <View style={styles.fieldRow}>
                <Text style={styles.fieldLabel}>
                  Identificación:
                </Text>

                <Text style={styles.fieldValue}>
                  {client.id_type
                    ? `${client.id_type.toUpperCase()} ${formatId(
                      client.id_number,
                      client.id_type
                    )}`
                    : client.id_number}
                </Text>
              </View>

            </View>

            <View style={styles.clientColumn}>

              {client.phone !== 0 && (
                <View style={styles.fieldRow}>
                  <Text style={styles.fieldLabel}>
                    Teléfono:
                  </Text>

                  <Text style={styles.fieldValue}>
                    {client.phone}
                  </Text>
                </View>
              )}

              {client.email && (
                <View style={styles.fieldRow}>
                  <Text style={styles.fieldLabel}>
                    Email:
                  </Text>

                  <Text style={styles.fieldValue}>
                    {client.email}
                  </Text>
                </View>
              )}

            </View>

          </View>

        </View>

        {/* TABLA */}

        <View style={styles.section}>

          <Text style={styles.sectionTitle}>
            Detalle de deuda
          </Text>

          <View style={styles.table}>

            {/* HEADER */}

            <View style={styles.tableHeader}>

              <Text style={[
                styles.tableHeaderText,
                styles.codeColumn
              ]}>
                Código
              </Text>

              <Text style={[
                styles.tableHeaderText,
                styles.insuranceColumn
              ]}>
                Seguro
              </Text>

              <Text style={[
                styles.tableHeaderText,
                styles.remainingColumn
              ]}>
                Items pendientes
              </Text>

              <Text style={[
                styles.tableHeaderText,
                styles.totalColumn
              ]}>
                Total a pagar
              </Text>

            </View>

            {/* ROWS */}

            {data.map((guide, index) => {

              const itemsRemaining =
                getItemsRemaining(guide);

              const guideTotal =
                getGuideTotal(guide);

              return (
                <View
                  key={guide.code}
                  style={[
                    styles.tableRow,
                    index % 2 === 1
                      ? styles.tableRowAlternate
                      : {}
                  ]}
                >

                  <Text style={styles.codeColumn}>
                    {guide.code}
                  </Text>

                  <Text style={styles.insuranceColumn}>
                    {formatMoney(
                      guide.insurance_cost
                    )}
                  </Text>

                  <Text style={styles.remainingColumn}>
                    {formatMoney(
                      itemsRemaining
                    )}
                  </Text>

                  <Text style={styles.totalColumn}>
                    {formatMoney(
                      guideTotal
                    )}
                  </Text>

                </View>
              );
            })}

          </View>

        </View>

        {/* RESUMEN */}

        <View style={styles.summarySection}>

          <View style={styles.summary}>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>
                Total items pendientes
              </Text>

              <Text style={styles.summaryValue}>
                $ {formatMoney(totalItems)}
              </Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>
                Total seguros
              </Text>

              <Text style={styles.summaryValue}>
                $ {formatMoney(totalInsurance)}
              </Text>
            </View>

          </View>

          <View style={styles.totalToPay}>

            <Text style={styles.totalToPayLabel}>
              TOTAL A PAGAR
            </Text>

            <Text style={styles.totalToPayValue}>
              $ {formatMoney(totalToPay)}
            </Text>

          </View>

        </View>

        {/* FOOTER */}

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            Este documento corresponde a un estado de
            cuenta y no constituye una factura.
          </Text>

          <Text style={styles.footerText}>
            N.Y.C Logística — Estado de cuenta del cliente
          </Text>

        </View>

      </Page>
    </Document>
  );
};