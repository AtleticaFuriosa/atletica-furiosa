import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A.A.A Furiosa",
  description: "Portal Oficial da Atlética Furiosa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" style={{ colorScheme: 'dark' }}>
      <head>
        <meta name="color-scheme" content="dark" />
        <style dangerouslySetInnerHTML={{ __html: `
          html, body {
            background-color: #0a0a0a !important;
            color: #f8fafc !important;
            color-scheme: dark !important;
          }
        `}} />
      </head>
      <body className="bg-[#0a0a0a] text-slate-100 antialiased m-0">
        {children}
      </body>
    </html>
  );
}