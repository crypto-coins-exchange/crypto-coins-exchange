import { Box, Grid, Stack, Typography } from "@mui/joy"
import { Icons } from "../common/Icons"
import { Chain } from "../../lib/chains"

export const Wallet = () => {
    return (
        <>
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
                <Stack spacing={4}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Icons chain={Chain.Ethereum} />
                        <Typography level="title-lg">
                            0x98997c9a68b...1d9c3533f9e5d1a1
                        </Typography>
                    </Stack>

                    <Typography level="h2" component="h3">
                        $1000.00
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid xs={6}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Icons chain={Chain.Ethereum} />
                                <Typography level="title-lg">
                                    ETH
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid xs={6} textAlign="right">$100.00</Grid>
                        <Grid xs={6}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Icons chain={Chain.Ethereum} />
                                <Typography level="title-lg">
                                    ETH
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid xs={6} textAlign="right">$100.00</Grid>
                        <Grid xs={6}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Icons chain={Chain.Ethereum} />
                                <Typography level="title-lg">
                                    ETH
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid xs={6} textAlign="right">$100.00</Grid>
                        <Grid xs={6}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Icons chain={Chain.Ethereum} />
                                <Typography level="title-lg">
                                    ETH
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid xs={6} textAlign="right">$100.00</Grid>
                    </Grid>
                </Stack>
            </Box>
        </>
    )
}