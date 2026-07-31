import { PDFDownloadLink } from "@react-pdf/renderer";
import { CreatePDF } from "../createPDF/CreatePDF";

import type { GuideDto } from "../../../../../interfaces";

interface Props {
  data: GuideDto | null;
  code: string | null;
}

export const ShipmentGuide = ({ data, code }: Props) => {

  if (!data) {
    return null;
  }

  return (
    <div>
      <PDFDownloadLink
        document={<CreatePDF data={data} code={code} />}
        fileName={`guia-${code}.pdf`}
        style={{
          padding: "12px 24px",
          backgroundColor: "#1a1a1a",
          color: "#fff",
          textDecoration: "none",
          borderRadius: 6,
          fontFamily: "JetBrainsMono",
          fontSize: 15,
        }}
      >
        {({ loading }) =>
          loading
            ? "Generando PDF..."
            : "Descargar Guía de Envío"
        }
      </PDFDownloadLink>
    </div>
  );
};