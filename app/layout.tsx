import "./globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import { SessionProvider } from "next-auth/react";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Resolva - Open Source Issue Marketplace",
  description:
    "Connect with developers, post project issues with bounties, and get your open source problems solved. Join Resolva to earn rewards by solving issues or find developers for your project.",
  keywords: [
    "open source",
    "bug bounty",
    "issue marketplace",
    "developer platform",
    "project maintenance",
    "freelance developers",
    "open source collaboration",
    "code bounties",
    "issue tracking",
    "developer rewards",
  ],
  authors: [{ name: "Resolva Team" }],
  openGraph: {
    title: "Resolva - Open Source Issue Marketplace",
    description:
      "Connect with developers, post project issues with bounties, and get your open source problems solved.",
    type: "website",
    locale: "en_US",
    url: "https://resolva.com",
    siteName: "Resolva",
    images: [
      {
        url: "/og-image.png", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Resolva - Open Source Issue Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resolva - Open Source Issue Marketplace",
    description:
      "Connect with developers, post project issues with bounties, and get your open source problems solved.",
    images: ["/og-image.png"], //Banner Image to be added
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReactQueryProvider>
          <SessionProvider>
            <Providers>{children}</Providers>
          </SessionProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
