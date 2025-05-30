// blockchains_types.ts

import type { BlockchainSlug } from "../data/blockchains_data";
import type { Dapp } from "./dapps_types";


export interface Blockchain {
    name: string;
    symbol: string;
    slug: BlockchainSlug;
    color: string;
    description: string;
    longDescription?: string;
    //network: 'mainnet' | 'testnet';
    category: 'Layer 1' | 'Layer 2' | 'Sidechain';
    consensus: string;
    links: {
        website: string;
        whitepaper: string;
        docs?: string;
        github?: string;
        twitter?: string;
        discord?: string;
        explorer: string;
    };
    networks: { name: string, isMainnet: boolean, launched: string, active: boolean, }[],
}


export interface BlockchainMetrics {
    blockchain: BlockchainSlug;
    tvl: string;
    marketCap: string;
    price: string;
    change24h: string;
    transactions24h: string;
    gasPrice: string;
    blockTime: string;
    validators: string;
}


export type BlockchainTuto = {
    blockchain: BlockchainSlug;
    slug: string;
    title: string;
    description: string;
    difficulty: 'Facile' | 'Moyen' | 'Difficile';
    estimatedTime: string;
    steps: {
        title: string;
        description: string;
        links?: string[];
    }[];
    requirements: string[];
}


export type BlockchainAirdrop = {
    blockchain: BlockchainSlug;
    slug: string;
    title: string;
    description: string;
    difficulty: 'Facile' | 'Moyen' | 'Difficile';
    estimatedTime: string;
    airdropPotential: 'Faible' | 'Moyen' | 'Élevé';
    steps: {
        title: string;
        description: string;
        links?: string[];
    }[];
    requirements: string[];
    rewards: string[];
}


export type BlockchainDevelopperResource = {
    blockchain: BlockchainSlug;
    slug: string;
    documentation: {
        official?: string
        whitepaper?: string
        yellowpaper?: string
        cookbook?: string
    };
    tools: Array<{
        name: string
        description: string
        url: string
    }>;
    frameworks: Array<{
        name: string
        description: string
        language: string
    }>;
    testnet: Array<{
        name: string
        faucet: string
        explorer: string
        rpc: string
    }>;
}



// Types utilitaires
export type BlockchainWithDapps = Blockchain & {
    dapps: Dapp[];
};
