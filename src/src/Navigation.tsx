import React from "react"
import logo from "./logo.svg"
import {
    Box,
    Dropdown,
    List,
    ListDivider,
    ListItem,
    ListItemButton,
    Menu,
    MenuButton,
    MenuItem,
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
                    <Dropdown>
                        <MenuButton
                            variant="plain"
                            size="lg"
                            sx={{ maxWidth: "58px", maxHeight: "42px", borderRadius: "0px" }}
                        >
                            <CurrencyBitcoin />
                        </MenuButton>
                        <Menu
                            placement="bottom-end"
                            size="md"
                            sx={{
                                zIndex: "99999",
                                p: 1,
                                gap: 1,
                                "--ListItem-radius": "var(--joy-radius-sm)",
                            }}
                        >
                            <MenuItem>
                                <CurrencyBitcoin />
                                Ethereum
                            </MenuItem>
                            <MenuItem>
                                <CurrencyBitcoin />
                                Arbitrum
                            </MenuItem>
                            <MenuItem>
                                <CurrencyBitcoin />
                                Optimism
                            </MenuItem>
                            <MenuItem>
                                <CurrencyBitcoin />
                                Poligon
                            </MenuItem>
                            <MenuItem>
                                <CurrencyBitcoin />
                                BNB Chain
                            </MenuItem>
                            <MenuItem>
                                <CurrencyBitcoin />
                                Avalanche
                            </MenuItem>
                        </Menu>
                    </Dropdown>
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