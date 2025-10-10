import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bio Links App",
  description: "Bio Links app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Google Tag Manager script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-10860808864"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10860808864');
          `}
        </Script>
      </Head>
      <body>{children}</body>
    </html>
  );
}
