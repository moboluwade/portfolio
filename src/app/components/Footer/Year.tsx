"use client"
import { useEffect } from 'react'
import { useState } from 'react'
const Year = () => {
    const [year, setYear] = useState<number>(2024)

    useEffect(() => {
        const date = new Date().getFullYear()
        setYear(date)
    }, [])

    return (
        <div className="opacity-80">
            @ {year} Nigeria
        </div>
    )
}

export default Year