import React from "react"
import {
  Box,
  CssBaseline,
  CssVarsProvider,
} from "@mui/joy"
import { Swap } from "./swap/Swap"
import { Navigation } from "./menu/Navigation"
import { Wallet } from "./wallet/Wallet"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="swap" element={<Swap />} />
        <Route path="*" element={<Navigate to="/swap" />} />
      </Routes>
    </BrowserRouter>
  )
}

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
        <Body />
        <Wallet />
      </Box>

    </CssVarsProvider>
  )
}

export default App
