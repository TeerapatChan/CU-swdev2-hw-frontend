import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import MenuBar from '@/components/MenuBar'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'vacine-book-app',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <MenuBar></MenuBar>
      {children}</body>
    </html>
  )
}
