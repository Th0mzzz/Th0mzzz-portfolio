'use client'
import { forwardRef } from 'react'

interface TabSectionProps {
    text: string,
    active?: boolean,
    onClick?: () => void
}

const TabSection = forwardRef<HTMLButtonElement, TabSectionProps>(
    ({ text, active, onClick }, ref) => {
        return (
            <button
                ref={ref}
                onClick={onClick}
                className={`link 
                    cursor-pointer
                px-4 py-2 
                transition-colors 
                ${active ? "text-[var(--primary)]" : ""}
                `}
            >
                {text}
            </button>
        )
    }
)

TabSection.displayName = 'TabSection'

export default TabSection
