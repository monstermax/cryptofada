// apis/apis.ts

import { ALL_BLOCKCHAINS, BlockchainSlug } from "../data/blockchains_data";
import { BLOCKCHAINS_DEVELOPER_RESOURCES } from "../data/blockchains_developper_resources_data";
import { ALL_DAPPS, DappSlug } from "../data/dapps_data";
import { HOMEPAGE_SELECTION } from "../data/homepage_selection_data";
import { BLOCKCHAINS_METRICS } from "../data/blockchains_metrics_data";
import { DAPPS_METRICS } from "../data/dapps_metrics_data";
import { BLOCKCHAINS_TUTOS } from "../data/blockchains_tutos_data";
import { BLOCKCHAINS_AIRDROPS } from "../data/blockchains_airdrops_data";
import { DAPPS_CATEGORIES } from "../data/dapps_categories_data";

import type { Blockchain, BlockchainAirdrop, BlockchainDevelopperResource, BlockchainMetrics, BlockchainTuto } from "../types/blockchains_types";
import type { Dapp, DappCategory, DappMetrics } from "../types/dapps_types";


// === FONCTIONS API BLOCKCHAIN ===

export async function getBlockchains(): Promise<Blockchain[]> {
    // Simulation d'un appel API (100 ms)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ALL_BLOCKCHAINS);
        }, 100);
    });
}


export async function getBlockchainsDevelopperResources(): Promise<BlockchainDevelopperResource[]> {
    // Simulation d'un appel API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(BLOCKCHAINS_DEVELOPER_RESOURCES);
        }, 100);
    });
}


export async function getBlockchainsMetrics(): Promise<BlockchainMetrics[]> {
    // Simulation d'un appel API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(BLOCKCHAINS_METRICS);
        }, 100);
    });
}


export async function getBlockchainsTutos(): Promise<BlockchainTuto[]> {
    // Simulation d'un appel API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(BLOCKCHAINS_TUTOS);
        }, 100);
    });
}


export async function getBlockchainsAirdrops(): Promise<BlockchainAirdrop[]> {
    // Simulation d'un appel API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(BLOCKCHAINS_AIRDROPS);
        }, 100);
    });
}


// === FONCTIONS API DAPPS ===

export async function getDapps(): Promise<Dapp[]> {
    // Simulation d'un appel API (100 ms)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ALL_DAPPS);
        }, 100);
    });
}


export async function getDappsCategories(): Promise<DappCategory[]> {
    // Simulation d'un appel API (100 ms)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(DAPPS_CATEGORIES);
        }, 100);
    });
}


export async function getDappsMetrics(): Promise<DappMetrics[]> {
    // Simulation d'un appel API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(DAPPS_METRICS);
        }, 100);
    });
}




// === FONCTIONS BLOCKCHAIN ===

export async function getBlockchain(slug: BlockchainSlug): Promise<Blockchain | null> {
    const blockchains = await getBlockchains();
    const blockchain = blockchains.find(b => b.slug === slug);
    return blockchain ?? null;
}



// === FONCTIONS DAPPS ===

export async function getDapp(dappSlug: DappSlug): Promise<Dapp | null> {
    const dapps = await getDapps();
    const dapp = dapps.find(d => d.slug === dappSlug);
    return dapp ?? null;
}


export async function getBlockchainDapps(blockchainSlug: BlockchainSlug): Promise<Dapp[]> {
    const dapps = await getDapps();
    const blockchainDapps = dapps.filter(d => d.blockchains.includes(blockchainSlug));
    return blockchainDapps;
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






// === FONCTIONS TEMP (à migrer dans data) ===

// Fonctions utilitaires
export function getBlockchainTutorialDuration(slug: BlockchainSlug): string {
    const blockchainsTutosDurations: Partial<Record<BlockchainSlug, string>> = {
        'ethereum': '8 min',
        'solana': '6 min',
        'polygon': '5 min',
        'arbitrum': '7 min',
        'base': '5 min',
        'bsc': '6 min',
    };

    return blockchainsTutosDurations[slug as keyof typeof blockchainsTutosDurations] || '6 min';
}


export function getBlockchainTutorialDifficulty(slug: BlockchainSlug): string {
    const blockchainsTutosDifficulties: Partial<Record<BlockchainSlug, string>> = {
        'ethereum': 'Intermédiaire',
        'solana': 'Intermédiaire',
        'polygon': 'Débutant',
        'arbitrum': 'Intermédiaire',
        'base': 'Débutant',
        'bsc': 'Débutant',
    };

    return blockchainsTutosDifficulties[slug as keyof typeof blockchainsTutosDifficulties] || 'Débutant';
}


export function getBlockchainStartingCost(slug: BlockchainSlug): string {
    const blockchainsCosts: Partial<Record<BlockchainSlug, string>> = {
        'ethereum': '~50€ pour commencer',
        'solana': '~5€ pour commencer',
        'polygon': '~1€ pour commencer',
        'arbitrum': '~10€ pour commencer',
        'base': '~5€ pour commencer',
        'bsc': '~2€ pour commencer',
    };

    return blockchainsCosts[slug as keyof typeof blockchainsCosts] || '~5€ pour commencer';
}


export function getBlockchainLearningGoals(slug: BlockchainSlug): string[] {
    const baseGoals = [
        'Installer et configurer le wallet',
        'Obtenir vos premiers tokens',
        'Effectuer votre première transaction',
    ];

    const blockchainsSpecificGoals: Partial<Record<BlockchainSlug, string[]>> = {
        'ethereum': [...baseGoals, 'Comprendre les frais de gas', 'Utiliser les dApps principales'],
        'solana': [...baseGoals, 'Comprendre les frais SOL', 'Découvrir l\'écosystème Solana'],
        'polygon': [...baseGoals, 'Bridge depuis Ethereum', 'Profiter des frais réduits'],
        'arbitrum': [...baseGoals, 'Bridge depuis Ethereum', 'Utiliser Arbitrum One'],
        'base': [...baseGoals, 'Découvrir l\'écosystème Coinbase', 'Comprendre les Layer 2'],
        'bsc': [...baseGoals, 'Comprendre BNB Smart Chain', 'Utiliser PancakeSwap'],
    };

    return blockchainsSpecificGoals[slug as keyof typeof blockchainsSpecificGoals] || baseGoals;
}


export function getBlockchainPrerequisites(slug: BlockchainSlug): string[] {
    const base = ['Ordinateur ou smartphone', 'Connexion internet']

    if (slug === 'solana') {
        return [...base, 'Wallet Phantom recommandé'];
    }

    return [...base, 'Wallet MetaMask recommandé'];
}


export function getBlockchainWalletName(slug: BlockchainSlug): string[] {
    const blockchainsWallets: Partial<Record<BlockchainSlug, string[]>> = {
        'ethereum': ['MetaMask', 'Rabby'],
        'solana': ['Phantom'],
        'sui': ['Phantom'],
        'polygon': ['MetaMask', 'Rabby'],
        'arbitrum': ['MetaMask', 'Rabby'],
        'base': ['MetaMask', 'Rabby'],
        'bsc': ['MetaMask', 'Rabby'],
        'fantom': ['MetaMask', 'Rabby'],
        'avalanche': ['MetaMask', 'Rabby'],
        'sonic': ['MetaMask', 'Rabby'],
        'abstract': ['MetaMask', 'Rabby'],
        'optimism': ['MetaMask', 'Rabby'],
        'berachain': ['MetaMask', 'Rabby'],
        'monad': ['MetaMask', 'Rabby', 'Phantom'],
        'megaeth': ['MetaMask', 'Rabby'],
        'bitcoin': ['Electrum'],
        'ton': ['TonKeeper', 'OpenMask'],
        'tron': ['CakeWallet'],
    };

    return blockchainsWallets[slug as keyof typeof blockchainsWallets] || [];
}


export function getBlockchainPath(slug: BlockchainSlug): string[] {
    const blockchainsPaths: Partial<Record<BlockchainSlug, string[]>> = {
        'polygon': ['Je débute', 'Économique'],
        'base': ['Je débute', 'Performance'],
        'bsc': ['Je débute', 'Économique'],
        'ethereum': ['Performance'],
        'solana': ['Performance'],
        'arbitrum': ['Performance', 'Économique'],
    };

    return blockchainsPaths[slug as keyof typeof blockchainsPaths] || []
}



// === FONCTIONS MISC ===


export function blockchainHasAirdrop(blockchainSlug: BlockchainSlug): boolean {
    return false; // TODO: retourner true si la blockchain a un airdrop enregistré. doit etre "sync" car appelé depuis react
}


export function dappHasAirdrop(dappSlug: DappSlug): boolean {
    return false; // TODO: retourner true si la dapp a un airdrop enregistré. doit etre "sync" car appelé depuis react
}


