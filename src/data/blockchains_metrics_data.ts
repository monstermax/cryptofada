// data/blockchains_metrics_data.ts

import { BlockchainSlug } from "./blockchains_data";

import type { BlockchainMetrics } from "../types/blockchains_types";


export const BLOCKCHAINS_METRICS: BlockchainMetrics[] = [
    {
        blockchain: BlockchainSlug.ETHEREUM,
        tvl: '$45.2B',
        marketCap: '$280.5B',
        price: '$2,340',
        change24h: '+2.4%',
        transactions24h: '1.2M',
        gasPrice: '25 gwei',
        blockTime: '12s',
        validators: '1,000,000+'
    },
    {
        blockchain: BlockchainSlug.SOLANA,
        tvl: '$8.7B',
        marketCap: '$45.8B',
        price: '$95.20',
        change24h: '-1.2%',
        transactions24h: '25M',
        gasPrice: '0.000005 SOL',
        blockTime: '0.4s',
        validators: '1,800+'
    },
    {
        blockchain: BlockchainSlug.POLYGON,
        tvl: '$1.2B',
        marketCap: '$3.2B',
        price: '$0.85',
        change24h: '+1.8%',
        transactions24h: '2.8M',
        gasPrice: '0.001 MATIC',
        blockTime: '2s',
        validators: '100+'
    },
    {
        blockchain: BlockchainSlug.ARBITRUM,
        tvl: '$2.8B',
        marketCap: '$2.1B',
        price: '$0.92',
        change24h: '+3.2%',
        transactions24h: '450K',
        gasPrice: '0.1 gwei',
        blockTime: '0.25s',
        validators: '1'
    },
    {
        blockchain: BlockchainSlug.BASE,
        tvl: '$1.8B',
        marketCap: '-',
        price: '-',
        change24h: '0%',
        transactions24h: '280K',
        gasPrice: '0.05 gwei',
        blockTime: '2s',
        validators: '1'
    },
    {
        blockchain: BlockchainSlug.BSC,
        tvl: '$3.1B',
        marketCap: '$42.8B',
        price: '$285',
        change24h: '+0.8%',
        transactions24h: '3.2M',
        gasPrice: '5 gwei',
        blockTime: '3s',
        validators: '21'
    },
    {
        blockchain: BlockchainSlug.MONAD,
        tvl: '$0',
        marketCap: '$0',
        price: '$0',
        change24h: '0%',
        transactions24h: '50K',
        gasPrice: '0.1 gwei',
        blockTime: '0.1s',
        validators: '500+'
    },
    {
        blockchain: BlockchainSlug.MEGAETH,
        tvl: '$0',
        marketCap: '$0',
        price: '$0',
        change24h: '0%',
        transactions24h: '25K',
        gasPrice: '0.01 gwei',
        blockTime: '0.05s',
        validators: '1'
    },
];


