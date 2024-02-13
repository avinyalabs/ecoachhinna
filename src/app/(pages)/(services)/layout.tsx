export const metadata = {
  title: 'E coach Hinna',
  description: 'ecoachhinna',
}

import '@/app/(pages)/globals.css'
import { Navbar } from '@/components/navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
