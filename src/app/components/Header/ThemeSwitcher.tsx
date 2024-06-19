// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div>
            {theme === "light" ?
                (
                    <button className="pl-2" onClick={() => setTheme('dark')}>
                        <Image width={30} height={30} src="/dark-mode.svg" alt="dark" />
                    </button>
                )
                :
                (
                    <button className="pl-2" onClick={() => setTheme('light')}>
                        <Image width={30} height={30} src="/light-mode.svg" alt="light" />
                    </button>
                )}
        </div>
    )
};