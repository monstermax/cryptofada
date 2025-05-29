// pages/Homepage.tsx

import { Link } from 'react-router-dom'


// Données des principales blockchains
const mainBlockchains = [
    {
        name: 'Ethereum',
        symbol: 'ETH',
        slug: 'ethereum',
        color: '#627EEA',
        tvl: '$45.2B',
        marketCap: '$280.5B',
        dappsCount: 2847,
        category: 'Layer 1',
        website: 'ethereum.org'
    },
    {
        name: 'Solana',
        symbol: 'SOL',
        slug: 'solana',
        color: '#9945FF',
        tvl: '$8.7B',
        marketCap: '$45.8B',
        dappsCount: 856,
        category: 'Layer 1',
        website: 'solana.com'
    },
    {
        name: 'Polygon',
        symbol: 'MATIC',
        slug: 'polygon',
        color: '#8247E5',
        tvl: '$1.2B',
        marketCap: '$3.2B',
        dappsCount: 1234,
        category: 'Layer 2',
        website: 'polygon.technology'
    },
    {
        name: 'Arbitrum',
        symbol: 'ARB',
        slug: 'arbitrum',
        color: '#28A0F0',
        tvl: '$2.8B',
        marketCap: '$2.1B',
        dappsCount: 687,
        category: 'Layer 2',
        website: 'arbitrum.io'
    },
    {
        name: 'Base',
        symbol: 'BASE',
        slug: 'base',
        color: '#0052FF',
        tvl: '$1.8B',
        marketCap: '-',
        dappsCount: 423,
        category: 'Layer 2',
        website: 'base.org'
    }
];


// Données des principales dApps
const mainDapps = [
    {
        name: 'Uniswap',
        slug: 'uniswap', // Ajout du slug
        category: 'DEX',
        blockchains: ['Ethereum', 'Polygon', 'Arbitrum', 'Base'],
        tvl: '$4.2B',
        users24h: '45.2K',
        volume24h: '$850M',
        description: 'Protocol d\'échange décentralisé leader'
    },
    {
        name: 'Aave',
        slug: 'aave',
        category: 'Lending',
        blockchains: ['Ethereum', 'Polygon', 'Arbitrum'],
        tvl: '$12.5B',
        users24h: '12.8K',
        volume24h: '$245M',
        description: 'Protocole de prêt et d\'emprunt DeFi'
    },
    {
        name: 'Lido',
        slug: 'lido',
        category: 'Staking',
        blockchains: ['Ethereum', 'Solana', 'Polygon'],
        tvl: '$28.3B',
        users24h: '8.1K',
        volume24h: '$180M',
        description: 'Solution de staking liquide'
    },
    {
        name: 'PancakeSwap',
        slug: 'pancakeswap',
        category: 'DEX',
        blockchains: ['Ethereum', 'Arbitrum'],
        tvl: '$2.1B',
        users24h: '125K',
        volume24h: '$420M',
        description: 'DEX populaire multi-chaînes'
    },
    {
        name: 'Compound',
        slug: 'compound',
        category: 'Lending',
        blockchains: ['Ethereum', 'Polygon', 'Base'],
        tvl: '$1.8B',
        users24h: '6.5K',
        volume24h: '$95M',
        description: 'Protocole de finance algorithmique'
    },
    {
        name: 'Raydium',
        slug: 'raydium',
        category: 'DEX',
        blockchains: ['Solana'],
        tvl: '$450M',
        users24h: '32.1K',
        volume24h: '$180M',
        description: 'AMM et plateforme de liquidité sur Solana'
    }
];


export default function Homepage() {

    return (
        <div className="page">
            {/* Hero Section */}
            <div className="hero-section">
                <h1>ChainHub</h1>
                <p className="hero-subtitle">Votre porte d'entrée vers l'écosystème blockchain</p>
                <p className="hero-description">
                    Découvrez et explorez les principales blockchains et applications décentralisées.
                    Comme Steam pour les jeux vidéo, ChainHub est votre lanceur pour l'univers crypto.
                </p>
            </div>

            {/* Section Blockchains */}
            <section className="data-section">
                <div className="section-header">
                    <h2>🔗 Principales Blockchains</h2>
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
                                <th>dApps</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mainBlockchains.map((blockchain) => (
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
                                    <td className="metric-value">{blockchain.tvl}</td>
                                    <td className="metric-value">{blockchain.marketCap}</td>
                                    <td className="dapps-count">{blockchain.dappsCount.toLocaleString()}</td>
                                    <td>
                                        <Link
                                            to={`/blockchain/${blockchain.slug}`}
                                            className="action-btn"
                                        >
                                            Explorer
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Section dApps */}
            <section className="data-section">
                <div className="section-header">
                    <h2>🚀 Principales dApps</h2>
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
                                <th>Utilisateurs 24h</th>
                                <th>Volume 24h</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mainDapps.map((dapp) => (
                                <tr key={dapp.name}>
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
                                            {dapp.blockchains.map((chain, index) => (
                                                <span key={chain} className="blockchain-tag">
                                                    {chain}
                                                    {index < dapp.blockchains.length - 1 && ', '}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="metric-value">{dapp.tvl}</td>
                                    <td className="metric-value">{dapp.users24h}</td>
                                    <td className="metric-value">{dapp.volume24h}</td>
                                    <td>
                                        <Link
                                            to={`/dapps/${dapp.slug}`}
                                            className="action-btn"
                                        >
                                            Lancer
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

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
