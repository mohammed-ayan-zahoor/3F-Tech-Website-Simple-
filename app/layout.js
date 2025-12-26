import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "3F Tech Solutions | Education, Technology & Career Excellence",
  description: "One-stop destination for Computer Education, IT Services, Degree Programs and Career Consultancy. Empowering skill development and professional growth.",
  keywords: ["Computer Education", "IT Services", "Career Consultancy", "3F Tech Solutions", "Degrees", "CCTV", "Laptops"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} font-inter antialiased`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
