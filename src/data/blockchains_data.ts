// data/blockchains_data.ts

import type { Blockchain, BlockchainMetrics } from "../types/blockchains_types";


export enum BlockchainSlug {
    ETHEREUM = 'ethereum',
    BSC = 'bsc',
    SOLANA = 'solana',
    POLYGON = 'polygon',
    BASE = 'base',
    MONAD = 'monad',
    MEGAETH = 'megaeth',
    ARBITRUM = 'arbitrum',
}


// Liste unique des blockchains (mainnet + testnet)
export const ALL_BLOCKCHAINS: Blockchain[] = [
    // MAINNETS
    {
        name: 'Ethereum',
        symbol: 'ETH',
        slug: BlockchainSlug.ETHEREUM,
        color: '#627EEA',
        description: 'La blockchain programmable leader',
        longDescription: 'Ethereum est la plateforme blockchain programmable leader mondiale, permettant aux développeurs de créer des applications décentralisées.',
        category: 'Layer 1',
        consensus: 'Proof of Stake',
        launched: '2015',
        links: {
            website: 'https://ethereum.org',
            whitepaper: 'https://ethereum.org/whitepaper/',
            github: 'https://github.com/ethereum',
            explorer: 'https://etherscan.io',
        },
        network: 'mainnet'
    },
    {
        name: 'Solana',
        symbol: 'SOL',
        slug: BlockchainSlug.SOLANA,
        color: '#9945FF',
        description: 'Blockchain haute performance',
        longDescription: 'Solana est une blockchain haute performance conçue pour les applications décentralisées à grande échelle.',
        category: 'Layer 1',
        consensus: 'Proof of History + Proof of Stake',
        launched: '2020',
        links: {
            website: 'solana.com',
            whitepaper: 'https://solana.com/solana-whitepaper.pdf',
            github: 'https://github.com/solana-labs',
            explorer: 'https://explorer.solana.com',
        },
        network: 'mainnet'
    },
    {
        name: 'Polygon',
        symbol: 'MATIC',
        slug: BlockchainSlug.POLYGON,
        color: '#8247E5',
        description: 'Solution de mise à l\'échelle d\'Ethereum',
        longDescription: 'Polygon est une solution de mise à l\'échelle pour Ethereum qui offre des transactions rapides et peu coûteuses.',
        category: 'Layer 2',
        consensus: 'Proof of Stake',
        launched: '2017',
        links: {
            website: 'polygon.technology',
            whitepaper: 'https://polygon.technology/papers/pol-whitepaper',
            github: 'https://github.com/maticnetwork',
            explorer: 'https://polygonscan.com',
        },
        network: 'mainnet'
    },
    {
        name: 'Arbitrum',
        symbol: 'ARB',
        slug: BlockchainSlug.ARBITRUM,
        color: '#28A0F0',
        description: 'Layer 2 optimiste pour Ethereum',
        longDescription: 'Arbitrum est une solution de Layer 2 optimiste qui permet des transactions Ethereum rapides et peu coûteuses.',
        category: 'Layer 2',
        consensus: 'Optimistic Rollup',
        launched: '2021',
        links: {
            website: 'arbitrum.io',
            whitepaper: 'https://arbitrum.io/whitepaper.pdf',
            github: 'https://github.com/OffchainLabs',
            explorer: 'https://arbiscan.io',
        },
        network: 'mainnet'
    },
    {
        name: 'Base',
        symbol: 'BASE',
        slug: BlockchainSlug.BASE,
        color: '#0052FF',
        description: 'Layer 2 par Coinbase',
        longDescription: 'Base est une solution Layer 2 développée par Coinbase, offrant un écosystème sécurisé et facile d\'accès.',
        category: 'Layer 2',
        consensus: 'Optimistic Rollup',
        launched: '2023',
        links: {
            website: 'base.org',
            whitepaper: 'https://base.org/whitepaper',
            github: 'https://github.com/base-org',
            explorer: 'https://basescan.org',
        },
        network: 'mainnet'
    },
    {
        name: 'BNB Smart Chain',
        symbol: 'BNB',
        slug: BlockchainSlug.BSC,
        color: '#F3BA2F',
        description: 'Blockchain rapide et peu coûteuse',
        longDescription: 'BNB Smart Chain est une blockchain haute performance compatible EVM avec des frais de transaction très bas.',
        category: 'Layer 1',
        consensus: 'Proof of Staked Authority',
        launched: '2020',
        links: {
            website: 'bnbchain.org',
            whitepaper: 'https://github.com/bnb-chain/whitepaper',
            github: 'https://github.com/bnb-chain',
            explorer: 'https://bscscan.com',
        },
        network: 'mainnet'
    },

    // TESTNETS
    {
        name: 'Monad Testnet',
        symbol: 'MON',
        slug: BlockchainSlug.MONAD,
        color: '#627EEA',
        description: 'La blockchain EVM L1 aux 10k TPS',
        longDescription: 'Monad est une blockchain Layer 1 compatible EVM qui promet 10 000 transactions par seconde avec une finalité instantanée.',
        category: 'Layer 1',
        consensus: 'Proof of Stake',
        launched: '2024',
        links: {
            website: 'monad.xyz',
            whitepaper: 'https://monad.xyz/whitepaper',
            github: 'https://github.com/monad-xyz',
            explorer: 'https://testnet.monad.xyz',
        },
        network: 'testnet'
    },
    {
        name: 'MegaETH Testnet',
        symbol: 'ETH',
        slug: BlockchainSlug.MEGAETH,
        color: '#FF6B35',
        description: 'La blockchain EVM L2 aux 100k TPS',
        longDescription: 'MegaETH est une solution Layer 2 révolutionnaire qui vise 100 000 transactions par seconde tout en restant compatible EVM.',
        category: 'Layer 2',
        consensus: 'Optimistic Rollup',
        launched: '2024',
        links: {
            website: 'megaeth.systems',
            whitepaper: 'https://megaeth.systems/whitepaper',
            github: 'https://github.com/megaeth-labs',
            explorer: 'https://testnet.megaeth.systems',
        },
        network: 'testnet'
    }
];

