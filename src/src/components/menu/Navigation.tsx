import React from "react"
import {
    Box,
    DialogTitle,
    Drawer,
    Dropdown,
    IconButton,
    List,
    ListDivider,
    ListItem,
    ListItemButton,
    ListItemContent,
    ListItemDecorator,
    Menu,
    MenuButton,
    MenuItem,
    ModalClose,
    Stack,
    useColorScheme
} from "@mui/joy"
import {
    DarkMode,
    Home,
    LightMode,
    Check,
    MenuRounded
} from "@mui/icons-material"
import { Icons, } from "../common/Icons"

enum Chain {
    Ethereum,
    Arbitrum,
    Optimism,
    Polygon,
    Base,
    BnbChain,
    Avalanche,
}

export const Navigation = () => {
    const { mode, setMode } = useColorScheme()
    const [open, setOpen] = React.useState(false)
    const [walletConnected, setWalletConnected] = React.useState(false)
    const [chain, setChain] = React.useState(Chain.Ethereum)

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
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                    sx={{ display: { xs: "none", sm: "flex" } }}
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
                </Stack>

                <Box sx={{ display: { xs: "inline-flex", sm: "none" } }}>
                    <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
                        <MenuRounded />
                    </IconButton>
                    <Drawer
                        sx={{ display: { xs: "inline-flex", sm: "none" } }}
                        open={open}
                        onClose={() => setOpen(false)}
                    >
                        <ModalClose />
                        <DialogTitle>Crypto exchange</DialogTitle>
                        <Box sx={{ px: 1 }}>
                            <List
                                size="sm"
                                sx={{ '--ListItem-radius': 'var(--joy-radius-sm)', '--List-gap': '4px' }}
                            >
                                <ListItem nested>
                                    <List
                                        aria-labelledby="nav-list-browse"
                                        sx={{
                                            '& .JoyListItemButton-root': { p: '8px' },
                                        }}
                                    >
                                        <ListItem>
                                            <ListItemButton>
                                                <ListItemContent>Home</ListItemContent>
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton>
                                                <ListItemContent>Swap</ListItemContent>
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton>
                                                <ListItemContent>Liquidity</ListItemContent>
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </ListItem>
                            </List>
                        </Box>
                    </Drawer>
                </Box>

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
                                    setMode(mode === "light" ? "dark" : "light")
                                }}
                            >
                                {mode === "light" ? <LightMode /> : <DarkMode />}
                            </ListItemButton>
                        </ListItem>
                        <Dropdown>
                            <MenuButton
                                variant="plain"
                                size="lg"
                                title="Choose chain"
                                sx={{ maxWidth: "58px", maxHeight: "42px", borderRadius: "0px" }}
                            >
                                <Icons chain={chain} />
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
                                <MenuItem onClick={() => setChain(Chain.Ethereum)}>
                                    <Icons chain={Chain.Ethereum} />
                                    Ethereum
                                    <ListItemDecorator>
                                        {chain === Chain.Ethereum && <Check />}
                                    </ListItemDecorator>
                                </MenuItem>
                                <MenuItem onClick={() => setChain(Chain.Arbitrum)}>
                                    <Icons chain={Chain.Arbitrum} />
                                    Arbitrum
                                    <ListItemDecorator>
                                        {chain === Chain.Arbitrum && <Check />}
                                    </ListItemDecorator>
                                </MenuItem>
                                <MenuItem onClick={() => setChain(Chain.Optimism)}>
                                    <Icons chain={Chain.Optimism} />
                                    Optimism
                                    <ListItemDecorator>
                                        {chain === Chain.Optimism && <Check />}
                                    </ListItemDecorator>
                                </MenuItem>
                                <MenuItem onClick={() => setChain(Chain.Polygon)}>
                                    <Icons chain={Chain.Polygon} />
                                    Polygon
                                    <ListItemDecorator>
                                        {chain === Chain.Polygon && <Check />}
                                    </ListItemDecorator>
                                </MenuItem>
                                <MenuItem onClick={() => setChain(Chain.BnbChain)}>
                                    <Icons chain={Chain.BnbChain} />
                                    BNB Chain
                                    <ListItemDecorator>
                                        {chain === Chain.BnbChain && <Check />}
                                    </ListItemDecorator>
                                </MenuItem>
                                <MenuItem onClick={() => setChain(Chain.Avalanche)}>
                                    <Icons chain={Chain.Avalanche} />
                                    Avalanche
                                    <ListItemDecorator>
                                        {chain === Chain.Avalanche && <Check />}
                                    </ListItemDecorator>
                                </MenuItem>
                            </Menu>
                        </Dropdown>
                        <ListItem role="none">
                            <ListItemButton
                                color={walletConnected ? "warning" : "success"}
                                variant="soft"
                                onClick={() => setWalletConnected(!walletConnected)}
                            >
                                {walletConnected ? "Disconnect wallet" : "Connect wallet"}
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    )
}