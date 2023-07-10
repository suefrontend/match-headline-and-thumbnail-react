import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SnapNews - Educational Quiz App",
  description:
    "SnapNews is a quiz app that utilizes BBC news RSS. Users select from a group of thumbnails, the image that best matches a provided headline. It's a fun and interactive way to test your knowledge and stay updated with the latest news.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" size="any" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
