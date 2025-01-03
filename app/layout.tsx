import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logo Ali Tem - Simplificando a Vida do Transportador",
  description: "Tudo o que você precisa em um só lugar: desde cálculo de frete e assessoria jurídica até reboques e parcerias que garantam mais eficiência e segurança.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
