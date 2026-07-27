import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    padding: 24,
    fontSize: 9,
    fontFamily: 'Helvetica',
    color: '#1a1a1a',
  },

  // =========================
  // TABLA
  // =========================

  table: {
    width: '100%',
    marginTop: 4,
    marginBottom: 8,
    border: '1px solid #1a1a1a',
  },

  tableRow: {
    flexDirection: 'row',
    width: '100%',
  },

  tableHeaderRow: {
    flexDirection: 'row',
    width: '100%',
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

  lastColumn: {
    borderRight: 'none',
  },

  // =========================
  // COLUMNAS
  // =========================

  colCant: {
    width: '10%',
  },

  colDesc: {
    width: '40%',
  },

  colImp: {
    width: '25%',
  },

  // =========================
  // IMPORTES
  // =========================

  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  currencySymbol: {
    textAlign: 'left',
  },

  currencyValue: {
    textAlign: 'right',
  },

  currentAccount: {
    width: '100%',
    textAlign: 'center',
  },

  // =========================
  // FILA DE TOTALES
  // =========================

  totalsRow: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#e8e8e8',
  },

  totalsCell: {
    padding: 4,
    fontSize: 8.5,
    fontWeight: 700,
    borderRight: '1px solid #1a1a1a',
  },

  totalsCant: {
    width: '10%',
    textAlign: 'center',
  },

  totalsDesc: {
    width: '40%',
  },

  totalsAmount: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // =========================
  // HEADER
  // =========================

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  companyBlock: {
    maxWidth: 260,
  },

  companyName: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 2,
  },

  logoBlock: {
    width: '20%',
  },

  logo: {
    width: 50,
    height: 50,
  },


  smallText: {
    fontSize: 7.5,
    color: '#333',
    lineHeight: 1.3,
  },

  docTitleBlock: {
    alignItems: 'flex-end',
  },

  docTitle: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 2,
  },

  docTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  docNumber: {
    fontSize: 9,
    marginBottom: 2,
  },

  badge: {
    border: '1px solid #1a1a1a',
    paddingVertical: 2,
    paddingHorizontal: 6,
    fontSize: 7,
    marginTop: 4,
    textAlign: 'center',
  },

  // =========================
  // REMITENTE / DESTINATARIO
  // =========================

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

  boxLast: {
    marginRight: 0,
  },

  boxTitle: {
    fontSize: 8,
    fontWeight: 700,
    marginBottom: 4,
    textTransform: 'uppercase',
    color: '#555',
  },

  fieldRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },

  fieldLabel: {
    width: 65,
    fontSize: 8,
    color: '#555',
  },

  fieldValue: {
    fontSize: 8.5,
    flex: 1,
    fontWeight: 500,
  },

  // =========================
  // SEGURO Y TOTAL
  // =========================

  totalInsuranceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  insuranceSection: {
    width: '70%',
  },

  insuranceText: {
    fontSize: 9,
  },

  totalToPaySection: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  totalToPayLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 8,
  },

  totalToPayValue: {
    fontSize: 10,
    fontWeight: 'bold',
  },

  // =========================
  // FIRMA
  // =========================

  footerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },

  signBox: {
    width: '30%',
    borderTop: '1px solid #1a1a1a',
    paddingTop: 4,
    textAlign: 'center',
    fontSize: 7.5,
  },

  // =========================
  // NOTAS
  // =========================

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