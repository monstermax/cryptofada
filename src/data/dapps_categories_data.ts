// data/dapps_categories_data.ts

import type { DappCategory } from "../types/dapps_types";


// Liste unique des catégories de dApps

export enum DappCategorySlug {
    DEX = 'dex',
    LENDING = 'lending',
    STAKING = 'staking',
    GAMING = 'gaming',
    NFT = 'nft',
    BRIDGE = 'bridge',
    YIELD = 'yield',
    OTHER = 'other',
};


export const DAPPS_CATEGORIES: DappCategory[] = [
    {
        name: 'DEX',
        slug: DappCategorySlug.DEX,
    },
    {
        name: 'Lending',
        slug: DappCategorySlug.LENDING,
    },
    {
        name: 'Staking',
        slug: DappCategorySlug.STAKING,
    },
    {
        name: 'Gaming',
        slug: DappCategorySlug.GAMING,
    },
    {
        name: 'NFT',
        slug: DappCategorySlug.NFT,
    },
    {
        name: 'Bridge',
        slug: DappCategorySlug.BRIDGE,
    },
    {
        name: 'Yield',
        slug: DappCategorySlug.YIELD,
    },
    {
        name: 'Other',
        slug: DappCategorySlug.OTHER,
    },
];

