import { Web3ReactProvider } from "@web3-react/core"
import React from "react"
import { PRIORITIZED_CONNECTORS } from "../../lib/connections"

export const Web3ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
      <Web3ReactProvider
        connectors={Object.values(PRIORITIZED_CONNECTORS).map((connector) => [connector.connector, connector.hooks])}
      >
        {children}
      </Web3ReactProvider>
    )
  }