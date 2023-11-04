import { GeistMono, GeistSans } from "geist/font";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/mode-toggle";

import "@/app/ui/globals.css";

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
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
