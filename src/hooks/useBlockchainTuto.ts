// hooks/useBlockchainTuto.ts

import { useEffect, useState } from "react";

import type { BlockchainSlug } from "../data/blockchains_data";
import type { BlockchainTuto } from "../types/blockchains_types";
import { getBlockchainsTutos } from "../api/apis";


export function useBlockchainsTutos() {
    const [blockchainsTutos, setBlockchainsTutos] = useState<BlockchainTuto[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const blockchainTutos = await getBlockchainsTutos();
                setBlockchainsTutos(blockchainTutos);

            } catch (error) {
                console.error('Erreur lors du chargement des tutos blockchains:', error)

            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    return {
        blockchainTutos: blockchainsTutos,
        setBlockchainTutos: setBlockchainsTutos,
        loading,
    }
}


export function useBlockchainTutos(blockchainSlug: BlockchainSlug | undefined) {
    const [blockchainTutos, setBlockchainTutos] = useState<BlockchainTuto[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const blockchainsTutos = blockchainSlug ? await getBlockchainsTutos() : [];

                const blockchainTutos = blockchainsTutos.filter(tuto => tuto.blockchain === blockchainSlug);
                setBlockchainTutos(blockchainTutos);

            } catch (error) {
                console.error('Erreur lors du chargement des tutos blockchain:', error)

            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    return {
        blockchainTutos,
        setBlockchainTutos,
        loading,
    }
}


export function useBlockchainTuto(blockchainSlug: BlockchainSlug | undefined, tutoSlug: string | undefined) {
    const [blockchainTutos, setBlockchainTutos] = useState<BlockchainTuto | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const blockchainsTutos = (blockchainSlug && tutoSlug) ? await getBlockchainsTutos() : [];

                const blockchainTutos = blockchainsTutos.find(tuto => tuto.blockchain === blockchainSlug && tuto.slug === tutoSlug);
                setBlockchainTutos(blockchainTutos ?? null);

            } catch (error) {
                console.error('Erreur lors du chargement du tuto blockchain:', error)

            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    return {
        blockchainTutos,
        setBlockchainTutos,
        loading,
    }
}


