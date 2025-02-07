// import { Roboto, Raleway } from "next/font/google";
import Navbar from "@/Components/navbar/Navbar";
import "./globals.css";
import Footer from "@/Components/footer/Footer";



// const raleWay = Raleway({
//   variable: "--font-rale-way",
//   subsets: ["latin"],
// });

// const roboto = Roboto({
//   variable: "--font-roboto",
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "500", "700", "900"],
// });

export const metadata = {
  title: "Zarrin",
  description: "Best AI Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='bg-white font-body min-h-[100vh]'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
