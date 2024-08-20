import { Web3ReactHooks } from "@web3-react/core"
import { AddEthereumChainParameter, Connector } from "@web3-react/types"
import { chainInfoById } from "./chains"
import { buildWalletConnectConnector } from "./wallet-connect"

export interface Connection {
    connector: Connector
    hooks: Web3ReactHooks
    type: ConnectionType
}

export enum ConnectionType {
    WALLET_CONNECT = "WALLET_CONNECT",
}

export function onConnectionError(error: Error) {
    console.debug(`web3-react error: ${error}`)
}

export const PRIORITIZED_CONNECTORS: { [key in ConnectionType]: Connection } = {
    [ConnectionType.WALLET_CONNECT]: buildWalletConnectConnector(),
}

export function getConnection(c: Connector | ConnectionType) {
    if (c instanceof Connector) {
        const connection = Object.values(PRIORITIZED_CONNECTORS).find((connection) => connection.connector === c)
        if (!connection) {
            throw Error("Unsupported Connector")
        }
        return connection
    } else {
        switch (c) {
            case ConnectionType.WALLET_CONNECT:
                return PRIORITIZED_CONNECTORS[ConnectionType.WALLET_CONNECT]
        }
    }
}

export const switchNetwork = async (chainId: number, connectionType: ConnectionType | null) => {
    if (!connectionType) {
        return
    }

    const { connector } = getConnection(connectionType)

    if (connectionType === ConnectionType.WALLET_CONNECT) {
        await connector.activate(chainId)
        return
    }

    const chainInfo = chainInfoById[chainId]
    const addChainParameter: AddEthereumChainParameter = {
        chainId,
        chainName: chainInfo.label,
        rpcUrls: [chainInfo.rpc],
        nativeCurrency: chainInfo.nativeCurrency,
        blockExplorerUrls: [chainInfo.explorer],
    }
    await connector.activate(addChainParameter)
}

export const tryActivateConnector = async (connector: Connector): Promise<ConnectionType | undefined> => {
    await connector.activate()
    const connectionType = getConnection(connector).type
    return connectionType
}

export const tryDeactivateConnector = async (connector: Connector): Promise<null | undefined> => {
    connector.deactivate?.()
    connector.resetState()
    return null
}