// data/dapps_data.ts

import type { Dapp } from "../types/blockchains_types";


// Liste unique des dApps
export const ALL_DAPPS: Dapp[] = [
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

