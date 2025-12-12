'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function Providers({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    // Smooth page transitions
    document.body.classList.add('page-transition')
    
    return () => {
      document.body.classList.remove('page-transition')
    }
  }, [pathname])

  return <>{children}</>
}

