import React from "react"
import {
    Box,
    DialogTitle,
    Drawer,
    IconButton,
    List,
    ListDivider,
    ListItem,
    ListItemButton,
    ListItemContent,
    ModalClose,
    Stack,
    useColorScheme
} from "@mui/joy"
import {
    DarkMode,
    Home,
    LightMode,
    MenuRounded
} from "@mui/icons-material"
import { Chain } from "../../lib/chains"
import { StateProps } from "../../lib/state"
import { SelectChain } from "./SelectChain"

interface Props extends StateProps {

}

export const Navigation = (props: Props) => {
    const { mode, setMode } = useColorScheme()
    const [open, setOpen] = React.useState(false)
    const [walletConnected, setWalletConnected] = React.useState(false)

    const setChain = (chain: Chain) => {
        props.setState({ chain: { chain } })
    }

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
                        <SelectChain {...props} />
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