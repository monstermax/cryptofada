// hooks/useBlockchainAirdrop.ts

import { useEffect, useState } from "react";

import { getBlockchainsAirdrops } from "../api/apis";

import type { BlockchainAirdrop } from "../types/blockchains_types";


export function useBlockchainsAirdrops() {
    const [blockchainsAirdrops, setBlockchainsAirdrops] = useState<BlockchainAirdrop[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const blockchainsAirdrops = await getBlockchainsAirdrops();
                setBlockchainsAirdrops(blockchainsAirdrops)

            } catch (error) {
                console.error('Erreur lors du chargement des airdrops blockchains:', error)

            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    return {
        blockchainsAirdrops,
        setBlockchainsAirdrops,
        loading,
    }
}


export function useBlockchainAirdrops(blockchainSlug: string | undefined) {
    const [blockchainAirdrops, setBlockchainAirdrops] = useState<BlockchainAirdrop[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const blockchainsAirdrops = (blockchainSlug) ? await getBlockchainsAirdrops() : [];

                const blockchainAirdrops = blockchainsAirdrops.filter(airdropData => airdropData.blockchain === blockchainSlug);
                setBlockchainAirdrops(blockchainAirdrops)

            } catch (error) {
                console.error('Erreur lors du chargement des airdrops blockchain:', error)

            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    return {
        blockchainAirdrops,
        setBlockchainAirdrops,
        loading,
    }
}


export function useBlockchainAirdrop(blockchainSlug: string | undefined, airdropSlug: string | undefined) {
    const [blockchainAirdrop, setBlockchainAirdrop] = useState<BlockchainAirdrop | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const blockchainsAirdrops = (blockchainSlug && airdropSlug) ? await getBlockchainsAirdrops() : [];

                const blockchainAirdrop = blockchainsAirdrops.find(airdropData => airdropData.blockchain === blockchainSlug && airdropData.slug === airdropSlug);
                setBlockchainAirdrop(blockchainAirdrop ?? null)

            } catch (error) {
                console.error('Erreur lors du chargement du airdrop blockchain:', error)

            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    return {
        blockchainAirdrop,
        setBlockchainAirdrop,
        loading,
    }
}



