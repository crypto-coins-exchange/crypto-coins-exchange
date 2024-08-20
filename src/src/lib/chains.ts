import { ChainId } from "@uniswap/sdk-core"

export enum Chain {
    Ethereum,
    Arbitrum,
    Optimism,
    Polygon,
    Base,
    BnbChain,
    Avalanche,
}

export interface ChainInfo {
    id: number,
    label: string,
    rpc: string,
    nativeCurrency: {
        name: string
        symbol: string
        decimals: 18
    },
    explorer: string,
}

export const chains = new Map<Chain, ChainInfo>([
    [Chain.Ethereum, {
        id: ChainId.MAINNET,
        label: "Ethereum",
        rpc: "https://rpc.ankr.com/eth",
        nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
        explorer: "https://etherscan.io/",
    }],
    [Chain.Arbitrum, {
        id: ChainId.ARBITRUM_ONE,
        label: "Arbitrum",
        rpc: "https://rpc.ankr.com/arbitrum",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        explorer: "https://arbiscan.io/",
    }],
    [Chain.Optimism, {
        id: ChainId.OPTIMISM,
        label: "Optimism",
        rpc: "https://rpc.ankr.com/optimism",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        explorer: "https://optimistic.etherscan.io/",
    }],
    [Chain.Polygon, {
        id: ChainId.POLYGON,
        label: "Polygon",
        rpc: "https://rpc.ankr.com/polygon",
        nativeCurrency: { name: "Polygon Matic", symbol: "MATIC", decimals: 18 },
        explorer: "https://polygonscan.com/",
    }],
    [Chain.Base, {
        id: ChainId.BASE,
        label: "Base",
        rpc: "https://rpc.ankr.com/base",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        explorer: "https://basescan.org/",
    }],
    [Chain.BnbChain, {
        id: ChainId.BNB,
        label: "BNB Chain",
        rpc: "https://rpc.ankr.com/bsc",
        nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
        explorer: "https://bscscan.com/",
    }],
    [Chain.Avalanche, {
        id: ChainId.AVALANCHE,
        label: "Avalanche",
        rpc: "https://rpc.ankr.com/avalanche",
        nativeCurrency: { name: "Avalanche", symbol: "AVAX", decimals: 18 },
        explorer: "https://subnets.avax.network/",
    }],
])

export const chainUrlById: {
    [chainId: number]: string;
} = Array.from(chains.values()).reduce((a, x) => ({ ...a, [x.id]: x.rpc }), {})

export const chainInfoById: {
    [chainId: number]: ChainInfo;
} = Array.from(chains.values()).reduce((a, x) => ({ ...a, [x.id]: x }), {})