// pages/Homepage.tsx

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { getBlockchainNameBySlug, getHomepageBlockchains, getHomepageDapps } from '../apis'

import type { Blockchain, BlockchainMetrics } from '../types/blockchains_types'
import type { Dapp, DappMetrics } from '../types/dapps_types'


export default function Homepage() {
    const [blockchains, setBlockchains] = useState<Blockchain[]>([])
    const [dapps, setDapps] = useState<Dapp[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            try {
                const [blockchainsData, dappsData] = await Promise.all([
                    getHomepageBlockchains(),
                    getHomepageDapps()
                ])
                setBlockchains(blockchainsData)
                setDapps(dappsData)

            } catch (error) {
                console.error('Erreur lors du chargement des données:', error)

            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    if (loading) {
        return (
            <div className="page">
                <div className="loading-section">
                    <h2>Chargement...</h2>
                    <p>Récupération des données blockchain...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="page">
            {/* Hero Section */}
            <div className="hero-section">
                <h1>CryptoFada</h1>
                <p className="hero-subtitle">Votre porte d'entrée vers l'écosystème blockchain</p>
                <p className="hero-description">
                    Découvrez et explorez les principales blockchains et applications décentralisées.
                    Comme Steam pour les jeux vidéo, CryptoFada est votre lanceur pour l'univers crypto.
                </p>
            </div>

            {/* Section Les Bases */}
            <LesBases />

            {/* Section Blockchains */}
            <BlockchainsSection blockchains={blockchains} />

            {/* Section dApps */}
            <DappsSection dapps={dapps} />

            {/* CTA Section */}
            <section className="cta-section">
                <h2>Prêt à explorer l'écosystème blockchain ?</h2>
                <div className="cta-buttons">
                    <Link to="/blockchains" className="cta-btn primary">
                        Explorer les Blockchains
                    </Link>
                    <Link to="/dapps" className="cta-btn secondary">
                        Découvrir les dApps
                    </Link>
                </div>
            </section>
        </div>
    )
}


function LesBases() {
    return (
        <section className="basics-section">
            <div className="section-header">
                <h2>💡 Les Bases à Connaître</h2>
                <p>Comprendre les concepts essentiels avant de se lancer</p>
            </div>

            <div className="basics-grid">
                <div className="basic-card">
                    <div className="basic-icon">🏛️</div>
                    <h3>Blockchain vs Exchange</h3>
                    <p>
                        Une <strong>blockchain</strong> est un réseau décentralisé où vous contrôlez vos fonds.
                        Un <strong>exchange</strong> (Binance, Coinbase) est une plateforme centralisée qui garde vos cryptos.
                    </p>
                    <div className="basic-tip">💡 "Not your keys, not your crypto"</div>
                </div>

                <div className="basic-card">
                    <div className="basic-icon">₿</div>
                    <h3>Bitcoin vs Altcoins</h3>
                    <p>
                        <strong>Bitcoin</strong> est la première et plus connue des cryptomonnaies.
                        Les <strong>altcoins</strong> sont toutes les autres cryptomonnaies (Ethereum, Solana, etc.).
                    </p>
                    <div className="basic-tip">📊 Bitcoin = réserve de valeur, Altcoins = innovation</div>
                </div>

                <div className="basic-card">
                    <div className="basic-icon">🪙</div>
                    <h3>Coin vs Token</h3>
                    <p>
                        Un <strong>coin</strong> a sa propre blockchain (ETH, SOL, BTC).
                        Un <strong>token</strong> fonctionne sur la blockchain d'un autre (USDC sur Ethereum).
                    </p>
                    <div className="basic-tip">🔗 Coin = natif, Token = construit dessus</div>
                </div>

                <div className="basic-card">
                    <div className="basic-icon">📜</div>
                    <h3>Smart Contract</h3>
                    <p>
                        Un <strong>smart contract</strong> est un programme automatique sur la blockchain.
                        Il exécute des accords sans intermédiaire (prêt, échange, etc.).
                    </p>
                    <div className="basic-tip">⚡ Code = loi, automatique et transparent</div>
                </div>

                <div className="basic-card">
                    <div className="basic-icon">🔍</div>
                    <h3>DYOR</h3>
                    <p>
                        <strong>"Do Your Own Research"</strong> - Toujours faire ses propres recherches avant d'investir.
                        Ne jamais suivre aveuglément les conseils d'autrui.
                    </p>
                    <div className="basic-tip">⚠️ Méfiez-vous des promesses de gains rapides</div>
                </div>

                <div className="basic-card cta-card">
                    <div className="basic-icon">🎓</div>
                    <h3>Prêt à Explorer ?</h3>
                    <p>
                        Maintenant que vous connaissez les bases, explorez les blockchains et leurs applications
                        en toute sécurité !
                    </p>
                    <div className="basic-tip">🚀 L'aventure commence ici</div>
                </div>
            </div>
        </section>
    )
}


interface BlockchainsSectionProps {
    blockchains: Blockchain[]
}


function BlockchainsSection({ blockchains }: BlockchainsSectionProps) {
    return (
        <section className="data-section">
            <div className="section-header">
                <h2>🔗 Principales Blockchains en 2025</h2>
                <p>Les réseaux blockchain les plus utilisés et leur écosystème</p>
            </div>

            <div className="table-container">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Blockchain</th>
                            <th>Catégorie</th>
                            <th>TVL</th>
                            <th>Market Cap</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blockchains.map((blockchain) => {
                            const blockchainMetrics: BlockchainMetrics | null = null as BlockchainMetrics | null;

                            return (
                                <tr key={blockchain.symbol}>
                                    <td>
                                        <div className="blockchain-cell">
                                            <div
                                                className="blockchain-dot"
                                                style={{ backgroundColor: blockchain.color }}
                                            ></div>
                                            <div>
                                                <div className="blockchain-name">{blockchain.name}</div>
                                                <div className="blockchain-symbol">{blockchain.symbol}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`category-badge ${blockchain.category.toLowerCase().replace(' ', '-')}`}>
                                            {blockchain.category}
                                        </span>
                                    </td>
                                    <td className="metric-value">{blockchainMetrics ? blockchainMetrics.tvl : '-'}</td>
                                    <td className="metric-value">{blockchainMetrics ? blockchainMetrics.marketCap : '-'}</td>
                                    <td>
                                        <Link
                                            to={`/blockchain/${blockchain.slug}`}
                                            className="action-btn"
                                        >
                                            + d'infos
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}


interface DappsSectionProps {
    dapps: Dapp[]
}


function DappsSection({ dapps }: DappsSectionProps) {
    return (
        <section className="data-section">
            <div className="section-header">
                <h2>🚀 dApps populaires</h2>
                <p>Les applications décentralisées les plus populaires</p>
            </div>

            <div className="table-container">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>dApp</th>
                            <th>Catégorie</th>
                            <th>Blockchains</th>
                            <th>TVL</th>
                            <th>Volume 24h</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dapps.map((dapp) => {
                            const dappMetrics: DappMetrics | null = null as DappMetrics | null;

                            return (
                                <tr key={dapp.slug}>
                                    <td>
                                        <div className="dapp-cell">
                                            <div className="dapp-name">{dapp.name}</div>
                                            <div className="dapp-description">{dapp.description}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`category-badge ${dapp.category.toLowerCase()}`}>
                                            {dapp.category}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="blockchains-list">
                                            {dapp.blockchains.map((chainSlug, index) => (
                                                <span key={chainSlug} className="blockchain-tag">
                                                    {getBlockchainNameBySlug(chainSlug)}
                                                    {index < dapp.blockchains.length - 1 && ', '}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="metric-value">{dappMetrics ? dappMetrics.tvl : 'n'}</td>
                                    <td className="metric-value">{dappMetrics ? dappMetrics.volume24h : 'n'}</td>
                                    <td>
                                        <Link
                                            to={`/dapps/${dapp.slug}`}
                                            className="action-btn"
                                        >
                                            Consulter
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}


