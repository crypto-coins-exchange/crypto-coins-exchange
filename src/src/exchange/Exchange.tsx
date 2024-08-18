import React from "react"
import logo from "./logo.svg"
import {
  CssVarsProvider,
  Button,
  Sheet,
  Typography,
  FormControl,
  FormLabel,
  Input
} from "@mui/joy"

export const Exchange = () => {
  return (
    <Sheet
      sx={{
        width: 400,
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
        Exchange
      </Typography>
      <FormControl>
        <FormLabel>Sell</FormLabel>
        <Input
          name="token-sell"
          type="text"
          placeholder="Choose token to sell"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Buy</FormLabel>
        <Input
          name="token-buy"
          type="text"
          placeholder="Choose token to buy"
        />
      </FormControl>
      <Button>Exchange now</Button>
    </Sheet>
  )
}