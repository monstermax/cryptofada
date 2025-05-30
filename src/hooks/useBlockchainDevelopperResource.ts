// hooks/useBlockchainDevelopperResource.ts

import { useEffect, useState } from "react";

import { getBlockchainsDevelopperResources } from "../api/apis";

import type { BlockchainDevelopperResource } from "../types/blockchains_types";


export function useBlockchainsDevelopperResources() {
    const [blockchainsDevelopperResources, setBlockchainsDevelopperResources] = useState<BlockchainDevelopperResource[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const blockchainsDevelopperResources = await getBlockchainsDevelopperResources();
                setBlockchainsDevelopperResources(blockchainsDevelopperResources)

            } catch (error) {
                console.error('Erreur lors du chargement des ressources developpeur blockchains:', error)

            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    return {
        blockchainsDevelopperResources,
        setBlockchainsDevelopperResources,
        loading,
    }
}



export function useBlockchainDevelopperResources(blockchainSlug: string | undefined) {
    const [blockchainDevelopperResources, setBlockchainDevelopperResources] = useState<BlockchainDevelopperResource[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const blockchainsDevelopperResources = (blockchainSlug) ? await getBlockchainsDevelopperResources() : [];

                const blockchainDevelopperResources = blockchainsDevelopperResources.filter(resource => resource.blockchain === blockchainSlug);
                setBlockchainDevelopperResources(blockchainDevelopperResources)

            } catch (error) {
                console.error('Erreur lors du chargement des ressources developpeur blockchain:', error)

            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    return {
        blockchainDevelopperResources,
        setBlockchainDevelopperResources,
        loading,
    }
}



export function useBlockchainDevelopperResource(blockchainSlug: string | undefined, resourceSlug: string | undefined) {
    const [blockchainDevelopperResources, setBlockchainDevelopperResources] = useState<BlockchainDevelopperResource | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const blockchainsDevelopperResources = (blockchainSlug && resourceSlug) ? await getBlockchainsDevelopperResources() : [];

                const blockchainDevelopperResources = blockchainsDevelopperResources.find(resource => resource.blockchain === blockchainSlug && resource.slug === resourceSlug);
                setBlockchainDevelopperResources(blockchainDevelopperResources ?? null)

            } catch (error) {
                console.error('Erreur lors du chargement de la ressource developpeur blockchain:', error)

            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    return {
        blockchainDevelopperResources,
        setBlockchainDevelopperResources,
        loading,
    }
}


