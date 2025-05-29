// pages/DappDetail.tsx

import { useParams, Link } from 'react-router-dom'


// Données mock des dApps - à remplacer par un appel API
const dappsData = {
    uniswap: {
        name: 'Uniswap',
        category: 'DEX',
        description: 'Uniswap est un protocole d\'échange décentralisé construit sur Ethereum. Il permet aux utilisateurs d\'échanger des tokens ERC-20 sans intermédiaire.',
        longDescription: 'Uniswap utilise un modèle de teneur de marché automatisé (AMM) qui permet aux utilisateurs de trader contre un pool de liquidité. Les utilisateurs peuvent également devenir fournisseurs de liquidité en déposant des tokens dans les pools et en gagnant des frais de trading.',
        blockchains: [
            { name: 'Ethereum', slug: 'ethereum', color: '#627EEA' },
            { name: 'Polygon', slug: 'polygon', color: '#8247E5' },
            { name: 'Arbitrum', slug: 'arbitrum', color: '#28A0F0' }
        ],
        metrics: {
            tvl: '$4.2B',
            users24h: '45.2K',
            volume24h: '$850M',
            transactions24h: '125K',
            fees24h: '$2.1M',
            totalUsers: '3.2M'
        },
        links: {
            website: 'https://app.uniswap.org',
            docs: 'https://docs.uniswap.org',
            github: 'https://github.com/Uniswap',
            twitter: 'https://twitter.com/Uniswap',
            discord: 'https://discord.gg/FCfyBSbCU5'
        },
        verified: true,
        founded: '2018',
        team: 'Uniswap Labs',
        token: 'UNI'
    },
    aave: {
        name: 'Aave',
        category: 'Lending',
        description: 'Aave est un protocole de liquidité décentralisé où les utilisateurs peuvent participer en tant que déposants ou emprunteurs.',
        longDescription: 'Aave permet aux utilisateurs de déposer des crypto-monnaies pour gagner des intérêts ou d\'emprunter des actifs en fournissant des garanties. Le protocole utilise des taux d\'intérêt algorithmiques basés sur l\'utilisation des pools.',
        blockchains: [
            { name: 'Ethereum', slug: 'ethereum', color: '#627EEA' },
            { name: 'Polygon', slug: 'polygon', color: '#8247E5' },
            { name: 'Arbitrum', slug: 'arbitrum', color: '#28A0F0' }
        ],
        metrics: {
            tvl: '$12.5B',
            users24h: '12.8K',
            volume24h: '$245M',
            transactions24h: '28K',
            fees24h: '$650K',
            totalUsers: '450K'
        },
        links: {
            website: 'https://app.aave.com',
            docs: 'https://docs.aave.com',
            github: 'https://github.com/aave',
            twitter: 'https://twitter.com/AaveAave',
            discord: 'https://discord.gg/CvKUrqM'
        },
        verified: true,
        founded: '2017',
        team: 'Aave Companies',
        token: 'AAVE'
    }
};


export default function DappDetail() {
    const { slug } = useParams<{ slug: string }>()

    const dapp = dappsData[slug as keyof typeof dappsData]

    if (!dapp) {
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
                                {dapp.verified && (
                                    <span className="verified-badge-large">✓ Vérifiée</span>
                                )}
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
                    {dapp.blockchains.map((blockchain) => (
                        <Link
                            key={blockchain.slug}
                            to={`/blockchain/${blockchain.slug}`}
                            className="blockchain-chip"
                            style={{ '--chain-color': blockchain.color } as any}
                        >
                            <div className="blockchain-dot" style={{ backgroundColor: blockchain.color }}></div>
                            <span>{blockchain.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Métriques */}
            <div className="metrics-grid">
                <div className="metric-card">
                    <div className="metric-label">TVL Total</div>
                    <div className="metric-value">{dapp.metrics.tvl}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Utilisateurs 24h</div>
                    <div className="metric-value">{dapp.metrics.users24h}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Volume 24h</div>
                    <div className="metric-value">{dapp.metrics.volume24h}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Transactions 24h</div>
                    <div className="metric-value">{dapp.metrics.transactions24h}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Frais générés 24h</div>
                    <div className="metric-value">{dapp.metrics.fees24h}</div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">Utilisateurs Total</div>
                    <div className="metric-value">{dapp.metrics.totalUsers}</div>
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
