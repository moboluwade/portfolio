"use client"
import { ThemeProvider } from "next-themes"

const ThemeContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default ThemeContext