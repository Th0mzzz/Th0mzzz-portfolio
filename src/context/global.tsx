
'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

interface GlobalContextProps {
    children: ReactNode
}

export default function GlobalContextProvider({ children }: GlobalContextProps) {
    return (
        <ThemeProvider
            attribute="data-theme"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange={false}
        >
            {children}
        </ThemeProvider>
    )
}