'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import TeacherNavbar from '@/components/Teacher/Common/TeacherNavbar'

export default function DynamicNavbar() {
  const pathname = usePathname()

  if (pathname?.startsWith('/teacher')) {
    return <TeacherNavbar />
  }

  return <Navbar />
}