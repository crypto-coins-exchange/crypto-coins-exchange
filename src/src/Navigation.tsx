import React from "react"
import logo from "./logo.svg"
import {
    Box,
    Button,
    IconButton,
    List,
    ListDivider,
    ListItem,
    ListItemButton,
    useColorScheme
} from "@mui/joy"
import { DarkMode, Home, LightMode, Person } from "@mui/icons-material"

export const Navigation = () => {
    const { mode, setMode } = useColorScheme()

    return (
        <Box component="nav" sx={{ flexGrow: 1 }}>
            <List role="menubar" orientation="horizontal" size="lg">
                <ListItem role="none">
                    <ListItemButton
                        role="menuitem"
                        component="a"
                        href="/"
                        aria-label="Home"
                    >
                        <Home />
                    </ListItemButton>
                </ListItem>
                <ListDivider />
                <ListItem role="none">
                    <ListItemButton role="menuitem" component="a" href="/swap">
                        Swap
                    </ListItemButton>
                </ListItem>
                <ListItem role="none">
                    <ListItemButton role="menuitem" component="a" href="/liquidity">
                        Liquidity
                    </ListItemButton>
                </ListItem>
                <ListItem role="none" sx={{ marginInlineStart: "auto" }}>
                    <ListItemButton
                        role="menuitem"
                        component="button"
                        onClick={() => {
                            setMode(mode === "light" ? "dark" : "light");
                        }}
                    >
                        {mode === "light" ? <LightMode /> : <DarkMode />}
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}