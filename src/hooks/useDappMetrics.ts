// hooks/useDappMetrics.ts

import { useEffect, useState } from "react";
import type { DappMetrics } from "../types/dapps_types";
import { getDappsMetrics } from "../api/apis";
import type { DappSlug } from "../data/dapps_data";


export function useDappsMetrics() {
    const [dappsMetrics, setDappsMetrics] = useState<DappMetrics[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const dappsMetrics = await getDappsMetrics();
                setDappsMetrics(dappsMetrics)

            } catch (error) {
                console.error('Erreur lors du chargement des metrics dapps:', error)

            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, [])

    return {
        dappsMetrics,
        setDappsMetrics,
        loading,
    }
}



export function useDappMetrics(dappSlug: DappSlug | undefined) {
    const [dappMetrics, setDappMetrics] = useState<DappMetrics[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const dappsMetrics = dappSlug ? await getDappsMetrics() : [];

                const dappMetrics = dappsMetrics.filter(metric => metric.dapp === dappSlug);
                setDappMetrics(dappMetrics);

            } catch (error) {
                console.error('Erreur lors du chargement des metrics dapp:', error)

            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, [])

    return {
        dappMetrics,
        setDappMetrics,
        loading,
    }
}


