import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/context/ThemeContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Protfolio by Hung-Silver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>{FixFOIT}</head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <ToastContainer />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

// const FixFOIT = (
//   <script
//     dangerouslySetInnerHTML={{
//       __html: `
//     try {
//       const theme = localStorage.getItem('theme')
//       const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

//       if (theme === 'dark' || (!theme && systemTheme)) {
//         document.documentElement.classList.add('dark')
//       }
//     } catch (e) {}
//   `,
//     }}
//   />
// );
