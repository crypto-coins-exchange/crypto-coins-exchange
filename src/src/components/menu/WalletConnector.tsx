import { ListItem, ListItemButton } from "@mui/joy";
import { StateProps } from "../../lib/state";
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface Props extends StateProps {

}

export const WalletConnector = (props: Props) => {
    const setWalletConnected = (connected: boolean) => {
        props.setState({ wallet: connected ? { address: "0x98997c9a68b...1d9c3533f9e5d1a1" } : {} })
    }

    return (
        <ListItem role="none">
            <ConnectButton />
            {/* <ListItemButton
                color={props.state.wallet.address ? "warning" : "success"}
                variant="soft"
                onClick={() => setWalletConnected(!props.state.wallet.address)}
            >
                {props.state.wallet.address ? "Disconnect wallet" : "Connect wallet"}
            </ListItemButton> */}
        </ListItem>
    )
}