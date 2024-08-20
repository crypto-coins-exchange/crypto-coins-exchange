import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App"
import "@fontsource/inter";
import { Web3ContextProvider } from "./components/wallet/Web3ContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <React.StrictMode>
    <Web3ContextProvider>
      <App />
    </Web3ContextProvider>
  </React.StrictMode>
)
