// pages/blockchains/Blockchains.tsx

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { blockchainHasAirdrop } from '../../api/apis'
import { useBlockchains } from '../../hooks/useBlockchain'

import type { BlockchainMetrics } from '../../types/blockchains_types'
import type { BlockchainSlug } from '../../data/blockchains_data'


export default function Blockchains() {
    const { blockchains, setBlockchains, loading } = useBlockchains();
    const [selectedPath, setSelectedPath] = useState('Tous')
    const [selectedDifficulty, setSelectedDifficulty] = useState('Tous')

    const blockchainsHavingMainnet = blockchains.filter(b => b.networks.some(network => network.isMainnet));

    // Données enrichies avec infos tutoriels
    const blockchainsWithTutorials = blockchainsHavingMainnet.map(blockchain => ({
        ...blockchain,
        tutorial: {
            duration: getTutorialDuration(blockchain.slug),
            difficulty: getTutorialDifficulty(blockchain.slug),
            startingCost: getStartingCost(blockchain.slug),
            learningGoals: getLearningGoals(blockchain.slug),
            prerequisites: getPrerequisites(blockchain.slug),
            walletName: getWalletName(blockchain.slug),
            videoUrl: `/videos/${blockchain.slug}-setup.mp4`,
            thumbnailUrl: `/thumbnails/${blockchain.slug}-wallet.jpg`,
        }
    }))

    const learningPaths = ['Tous', 'Je débute', 'Je veux tester', 'Performance', 'Économique']
    const difficulties = ['Tous', 'Débutant', 'Intermédiaire', 'Avancé']

    // Filtrage
    const filteredBlockchains = blockchainsWithTutorials.filter(blockchain => {
        const pathMatch = selectedPath === 'Tous' || getBlockchainPath(blockchain.slug).includes(selectedPath)
        const difficultyMatch = selectedDifficulty === 'Tous' || blockchain.tutorial.difficulty === selectedDifficulty
        return pathMatch && difficultyMatch
    })

    if (loading) {
        return (
            <div className="page">
                <div className="loading-section">
                    <h2>Chargement des tutoriels blockchain...</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="page">
            {/* Header éducatif */}
            <div className="page-header">
                <h1>⛓️ Tutoriels Blockchains</h1>
                <p>Apprenez à utiliser chaque blockchain pas à pas</p>
                <div className="header-description">
                    <p>
                        Découvrez comment configurer votre wallet, obtenir vos premiers tokens et effectuer
                        vos premières transactions sur chaque blockchain. Guides vidéo détaillés inclus.
                    </p>
                </div>
            </div>

            {/* Section Choisir sa blockchain */}
            <section className="blockchain-choice">
                <div className="section-header">
                    <h2>🤔 Comment choisir sa blockchain ?</h2>
                    <p>Comprenez les différences pour faire le bon choix</p>
                </div>

                <div className="choice-factors">
                    <div className="factor-card">
                        <div className="factor-icon">💰</div>
                        <h3>Coût</h3>
                        <p>Frais de transaction de <strong>0.001€</strong> (Polygon) à <strong>50€</strong> (Ethereum)</p>
                        <div className="factor-tip">Commencez par les moins chères pour apprendre</div>
                    </div>

                    <div className="factor-card">
                        <div className="factor-icon">⚡</div>
                        <h3>Vitesse</h3>
                        <p>De <strong>quelques secondes</strong> (Solana) à <strong>plusieurs minutes</strong> (Bitcoin)</p>
                        <div className="factor-tip">Plus c'est rapide, plus c'est agréable à utiliser</div>
                    </div>

                    <div className="factor-card">
                        <div className="factor-icon">🏪</div>
                        <h3>Écosystème</h3>
                        <p>De <strong>10</strong> à <strong>2000+</strong> applications disponibles</p>
                        <div className="factor-tip">Plus il y a d'apps, plus vous avez de choix</div>
                    </div>

                    <div className="factor-card">
                        <div className="factor-icon">🔒</div>
                        <h3>Sécurité</h3>
                        <p>Niveau de <strong>décentralisation</strong> et historique de sécurité</p>
                        <div className="factor-tip">Plus ancien = généralement plus sûr</div>
                    </div>
                </div>
            </section>

            {/* Parcours suggérés */}
            <section className="learning-paths">
                <div className="section-header">
                    <h2>🛤️ Parcours Suggérés</h2>
                    <p>Choisissez votre chemin selon vos objectifs</p>
                </div>

                <div className="paths-grid">
                    <div className="path-card beginner">
                        <div className="path-icon">🌱</div>
                        <h3>Je débute</h3>
                        <p>Commencez par des blockchains faciles et pas chères</p>
                        <div className="path-sequence">
                            <span className="step">1. Polygon</span>
                            <span className="arrow">→</span>
                            <span className="step">2. Base</span>
                            <span className="arrow">→</span>
                            <span className="step">3. Ethereum</span>
                        </div>
                        <div className="path-benefit">💡 Coût total d'apprentissage : ~5€</div>
                    </div>

                    <div className="path-card tester">
                        <div className="path-icon">🧪</div>
                        <h3>Je veux tester</h3>
                        <p>Explorez gratuitement avec les testnets</p>
                        <div className="path-sequence">
                            <span className="step">1. Testnets</span>
                            <span className="arrow">→</span>
                            <span className="step">2. Polygon</span>
                            <span className="arrow">→</span>
                            <span className="step">3. Au choix</span>
                        </div>
                        <div className="path-benefit">🎯 Coût : 0€ + airdrops potentiels</div>
                    </div>

                    <div className="path-card performance">
                        <div className="path-icon">🚀</div>
                        <h3>Performance</h3>
                        <p>Les blockchains les plus rapides</p>
                        <div className="path-sequence">
                            <span className="step">1. Solana</span>
                            <span className="arrow">→</span>
                            <span className="step">2. Base</span>
                            <span className="arrow">→</span>
                            <span className="step">3. Arbitrum</span>
                        </div>
                        <div className="path-benefit">⚡ Transactions ultra-rapides</div>
                    </div>
                </div>
            </section>

            {/* Filtres */}
            <div className="blockchain-filters">
                <div className="filter-group">
                    <label>Parcours:</label>
                    <select
                        className="filter-select"
                        value={selectedPath}
                        onChange={(e) => setSelectedPath(e.target.value)}
                    >
                        {learningPaths.map(path => (
                            <option key={path} value={path}>{path}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-group">
                    <label>Difficulté:</label>
                    <select
                        className="filter-select"
                        value={selectedDifficulty}
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                    >
                        {difficulties.map(diff => (
                            <option key={diff} value={diff}>{diff}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-stats">
                    <span className="results-count">
                        {filteredBlockchains.length} blockchain{filteredBlockchains.length > 1 ? 's' : ''}
                    </span>
                </div>
            </div>

            {/* Grille des tutoriels blockchain */}
            <div className="blockchain-tutorials-grid">
                {filteredBlockchains.map((blockchain) => {
                    const blockchainMetrics: BlockchainMetrics | null = null as BlockchainMetrics | null;

                    return (
                        <div key={blockchain.slug} className="blockchain-tutorial-card">
                            {/* Thumbnail */}
                            <div className="blockchain-thumbnail">
                                <div
                                    className="blockchain-logo"
                                    style={{ backgroundColor: blockchain.color }}
                                >
                                    <span className="blockchain-symbol">{blockchain.symbol}</span>
                                </div>
                                <div className="thumbnail-overlay">
                                    <div className="play-button">▶️</div>
                                    <div className="video-duration">{blockchain.tutorial.duration}</div>
                                </div>
                                <div className="cost-badge">
                                    {blockchain.tutorial.startingCost}
                                </div>
                            </div>

                            {/* Contenu */}
                            <div className="blockchain-content">
                                <div className="blockchain-header">
                                    <div className="blockchain-title">
                                        <h3>{blockchain.name}</h3>
                                        <span className={`category-badge ${blockchain.category.toLowerCase().replace(' ', '-')}`}>
                                            {blockchain.category}
                                        </span>
                                        {blockchainHasAirdrop(blockchain.slug) && <>
                                            TODO: lien vers page airdrop de la blockchain
                                        </>}
                                    </div>
                                    <div className="blockchain-badges">
                                        <span className={`difficulty-badge ${blockchain.tutorial.difficulty.toLowerCase()}`}>
                                            {blockchain.tutorial.difficulty}
                                        </span>
                                    </div>
                                </div>

                                <p className="blockchain-description">{blockchain.description}</p>

                                <div className="blockchain-stats">
                                    <div className="stat-item">
                                        <span className="stat-label">Frais moyens:</span>
                                        <span className="stat-value">{blockchainMetrics ? blockchainMetrics.gasPrice : '-'}</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-label">Temps de bloc:</span>
                                        <span className="stat-value">{blockchainMetrics ? blockchainMetrics.blockTime : '-'}</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-label">dApps:</span>
                                        <span className="stat-value">-</span>
                                    </div>
                                </div>

                                <div className="tutorial-learning-goals">
                                    <h4>Ce que vous apprendrez :</h4>
                                    <ul>
                                        {blockchain.tutorial.learningGoals.map((goal, index) => (
                                            <li key={index}>{goal}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="tutorial-prerequisites">
                                    <h4>Prérequis :</h4>
                                    <div className="prerequisites-list">
                                        {blockchain.tutorial.prerequisites.map((prereq, index) => (
                                            <span key={index} className="prerequisite-tag">
                                                {prereq}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="wallet-info">
                                    <h4>Wallet recommandé :</h4>
                                    <span className="wallet-name">{blockchain.tutorial.walletName}</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="blockchain-actions">
                                <button className="action-btn primary">
                                    🎥 Voir le tutoriel
                                </button>
                                <Link
                                    to={`/blockchain/${blockchain.slug}`}
                                    className="action-btn secondary"
                                >
                                    🔍 Explorer
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* CTA Section */}
            <section className="blockchain-cta">
                <h2>Prêt à vous lancer ?</h2>
                <p>Commencez par notre parcours débutant recommandé</p>
                <div className="cta-buttons">
                    <button className="cta-btn primary">🌱 Parcours Débutant</button>
                    <Link to="/testnets" className="cta-btn secondary">🧪 Tester Gratuitement</Link>
                </div>
            </section>
        </div>
    )
}


// Fonctions utilitaires (à déplacer dans apis.ts plus tard)
function getTutorialDuration(slug: BlockchainSlug): string {
    const durations = {
        'ethereum': '8 min',
        'solana': '6 min',
        'polygon': '5 min',
        'arbitrum': '7 min',
        'base': '5 min',
        'bsc': '6 min'
    }
    return durations[slug as keyof typeof durations] || '6 min'
}


function getTutorialDifficulty(slug: BlockchainSlug): string {
    const difficulties = {
        'ethereum': 'Intermédiaire',
        'solana': 'Intermédiaire',
        'polygon': 'Débutant',
        'arbitrum': 'Intermédiaire',
        'base': 'Débutant',
        'bsc': 'Débutant'
    }
    return difficulties[slug as keyof typeof difficulties] || 'Débutant'
}


function getStartingCost(slug: BlockchainSlug): string {
    const costs = {
        'ethereum': '~50€ pour commencer',
        'solana': '~5€ pour commencer',
        'polygon': '~1€ pour commencer',
        'arbitrum': '~10€ pour commencer',
        'base': '~5€ pour commencer',
        'bsc': '~2€ pour commencer'
    }
    return costs[slug as keyof typeof costs] || '~5€ pour commencer'
}


function getLearningGoals(slug: BlockchainSlug): string[] {
    const baseGoals = [
        'Installer et configurer le wallet',
        'Obtenir vos premiers tokens',
        'Effectuer votre première transaction'
    ]

    const specificGoals = {
        'ethereum': [...baseGoals, 'Comprendre les frais de gas', 'Utiliser les dApps principales'],
        'solana': [...baseGoals, 'Comprendre les frais SOL', 'Découvrir l\'écosystème Solana'],
        'polygon': [...baseGoals, 'Bridge depuis Ethereum', 'Profiter des frais réduits'],
        'arbitrum': [...baseGoals, 'Bridge depuis Ethereum', 'Utiliser Arbitrum One'],
        'base': [...baseGoals, 'Découvrir l\'écosystème Coinbase', 'Comprendre les Layer 2'],
        'bsc': [...baseGoals, 'Comprendre BNB Smart Chain', 'Utiliser PancakeSwap']
    }

    return specificGoals[slug as keyof typeof specificGoals] || baseGoals
}


function getPrerequisites(slug: BlockchainSlug): string[] {
    const base = ['Ordinateur ou smartphone', 'Connexion internet']

    if (slug === 'solana') {
        return [...base, 'Wallet Phantom recommandé']
    }

    return [...base, 'Wallet MetaMask recommandé']
}


function getWalletName(slug: BlockchainSlug): string {
    const wallets = {
        'ethereum': 'MetaMask',
        'solana': 'Phantom',
        'polygon': 'MetaMask',
        'arbitrum': 'MetaMask',
        'base': 'MetaMask',
        'bsc': 'MetaMask'
    }
    return wallets[slug as keyof typeof wallets] || 'MetaMask'
}


function getBlockchainPath(slug: BlockchainSlug): string[] {
    const paths = {
        'polygon': ['Je débute', 'Économique'],
        'base': ['Je débute', 'Performance'],
        'bsc': ['Je débute', 'Économique'],
        'ethereum': ['Performance'],
        'solana': ['Performance'],
        'arbitrum': ['Performance', 'Économique']
    }
    return paths[slug as keyof typeof paths] || []
}
