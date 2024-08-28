import { Box, Button, Grid, Stack, Typography } from "@mui/joy"
import { Icons } from "../common/Icons"
import { StateProps } from "../../lib/state"
import { AccountBalanceWallet } from "@mui/icons-material"

interface Props extends StateProps {

}

export const Wallet = (props: Props) => {
    return (
        <Box
            component="nav"
            className="Navigation"
            sx={
                {
                    p: 2,
                    bgcolor: "background.surface",
                    borderLeft: "1px solid",
                    borderColor: "divider",
                    height: "100%",
                }
            }
        >
            {!!props.state.wallet.address ? <ConnectedWallet {...props} /> : <NotConnectedWallet />}
        </Box>
    )
}

export const ConnectedWallet = (props: Props) => {
    const trimAddress = (address: string) => {
        return `${address.substring(0, 10)}...${address.substring(address.length - 10)}`
    }

    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={1} alignItems="center">
                <Icons chain={props.state.chain.chain} />
                <Typography level="title-lg">
                    {trimAddress(props.state.wallet.address!)}
                </Typography>
            </Stack>

            <Typography level="h2" component="h3">
                $1000.00
            </Typography>

            <Grid container spacing={2}>
                <Grid xs={6}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Icons chain={props.state.chain.chain} />
                        <Typography level="title-lg">
                            ETH
                        </Typography>
                    </Stack>
                </Grid>
                <Grid xs={6} textAlign="right">$100.00</Grid>
                <Grid xs={6}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Icons chain={props.state.chain.chain} />
                        <Typography level="title-lg">
                            ETH
                        </Typography>
                    </Stack>
                </Grid>
                <Grid xs={6} textAlign="right">$100.00</Grid>
                <Grid xs={6}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Icons chain={props.state.chain.chain} />
                        <Typography level="title-lg">
                            ETH
                        </Typography>
                    </Stack>
                </Grid>
                <Grid xs={6} textAlign="right">$100.00</Grid>
                <Grid xs={6}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Icons chain={props.state.chain.chain} />
                        <Typography level="title-lg">
                            ETH
                        </Typography>
                    </Stack>
                </Grid>
                <Grid xs={6} textAlign="right">$100.00</Grid>
            </Grid>
        </Stack>
    )
}

export const NotConnectedWallet = () => {
    return (
        <Box alignItems="center" textAlign="center" display="grid" height="100%" px={5}>
            <Button startDecorator={<AccountBalanceWallet />} variant="soft">Wallet is not connected</Button>
        </Box>
    )
}