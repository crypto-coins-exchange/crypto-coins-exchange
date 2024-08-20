import { Chain } from "./chains";

interface ChainState {
    chain: Chain,
}

interface WalletState {
    address?: string,
}

export interface State {
    chain: ChainState,
    wallet: WalletState,
}

export interface StateProps {
    state: State,
    setState: (newState: Partial<State>) => void,
}

export const defaultState: State = {
    chain: {
        chain: Chain.Ethereum,
    },
    wallet: {

    },
}