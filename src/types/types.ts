// types/types.ts

import type { Blockchain } from "./blockchains_types";
import type { Dapp } from "./dapps_types";


export interface TestnetGuide {
    blockchain: string; // slug de la blockchain
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
    name: string
    color: string
    slug: string
    symbol: string
    documentation: {
        official?: string
        whitepaper?: string
        yellowpaper?: string
        cookbook?: string
    }
    tools: Array<{
        name: string
        description: string
        url: string
    }>
    frameworks: Array<{
        name: string
        description: string
        language: string
    }>
    testnet: {
        name: string
        faucet: string
        explorer: string
        rpc: string
    }
    tutorials: Array<{
        title: string
        difficulty: string
        duration: string
    }>
}


// Types pour les sélections homepage
export interface HomepageSelection {
    featuredBlockchains: string[]; // slugs des blockchains à mettre en avant
    featuredDapps: string[]; // slugs des dApps à mettre en avant
}


// Types utilitaires
export type BlockchainWithDapps = Blockchain & {
    dapps: Dapp[];
};


export type DeveloperResources = {
    blockchain: string;
    documentation: {
        official: string;
        whitepaper: string;
        yellowpaper?: string;
        cookbook?: string;
    };
    tools: {
        name: string;
        description: string;
        url: string;
    }[];
    frameworks: {
        name: string;
        description: string;
        language: string;
    }[];
    testnet: {
        name: string;
        faucet: string;
        explorer: string;
        rpc: string;
    };
    tutorials: {
        title: string;
        difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
        duration: string;
    }[];
};


