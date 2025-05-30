// hooks/useBlockchain.ts

import { useEffect, useState } from "react";

import { getBlockchains } from "../api/apis";

import type { Blockchain } from "../types/blockchains_types";


export function useBlockchains() {
    const [blockchains, setBlockchains] = useState<Blockchain[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const blockchains = await getBlockchains();
                setBlockchains(blockchains)

            } catch (error) {
                console.error('Erreur lors du chargement des blockchains:', error)

            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    return {
        blockchains,
        setBlockchains,
        loading,
    }
}


export function useBlockchain(slug: string | undefined, blockchainsData?: Blockchain[]) {
    const [blockchain, setBlockchain] = useState<Blockchain | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                blockchainsData = blockchainsData || await getBlockchains();

                const blockchain = blockchainsData.find(chainData => chainData.slug === slug)
                setBlockchain(blockchain ?? null)

            } catch (error) {
                console.error('Erreur lors du chargement des blockchains:', error)

            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    return {
        blockchain,
        setBlockchain,
        loading,
    }
}



