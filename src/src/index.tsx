import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App"
import "@fontsource/inter"
import "@rainbow-me/rainbowkit/styles.css"
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit"
import { WagmiProvider } from "wagmi"
import {
  mainnet,
  arbitrum,
  optimism,
  polygon,
  base,
  opBNB,
  avalanche,
} from "wagmi/chains"
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query"

const config = getDefaultConfig({
  appName: "Dex crypto exchange",
  projectId: "2e6a2bce47d5fcff2d627cd76cedb06c",
  chains: [mainnet,
    arbitrum,
    optimism,
    polygon,
    base,
    opBNB,
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
        <RainbowKitProvider locale="en-US" modalSize="compact" theme={darkTheme()}>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
)
