// types.ts


export interface Blockchain {
    name: string;
    symbol: string;
    slug: string;
    color: string;
    description: string;
    longDescription?: string;
    category: 'Layer 1' | 'Layer 2' | 'Sidechain';
    consensus: string;
    launched: string;
    website: string;
    whitepaper: string;
    github: string;
    explorer: string;
    metrics: {
        tvl: string;
        marketCap: string;
        price: string;
        change24h: string;
        transactions24h: string;
        gasPrice: string;
        blockTime: string;
        validators: string;
    };
    dappsCount: number;
    status: 'active' | 'inactive' | 'maintenance';
    // Pour différencier mainnet/testnet
    network: 'mainnet' | 'testnet';
}


export interface Dapp {
    name: string;
    slug: string;
    category: 'DEX' | 'Lending' | 'Staking' | 'Gaming' | 'NFT' | 'Bridge' | 'Yield' | 'Other';
    description: string;
    longDescription?: string;
    blockchains: string[]; // slugs des blockchains supportées
    metrics: {
        tvl: string;
        users24h: string;
        volume24h: string;
        transactions24h?: string;
        fees24h?: string;
        totalUsers?: string;
    };
    links: {
        website: string;
        docs?: string;
        github?: string;
        twitter?: string;
        discord?: string;
    };
    verified: boolean;
    founded: string;
    team: string;
    token?: string;
}


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

