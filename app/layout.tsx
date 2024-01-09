import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar  from "@/components/Navbar"
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Enviro Culture',
  description: 'Enviro Culture is a pollution control consultancy services provider to enhance and adhere to your business standards to stay under the compliance levied by your ...',
  icons: {
    icon: '/fevicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>
        <div className='fixed top-0 z-10 w-full'> 
        <Navbar />
        </div>
        {children}
        <Footer />
        </body>
    </html>
  )
}
