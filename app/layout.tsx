import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Announcement from "@/components/announcement";
import NavBar from "@/components/layout/NavBar";

const monteserrat = Montserrat({ subsets: ["latin"], weight: "200" });

export const metadata: Metadata = {
  title: "BidGizmo",
  description: "BidGizmo is your ultimate destination for bidding on the latest electronics and gadgets. Discover incredible deals on top tech brands and score amazing bargains through competitive auctions. Join our community of savvy shoppers and get the best prices on the gadgets you love!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${monteserrat.className} antialiased`}>
        <Theme accentColor="ruby" grayColor="sand">
          <Announcement />
          <NavBar/>
          {children}
        </Theme>
      </body>
    </html>
  );
}
