// pages/blockchains/BlockchainDetail.tsx

import { useParams, Link } from 'react-router-dom'

import { useBlockchain } from '../../hooks/useBlockchain'
import { useBlockchainMetrics } from '../../hooks/useBlockchainMetrics';

import type { BlockchainSlug } from '../../data/blockchains_data';


export default function BlockchainDetail() {
    const { slug } = useParams<{ slug: BlockchainSlug }>();
    const { blockchain, loading } = useBlockchain(slug);
    const { blockchainMetrics } = useBlockchainMetrics(slug);

    const blockchainMetric = blockchainMetrics[0];
    const blockchainMainnet = blockchain?.networks.find(network => network.isMainnet);

    if (!blockchain) {
        return (
            <div className="page">
                <div className="error-section">
                    <h1>Blockchain non trouvée</h1>
                    <p>La blockchain "{slug}" n'existe pas ou n'est pas encore référencée.</p>
                    <Link to="/blockchains" className="cta-btn primary">
                        Retour aux blockchains
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

    return (
        <div className="page">
            {/* Breadcrumb */}
            <nav className="breadcrumb">
                <Link to="/">Accueil</Link>
                <span>/</span>
                <Link to="/blockchains">Blockchains</Link>
                <span>/</span>
                <span>{blockchain.name}</span>
            </nav>

            {/* Header de la blockchain */}
            <div className="blockchain-header-detail" style={{ '--chain-color': blockchain.color } as any}>
                <div className="blockchain-hero">
                    <div className="blockchain-main-info">
                        <div className="blockchain-title">
                            <div className="blockchain-dot-large" style={{ backgroundColor: blockchain.color }}></div>
                            <div>
                                <h1>{blockchain.name}</h1>
                                <span className="blockchain-symbol-large">{blockchain.symbol}</span>
                                <span className="blockchain-category">{blockchain.category}</span>
                            </div>
                        </div>
                        <div className="blockchain-links">
                            <a href={`https://${blockchain.links.website}`} target="_blank" rel="noopener noreferrer" className="link-btn">
                                Website
                            </a>
                            <a href={blockchain.links.whitepaper} target="_blank" rel="noopener noreferrer" className="link-btn">
                                Whitepaper
                            </a>
                            <a href={blockchain.links.github} target="_blank" rel="noopener noreferrer" className="link-btn">
                                GitHub
                            </a>
                            <a href={blockchain.links.explorer} target="_blank" rel="noopener noreferrer" className="link-btn">
                                Explorer
                            </a>
                        </div>
                    </div>
                    <div className="blockchain-description-section">
                        <p>{blockchain.description}</p>
                    </div>
                </div>
            </div>

            {/* Navigation secondaire */}
            <div className="sub-navigation">
                <Link to={`/blockchain/${slug}`} className="sub-nav-link active">
                    Vue d'ensemble
                </Link>
                <Link to={`/blockchain/${slug}/developers`} className="sub-nav-link">
                    Développeurs
                </Link>
            </div>

            {/* Métriques clés */}
            <div className="metrics-grid">
                <div className="metric-card">
                    <div className="metric-label">Prix</div>
                    <div className="metric-value">{blockchainMetric ? blockchainMetric.price : '-'}</div>
                    <div className={`metric-change ${blockchainMetric ? (blockchainMetric.change24h.startsWith('+') ? 'positive' : 'negative') : '-'}`}>
                        {blockchainMetric ? blockchainMetric.change24h : '-'}
                    </div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Market Cap</div>
                    <div className="metric-value">{blockchainMetric ? blockchainMetric.marketCap : '-'}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">TVL</div>
                    <div className="metric-value">{blockchainMetric ? blockchainMetric.tvl : '-'}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Transactions 24h</div>
                    <div className="metric-value">{blockchainMetric ? blockchainMetric.transactions24h : '-'}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Temps de bloc</div>
                    <div className="metric-value">{blockchainMetric ? blockchainMetric.blockTime : '-'}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Frais de gas</div>
                    <div className="metric-value">{blockchainMetric ? blockchainMetric.gasPrice : '-'}</div>
                </div>
            </div>

            {/* Informations techniques */}
            <div className="tech-info-section">
                <h2>Informations Techniques</h2>
                <div className="tech-grid">
                    <div className="tech-item">
                        <span className="tech-label">Consensus:</span>
                        <span className="tech-value">{blockchain.consensus}</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-label">Lancé en:</span>
                        <span className="tech-value">{blockchainMainnet?.launched ?? '-'}</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-label">Validateurs:</span>
                        <span className="tech-value">{blockchainMetric ? blockchainMetric.validators : '-'}</span>
                    </div>
                </div>
            </div>

            {/* Actions rapides */}
            <div className="quick-actions">
                <Link to={`/blockchain/${slug}/dapps`} className="action-card">
                    <h3>🚀 Explorer les dApps</h3>
                    <p>Découvrez les applications décentralisées</p>
                </Link>
                <Link to={`/blockchain/${slug}/developers`} className="action-card">
                    <h3>⚡ Ressources Développeurs</h3>
                    <p>Documentation, outils et guides de développement</p>
                </Link>
            </div>
        </div>
    )
}
