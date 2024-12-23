import {Domine, Geist, Geist_Mono, Josefin_Sans, Quicksand } from "next/font/google";
import "./globals.css";

const josefinlight = Josefin_Sans({
  subsets: ["latin"],
  weight: ['100']
});

const josefinbold = Josefin_Sans({
  subsets: ["latin"],
  weight: ['400']
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ['400']
});

const domine = Domine({
  subsets: ["latin"],
  weight: ['600']
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tracky",
  description: "Organize and track upcoming deadlines and events.",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={'text-base sm:text-lg textGradient ' + domine.className}>Tracky</h1>
    </header>
  )
  const footer = (
    <footer className="p-4 sm:p-8">
      aaa
    </footer>
  )

  return (
    <html lang="en">
      <body className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col ' + `${geistSans.variable} ${geistMono.variable} antialiased`}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
