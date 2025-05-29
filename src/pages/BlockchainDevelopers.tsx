// pages/BlockchainDevelopers.tsx

import { useParams, Link } from 'react-router-dom'


// Données mock des ressources développeurs par blockchain
const developerResources = {
    ethereum: {
        name: 'Ethereum',
        color: '#627EEA',
        symbol: 'ETH',
        documentation: {
            official: 'https://ethereum.org/developers/',
            whitepaper: 'https://ethereum.org/whitepaper/',
            yellowpaper: 'https://ethereum.github.io/yellowpaper/paper.pdf'
        },
        tools: [
            { name: 'Remix IDE', description: 'IDE en ligne pour développer des smart contracts', url: 'https://remix.ethereum.org' },
            { name: 'Hardhat', description: 'Environnement de développement Ethereum', url: 'https://hardhat.org' },
            { name: 'Truffle', description: 'Suite de développement pour Ethereum', url: 'https://trufflesuite.com' },
            { name: 'Ganache', description: 'Blockchain Ethereum locale pour les tests', url: 'https://trufflesuite.com/ganache/' },
            { name: 'MetaMask', description: 'Wallet et passerelle vers Ethereum', url: 'https://metamask.io' }
        ],
        frameworks: [
            { name: 'Web3.js', description: 'Bibliothèque JavaScript pour interagir avec Ethereum', language: 'JavaScript' },
            { name: 'Ethers.js', description: 'Bibliothèque JavaScript moderne pour Ethereum', language: 'JavaScript' },
            { name: 'Web3.py', description: 'Bibliothèque Python pour Ethereum', language: 'Python' },
            { name: 'Solidity', description: 'Langage de programmation pour smart contracts', language: 'Solidity' }
        ],
        testnet: {
            name: 'Sepolia',
            faucet: 'https://sepoliafaucet.com',
            explorer: 'https://sepolia.etherscan.io',
            rpc: 'https://sepolia.infura.io/v3/YOUR-PROJECT-ID'
        },
        tutorials: [
            { title: 'Créer votre premier smart contract', difficulty: 'Débutant', duration: '30 min' },
            { title: 'Développer une DApp complète', difficulty: 'Intermédiaire', duration: '2h' },
            { title: 'Optimiser les coûts de gas', difficulty: 'Avancé', duration: '45 min' },
            { title: 'Intégrer des oracles', difficulty: 'Avancé', duration: '1h' }
        ]
    },
    solana: {
        name: 'Solana',
        color: '#9945FF',
        symbol: 'SOL',
        documentation: {
            official: 'https://docs.solana.com',
            whitepaper: 'https://solana.com/solana-whitepaper.pdf',
            cookbook: 'https://solanacookbook.com'
        },
        tools: [
            { name: 'Solana CLI', description: 'Outil en ligne de commande pour Solana', url: 'https://docs.solana.com/cli' },
            { name: 'Anchor', description: 'Framework pour développer sur Solana', url: 'https://project-serum.github.io/anchor/' },
            { name: 'Phantom', description: 'Wallet Solana populaire', url: 'https://phantom.app' },
            { name: 'Solana Playground', description: 'IDE en ligne pour Solana', url: 'https://beta.solpg.io' }
        ],
        frameworks: [
            { name: '@solana/web3.js', description: 'SDK JavaScript pour Solana', language: 'JavaScript' },
            { name: 'Rust', description: 'Langage principal pour les programmes Solana', language: 'Rust' },
            { name: 'Anchor', description: 'Framework Rust pour Solana', language: 'Rust' },
            { name: 'Seahorse', description: 'Framework Python pour Solana', language: 'Python' }
        ],
        testnet: {
            name: 'Devnet',
            faucet: 'https://solfaucet.com',
            explorer: 'https://explorer.solana.com/?cluster=devnet',
            rpc: 'https://api.devnet.solana.com'
        },
        tutorials: [
            { title: 'Hello World sur Solana', difficulty: 'Débutant', duration: '45 min' },
            { title: 'Créer un token SPL', difficulty: 'Intermédiaire', duration: '1h' },
            { title: 'Développer avec Anchor', difficulty: 'Intermédiaire', duration: '1h30' },
            { title: 'Optimisation des performances', difficulty: 'Avancé', duration: '1h' }
        ]
    }
};


export default function BlockchainDevelopers() {
    const { slug } = useParams<{ slug: string }>()

    const blockchain = developerResources[slug as keyof typeof developerResources]

    if (!blockchain) {
        return (
            <div className="page">
                <div className="error-section">
                    <h1>Ressources non trouvées</h1>
                    <p>Les ressources pour "{slug}" ne sont pas encore disponibles.</p>
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
                <Link to={`/blockchain/${slug}`}>{blockchain.name}</Link>
                <span>/</span>
                <span>Développeurs</span>
            </nav>

            {/* Header */}
            <div className="page-header" style={{ '--chain-color': blockchain.color } as any}>
                <div className="blockchain-header-mini">
                    <div className="blockchain-dot-large" style={{ backgroundColor: blockchain.color }}></div>
                    <div>
                        <h1>Développer sur {blockchain.name}</h1>
                        <p>Outils, documentation et ressources pour développer sur {blockchain.name}</p>
                    </div>
                </div>
            </div>

            {/* Navigation secondaire */}
            <div className="sub-navigation">
                <Link to={`/blockchain/${slug}`} className="sub-nav-link">
                    Vue d'ensemble
                </Link>
                <Link to={`/blockchain/${slug}/dapps`} className="sub-nav-link">
                    dApps
                </Link>
                <Link to={`/blockchain/${slug}/developers`} className="sub-nav-link active">
                    Développeurs
                </Link>
            </div>

            {/* Documentation officielle */}
            <section className="dev-section">
                <h2>📚 Documentation Officielle</h2>
                <div className="doc-grid">
                    <a href={blockchain.documentation.official} target="_blank" rel="noopener noreferrer" className="doc-card">
                        <h3>Documentation Développeurs</h3>
                        <p>Guide complet pour développer sur {blockchain.name}</p>
                        <span className="link-indicator">Voir →</span>
                    </a>
                    <a href={blockchain.documentation.whitepaper} target="_blank" rel="noopener noreferrer" className="doc-card">
                        <h3>Whitepaper</h3>
                        <p>Document technique fondateur</p>
                        <span className="link-indicator">Lire →</span>
                    </a>
                    {'cookbook' in blockchain.documentation && blockchain.documentation.cookbook && (
                        <a href={blockchain.documentation.cookbook} target="_blank" rel="noopener noreferrer" className="doc-card">
                            <h3>Cookbook</h3>
                            <p>Recettes et exemples pratiques</p>
                            <span className="link-indicator">Explorer →</span>
                        </a>
                    )}
                </div>
            </section>

            {/* Outils de développement */}
            <section className="dev-section">
                <h2>🔧 Outils de Développement</h2>
                <div className="tools-grid">
                    {blockchain.tools.map((tool, index) => (
                        <div key={index} className="tool-card">
                            <h3>{tool.name}</h3>
                            <p>{tool.description}</p>
                            <a href={tool.url} target="_blank" rel="noopener noreferrer" className="action-btn secondary">
                                Accéder
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Frameworks et SDKs */}
            <section className="dev-section">
                <h2>⚡ Frameworks & SDKs</h2>
                <div className="frameworks-grid">
                    {blockchain.frameworks.map((framework, index) => (
                        <div key={index} className="framework-card">
                            <div className="framework-header">
                                <h3>{framework.name}</h3>
                                <span className={`language-badge ${framework.language.toLowerCase()}`}>
                                    {framework.language}
                                </span>
                            </div>
                            <p>{framework.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testnet */}
            <section className="dev-section">
                <h2>🧪 Réseau de Test</h2>
                <div className="testnet-card">
                    <h3>{blockchain.testnet.name}</h3>
                    <div className="testnet-info">
                        <div className="testnet-links">
                            <a href={blockchain.testnet.faucet} target="_blank" rel="noopener noreferrer" className="testnet-btn">
                                💧 Faucet
                            </a>
                            <a href={blockchain.testnet.explorer} target="_blank" rel="noopener noreferrer" className="testnet-btn">
                                🔍 Explorer
                            </a>
                        </div>
                        <div className="rpc-info">
                            <span className="rpc-label">RPC Endpoint:</span>
                            <code className="rpc-url">{blockchain.testnet.rpc}</code>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tutoriels */}
            <section className="dev-section">
                <h2>🎓 Tutoriels Recommandés</h2>
                <div className="tutorials-grid">
                    {blockchain.tutorials.map((tutorial, index) => (
                        <div key={index} className="tutorial-card">
                            <h3>{tutorial.title}</h3>
                            <div className="tutorial-meta">
                                <span className={`difficulty-badge ${tutorial.difficulty.toLowerCase()}`}>
                                    {tutorial.difficulty}
                                </span>
                                <span className="duration">⏱️ {tutorial.duration}</span>
                            </div>
                            <button className="action-btn primary">Commencer</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Communauté */}
            <section className="dev-section">
                <h2>👥 Communauté Développeurs</h2>
                <div className="community-grid">
                    <div className="community-card">
                        <h3>Discord</h3>
                        <p>Rejoignez les discussions en temps réel</p>
                        <button className="action-btn secondary">Rejoindre</button>
                    </div>
                    <div className="community-card">
                        <h3>GitHub</h3>
                        <p>Contribuez aux projets open source</p>
                        <button className="action-btn secondary">Explorer</button>
                    </div>
                    <div className="community-card">
                        <h3>Stack Overflow</h3>
                        <p>Posez vos questions techniques</p>
                        <button className="action-btn secondary">Visiter</button>
                    </div>
                    <div className="community-card">
                        <h3>Forum</h3>
                        <p>Discussions approfondies</p>
                        <button className="action-btn secondary">Participer</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
