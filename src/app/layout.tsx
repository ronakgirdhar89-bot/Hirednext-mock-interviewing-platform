import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hiredNext",
  description: "An AI-powered platform for preparing for mock interviews.",
  openGraph: {
    title: "hiredNext",
    description: "An AI-powered platform for preparing for mock interviews.",
    url: "https://hirednext.notlocalhost.fun", // ✅ updated domain
    siteName: "hiredNext",
    images: [
      {
        url: "https://hirednext.notlocalhost.fun/logo.png", // ✅ updated image URL
        width: 1200,
        height: 630,
        alt: "hiredNext",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "hiredNext",
    description: "An AI-powered platform for preparing for mock interviews.",
    images: ["https://hirednext.notlocalhost.fun/logo.png"], // ✅ updated
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased pattern`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
