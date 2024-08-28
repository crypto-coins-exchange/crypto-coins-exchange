import { ListItem } from "@mui/joy"
import { StateProps } from "../../lib/state"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useEffect } from "react"
import { useAccount } from "wagmi"

interface Props extends StateProps {

}

export const WalletConnector = (props: Props) => {
    const { address, isConnecting, isDisconnected } = useAccount()

    useEffect(() => {
        props.setState({ wallet: isDisconnected ? {} : { address } })
    }, [isDisconnected, isConnecting])

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