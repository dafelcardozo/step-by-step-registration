import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import Nav from "@/components/layout/nav";
import { Suspense } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const metadata = {
  title: "Select your gaming subscription plan",
  description: "A simple demo with Material UI, React, Next.js",
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
      <body style={{backgroundColor:'#EFF5FF'}}>
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
