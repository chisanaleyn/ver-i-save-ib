import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "The 3 Hidden Fees Silently Draining Your Profit Margin | Verisave",
  description:
    "Discover the three most common credit card processing overcharges that are silently draining your profit margin and learn how to recover 10-30% of your processing costs.",
  keywords: "credit card processing, hidden fees, profit margin, business savings, payment processing",
  authors: [{ name: "Verisave" }],
  creator: "Verisave",
  publisher: "Verisave",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "article",
    title: "The 3 Hidden Fees Silently Draining Your Profit Margin",
    description:
      "Discover the three most common credit card processing overcharges that are silently draining your profit margin.",
    siteName: "Verisave",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 3 Hidden Fees Silently Draining Your Profit Margin",
    description:
      "Discover the three most common credit card processing overcharges that are silently draining your profit margin.",
  },
    generator: 'v0.dev'
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
