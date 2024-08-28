import { ListItem } from "@mui/joy"
import { StateProps } from "../../lib/state"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useEffect } from "react"
import { useAccount, useChainId } from "wagmi"
import { chainInfoById } from "../../lib/chains"

interface Props extends StateProps {

}

export const WalletConnector = (props: Props) => {
    const { address, isConnecting, isDisconnected } = useAccount()
    const chainId = useChainId()

    useEffect(() => {
        props.setState({ wallet: isDisconnected ? {} : { address } })
    }, [isDisconnected, isConnecting])

    useEffect(() => {
        props.setState({ chain: { chain: chainInfoById[chainId].code } })
    }, [chainId])

    return (
        <ListItem role="none">
            <ConnectButton
                accountStatus="address"
                chainStatus="icon"
                showBalance={false}
            />
        </ListItem>
    )
}