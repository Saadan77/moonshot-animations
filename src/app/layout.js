import { Sora, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Moonshot Animations",
  description: "Bring your ideas to life with stunning animations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${playfair.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
