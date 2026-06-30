import { Inter, Playfair_Display } from "next/font/google";
import InteractiveHearts from "../components/InteractiveHearts";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  style: ['normal', 'italic']
});

export const metadata = {
  title: "Happy Birthday My Love",
  description: "A special countdown and birthday wish for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <InteractiveHearts />
        {children}
      </body>
    </html>
  );
}
