import React from "react"
import logo from "./logo.svg"
import {
    Box,
    List,
    ListDivider,
    ListItem,
    ListItemButton,
    useColorScheme
} from "@mui/joy"
import { DarkMode, Home, LightMode, CurrencyBitcoin } from "@mui/icons-material"

export const Navigation = () => {
    const { mode, setMode } = useColorScheme()

    return (
        <Box
            sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-between",
            }}
        >
            <List role="menubar" orientation="horizontal" size="lg">
                <ListItem role="none">
                    <ListItemButton
                        role="menuitem"
                        component="a"
                        href="/"
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
            </List>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1.5,
                    alignItems: "center",
                }}
            >
                <List role="menubar" orientation="horizontal" size="lg">
                    <ListItem role="none">
                        <ListItemButton
                            role="menuitem"
                            component="button"
                            title={mode === "light" ? "Turn dark" : "Turn light"}
                            onClick={() => {
                                setMode(mode === "light" ? "dark" : "light");
                            }}
                        >
                            {mode === "light" ? <LightMode /> : <DarkMode />}
                        </ListItemButton>
                    </ListItem>
                    <ListItem role="none">
                        <ListItemButton
                            role="menuitem"
                            component="button"
                        >
                            <CurrencyBitcoin />
                        </ListItemButton>
                    </ListItem>
                    <ListItem role="none">
                        <ListItemButton
                            color="success"
                            variant="soft"
                        >
                            Connect wallet
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}