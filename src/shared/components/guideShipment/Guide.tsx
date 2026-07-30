import { PDFDownloadLink } from "@react-pdf/renderer";
import { CreatePDF } from "./CreatePDF";
import type { DataGuide } from "../../helpers/DataGuide";

interface dataType {
  data: DataGuide
}

export const Guide = (data: dataType) => {
  return (
    <div>
      <PDFDownloadLink
        document={<CreatePDF data={data.data} />}
        fileName={`guia-envio-falta implementar-.pdf`}
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
          loading ? "Generando PDF..." : "Descargar Guía de Envío"
        }
      </PDFDownloadLink>
    </div>
  );
}