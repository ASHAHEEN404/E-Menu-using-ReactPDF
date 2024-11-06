import { Page, Document, StyleSheet, Image, Font } from "@react-pdf/renderer";
import img1 from "../public/1.png";
import img2 from "../public/2.png";
import img3 from "../public/3.png";
import img4 from "../public/4.png";
import img5 from "../public/5.png";
import img6 from "../public/6.png";
import img7 from "../public/7.png";
import img8 from "../public/8.png";
import img9 from "../public/9.png";
import img10 from "../public/10.png";
import img11 from "../public/11.png";
import img12 from "../public/12.png";
import img13 from "../public/13.png";
import img14 from "../public/14.png";
import img15 from "../public/15.png";
import img16 from "../public/16.png";
const Quixote = () => (
  <Document>
    <Page style={styles.body}>
      <Image src={img1} />
      <Image src={img2} />
      <Image src={img3} />
      <Image src={img4} />
      <Image src={img5} />
      <Image src={img6} />
      <Image src={img7} />
      <Image src={img8} />
      <Image src={img9} />
      <Image src={img10} />
      <Image src={img11} />
      <Image src={img12} />
      <Image src={img13} />
      <Image src={img14} />
      <Image src={img15} />
      <Image src={img16} />
    </Page>
  </Document>
);

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column", // Correct the spelling from "coulmn" to "column"
    justifyContent: "space-between", // Adds spacing between sections if needed
    alignItems: "center", // Center-align content horizontally
    width: "100%", // Ensure full-width of the page
    height: "100%", // Ensure full-height of the page
    backgroundColor: "#f5f5f5", // A soft creamy background
    padding: 20, // Add padding around the content for a balanced look
  },
  section: {
    margin: 10,
    padding: 20, // Increase padding for more spacing within sections
    borderRadius: 8, // Rounded corners for a smoother look
    backgroundColor: "#ffffff", // White background for contrast
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
    width: "90%", // Section takes 90% of page width for a neat layout
    maxWidth: 600, // Limit width to improve readability on large screens
  },
});

export default Quixote;
