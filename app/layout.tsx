import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uulzhan & Maratbek",
  description: "Шаңырақ көтеру тойына арналған салтанатты ақ дастарханымыздың қадірлі қонағы болуға шақырамыз our special day",
  openGraph: {
    title: "Maratbek & Uulzhan",
    description: "Шаңырақ көтеру тойына арналған салтанатты ақ дастарханымыздың қадірлі қонағы болуға шақырамыз our special day",
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
