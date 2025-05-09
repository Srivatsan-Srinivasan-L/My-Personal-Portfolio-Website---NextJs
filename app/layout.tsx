import type { Metadata } from "next";
import {  Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";
import AnimatedCursor from "./components/Helper/AnimatedCursor"; // ✅ your framer-motion cursor





const font = Sora({
  weight: ['100','200','300','400','500','600','700','800'],
  subsets: ['latin']
});


export const metadata: Metadata = {
  title: "My Portfolio Website | Srivatsan S",
  description: "portfolio with next js",
  icons:[
    {
      url:'images/sri.ico',
      href:'images/sri.ico'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body
        className={font.className}
      >
        <div className="hidden md:block">
        <AnimatedCursor /> {/* ✅ Replaces old animated-cursor */}

        </div>
         <ResponsiveNav/>
        {children}
     
      </body>
    </html>
  );
}
