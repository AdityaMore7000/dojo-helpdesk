import './globals.css'
import { Rubik } from 'next/font/google'
import Navbar from './components/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Dojo Helpdesk',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        <div>
        {children}
        </div>
        </body>
    </html>
  )
}
