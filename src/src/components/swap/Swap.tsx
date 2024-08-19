import React from "react"
import {
  Button,
  Sheet,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Autocomplete,
  Grid
} from "@mui/joy"

export const Swap = () => {
  return (
    <Sheet
      sx={{
        width: 450,
        height: "max-content",
        mx: "auto",
        my: 4,
        py: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "sm",
        boxShadow: "md",
      }}
      variant="outlined">
      <Typography level="h4" component="h1">
        Swap
      </Typography>
      <FormControl>
        <Sheet
          sx={{
            py: 3,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <FormLabel>Sell</FormLabel>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={6}>
              <Autocomplete
                defaultValue={"MATIC"}
                options={["MATIC", "ETH", "USDT"]}
              />
            </Grid>
            <Grid xs={6}>
              <Input
                name="token-sell"
                type="text"
                defaultValue={0}
              />
            </Grid>
            <Grid xs={6}>
              <Typography level="body-sm">Balance: $1.00</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography level="body-sm" textAlign="right">$1.00</Typography>
            </Grid>
          </Grid>
        </Sheet>
      </FormControl>
      <FormControl>
        <Sheet
          sx={{
            py: 3,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <FormLabel>Buy</FormLabel>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={6}>
              <Autocomplete
                defaultValue={"MATIC"}
                options={["MATIC", "ETH", "USDT"]}
              />
            </Grid>
            <Grid xs={6}>
              <Input
                name="token-buy"
                type="text"
                defaultValue={0}
              />
            </Grid>
            <Grid xs={6}>
              <Typography level="body-sm">Balance: $1.00</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography level="body-sm" textAlign="right">$1.00</Typography>
            </Grid>
          </Grid>
        </Sheet>
      </FormControl>
      <Button size="lg">Swap</Button>
    </Sheet>
  )
}