import React from "react"
import logo from "./logo.svg"
import {
  CssBaseline,
  CssVarsProvider,
} from "@mui/joy"
import { Exchange } from "./exchange/Exchange"
import { Navigation } from "./Navigation"

function App() {

  return (
    <CssVarsProvider
      defaultMode="dark"
    >
      <CssBaseline />
      <Navigation />
      <Exchange />
    </CssVarsProvider>
  )
}

export default App
