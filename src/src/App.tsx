import React from "react"
import logo from "./logo.svg"
import {
  CssBaseline,
  CssVarsProvider,
} from "@mui/joy"
import { Swap } from "./swap/Swap"
import { Navigation } from "./Navigation"

function App() {

  return (
    <CssVarsProvider
      defaultMode="dark"
    >
      <CssBaseline />
      <Navigation />
      <Swap />
    </CssVarsProvider>
  )
}

export default App
