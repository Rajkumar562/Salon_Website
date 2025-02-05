import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import WhatsappBar from "@/components/WhatsappBar";
import "@/styles/globals.css";

const webFont = localFont({
  src: "./fonts/WebsiteFont.woff2",
  variable: "--font-web-font",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${webFont.variable} antialiased`}>
        <Navbar />
        <WhatsappBar />
        <main className="flex-grow">{children}</main>
        <Brands />
        <Footer />
      </body>
    </html>
  );
}
