import React from "react"
import logo from "./logo.svg"
import { CssVarsProvider, Button } from "@mui/joy"

function App() {
  return (
    <CssVarsProvider>
      <Button>Button</Button>
    </CssVarsProvider>
  )
}

export default App
