import React from "react"
import logo from "./logo.svg"
import {
  CssVarsProvider,
} from "@mui/joy"
import { Exchange } from "./exchange/Exchange"

function App() {
  return (
    <CssVarsProvider>
      <Exchange />
    </CssVarsProvider>
  )
}

export default App
