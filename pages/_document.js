import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from "@/components/Navbar"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* page layout that affects all urls can be placed here */}
      <Navbar />
      <body>
        <Main />
        <NextScript />
      </body>
      {/* i.e. footer would go here */}
      <footer>
        @ Leah Livingston licensed GPLv3
      </footer>
    </Html>
  )
}
