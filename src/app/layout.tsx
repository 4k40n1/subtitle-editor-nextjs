import type { Metadata } from 'next'
import { Noto_Sans, Noto_Sans_Mono } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  preload: true
})

const notoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  weight: ['400'],
  preload: true
})

export const metadata: Metadata = {
  title: 'Subtitle Editor',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} ${notoSansMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
