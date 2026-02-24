'use client'
interface TabSectionProps {
    text: string,
    active?: boolean,
    onClick?: () => void
}
export default function TabSection({ text, active, onClick }: TabSectionProps) {
    return (
        <button
            onClick={onClick}
            className={`link 
                cursor-pointer
            px-4 py-2 
            transition-colors 
            ${active && "text-[var(--primary)] border-b-2 border-[var(--primary)]"}
            `}
        >
            {text}
        </button>
    )
}