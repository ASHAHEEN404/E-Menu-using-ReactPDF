import { Page, Document, StyleSheet, Image, Font } from "@react-pdf/renderer";

const Quixote = () => (
  <Document>
    <Page style={styles.body}>
      <Image src="/public/1.png" />
      <Image src="/public/2.png" />
      <Image src="/public/3.png" />
      <Image src="/public/4.png" />
      <Image src="/public/5.png" />
      <Image src="/public/6.png" />
      <Image src="/public/7.png" />
      <Image src="/public/8.png" />
      <Image src="/public/9.png" />
      <Image src="/public/10.png" />
      <Image src="/public/11.png" />
      <Image src="/public/12.png" />
      <Image src="/public/13.png" />
      <Image src="/public/14.png" />
      <Image src="/public/15.png" />
      <Image src="/public/16.png" />
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
