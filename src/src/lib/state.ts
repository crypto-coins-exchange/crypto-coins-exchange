import { Chain } from "./chains";

interface ChainState {
    chain: Chain,
}

interface WalletState {
    address?: string,
}

interface ThemeState {
    isLight: boolean,
}

export interface State {
    theme: ThemeState,
    chain: ChainState,
    wallet: WalletState,
}

export interface StateProps {
    state: State,
    setState: (newState: Partial<State>) => void,
}

export const defaultState: State = {
    theme: {
        isLight: false,
    },
    chain: {
        chain: Chain.Ethereum,
    },
    wallet: {

    },
}