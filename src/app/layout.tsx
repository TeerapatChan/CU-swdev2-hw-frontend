import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import MenuBar from '@/components/MenuBar'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]/route'
import NextAuthProvider from '@/Providers/NextAuthProvider'
import ReduxProvider from '@/redux/ReduxProvider'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'vacine-book-app',
  description: '',
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
        <body className={roboto.className}>
            <ReduxProvider>
              <NextAuthProvider session={session}>
                <MenuBar></MenuBar>
                {children}       
              </NextAuthProvider>
            </ReduxProvider>
        </body>
    </html>
  )
}
