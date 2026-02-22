'use client';
import React from "react";

interface ButtonProps {
    children?: React.ReactNode,
    onClick?: () => void,
    width?: string,
    margin?: string,
}

function

Button({children, onClick, width = "fit-content", margin = "0"}: ButtonProps) {
    return (
        <button
            style={{width, margin}}
            className={"bg-[var(--primary)] hover:bg-[var(--primary-hover)] hover:scale-105 text-white px-6 py-3 rounded-sm transition-all duration-300 link cursor-pointer"}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
