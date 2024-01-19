import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'

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
  return <>{children}</>
}
