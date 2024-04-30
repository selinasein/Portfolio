import { Inter, Cormorant } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  variable: "--cormorant",
});

export const metadata = {
  title: "SELINA PARK",
  description: "Selina Park's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <div className={`${inter.className} ${cormorant.variable}`}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
