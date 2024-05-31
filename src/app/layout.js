import { Inter } from "next/font/google"
import "./globals.scss"
import "bootstrap/dist/css/bootstrap.css"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mayank Gupta Portfolio",
  description: "Personal Portfolio of Mayank Gupta.",
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <GoogleAnalytics />
        <body className={inter.className}>{children}</body>
      </html>
    </>
  )
}
