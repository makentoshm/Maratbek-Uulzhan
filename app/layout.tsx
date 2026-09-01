import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maratbek & Uulzhan",
  description: " Бактылуу кунго салтанаттуу ак достарконубузга кадырлуу коногу болуга чакырабыз our special day",
  openGraph: {
    title: "Maratbek & Uulzhan",
    description: "Ушул  Бактылуу кунго салтанаттуу ак достарконубузга кадырлуу коногу болуга чакырабыз our special day",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
