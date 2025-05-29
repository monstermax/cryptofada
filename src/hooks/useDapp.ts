// hooks/useDapp.ts

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getDapps } from "../apis"

import type { Dapp } from "../types/dapps_types"


export function useDapp() {
    const [dapp, setDapp] = useState<Dapp | null>(null)
    const [loading, setLoading] = useState(true)
    const { slug } = useParams<{ slug: string }>()

    useEffect(() => {
        const loadData = async () => {
            try {
                const dappsData = await getDapps()
                const dapp = dappsData.find(dappData => dappData.slug === slug)
                setDapp(dapp ?? null)

            } catch (error) {
                console.error('Erreur lors du chargement des dapps:', error)

            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    return {
        dapp,
        setDapp,
        slug,
        loading,
    }
}