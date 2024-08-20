import React, { useState } from "react"
import {
  Box,
  CssBaseline,
  CssVarsProvider,
} from "@mui/joy"
import { Swap } from "./swap/Swap"
import { Navigation } from "./menu/Navigation"
import { Wallet } from "./wallet/Wallet"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { State, StateProps, defaultState } from "../lib/state"

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
  const [state, setState] = useState(defaultState)

  const updateState = (newState: Partial<State>) => {
    setState(x => ({ ...x, ...newState }))
  }

  const stateProps: StateProps = {
    state,
    setState: updateState,
  }

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
        <Navigation {...stateProps} />
        <Body />
        <Wallet {...stateProps} />
      </Box>

    </CssVarsProvider>
  )
}

export default App
