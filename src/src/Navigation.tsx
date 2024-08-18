import React from "react"
import logo from "./logo.svg"
import {
    Button,
    IconButton,
    useColorScheme
} from "@mui/joy"
import { DarkMode, LightMode } from "@mui/icons-material"

export const Navigation = () => {
    const { mode, setMode } = useColorScheme()

    return (
        <>
            <IconButton
                component="button"
                size="lg"
                onClick={() => {
                    setMode(mode === "light" ? "dark" : "light");
                }}
            >
                {mode === "light" ? <LightMode /> : <DarkMode />}
            </IconButton>
        </>
    )
}