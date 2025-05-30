// data/homepage_selection_data.ts

import type { HomepageSelection } from "../types/types";
import { BlockchainSlug } from "./blockchains_data";
import { DappSlug } from "./dapps_data";


// Sélection pour la homepage
export const HOMEPAGE_SELECTION: HomepageSelection = {
    featuredBlockchains: [
        BlockchainSlug.ETHEREUM,
        BlockchainSlug.BSC,
        BlockchainSlug.POLYGON,
        BlockchainSlug.BASE,
        BlockchainSlug.SOLANA,
    ],
    featuredDapps: [
        DappSlug.UNISWAP,
        DappSlug.AAVE,
        DappSlug.LIDO,
        DappSlug.PANCAKESWAP,
        DappSlug.RAYDIUM,
        DappSlug.COMPOUND,
    ]
};

