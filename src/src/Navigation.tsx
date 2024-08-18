import React from "react"
import logo from "./logo.svg"
import {
    Box,
    Dropdown,
    List,
    ListDivider,
    ListItem,
    ListItemButton,
    ListItemDecorator,
    Menu,
    MenuButton,
    MenuItem,
    useColorScheme
} from "@mui/joy"
import { DarkMode, Home, LightMode, CurrencyBitcoin, Check } from "@mui/icons-material"

export const Navigation = () => {
    const { mode, setMode } = useColorScheme()

    return (
        <Box
            component="header"
            className="Header"
            sx={[
                {
                    p: 1,
                    gap: 2,
                    bgcolor: "background.surface",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gridColumn: "1 / -1",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    position: "sticky",
                    top: 0,
                    zIndex: 1100,
                },
            ]}
        >
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
                                title="Choose layer"
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
                                    <ListItemDecorator />
                                </MenuItem>
                                <MenuItem>
                                    <CurrencyBitcoin />
                                    Arbitrum
                                    <ListItemDecorator>
                                        <Check />
                                    </ListItemDecorator>
                                </MenuItem>
                                <MenuItem>
                                    <CurrencyBitcoin />
                                    Optimism
                                    <ListItemDecorator />
                                </MenuItem>
                                <MenuItem>
                                    <CurrencyBitcoin />
                                    Poligon
                                    <ListItemDecorator />
                                </MenuItem>
                                <MenuItem>
                                    <CurrencyBitcoin />
                                    BNB Chain
                                    <ListItemDecorator />
                                </MenuItem>
                                <MenuItem>
                                    <CurrencyBitcoin />
                                    Avalanche
                                    <ListItemDecorator />
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
        </Box>
    )
}