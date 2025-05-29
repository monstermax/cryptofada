// blockchains_types.ts

import type { BlockchainSlug } from "../data/blockchains_data";


export interface Blockchain {
    name: string;
    symbol: string;
    slug: BlockchainSlug;
    color: string;
    description: string;
    longDescription?: string;
    network: 'mainnet' | 'testnet';
    category: 'Layer 1' | 'Layer 2' | 'Sidechain';
    consensus: string;
    launched: string;
    links: {
        website: string;
        whitepaper: string;
        docs?: string;
        github?: string;
        twitter?: string;
        discord?: string;
        explorer: string;
    };
}


export interface BlockchainMetrics {
    tvl: string;
    marketCap: string;
    price: string;
    change24h: string;
    transactions24h: string;
    gasPrice: string;
    blockTime: string;
    validators: string;
}

