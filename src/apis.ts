// apis.ts

import type { Blockchain, Dapp, TestnetGuide, HomepageSelection, DeveloperResources } from "./types";

// === DONNÉES CENTRALISÉES ===

// Liste unique des blockchains (mainnet + testnet)
const ALL_BLOCKCHAINS: Blockchain[] = [
    // MAINNETS
    {
        name: 'Ethereum',
        symbol: 'ETH',
        slug: 'ethereum',
        color: '#627EEA',
        description: 'La blockchain programmable leader',
        longDescription: 'Ethereum est la plateforme blockchain programmable leader mondiale, permettant aux développeurs de créer des applications décentralisées.',
        category: 'Layer 1',
        consensus: 'Proof of Stake',
        launched: '2015',
        website: 'ethereum.org',
        whitepaper: 'https://ethereum.org/whitepaper/',
        github: 'https://github.com/ethereum',
        explorer: 'https://etherscan.io',
        metrics: {
            tvl: '$45.2B',
            marketCap: '$280.5B',
            price: '$2,340',
            change24h: '+2.4%',
            transactions24h: '1.2M',
            gasPrice: '25 gwei',
            blockTime: '12s',
            validators: '1,000,000+'
        },
        dappsCount: 2847,
        status: 'active',
        network: 'mainnet'
    },
    {
        name: 'Solana',
        symbol: 'SOL',
        slug: 'solana',
        color: '#9945FF',
        description: 'Blockchain haute performance',
        longDescription: 'Solana est une blockchain haute performance conçue pour les applications décentralisées à grande échelle.',
        category: 'Layer 1',
        consensus: 'Proof of History + Proof of Stake',
        launched: '2020',
        website: 'solana.com',
        whitepaper: 'https://solana.com/solana-whitepaper.pdf',
        github: 'https://github.com/solana-labs',
        explorer: 'https://explorer.solana.com',
        metrics: {
            tvl: '$8.7B',
            marketCap: '$45.8B',
            price: '$95.20',
            change24h: '-1.2%',
            transactions24h: '25M',
            gasPrice: '0.000005 SOL',
            blockTime: '0.4s',
            validators: '1,800+'
        },
        dappsCount: 856,
        status: 'active',
        network: 'mainnet'
    },
    {
        name: 'Polygon',
        symbol: 'MATIC',
        slug: 'polygon',
        color: '#8247E5',
        description: 'Solution de mise à l\'échelle d\'Ethereum',
        longDescription: 'Polygon est une solution de mise à l\'échelle pour Ethereum qui offre des transactions rapides et peu coûteuses.',
        category: 'Layer 2',
        consensus: 'Proof of Stake',
        launched: '2017',
        website: 'polygon.technology',
        whitepaper: 'https://polygon.technology/papers/pol-whitepaper',
        github: 'https://github.com/maticnetwork',
        explorer: 'https://polygonscan.com',
        metrics: {
            tvl: '$1.2B',
            marketCap: '$3.2B',
            price: '$0.85',
            change24h: '+1.8%',
            transactions24h: '2.8M',
            gasPrice: '0.001 MATIC',
            blockTime: '2s',
            validators: '100+'
        },
        dappsCount: 1234,
        status: 'active',
        network: 'mainnet'
    },
    {
        name: 'Arbitrum',
        symbol: 'ARB',
        slug: 'arbitrum',
        color: '#28A0F0',
        description: 'Layer 2 optimiste pour Ethereum',
        longDescription: 'Arbitrum est une solution de Layer 2 optimiste qui permet des transactions Ethereum rapides et peu coûteuses.',
        category: 'Layer 2',
        consensus: 'Optimistic Rollup',
        launched: '2021',
        website: 'arbitrum.io',
        whitepaper: 'https://arbitrum.io/whitepaper.pdf',
        github: 'https://github.com/OffchainLabs',
        explorer: 'https://arbiscan.io',
        metrics: {
            tvl: '$2.8B',
            marketCap: '$2.1B',
            price: '$0.92',
            change24h: '+3.2%',
            transactions24h: '450K',
            gasPrice: '0.1 gwei',
            blockTime: '0.25s',
            validators: '1'
        },
        dappsCount: 687,
        status: 'active',
        network: 'mainnet'
    },
    {
        name: 'Base',
        symbol: 'BASE',
        slug: 'base',
        color: '#0052FF',
        description: 'Layer 2 par Coinbase',
        longDescription: 'Base est une solution Layer 2 développée par Coinbase, offrant un écosystème sécurisé et facile d\'accès.',
        category: 'Layer 2',
        consensus: 'Optimistic Rollup',
        launched: '2023',
        website: 'base.org',
        whitepaper: 'https://base.org/whitepaper',
        github: 'https://github.com/base-org',
        explorer: 'https://basescan.org',
        metrics: {
            tvl: '$1.8B',
            marketCap: '-',
            price: '-',
            change24h: '0%',
            transactions24h: '280K',
            gasPrice: '0.05 gwei',
            blockTime: '2s',
            validators: '1'
        },
        dappsCount: 423,
        status: 'active',
        network: 'mainnet'
    },
    {
        name: 'BNB Smart Chain',
        symbol: 'BNB',
        slug: 'bsc',
        color: '#F3BA2F',
        description: 'Blockchain rapide et peu coûteuse',
        longDescription: 'BNB Smart Chain est une blockchain haute performance compatible EVM avec des frais de transaction très bas.',
        category: 'Layer 1',
        consensus: 'Proof of Staked Authority',
        launched: '2020',
        website: 'bnbchain.org',
        whitepaper: 'https://github.com/bnb-chain/whitepaper',
        github: 'https://github.com/bnb-chain',
        explorer: 'https://bscscan.com',
        metrics: {
            tvl: '$3.1B',
            marketCap: '$42.8B',
            price: '$285',
            change24h: '+0.8%',
            transactions24h: '3.2M',
            gasPrice: '5 gwei',
            blockTime: '3s',
            validators: '21'
        },
        dappsCount: 892,
        status: 'active',
        network: 'mainnet'
    },

    // TESTNETS
    {
        name: 'Monad Testnet',
        symbol: 'MON',
        slug: 'monad',
        color: '#627EEA',
        description: 'La blockchain EVM L1 aux 10k TPS',
        longDescription: 'Monad est une blockchain Layer 1 compatible EVM qui promet 10 000 transactions par seconde avec une finalité instantanée.',
        category: 'Layer 1',
        consensus: 'Proof of Stake',
        launched: '2024',
        website: 'monad.xyz',
        whitepaper: 'https://monad.xyz/whitepaper',
        github: 'https://github.com/monad-xyz',
        explorer: 'https://testnet.monad.xyz',
        metrics: {
            tvl: '$0',
            marketCap: '$0',
            price: '$0',
            change24h: '0%',
            transactions24h: '50K',
            gasPrice: '0.1 gwei',
            blockTime: '0.1s',
            validators: '500+'
        },
        dappsCount: 15,
        status: 'active',
        network: 'testnet'
    },
    {
        name: 'MegaETH Testnet',
        symbol: 'ETH',
        slug: 'megaeth',
        color: '#FF6B35',
        description: 'La blockchain EVM L2 aux 100k TPS',
        longDescription: 'MegaETH est une solution Layer 2 révolutionnaire qui vise 100 000 transactions par seconde tout en restant compatible EVM.',
        category: 'Layer 2',
        consensus: 'Optimistic Rollup',
        launched: '2024',
        website: 'megaeth.systems',
        whitepaper: 'https://megaeth.systems/whitepaper',
        github: 'https://github.com/megaeth-labs',
        explorer: 'https://testnet.megaeth.systems',
        metrics: {
            tvl: '$0',
            marketCap: '$0',
            price: '$0',
            change24h: '0%',
            transactions24h: '25K',
            gasPrice: '0.01 gwei',
            blockTime: '0.05s',
            validators: '1'
        },
        dappsCount: 8,
        status: 'active',
        network: 'testnet'
    }
];

// Liste unique des dApps
const ALL_DAPPS: Dapp[] = [
    {
        name: 'Uniswap',
        slug: 'uniswap',
        category: 'DEX',
        description: 'Protocol d\'échange décentralisé leader',
        longDescription: 'Uniswap utilise un modèle de teneur de marché automatisé (AMM) qui permet aux utilisateurs de trader contre un pool de liquidité.',
        blockchains: ['ethereum', 'polygon', 'arbitrum', 'base'],
        metrics: {
            tvl: '$4.2B',
            users24h: '45.2K',
            volume24h: '$850M',
            transactions24h: '125K',
            fees24h: '$2.1M',
            totalUsers: '3.2M'
        },
        links: {
            website: 'https://app.uniswap.org',
            docs: 'https://docs.uniswap.org',
            github: 'https://github.com/Uniswap',
            twitter: 'https://twitter.com/Uniswap',
            discord: 'https://discord.gg/FCfyBSbCU5'
        },
        verified: true,
        founded: '2018',
        team: 'Uniswap Labs',
        token: 'UNI'
    },
    {
        name: 'Aave',
        slug: 'aave',
        category: 'Lending',
        description: 'Protocole de prêt et d\'emprunt DeFi',
        longDescription: 'Aave permet aux utilisateurs de déposer des crypto-monnaies pour gagner des intérêts ou d\'emprunter des actifs.',
        blockchains: ['ethereum', 'polygon', 'arbitrum'],
        metrics: {
            tvl: '$12.5B',
            users24h: '12.8K',
            volume24h: '$245M',
            transactions24h: '28K',
            fees24h: '$650K',
            totalUsers: '450K'
        },
        links: {
            website: 'https://app.aave.com',
            docs: 'https://docs.aave.com',
            github: 'https://github.com/aave',
            twitter: 'https://twitter.com/AaveAave',
            discord: 'https://discord.gg/CvKUrqM'
        },
        verified: true,
        founded: '2017',
        team: 'Aave Companies',
        token: 'AAVE'
    },
    {
        name: 'Lido',
        slug: 'lido',
        category: 'Staking',
        description: 'Solution de staking liquide',
        blockchains: ['ethereum', 'solana', 'polygon'],
        metrics: {
            tvl: '$28.3B',
            users24h: '8.1K',
            volume24h: '$180M',
            transactions24h: '15K',
            fees24h: '$890K',
            totalUsers: '180K'
        },
        links: {
            website: 'https://lido.fi',
            docs: 'https://docs.lido.fi',
            github: 'https://github.com/LidoFinance',
            twitter: 'https://twitter.com/LidoFinance'
        },
        verified: true,
        founded: '2020',
        team: 'Lido DAO',
        token: 'LDO'
    },
    {
        name: 'PancakeSwap',
        slug: 'pancakeswap',
        category: 'DEX',
        description: 'DEX populaire multi-chaînes',
        blockchains: ['bsc', 'ethereum', 'arbitrum'],
        metrics: {
            tvl: '$2.1B',
            users24h: '125K',
            volume24h: '$420M',
            transactions24h: '890K',
            fees24h: '$1.2M',
            totalUsers: '2.8M'
        },
        links: {
            website: 'https://pancakeswap.finance',
            docs: 'https://docs.pancakeswap.finance',
            github: 'https://github.com/pancakeswap',
            twitter: 'https://twitter.com/PancakeSwap'
        },
        verified: true,
        founded: '2020',
        team: 'PancakeSwap Team',
        token: 'CAKE'
    },
    {
        name: 'Raydium',
        slug: 'raydium',
        category: 'DEX',
        description: 'AMM et plateforme de liquidité sur Solana',
        blockchains: ['solana'],
        metrics: {
            tvl: '$450M',
            users24h: '32.1K',
            volume24h: '$180M',
            transactions24h: '156K',
            fees24h: '$540K',
            totalUsers: '285K'
        },
        links: {
            website: 'https://raydium.io',
            docs: 'https://docs.raydium.io',
            github: 'https://github.com/raydium-io',
            twitter: 'https://twitter.com/RaydiumProtocol'
        },
        verified: true,
        founded: '2021',
        team: 'Raydium Team',
        token: 'RAY'
    },
    {
        name: 'Compound',
        slug: 'compound',
        category: 'Lending',
        description: 'Protocole de finance algorithmique',
        blockchains: ['ethereum', 'polygon', 'base'],
        metrics: {
            tvl: '$1.8B',
            users24h: '6.5K',
            volume24h: '$95M',
            transactions24h: '12K',
            fees24h: '$285K',
            totalUsers: '125K'
        },
        links: {
            website: 'https://compound.finance',
            docs: 'https://docs.compound.finance',
            github: 'https://github.com/compound-finance',
            twitter: 'https://twitter.com/compound'
        },
        verified: true,
        founded: '2018',
        team: 'Compound Labs',
        token: 'COMP'
    }
];

// Sélection pour la homepage
const HOMEPAGE_SELECTION: HomepageSelection = {
    featuredBlockchains: ['ethereum', 'bsc', 'polygon', 'base', 'solana'],
    featuredDapps: ['uniswap', 'aave', 'lido', 'pancakeswap', 'raydium', 'compound']
};

// Guides pour les testnets
const TESTNET_GUIDES: TestnetGuide[] = [
    {
        blockchain: 'monad',
        title: 'Guide Monad Testnet - Préparez l\'airdrop',
        description: 'Participez au testnet Monad pour potentiellement recevoir un airdrop lors du mainnet.',
        difficulty: 'Moyen',
        estimatedTime: '2-3 heures',
        airdropPotential: 'Élevé',
        requirements: [
            'Wallet MetaMask',
            'Quelques ETH pour les frais de bridge',
            'Compte Twitter/Discord'
        ],
        steps: [
            {
                title: 'Configurer le réseau Monad',
                description: 'Ajoutez le réseau Monad Testnet à votre wallet MetaMask',
                links: ['https://testnet.monad.xyz/setup']
            },
            {
                title: 'Obtenir des tokens de test',
                description: 'Utilisez le faucet pour obtenir des MON de test',
                links: ['https://faucet.monad.xyz']
            },
            {
                title: 'Tester les dApps',
                description: 'Interagissez avec les dApps disponibles sur le testnet',
                links: ['https://testnet.monad.xyz/dapps']
            },
            {
                title: 'Participer à la communauté',
                description: 'Rejoignez Discord et partagez vos retours',
                links: ['https://discord.gg/monad']
            }
        ],
        rewards: [
            'Potentiel airdrop de tokens MON',
            'Early adopter NFT',
            'Accès prioritaire au mainnet'
        ]
    },
    {
        blockchain: 'megaeth',
        title: 'Guide MegaETH Testnet - Ultra haute performance',
        description: 'Testez la blockchain la plus rapide et préparez-vous pour l\'airdrop.',
        difficulty: 'Facile',
        estimatedTime: '1-2 heures',
        airdropPotential: 'Moyen',
        requirements: [
            'Wallet compatible EVM',
            'Quelques ETH pour les frais'
        ],
        steps: [
            {
                title: 'Setup wallet',
                description: 'Configurez MegaETH Testnet dans votre wallet'
            },
            {
                title: 'Faucet tokens',
                description: 'Récupérez des tokens de test gratuits'
            },
            {
                title: 'Test transactions',
                description: 'Effectuez des transactions pour tester la vitesse'
            }
        ],
        rewards: [
            'Possible airdrop de tokens',
            'Testnet contributor badge'
        ]
    }
];

// === FONCTIONS API ===

export async function getBlockchains(): Promise<Blockchain[]> {
    // Simulation d'un appel API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ALL_BLOCKCHAINS.filter(b => b.network === 'mainnet'));
        }, 100);
    });
}

export async function getTestnets(): Promise<Blockchain[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ALL_BLOCKCHAINS.filter(b => b.network === 'testnet'));
        }, 100);
    });
}

export async function getBlockchainBySlug(slug: string): Promise<Blockchain | null> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const blockchain = ALL_BLOCKCHAINS.find(b => b.slug === slug);
            resolve(blockchain || null);
        }, 100);
    });
}

export async function getDapps(): Promise<Dapp[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ALL_DAPPS);
        }, 100);
    });
}

export async function getDappBySlug(slug: string): Promise<Dapp | null> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const dapp = ALL_DAPPS.find(d => d.slug === slug);
            resolve(dapp || null);
        }, 100);
    });
}

export async function getDappsByBlockchain(blockchainSlug: string): Promise<Dapp[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const dapps = ALL_DAPPS.filter(d => d.blockchains.includes(blockchainSlug));
            resolve(dapps);
        }, 100);
    });
}

// === FONCTIONS HOMEPAGE ===

export async function getHomepageBlockchains(): Promise<Blockchain[]> {
    const allBlockchains = await getBlockchains();
    return allBlockchains.filter(b => HOMEPAGE_SELECTION.featuredBlockchains.includes(b.slug));
}

export async function getHomepageDapps(): Promise<Dapp[]> {
    const allDapps = await getDapps();
    return allDapps.filter(d => HOMEPAGE_SELECTION.featuredDapps.includes(d.slug));
}

// === FONCTIONS TESTNETS ===

export async function getTestnetGuides(): Promise<TestnetGuide[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(TESTNET_GUIDES);
        }, 100);
    });
}

export async function getTestnetGuideByBlockchain(blockchainSlug: string): Promise<TestnetGuide | null> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const guide = TESTNET_GUIDES.find(g => g.blockchain === blockchainSlug);
            resolve(guide || null);
        }, 100);
    });
}


// Fonction utilitaire pour convertir slug en nom de blockchain
export function getBlockchainNameBySlug(slug: string): string {
    const blockchain = ALL_BLOCKCHAINS.find(chain => chain.slug === slug);
    return blockchain?.name || slug
}

