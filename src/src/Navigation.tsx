import React from "react"
import logo from "./logo.svg"
import {
    Button,
    useColorScheme
} from "@mui/joy"

export const Navigation = () => {
    const { mode, setMode } = useColorScheme()
    
    return (
        <>
            <Button
                variant="outlined"
                onClick={() => {
                    setMode(mode === "light" ? "dark" : "light");
                }}
            >
                {mode === "light" ? "Turn dark" : "Turn light"}
            </Button>
        </>
    )
}