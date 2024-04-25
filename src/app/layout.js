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
      <body>
        <div
          className={`${inter.className} ${cormorant.variable} py-3 px-5 md:py-5 md:px-10`}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
