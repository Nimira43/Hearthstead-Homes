import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
// import { GiStripedSun } from 'react-icons/gi'
import Link from 'next/link'
import { AuthProvider } from '@/context/auth'
import AuthButtons from '@/components/auth-buttons'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Solus',
  description: 'Real Estate website using Next JS and Firebase',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <AuthProvider>
          <nav className='bg-dark text-light p-5 h-24 flex items-center justify-between'>
            <Link href='/'>Solus</Link>
            <ul>
              <li>
                <AuthButtons />
              </li>
            </ul>
          </nav>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
