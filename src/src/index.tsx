import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App"
import "@fontsource/inter"
import "@rainbow-me/rainbowkit/styles.css"
import {
  getDefaultConfig,
} from "@rainbow-me/rainbowkit"
import { WagmiProvider } from "wagmi"
import {
  mainnet,
  arbitrum,
  optimism,
  polygon,
  base,
  avalanche,
} from "wagmi/chains"
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query"

const config = getDefaultConfig({
  appName: "Dex crypto exchange",
  projectId: "2e6a2bce47d5fcff2d627cd76cedb06c",
  chains: [
    mainnet,
    arbitrum,
    optimism,
    polygon,
    base,
    avalanche,
  ],
})

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
)
