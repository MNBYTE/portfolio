import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBackground from "@/components/layout/FloatingBackground";
import { Providers } from "./providers";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Portfolio",
  description: "Creative Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeProvider>
          <FloatingBackground />
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}

