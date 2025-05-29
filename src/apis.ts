// apis.ts

import { ALL_BLOCKCHAINS } from "./data/blockchains_data";
import { ALL_DAPPS } from "./data/dapps_data";
import { TESTNET_GUIDES } from "./data/guides_data";
import { HOMEPAGE_SELECTION } from "./data/homepage_selection_data";

import type { Blockchain, Dapp, TestnetGuide, HomepageSelection, DeveloperResources } from "./types";


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

