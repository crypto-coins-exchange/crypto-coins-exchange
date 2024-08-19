import React from "react"
import {
  Box,
  CssBaseline,
  CssVarsProvider,
} from "@mui/joy"
import { Swap } from "./swap/Swap"
import { Navigation } from "./menu/Navigation"
import { Wallet } from "./wallet/Wallet"

function App() {

  return (
    <CssVarsProvider
      defaultMode="dark"
    >
      <CssBaseline />
      <Box
        sx={{
          display: { md: "grid" },
          gridTemplateColumns: "auto 400px",
          gridTemplateRows: "60px auto",
          minHeight: "100vh",
        }}>
        <Navigation />
        <Swap />
        <Wallet />
      </Box>

    </CssVarsProvider>
  )
}

export default App
