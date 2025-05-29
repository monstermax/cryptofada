// pages/BlockchainDapps.tsx

import { useParams, Link } from 'react-router-dom'


// Données mock des blockchains
const blockchainInfo = {
    ethereum: { name: 'Ethereum', symbol: 'ETH', color: '#627EEA' },
    solana: { name: 'Solana', symbol: 'SOL', color: '#9945FF' },
    polygon: { name: 'Polygon', symbol: 'MATIC', color: '#8247E5' },
    arbitrum: { name: 'Arbitrum', symbol: 'ARB', color: '#28A0F0' }
}


// Mock des dApps filtrées par blockchain
const dappsByBlockchain = {
    ethereum: [
        {
            name: 'Uniswap',
            slug: 'uniswap',
            category: 'DEX',
            tvl: '$4.2B',
            users24h: '45.2K',
            volume24h: '$850M',
            description: 'Protocol d\'échange décentralisé leader',
            verified: true
        },
        {
            name: 'Aave',
            slug: 'aave',
            category: 'Lending',
            tvl: '$12.5B',
            users24h: '12.8K',
            volume24h: '$245M',
            description: 'Protocole de prêt et d\'emprunt DeFi',
            verified: true
        },
        {
            name: 'Lido',
            slug: 'lido',
            category: 'Staking',
            tvl: '$28.3B',
            users24h: '8.1K',
            volume24h: '$180M',
            description: 'Solution de staking liquide',
            verified: true
        },
        {
            name: 'MakerDAO',
            slug: 'makerdao',
            category: 'Lending',
            tvl: '$8.2B',
            users24h: '3.2K',
            volume24h: '$65M',
            description: 'Protocole de création de stablecoin DAI',
            verified: true
        }
    ],
    solana: [
        {
            name: 'Raydium',
            slug: 'raydium',
            category: 'DEX',
            tvl: '$450M',
            users24h: '32.1K',
            volume24h: '$180M',
            description: 'AMM et plateforme de liquidité sur Solana',
            verified: true
        },
        {
            name: 'Serum',
            slug: 'serum',
            category: 'DEX',
            tvl: '$125M',
            users24h: '15.8K',
            volume24h: '$95M',
            description: 'Orderbook décentralisé sur Solana',
            verified: true
        },
        {
            name: 'Marinade',
            slug: 'marinade',
            category: 'Staking',
            tvl: '$1.2B',
            users24h: '4.5K',
            volume24h: '$25M',
            description: 'Staking liquide de SOL',
            verified: true
        }
    ]
};


export default function BlockchainDapps() {
    const { slug } = useParams<{ slug: string }>()

    const blockchain = blockchainInfo[slug as keyof typeof blockchainInfo]
    const dapps = dappsByBlockchain[slug as keyof typeof dappsByBlockchain] || []

    if (!blockchain) {
        return (
            <div className="page">
                <div className="error-section">
                    <h1>Blockchain non trouvée</h1>
                    <p>La blockchain "{slug}" n'existe pas.</p>
                    <Link to="/blockchains" className="cta-btn primary">
                        Retour aux blockchains
                    </Link>
                </div>
            </div>
        )
    }

    const categories = ['Tous', ...Array.from(new Set(dapps.map(dapp => dapp.category)))]

    return (
        <div className="page">
            {/* Breadcrumb */}
            <nav className="breadcrumb">
                <Link to="/">Accueil</Link>
                <span>/</span>
                <Link to="/blockchains">Blockchains</Link>
                <span>/</span>
                <Link to={`/blockchain/${slug}`}>{blockchain.name}</Link>
                <span>/</span>
                <span>dApps</span>
            </nav>

            {/* Header */}
            <div className="page-header" style={{ '--chain-color': blockchain.color } as any}>
                <div className="blockchain-header-mini">
                    <div className="blockchain-dot-large" style={{ backgroundColor: blockchain.color }}></div>
                    <div>
                        <h1>dApps sur {blockchain.name}</h1>
                        <p>Découvrez les {dapps.length} applications décentralisées disponibles sur {blockchain.name}</p>
                    </div>
                </div>
            </div>

            {/* Navigation secondaire */}
            <div className="sub-navigation">
                <Link to={`/blockchain/${slug}`} className="sub-nav-link">
                    Vue d'ensemble
                </Link>
                <Link to={`/blockchain/${slug}/dapps`} className="sub-nav-link active">
                    dApps ({dapps.length})
                </Link>
                <Link to={`/blockchain/${slug}/developers`} className="sub-nav-link">
                    Développeurs
                </Link>
            </div>

            {/* Filtres */}
            <div className="filters-section">
                <div className="filter-group">
                    <label>Catégorie:</label>
                    <select className="filter-select">
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                <div className="filter-group">
                    <label>Recherche:</label>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Rechercher une dApp..."
                    />
                </div>
                <div className="filter-group">
                    <label>Trier par:</label>
                    <select className="filter-select">
                        <option value="tvl">TVL (décroissant)</option>
                        <option value="users">Utilisateurs 24h</option>
                        <option value="volume">Volume 24h</option>
                        <option value="name">Nom (A-Z)</option>
                    </select>
                </div>
            </div>

            {/* Statistiques rapides */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-number">{dapps.length}</div>
                    <div className="stat-label">dApps sur {blockchain.name}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{categories.length - 1}</div>
                    <div className="stat-label">Catégories</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">
                        {dapps.reduce((sum, dapp) => sum + parseInt(dapp.users24h.replace('K', '000').replace('.', '')), 0).toLocaleString()}
                    </div>
                    <div className="stat-label">Utilisateurs Actifs 24h</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{dapps.filter(dapp => dapp.verified).length}</div>
                    <div className="stat-label">dApps Vérifiées</div>
                </div>
            </div>

            {/* Grille des dApps */}
            <div className="dapps-grid">
                {dapps.map((dapp) => (
                    <div key={dapp.slug} className="dapp-card">
                        <div className="dapp-card-header">
                            <div className="dapp-info">
                                <h3>
                                    <Link to={`/dapps/${dapp.slug}`} className="dapp-link">
                                        {dapp.name}
                                    </Link>
                                    {dapp.verified && (
                                        <span className="verified-badge">✓</span>
                                    )}
                                </h3>
                                <span className={`category-badge ${dapp.category.toLowerCase()}`}>
                                    {dapp.category}
                                </span>
                            </div>
                        </div>

                        <p className="dapp-description">{dapp.description}</p>

                        <div className="dapp-metrics">
                            <div className="metric">
                                <span className="metric-label">TVL</span>
                                <span className="metric-value">{dapp.tvl}</span>
                            </div>
                            <div className="metric">
                                <span className="metric-label">Utilisateurs 24h</span>
                                <span className="metric-value">{dapp.users24h}</span>
                            </div>
                            <div className="metric">
                                <span className="metric-label">Volume 24h</span>
                                <span className="metric-value">{dapp.volume24h}</span>
                            </div>
                        </div>

                        <div className="dapp-actions">
                            <Link to={`/dapps/${dapp.slug}`} className="action-btn secondary">
                                Détails
                            </Link>
                            <button className="action-btn primary">
                                Lancer l'app
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Message si aucune dApp */}
            {dapps.length === 0 && (
                <div className="empty-state">
                    <h3>Aucune dApp référencée</h3>
                    <p>Cette blockchain n'a pas encore de dApps référencées dans notre base de données.</p>
                    <button className="cta-btn primary">Soumettre une dApp</button>
                </div>
            )}
        </div>
    )
}
