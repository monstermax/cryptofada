// data/dapps_metrics_data.ts

import { DappSlug } from "./dapps_data";

import type { DappMetrics } from "../types/dapps_types";


export const DAPPS_METRICS: DappMetrics[] = [
    {
        dapp: DappSlug.UNISWAP,
        tvl: '$4.2B',
        users24h: '45.2K',
        volume24h: '$850M',
        transactions24h: '125K',
        fees24h: '$2.1M',
        totalUsers: '3.2M',
    },
    {
        dapp: DappSlug.AAVE,
        tvl: '$12.5B',
        users24h: '12.8K',
        volume24h: '$245M',
        transactions24h: '28K',
        fees24h: '$650K',
        totalUsers: '450K',
    },
    {
        dapp: DappSlug.LIDO,
        tvl: '$28.3B',
        users24h: '8.1K',
        volume24h: '$180M',
        transactions24h: '15K',
        fees24h: '$890K',
        totalUsers: '180K',
    },
    {
        dapp: DappSlug.PANCAKESWAP,
        tvl: '$2.1B',
        users24h: '125K',
        volume24h: '$420M',
        transactions24h: '890K',
        fees24h: '$1.2M',
        totalUsers: '2.8M',
    },
    {
        dapp: DappSlug.RAYDIUM,
        tvl: '$450M',
        users24h: '32.1K',
        volume24h: '$180M',
        transactions24h: '156K',
        fees24h: '$540K',
        totalUsers: '285K',
    },
    {
        dapp: DappSlug.COMPOUND,
        tvl: '$1.8B',
        users24h: '6.5K',
        volume24h: '$95M',
        transactions24h: '12K',
        fees24h: '$285K',
        totalUsers: '125K',
    },

];

