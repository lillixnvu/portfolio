import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Lillian V.",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.className} ${montserrat.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white `} 
      >
        {children}
      </body>
    </html>
  );
}
