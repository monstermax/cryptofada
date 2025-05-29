// hooks/useBlockchain.ts

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getBlockchains } from "../apis"

import type { Blockchain } from "../types/blockchains_types"


export function useBlockchain() {
    const [blockchain, setBlockchain] = useState<Blockchain | null>(null)
    const [loading, setLoading] = useState(true)
    const { slug } = useParams<{ slug: string }>()

    useEffect(() => {
        const loadData = async () => {
            try {
                const blockchainsData = await getBlockchains()
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
        slug,
        loading,
    }
}