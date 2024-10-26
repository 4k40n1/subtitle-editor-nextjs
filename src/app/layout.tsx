import './globals.css'
import { Noto_Sans, Noto_Sans_Mono, Noto_Serif } from 'next/font/google'
import type { Metadata } from 'next'
import { SubtitleProvider } from '@/data/contexts/subtitle-context'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  preload: true
})

const notoSerif = Noto_Serif({
  subsets: [
    'cyrillic',
    'cyrillic-ext',
    'greek',
    'greek-ext',
    'latin',
    'latin-ext'
  ],
  weight: ['400'],
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
        className={`${notoSans.className} ${notoSerif.className} ${notoSansMono.className} antialiased`}
      >
        <SubtitleProvider>
          {children}
        </SubtitleProvider>
      </body>
    </html>
  )
}
