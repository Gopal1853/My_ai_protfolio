import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "R Gopalram - Engineer",
  description:
    "I'm R Gopalram, a passionate and dedicated person",
  keywords: [
    "Gopal",
    "Gopalram",
    "theGopalram",
    "the R Gopalram",
    "R Gopalarm Bangalore",
    "R gopalram",
    "R Gopalram Data Enginer",
    "R Gopalram Data Analyst",
    "R Gopalram ECE Engineer",
    "Gopal Haryana",
    "Gopal Bangalore",
  ],
 
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },
 
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-small bg-fixed bg-cover bg-center h-screen`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
