// types/dapps_types.ts

import { BlockchainSlug } from "../data/blockchains_data";
import { DappCategorySlug } from "../data/dapps_categories_data";
import { DappSlug } from "../data/dapps_data";



export type DappCategory = {
    name: string,
    slug: DappCategorySlug,
};


export interface Dapp {
    name: string;
    slug: DappSlug;
    category: DappCategorySlug;
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
};


export interface DappMetrics {
    dapp: DappSlug,
    tvl: string;
    users24h: string;
    volume24h: string;
    transactions24h?: string;
    fees24h?: string;
    totalUsers?: string;
};

