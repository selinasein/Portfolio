import { Inter, Cormorant } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  variable: "--cormorant",
});

export const metadata = {
  title: "SELINA PARK",
  description: "SELINA PARK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-200 dark">
      <body className="h-screen">
        <Providers>
          <div className={`${inter.className} ${cormorant.variable}`}>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
