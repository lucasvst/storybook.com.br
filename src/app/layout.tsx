import type { Metadata } from "next"
import { Inter } from "next/font/google"

import GoogleAdsense from "@/components/GoogleAdsense"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StoryBook",
  description: "As melhores histórias você encontra aqui!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAdsense pId="3829371704703262" />
    </html>
  )
}
