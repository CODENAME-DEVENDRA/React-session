import type { Metadata } from "next";
import en from "@/translations/en.json";
import "./globals.css";
import { QueryProvider } from "@/components/QueryProvider";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: en.metadata.title,
  description: en.metadata.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper font-interface text-body text-ink">
        <QueryProvider>
          <SiteHeader />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
