import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import { ThemeProvider } from "@mui/styles";
// import theme from "../theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Acam",
  description: "Site de l'association culturelle de Montagny en Vexin",
  keywords:
    "association culture montagny en vexin oise concerts chant cours musique jartdins pentecote",
};

export default function RootLayout({ children }) {
  return (
    // <ThemeProvider theme={theme}>
    <html lang="fr" className={inter.className}>
      <body className="bg-stone-100">
        <Navbar />
        <main>{children}</main>
        <Contact />
        <Footer />
      </body>
    </html>
    // </ThemeProvider>
  );
}
