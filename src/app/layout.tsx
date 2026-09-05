import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-noto-sans-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BYBIT - ดาวน์โหลด",
  description:
    "BYBIT - แอปพลิเคชันการเงินและความบันเทิงระดับพรีเมียมของประเทศไทย มั่นคง ปลอดภัย รายได้ไม่จำกัด!",
  icons: {
    icon: "/app-icon.png",
    shortcut: "/app-icon.png",
    apple: "/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={notoSansThai.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
