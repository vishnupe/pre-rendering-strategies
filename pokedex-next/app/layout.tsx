import './globals.css'
import localFont from '@next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './baloo.woff' })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
