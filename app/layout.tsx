import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "888 Safaris - Premium Chauffeur-Driven Tours in Kenya",
  description:
    "Experience Kenya with our professional chauffeur-driven safari services. Luxury vehicles, experienced drivers, and customized tours across Kenya's most beautiful destinations.",
  keywords: "chauffeur-driven tours Kenya, luxury travel Kenya, 888 Safaris, safari tours, Kenya travel agency",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
