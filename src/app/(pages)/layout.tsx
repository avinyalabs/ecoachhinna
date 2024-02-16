import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import '@/app/(pages)/globals.css'
import { Navbar } from '@/components/navbar'
import Contact from '@/components/contact'
import { Toaster } from 'react-hot-toast'
const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E coach Hina',
  description:
    'Hinna K Mendiratta is an Educator Mentor /Speaker having 10 years of experience in the field of structured communication trainings and teaching.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Toaster />
        <Navbar />
        {children}
        <Contact />
      </body>
    </html>
  )
}
