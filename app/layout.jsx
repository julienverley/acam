import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/FooterContact";
// import { ThemeProvider } from "@mui/styles";
// import theme from "../theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Accueil | Acam",
  description: "Association culturelle et artistique de Montagny en Vexin",
  keywords:
    "association culture culturelle artistes artistique montagny-en-vexin montagny vexin oise concert concerts chant cours musique jardins jartdins pentecote public gratuit",
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
