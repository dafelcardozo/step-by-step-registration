import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import Nav from "@/components/layout/nav";
import { Suspense } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const metadata = {
  title: "A Multi-Step form to record user preferences",
  description:
    "Felipe's demo for MUI",
  twitter: {
    card: "summary_large_image",
    title: "A Multi-Step form to record user preferences",
    description:
      "Felipe Cardozo is a colombian web developer",
    creator: "@dafelcardozo",
  },
  metadataBase: new URL("https://david-felipe-cardozo.com"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      
      </head>
      <body style={{backgroundColor:'#BEE2FD'}}>
        <div/>
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
