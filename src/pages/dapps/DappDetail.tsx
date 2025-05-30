// pages/dapps/DappDetail.tsx

import { useParams, Link } from 'react-router-dom'

import { useBlockchains } from '../../hooks/useBlockchain'
import { useDapp } from '../../hooks/useDapp'
import { useDappMetrics } from '../../hooks/useDappMetrics'

import type { BlockchainSlug } from '../../data/blockchains_data'
import type { DappSlug } from '../../data/dapps_data'


export default function DappDetail() {
    const { slug } = useParams<{ slug: DappSlug }>();
    const { dapp, loading } = useDapp(slug);
    const { dappMetrics } = useDappMetrics(slug);
    const { blockchains } = useBlockchains();

    const dappMetric = dappMetrics[0];

    const getBlockchainBySlugSync = (slug: BlockchainSlug) => {
        const blockchain = blockchains.find(blockchain => blockchain.slug == slug);
        return blockchain;
    }


    if (!dapp && !loading) {
        return (
            <div className="page">
                <div className="error-section">
                    <h1>dApp non trouvée</h1>
                    <p>La dApp "{slug}" n'existe pas ou n'est pas encore référencée.</p>
                    <Link to="/dapps" className="cta-btn primary">
                        Retour aux dApps
                    </Link>
                </div>
            </div>
        )
    }

    if (loading) {
        return (
            <div className="page">
                <div className="loading-section">
                    <h2>Chargement...</h2>
                </div>
            </div>
        )
    }

    if (!dapp) return null;

    return (
        <div className="page">
            {/* Breadcrumb */}
            <nav className="breadcrumb">
                <Link to="/">Accueil</Link>
                <span>/</span>
                <Link to="/dapps">dApps</Link>
                <span>/</span>
                <span>{dapp.name}</span>
            </nav>

            {/* Header de la dApp */}
            <div className="dapp-header-detail">
                <div className="dapp-hero">
                    <div className="dapp-main-info">
                        <div className="dapp-title">
                            <h1>
                                {dapp.name}
                            </h1>
                            <div className="dapp-meta">
                                <span className={`category-badge ${dapp.category.toLowerCase()}`}>
                                    {dapp.category}
                                </span>
                                <span className="dapp-team">Par {dapp.team}</span>
                                <span className="dapp-founded">Depuis {dapp.founded}</span>
                            </div>
                        </div>

                        <div className="dapp-links">
                            <a href={dapp.links.website} target="_blank" rel="noopener noreferrer" className="link-btn primary">
                                Lancer l'App
                            </a>
                            <a href={dapp.links.docs} target="_blank" rel="noopener noreferrer" className="link-btn">
                                Documentation
                            </a>
                            <a href={dapp.links.github} target="_blank" rel="noopener noreferrer" className="link-btn">
                                GitHub
                            </a>
                            <a href={dapp.links.twitter} target="_blank" rel="noopener noreferrer" className="link-btn">
                                Twitter
                            </a>
                        </div>
                    </div>

                    <div className="dapp-description-section">
                        <p className="dapp-short-desc">{dapp.description}</p>
                        <p className="dapp-long-desc">{dapp.longDescription}</p>
                    </div>
                </div>
            </div>

            {/* Blockchains supportées */}
            <div className="supported-blockchains">
                <h2>Blockchains Supportées</h2>
                <div className="blockchain-list">
                    {dapp.blockchains.map((blockchainSlug: BlockchainSlug) => {
                        const blockchain = getBlockchainBySlugSync(blockchainSlug);

                        if (!blockchain) {
                            return (
                                <>
                                    TODO
                                </>
                            );
                        }

                        return (
                            <Link
                                key={blockchain.slug}
                                to={`/blockchain/${blockchain.slug}`}
                                className="blockchain-chip"
                                style={{ '--chain-color': blockchain.color } as any}
                            >
                                <div className="blockchain-dot" style={{ backgroundColor: blockchain.color }}></div>
                                <span>{blockchain.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Métriques */}
            <div className="metrics-grid">
                <div className="metric-card">
                    <div className="metric-label">TVL Total</div>
                    <div className="metric-value">{dappMetric ? dappMetric.tvl : '-'}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Utilisateurs 24h</div>
                    <div className="metric-value">{dappMetric ? dappMetric.users24h : '-'}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Volume 24h</div>
                    <div className="metric-value">{dappMetric ? dappMetric.volume24h : '-'}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Transactions 24h</div>
                    <div className="metric-value">{dappMetric ? dappMetric.transactions24h : '-'}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Frais générés 24h</div>
                    <div className="metric-value">{dappMetric ? dappMetric.fees24h : '-'}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Utilisateurs Total</div>
                    <div className="metric-value">{dappMetric ? dappMetric.totalUsers : '-'}</div>
                </div>
            </div>

            {/* Informations détaillées */}
            <div className="dapp-details-section">
                <div className="details-grid">
                    <div className="detail-card">
                        <h3>🏛️ Gouvernance</h3>
                        <div className="detail-item">
                            <span className="detail-label">Token de gouvernance:</span>
                            <span className="detail-value">{dapp.token}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Modèle:</span>
                            <span className="detail-value">DAO décentralisée</span>
                        </div>
                    </div>

                    <div className="detail-card">
                        <h3>🔒 Sécurité</h3>
                        <div className="detail-item">
                            <span className="detail-label">Audits:</span>
                            <span className="detail-value">Multiple audits</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Bug Bounty:</span>
                            <span className="detail-value">Actif</span>
                        </div>
                    </div>

                    <div className="detail-card">
                        <h3>⚡ Performance</h3>
                        <div className="detail-item">
                            <span className="detail-label">Uptime:</span>
                            <span className="detail-value">99.9%</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Temps de réponse:</span>
                            <span className="detail-value">&lt; 2s</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions et liens utiles */}
            <div className="action-section">
                <div className="action-grid">
                    <div className="action-card primary">
                        <h3>🚀 Utiliser {dapp.name}</h3>
                        <p>Accédez directement à l'application</p>
                        <a href={dapp.links.website} target="_blank" rel="noopener noreferrer" className="cta-btn primary">
                            Lancer l'App
                        </a>
                    </div>

                    <div className="action-card">
                        <h3>📚 Documentation</h3>
                        <p>Guides et tutoriels complets</p>
                        <a href={dapp.links.docs} target="_blank" rel="noopener noreferrer" className="cta-btn secondary">
                            Voir les Docs
                        </a>
                    </div>

                    <div className="action-card">
                        <h3>💬 Communauté</h3>
                        <p>Rejoignez les discussions</p>
                        <div className="community-links">
                            <a href={dapp.links.discord} target="_blank" rel="noopener noreferrer" className="community-btn">
                                Discord
                            </a>
                            <a href={dapp.links.twitter} target="_blank" rel="noopener noreferrer" className="community-btn">
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* dApps similaires */}
            <div className="similar-dapps">
                <h2>Applications Similaires</h2>
                <div className="similar-grid">
                    <div className="similar-card">
                        <h4>SushiSwap</h4>
                        <span className="category-badge dex">DEX</span>
                        <p>DEX communautaire avec fonctionnalités avancées</p>
                        <Link to="/dapps/sushiswap" className="action-btn secondary">Voir</Link>
                    </div>
                    <div className="similar-card">
                        <h4>PancakeSwap</h4>
                        <span className="category-badge dex">DEX</span>
                        <p>DEX populaire multi-chaînes</p>
                        <Link to="/dapps/pancakeswap" className="action-btn secondary">Voir</Link>
                    </div>
                    <div className="similar-card">
                        <h4>1inch</h4>
                        <span className="category-badge dex">DEX Aggregator</span>
                        <p>Agrégateur de liquidité DeFi</p>
                        <Link to="/dapps/1inch" className="action-btn secondary">Voir</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
