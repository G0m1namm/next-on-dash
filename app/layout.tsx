import type { Metadata } from "next";

import { inter } from "@/app/ui/fonts";

import "@/app/ui/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Next On Dash",
    default: "Next On Dash",
  },
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
