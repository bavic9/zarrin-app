// import { Roboto, Raleway } from "next/font/google";
import Navbar from "@/Components/navbar/Navbar";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Footer from "@/Components/footer/Footer";
import 'react-toastify/dist/ReactToastify.css'

export const metadata = {
  title: "Zarrin",
  description: "Best AI Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='bg-white font-body min-h-[100vh]'>
          <ToastContainer theme="dark" />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
