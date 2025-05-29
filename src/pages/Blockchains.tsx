// pages/Blockchains.tsx

import { Link } from 'react-router-dom'


const mainChains = [
    {
        name: 'Ethereum',
        symbol: 'ETH',
        slug: 'ethereum',
        color: '#627EEA',
        description: 'La blockchain programmable leader',
        tvl: '$45.2B',
        status: 'active'
    },
    {
        name: 'Solana',
        symbol: 'SOL',
        slug: 'solana',
        color: '#9945FF',
        description: 'Blockchain haute performance',
        tvl: '$8.7B',
        status: 'active'
    },
    {
        name: 'Polygon',
        symbol: 'MATIC',
        slug: 'polygon',
        color: '#8247E5',
        description: 'Solution de mise à l\'échelle d\'Ethereum',
        tvl: '$1.2B',
        status: 'active'
    },
    {
        name: 'Arbitrum',
        symbol: 'ARB',
        slug: 'arbitrum',
        color: '#28A0F0',
        description: 'Layer 2 optimiste pour Ethereum',
        tvl: '$2.8B',
        status: 'active'
    }
];


export default function Blockchains() {

    return (
        <div className="page">
            <div className="page-header">
                <h1>Blockchains Principales</h1>
                <p>Découvrez les principales blockchains et leurs écosystèmes d'applications décentralisées</p>
            </div>

            <div className="blockchain-grid">
                {mainChains.map((chain) => (
                    <div key={chain.symbol} className="blockchain-card" style={{ '--chain-color': chain.color } as any}>
                        <div className="blockchain-header">
                            <div className="blockchain-info">
                                <h3>{chain.name}</h3>
                                <span className="blockchain-symbol">{chain.symbol}</span>
                            </div>
                            <div className="blockchain-status">
                                <span className={`status ${chain.status}`}></span>
                                <span className="tvl">TVL: {chain.tvl}</span>
                            </div>
                        </div>

                        <p className="blockchain-description">{chain.description}</p>

                        <div className="dapp-categories">
                            <div className="category">
                                <span className="category-name">🔄 Swap</span>
                                <span className="category-count">12 dApps</span>
                            </div>
                            <div className="category">
                                <span className="category-name">💰 Staking</span>
                                <span className="category-count">8 dApps</span>
                            </div>
                            <div className="category">
                                <span className="category-name">🎮 Gaming</span>
                                <span className="category-count">15 dApps</span>
                            </div>
                        </div>

                        {/* Remplacer le bouton par un Link */}
                        <Link
                            to={`/blockchain/${chain.slug}`}
                            className="explore-btn"
                        >
                            Explorer l'écosystème
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
