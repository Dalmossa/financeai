import type { Metadata } from "next";
import localFont from 'next/font/local';

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";


const geistSans = localFont({
  src: './fonts/GeistVF.woff', // Caminho para a fonte Geist Sans
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff', // Caminho para a fonte Geist Mono
  variable: '--font-geist-mono',
  weight: '100 900',
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}dark antialiased`}>
          <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          <div className="flex h-full flex-col overflow-hidden">{children}</div>
        </ClerkProvider> 

        <Toaster />
      </body>
    </html>
  );
}