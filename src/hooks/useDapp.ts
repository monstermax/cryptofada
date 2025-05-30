// hooks/useDapp.ts

import { useEffect, useState } from "react";

import { getDapps, getDappsCategories, getDappsMetrics } from "../api/apis";

import type { Dapp, DappCategory, DappMetrics } from "../types/dapps_types";
import type { DappSlug } from "../data/dapps_data";


export function useDappsCategories() {
    const [dappsCategories, setDappsCategories] = useState<DappCategory[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const dapps = await getDappsCategories();
                setDappsCategories(dapps);

            } catch (error) {
                console.error('Erreur lors du chargement des categories dapps:', error);

            } finally {
                setLoading(false);
            }
        }

        loadData()
    }, [])

    return {
        dappsCategories,
        setDappsCategories,
        loading,
    }
}


export function useDapps() {
    const [dapps, setDapps] = useState<Dapp[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const dapps = await getDapps();
                setDapps(dapps);

            } catch (error) {
                console.error('Erreur lors du chargement des dapps:', error);

            } finally {
                setLoading(false);
            }
        }

        loadData()
    }, [])

    return {
        dapps,
        setDapps,
        loading,
    }
}


export function useDapp(slug: string | undefined, dappsData?: Dapp[]) {
    const [dapp, setDapp] = useState<Dapp | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                dappsData = dappsData || await getDapps();

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
        loading,
    }
}

