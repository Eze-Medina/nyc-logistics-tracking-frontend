import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { Printer } from "lucide-react";

import type { ClientDto, GuideUnpaidSummaryDto } from '../../../../../../interfaces'

import { CreateReportPDF } from '../createPDF/CreateReportPDF'

import style from "./paymentReport.module.css";

interface Props {
  client: ClientDto;
  data: GuideUnpaidSummaryDto[];
  text: string;
}

export const PaymentReport = ({ client, data, text }: Props) => {

  const [loading, setLoading] = useState(false);

  const handleGenerateReport = async () => {
    try {
      setLoading(true);

      const pdfDocument = (
        <CreateReportPDF
          client={client}
          data={data}
        />
      );

      const blob = await pdf(pdfDocument).toBlob();

      const url = URL.createObjectURL(blob);

      const downloadLink = document.createElement("a");

      downloadLink.href = url;
      downloadLink.download = `reporte-pagos-${client.id}.pdf`;

      document.body.appendChild(downloadLink);

      downloadLink.click();

      document.body.removeChild(downloadLink);

      URL.revokeObjectURL(url);

    } catch (error) {
      console.error(
        "Error generando el reporte de pagos:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={style.button}
      type="button"
      onClick={handleGenerateReport}
      disabled={loading}
    >
      <Printer height={18} />

      {loading
        ? "Generando..."
        : text}
    </button>
  );
};