// types/types.ts

import type { BlockchainSlug } from "../data/blockchains_data";
import type { DappSlug } from "../data/dapps_data";


// Types pour les sélections homepage
export interface HomepageSelection {
    featuredBlockchains: BlockchainSlug[]; // slugs des blockchains à mettre en avant
    featuredDapps: DappSlug[]; // slugs des dApps à mettre en avant
}




