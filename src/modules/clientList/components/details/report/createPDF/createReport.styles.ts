import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({

  page: {
    padding: 40,
    fontSize: 9,
    fontFamily: "Helvetica",
    color: "#222222",
  },

  /* =========================
     HEADER
  ========================= */

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  companyBlock: {
    width: "42%",
  },

  companyName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#111111",
  },

  smallText: {
    fontSize: 7.5,
    color: "#555555",
    marginBottom: 2,
  },

  logoBlock: {
    width: "18%",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 55,
    height: 55,
    objectFit: "contain",
  },

  documentBlock: {
    width: "40%",
    alignItems: "flex-end",
  },

  documentTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 3,
  },

  documentSubtitle: {
    fontSize: 9,
    color: "#555555",
    marginBottom: 6,
  },

  documentDate: {
    fontSize: 8,
    color: "#555555",
  },

  divider: {
    height: 1,
    backgroundColor: "#222222",
    marginBottom: 18,
  },

  /* =========================
     SECTIONS
  ========================= */

  section: {
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 7,
    color: "#222222",
  },

  clientSection: {
    marginBottom: 18,
  },

  /* =========================
     CLIENTE
  ========================= */

  clientBox: {
    flexDirection: "row",
    border: "1 solid #d2d2d2",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fafafa",
  },

  clientColumn: {
    width: "50%",
  },

  fieldRow: {
    flexDirection: "row",
    marginBottom: 5,
  },

  fieldLabel: {
    width: 85,
    fontWeight: "bold",
    color: "#444444",
  },

  fieldValue: {
    flex: 1,
    color: "#222222",
  },

  /* =========================
     TABLA
  ========================= */

  table: {
    border: "1 solid #cccccc",
    borderRadius: 4,
    overflow: "hidden",
  },

  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111111",
    minHeight: 30,
  },

  tableHeaderText: {
    color: "#ffffff",
    fontSize: 8,
    fontWeight: "bold",
  },

  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 30,
    borderBottom: "1 solid #e2e2e2",
  },

  tableRowAlternate: {
    backgroundColor: "#f7f7f7",
  },

  codeColumn: {
    width: "30%",
    paddingLeft: 9,
  },

  insuranceColumn: {
    width: "20%",
    textAlign: "right",
    paddingRight: 9,
  },

  remainingColumn: {
    width: "25%",
    textAlign: "right",
    paddingRight: 9,
  },

  totalColumn: {
    width: "25%",
    textAlign: "right",
    paddingRight: 9,
    fontWeight: "bold",
  },

  /* =========================
     RESUMEN
  ========================= */

  summarySection: {
    marginTop: 18,
    alignItems: "flex-end",
  },

  summary: {
    width: "55%",
    marginBottom: 8,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderBottom: "1 solid #eeeeee",
  },

  summaryLabel: {
    color: "#555555",
  },

  summaryValue: {
    fontWeight: "bold",
  },

  totalToPay: {
    width: "55%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#111111",
    borderRadius: 4,
    padding: 10,
  },

  totalToPayLabel: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "bold",
  },

  totalToPayValue: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },

  /* =========================
     FOOTER
  ========================= */

  footer: {
    marginTop: 30,
    paddingTop: 10,
    borderTop: "1 solid #dddddd",
  },

  footerText: {
    fontSize: 7,
    color: "#777777",
    marginBottom: 3,
    textAlign: "center",
  },

});