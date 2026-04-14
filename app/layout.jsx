import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});


export const metadata = {
  title: "Bhavesh Jethava | Full Stack PHP Developer",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  description: "Full Stack PHP Developer with 5 years of experience in Laravel, WordPress, and REST API development. متخصص in building scalable web applications, WooCommerce solutions, and secure payment integrations (Stripe, Razorpay, PayPal). Skilled in Next.js, React, and modern frontend technologies, delivering high-performance and business-driven digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-24 lg:pt-32">
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
