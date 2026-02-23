import Circle from "@/components/Circle";

interface TitleProps {
    text: string
}

export default function Title({text}: TitleProps) {
    return (
        <h2 className={"title flex gap-2 items-center mb-8 relative"}>
            <div className={"relative w-12 h-12"}>
                <Circle size={12} color={"var(--primary)"} delay={2} bottom={"0%"} left={"0%"}/>
                <Circle size={18} color={"var(--primary)"} delay={1.5} top={"50%"} right={"30%"}/>
                <Circle size={24} color={"var(--primary)"} delay={1} top={"0%"} left={"0%"}/>
            </div>
            {text}
        </h2>
    )
}
