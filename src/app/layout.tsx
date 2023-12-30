import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeContext from './ThemeContext'
import './globals.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mob_codes',
  description: 'Hi there, I am moboluwade a javascript and typescript web developer, excited about building real-world solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContext>
          {/* px-4 */}
          <Header />
          {children}
          <Footer />
        </ThemeContext>
      </body>
    </html>
  )
}
