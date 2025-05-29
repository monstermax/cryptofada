// pages/blockchains/BlockchainDevelopers.tsx

import { Link } from 'react-router-dom'

import { useBlockchain } from '../../hooks/useBlockchain'


export default function BlockchainDevelopers() {
    const { blockchain, loading, slug } = useBlockchain()

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
