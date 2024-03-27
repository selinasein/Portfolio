import { Inter, Cormorant } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
