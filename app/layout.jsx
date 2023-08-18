import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crud with MONGODB',
  description: 'Crud operations with MONGODB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='max-w-3xl mx-auto'>
        <Navbar />
        {children}
      </div>
      </body>
    </html>
  )
}
