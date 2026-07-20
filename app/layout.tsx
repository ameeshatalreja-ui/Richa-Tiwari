import type { Metadata } from "next";
import { Playfair_Display, Alegreya } from "next/font/google";
import { BookingProvider } from "@/components/BookingContext";
import BookingModal from "@/components/BookingModal";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Greater Self Awakening | Executive Leadership Coaching with Richa Tiwari",
  description:
    "Executive leadership coaching for ambitious women moving toward Director and VP roles. Founded by Richa Tiwari — IIM Bangalore alum, ex-KPMG, ex-Shell, former HR Director.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${alegreya.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-warm-cream font-body text-deep-brown antialiased">
        <BookingProvider>
          {children}
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
