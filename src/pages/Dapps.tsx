// pages/Dapps.tsx


// Données complètes des dApps
const allDapps = [
    // DEX
    {
        name: 'Uniswap',
        category: 'DEX',
        blockchains: ['Ethereum', 'Polygon', 'Arbitrum', 'Base'],
        tvl: '$4.2B',
        users24h: '45.2K',
        volume24h: '$850M',
        description: 'Protocol d\'échange décentralisé leader',
        website: 'app.uniswap.org',
        verified: true
    },
    {
        name: 'PancakeSwap',
        category: 'DEX',
        blockchains: ['Ethereum', 'Arbitrum'],
        tvl: '$2.1B',
        users24h: '125K',
        volume24h: '$420M',
        description: 'DEX populaire multi-chaînes',
        website: 'pancakeswap.finance',
        verified: true
    },
    {
        name: 'Raydium',
        category: 'DEX',
        blockchains: ['Solana'],
        tvl: '$450M',
        users24h: '32.1K',
        volume24h: '$180M',
        description: 'AMM et plateforme de liquidité sur Solana',
        website: 'raydium.io',
        verified: true
    },
    {
        name: 'SushiSwap',
        category: 'DEX',
        blockchains: ['Ethereum', 'Polygon', 'Arbitrum'],
        tvl: '$380M',
        users24h: '18.5K',
        volume24h: '$95M',
        description: 'DEX communautaire avec fonctionnalités avancées',
        website: 'sushi.com',
        verified: true
    },
    // Lending
    {
        name: 'Aave',
        category: 'Lending',
        blockchains: ['Ethereum', 'Polygon', 'Arbitrum'],
        tvl: '$12.5B',
        users24h: '12.8K',
        volume24h: '$245M',
        description: 'Protocole de prêt et d\'emprunt DeFi',
        website: 'app.aave.com',
        verified: true
    },
    {
        name: 'Compound',
        category: 'Lending',
        blockchains: ['Ethereum', 'Polygon', 'Base'],
        tvl: '$1.8B',
        users24h: '6.5K',
        volume24h: '$95M',
        description: 'Protocole de finance algorithmique',
        website: 'compound.finance',
        verified: true
    },
    {
        name: 'MakerDAO',
        category: 'Lending',
        blockchains: ['Ethereum'],
        tvl: '$8.2B',
        users24h: '3.2K',
        volume24h: '$65M',
        description: 'Protocole de création de stablecoin DAI',
        website: 'makerdao.com',
        verified: true
    },
    // Staking
    {
        name: 'Lido',
        category: 'Staking',
        blockchains: ['Ethereum', 'Solana', 'Polygon'],
        tvl: '$28.3B',
        users24h: '8.1K',
        volume24h: '$180M',
        description: 'Solution de staking liquide',
        website: 'lido.fi',
        verified: true
    },
    {
        name: 'Rocket Pool',
        category: 'Staking',
        blockchains: ['Ethereum'],
        tvl: '$3.1B',
        users24h: '2.8K',
        volume24h: '$45M',
        description: 'Staking décentralisé d\'Ethereum',
        website: 'rocketpool.net',
        verified: true
    },
    // Gaming
    {
        name: 'Axie Infinity',
        category: 'Gaming',
        blockchains: ['Ethereum'],
        tvl: '$125M',
        users24h: '89.5K',
        volume24h: '$2.5M',
        description: 'Jeu NFT play-to-earn populaire',
        website: 'axieinfinity.com',
        verified: true
    },
    {
        name: 'The Sandbox',
        category: 'Gaming',
        blockchains: ['Ethereum', 'Polygon'],
        tvl: '$85M',
        users24h: '25.1K',
        volume24h: '$1.8M',
        description: 'Metaverse gaming et création',
        website: 'sandbox.game',
        verified: true
    },
    {
        name: 'Stepn',
        category: 'Gaming',
        blockchains: ['Solana', 'Ethereum'],
        tvl: '$45M',
        users24h: '156K',
        volume24h: '$3.2M',
        description: 'Move-to-earn lifestyle app',
        website: 'stepn.com',
        verified: true
    }
];


export default function Dapps() {

    const categories = ['Tous', 'DEX', 'Lending', 'Staking', 'Gaming']
    const blockchains = ['Tous', 'Ethereum', 'Solana', 'Polygon', 'Arbitrum', 'Base']

    return (
        <div className="page">
            <div className="page-header">
                <h1>🚀 Applications Décentralisées</h1>
                <p>Découvrez et lancez les meilleures dApps de l'écosystème blockchain</p>
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
                    <label>Blockchain:</label>
                    <select className="filter-select">
                        {blockchains.map(chain => (
                            <option key={chain} value={chain}>{chain}</option>
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
            </div>

            {/* Statistiques rapides */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-number">{allDapps.length}</div>
                    <div className="stat-label">dApps Référencées</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">5</div>
                    <div className="stat-label">Blockchains Supportées</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">$75.8B</div>
                    <div className="stat-label">TVL Total</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">524K</div>
                    <div className="stat-label">Utilisateurs Actifs 24h</div>
                </div>
            </div>

            {/* Tableau des dApps */}
            <div className="table-container">
                <table className="data-table dapps-table">
                    <thead>
                        <tr>
                            <th>dApp</th>
                            <th>Catégorie</th>
                            <th>Blockchains</th>
                            <th>TVL</th>
                            <th>Utilisateurs 24h</th>
                            <th>Volume 24h</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allDapps.map((dapp) => (
                            <tr key={dapp.name} className="dapp-row">
                                <td>
                                    <div className="dapp-cell">
                                        <div className="dapp-header">
                                            <span className="dapp-name">{dapp.name}</span>
                                            {dapp.verified && (
                                                <span className="verified-badge">✓</span>
                                            )}
                                        </div>
                                        <div className="dapp-description">{dapp.description}</div>
                                        <div className="dapp-website">{dapp.website}</div>
                                    </div>
                                </td>
                                <td>
                                    <span className={`category-badge ${dapp.category.toLowerCase()}`}>
                                        {dapp.category}
                                    </span>
                                </td>
                                <td>
                                    <div className="blockchains-list">
                                        {dapp.blockchains.map((chain) => (
                                            <span key={chain} className="blockchain-tag">
                                                {chain}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="metric-value">{dapp.tvl}</td>
                                <td className="metric-value">{dapp.users24h}</td>
                                <td className="metric-value">{dapp.volume24h}</td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="action-btn primary">Lancer</button>
                                        <button className="action-btn secondary">Info</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Section d'ajout de dApp */}
            <div className="add-dapp-section">
                <h3>Votre dApp n'est pas listée ?</h3>
                <p>Soumettez votre application décentralisée pour qu'elle soit référencée sur CryptoFada</p>
                <button className="cta-btn primary">Soumettre une dApp</button>
            </div>
        </div>
    )
}
