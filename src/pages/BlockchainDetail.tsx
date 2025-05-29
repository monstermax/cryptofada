// pages/BlockchainDetail.tsx

import { useParams, Link } from 'react-router-dom'


// Données mock - à remplacer par un appel API
const blockchainData = {
    ethereum: {
        name: 'Ethereum',
        symbol: 'ETH',
        color: '#627EEA',
        description: 'Ethereum est la plateforme blockchain programmable leader mondiale, permettant aux développeurs de créer des applications décentralisées.',
        website: 'ethereum.org',
        whitepaper: 'https://ethereum.org/whitepaper/',
        github: 'https://github.com/ethereum',
        explorer: 'https://etherscan.io',
        metrics: {
            tvl: '$45.2B',
            marketCap: '$280.5B',
            price: '$2,340',
            change24h: '+2.4%',
            transactions24h: '1.2M',
            gasPrice: '25 gwei',
            blockTime: '12s',
            validators: '1,000,000+'
        },
        dappsCount: 2847,
        category: 'Layer 1',
        consensus: 'Proof of Stake',
        launched: '2015'
    },
    solana: {
        name: 'Solana',
        symbol: 'SOL',
        color: '#9945FF',
        description: 'Solana est une blockchain haute performance conçue pour les applications décentralisées à grande échelle.',
        website: 'solana.com',
        whitepaper: 'https://solana.com/solana-whitepaper.pdf',
        github: 'https://github.com/solana-labs',
        explorer: 'https://explorer.solana.com',
        metrics: {
            tvl: '$8.7B',
            marketCap: '$45.8B',
            price: '$95.20',
            change24h: '-1.2%',
            transactions24h: '25M',
            gasPrice: '0.000005 SOL',
            blockTime: '0.4s',
            validators: '1,800+'
        },
        dappsCount: 856,
        category: 'Layer 1',
        consensus: 'Proof of History + Proof of Stake',
        launched: '2020'
    }
    // Ajouter d'autres blockchains...
};



export default function BlockchainDetail() {
    const { slug } = useParams<{ slug: string }>()

    const blockchain = blockchainData[slug as keyof typeof blockchainData]

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
                            <a href={`https://${blockchain.website}`} target="_blank" rel="noopener noreferrer" className="link-btn">
                                Website
                            </a>
                            <a href={blockchain.whitepaper} target="_blank" rel="noopener noreferrer" className="link-btn">
                                Whitepaper
                            </a>
                            <a href={blockchain.github} target="_blank" rel="noopener noreferrer" className="link-btn">
                                GitHub
                            </a>
                            <a href={blockchain.explorer} target="_blank" rel="noopener noreferrer" className="link-btn">
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
                <Link to={`/blockchain/${slug}/dapps`} className="sub-nav-link">
                    dApps ({blockchain.dappsCount})
                </Link>
                <Link to={`/blockchain/${slug}/developers`} className="sub-nav-link">
                    Développeurs
                </Link>
            </div>

            {/* Métriques clés */}
            <div className="metrics-grid">
                <div className="metric-card">
                    <div className="metric-label">Prix</div>
                    <div className="metric-value">{blockchain.metrics.price}</div>
                    <div className={`metric-change ${blockchain.metrics.change24h.startsWith('+') ? 'positive' : 'negative'}`}>
                        {blockchain.metrics.change24h}
                    </div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Market Cap</div>
                    <div className="metric-value">{blockchain.metrics.marketCap}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">TVL</div>
                    <div className="metric-value">{blockchain.metrics.tvl}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Transactions 24h</div>
                    <div className="metric-value">{blockchain.metrics.transactions24h}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Temps de bloc</div>
                    <div className="metric-value">{blockchain.metrics.blockTime}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Frais de gas</div>
                    <div className="metric-value">{blockchain.metrics.gasPrice}</div>
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
                        <span className="tech-value">{blockchain.launched}</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-label">Validateurs:</span>
                        <span className="tech-value">{blockchain.metrics.validators}</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-label">dApps actives:</span>
                        <span className="tech-value">{blockchain.dappsCount.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            {/* Actions rapides */}
            <div className="quick-actions">
                <Link to={`/blockchain/${slug}/dapps`} className="action-card">
                    <h3>🚀 Explorer les dApps</h3>
                    <p>Découvrez les {blockchain.dappsCount} applications décentralisées</p>
                </Link>
                <Link to={`/blockchain/${slug}/developers`} className="action-card">
                    <h3>⚡ Ressources Développeurs</h3>
                    <p>Documentation, outils et guides de développement</p>
                </Link>
            </div>
        </div>
    )
}
