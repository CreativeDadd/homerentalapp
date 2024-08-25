import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], weight: ['400','500','700'] });

export const metadata = {
  title: "orange-sun Homes",
  description: "Get your dream home for rent with orange-sun Homes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
        <Header />
        {children}

        <footer className='text-center  border-t text-gray-600 p-8 mt-16'>
      &copy; 2024 All Rights Reserved
    </footer>
        </main>
      </body>
    </html>
  );
}
