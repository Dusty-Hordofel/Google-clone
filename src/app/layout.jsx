import Footer from "@/components/Footer";
import "./globals.css";
import Head from "./head";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
