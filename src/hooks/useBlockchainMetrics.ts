// hooks/useBlockchainMetrics.ts

import { useEffect, useState } from "react";

import { getBlockchainsMetrics } from "../api/apis";

import type { BlockchainSlug } from "../data/blockchains_data";
import type { BlockchainMetrics } from "../types/blockchains_types";


export function useBlockchainsMetrics() {
    const [blockchainsMetrics, setBlockchainsMetrics] = useState<BlockchainMetrics[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const blockchainsMetrics = await getBlockchainsMetrics();
                setBlockchainsMetrics(blockchainsMetrics)

            } catch (error) {
                console.error('Erreur lors du chargement des metrics blockchains:', error)

            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    return {
        blockchainsMetrics,
        setBlockchainsMetrics,
        loading,
    }
}


export function useBlockchainMetrics(blockchainSlug: BlockchainSlug | undefined) {
    const [blockchainMetrics, setBlockchainMetrics] = useState<BlockchainMetrics[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const blockchainsMetrics = await getBlockchainsMetrics();

                const blockchainMetrics = blockchainsMetrics.filter(metricData => metricData.blockchain === blockchainSlug);
                setBlockchainMetrics(blockchainMetrics)

            } catch (error) {
                console.error('Erreur lors du chargement des metrics blockchain:', error)

            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    return {
        blockchainMetrics,
        setBlockchainMetrics,
        loading,
    }
}
