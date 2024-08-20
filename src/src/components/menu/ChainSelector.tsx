import React from "react"
import { StateProps } from "../../lib/state";
import { Chain } from "../../lib/chains";
import {
    Dropdown,
    ListItemDecorator,
    Menu,
    MenuButton,
    MenuItem,
} from "@mui/joy";
import { Icons } from "../common/Icons";
import { Check } from "@mui/icons-material";

interface Props extends StateProps {

}

export const ChainSelector = (props: Props) => {
    const setChain = (chain: Chain) => {
        props.setState({ chain: { chain } })
    }

    return (
        <Dropdown>
            <MenuButton
                variant="plain"
                size="lg"
                title="Choose chain"
                sx={{ maxWidth: "58px", maxHeight: "42px", borderRadius: "0px" }}
            >
                <Icons chain={props.state.chain.chain} />
            </MenuButton>
            <Menu
                placement="bottom-end"
                size="md"
                sx={{
                    zIndex: "99999",
                    p: 1,
                    gap: 1,
                    "--ListItem-radius": "var(--joy-radius-sm)",
                }}
            >
                <MenuItem onClick={() => setChain(Chain.Ethereum)}>
                    <Icons chain={Chain.Ethereum} />
                    Ethereum
                    <ListItemDecorator>
                        {props.state.chain.chain === Chain.Ethereum && <Check />}
                    </ListItemDecorator>
                </MenuItem>
                <MenuItem onClick={() => setChain(Chain.Arbitrum)}>
                    <Icons chain={Chain.Arbitrum} />
                    Arbitrum
                    <ListItemDecorator>
                        {props.state.chain.chain === Chain.Arbitrum && <Check />}
                    </ListItemDecorator>
                </MenuItem>
                <MenuItem onClick={() => setChain(Chain.Optimism)}>
                    <Icons chain={Chain.Optimism} />
                    Optimism
                    <ListItemDecorator>
                        {props.state.chain.chain === Chain.Optimism && <Check />}
                    </ListItemDecorator>
                </MenuItem>
                <MenuItem onClick={() => setChain(Chain.Polygon)}>
                    <Icons chain={Chain.Polygon} />
                    Polygon
                    <ListItemDecorator>
                        {props.state.chain.chain === Chain.Polygon && <Check />}
                    </ListItemDecorator>
                </MenuItem>
                <MenuItem onClick={() => setChain(Chain.BnbChain)}>
                    <Icons chain={Chain.BnbChain} />
                    BNB Chain
                    <ListItemDecorator>
                        {props.state.chain.chain === Chain.BnbChain && <Check />}
                    </ListItemDecorator>
                </MenuItem>
                <MenuItem onClick={() => setChain(Chain.Avalanche)}>
                    <Icons chain={Chain.Avalanche} />
                    Avalanche
                    <ListItemDecorator>
                        {props.state.chain.chain === Chain.Avalanche && <Check />}
                    </ListItemDecorator>
                </MenuItem>
            </Menu>
        </Dropdown>
    )
}