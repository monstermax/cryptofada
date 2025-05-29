// types/dapps_types.ts

import type { BlockchainSlug } from "./blockchains_types";


export enum DappSlug {
    UNISWAP = 'uniswap',
    AAVE = 'aave',
    LIDO = 'lido',
    PANCAKESWAP = 'pancakeswap',
    RAYDIUM = 'raydium',
    COMPOUND = 'compound',
}


export interface Dapp {
    name: string;
    slug: DappSlug;
    category: 'DEX' | 'Lending' | 'Staking' | 'Gaming' | 'NFT' | 'Bridge' | 'Yield' | 'Other';
    description: string;
    longDescription?: string;
    blockchains: BlockchainSlug[]; // slugs des blockchains supportées
    links: {
        website: string;
        docs?: string;
        github?: string;
        twitter?: string;
        discord?: string;
    };
    founded: string;
    team: string;
    token?: string;
}


export interface DappMetrics {
    tvl: string;
    users24h: string;
    volume24h: string;
    transactions24h?: string;
    fees24h?: string;
    totalUsers?: string;
}

