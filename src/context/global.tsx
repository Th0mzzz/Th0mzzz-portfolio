
'use client'

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
    type Dispatch,
    type SetStateAction,
} from 'react'

type GlobalContextValue = {
    theme: string
    setTheme: Dispatch<SetStateAction<"light" | "dark">>
    handlers: {
        toggleTheme: () => void
    }
    windowWidth: number
}

const GlobalContext = createContext<GlobalContextValue | undefined>(undefined)

export function useGlobalContext() {
    const ctx = useContext(GlobalContext)
    if (!ctx) throw new Error('useGlobalContext must be used within GlobalContextProvider')
    return ctx
}

interface GlobalContextProps {
    children: ReactNode
}

export default function GlobalContextProvider({ children }: GlobalContextProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window === 'undefined') return 'light';
        
        try {
            const saved = localStorage.getItem('theme');
            if (saved === 'dark' || saved === 'light') return saved;
        } catch {
            // ignore
        }

        const attr = document.documentElement.getAttribute('data-theme');
        if (attr === 'dark' || attr === 'light') return attr;

        return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
    });
    
    const [windowWidth, setWindowWidth] = useState(() => typeof window !== 'undefined' ? window.innerWidth : 0)
    
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setWindowWidth(window.innerWidth);
            }, 150);
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('theme', theme)
        } catch {
            // ignore
        }
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const handlers = useMemo(() => ({
        toggleTheme: () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
    }), [])

    

    return (
        <GlobalContext.Provider value={{ theme, setTheme, handlers, windowWidth }}>
            {children}
        </GlobalContext.Provider>
    )
}