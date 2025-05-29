// apis.ts

import { ALL_BLOCKCHAINS } from "./data/blockchains_data";
import { BLOCKCHAINS_DEVELOPER_RESOURCES } from "./data/blockchains_developper_resources_data";
import { ALL_DAPPS } from "./data/dapps_data";
import { TESTNET_GUIDES } from "./data/guides_data";
import { HOMEPAGE_SELECTION } from "./data/homepage_selection_data";

import type { Blockchain, BlockchainSlug } from "./types/blockchains_types";
import type { Dapp, DappSlug } from "./types/dapps_types";
import type { BlockchainDevelopperResource, TestnetGuide } from "./types/types";


// === FONCTIONS API ===

export async function getBlockchains(): Promise<Blockchain[]> {
    // Simulation d'un appel API (100 ms)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ALL_BLOCKCHAINS);
        }, 100);
    });
}


export async function getMainnets(): Promise<Blockchain[]> {
    const blockchains = await getBlockchains();
    return blockchains.filter(b => b.network === 'mainnet');
}


export async function getTestnets(): Promise<Blockchain[]> {
    const blockchains = await getBlockchains();
    return blockchains.filter(b => b.network === 'testnet');
}


export async function getBlockchainBySlug(slug: string): Promise<Blockchain | null> {
    const blockchains = await getBlockchains();
    const blockchain = blockchains.find(b => b.slug === slug);
    return blockchain ?? null;
}



export async function getDapps(): Promise<Dapp[]> {
    // Simulation d'un appel API (100 ms)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ALL_DAPPS);
        }, 100);
    });
}

export async function getDappBySlug(slug: DappSlug): Promise<Dapp | null> {
    const dapps = await getDapps();
    const dapp = dapps.find(d => d.slug === slug);
    return dapp ?? null;
}


export async function getDappsByBlockchain(blockchainSlug: BlockchainSlug): Promise<Dapp[]> {
    const dapps = await getDapps();
    const blockchainDapps = dapps.filter(d => d.blockchains.includes(blockchainSlug));
    return blockchainDapps;
}


export async function getBlockchainsDevelopperResources(): Promise<BlockchainDevelopperResource[]> {
    // Simulation d'un appel API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(BLOCKCHAINS_DEVELOPER_RESOURCES /* .filter(b => b.network === 'mainnet') */ );
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
export function getBlockchainNameBySlug(slug: BlockchainSlug): string {
    const blockchain = ALL_BLOCKCHAINS.find(chain => chain.slug === slug);
    return blockchain?.name || slug
}



export function blockchainHasAirdrop(blockchainSlug: BlockchainSlug) {
    return false; // TODO: retourner true si la blockchain a un airdrop enregistré
}


export function dappHasAirdrop(dappSlug: DappSlug) {
    return false; // TODO: retourner true si la dapp a un airdrop enregistré
}


