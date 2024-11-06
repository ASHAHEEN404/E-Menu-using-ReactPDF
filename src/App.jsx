import { PDFViewer } from "@react-pdf/renderer";
import PdfDocument from "./PdfDocument"; // Import your PdfDocument component

const App = () => (
  <div style={{ height: "100vh", width: "100vw", margin: 0 }}>
    <PDFViewer style={{ width: "100%", height: "100%" }}>
      <PdfDocument />
    </PDFViewer>
  </div>
);

export default App;
