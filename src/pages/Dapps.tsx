// pages/Dapps.tsx

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getBlockchainNameBySlug, getDapps } from '../apis'

import type { Dapp } from '../types'


export default function Dapps() {
    const [dapps, setDapps] = useState<Dapp[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState('Tous')
    const [selectedDifficulty, setSelectedDifficulty] = useState('Tous')
    const [selectedBlockchain, setSelectedBlockchain] = useState('Tous')

    useEffect(() => {
        const loadData = async () => {
            try {
                const dappsData = await getDapps()
                setDapps(dappsData)
            } catch (error) {
                console.error('Erreur lors du chargement des dApps:', error)
            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    // Données enrichies avec infos tutoriels (à déplacer dans apis.ts plus tard)
    const dappsWithTutorials = dapps.map(dapp => ({
        ...dapp,
        tutorial: {
            duration: getDurationByCategory(dapp.category),
            difficulty: getDifficultyByCategory(dapp.category),
            prerequisites: getPrerequisitesByBlockchain(dapp.blockchains),
            learningGoals: getLearningGoalsByCategory(dapp.category),
            videoUrl: `/videos/${dapp.slug}-tutorial.mp4`,
            thumbnailUrl: `/thumbnails/${dapp.slug}.jpg`
        }
    }))

    const categories = ['Tous', 'DEX', 'Lending', 'Staking', 'Gaming']
    const difficulties = ['Tous', 'Débutant', 'Intermédiaire', 'Avancé']
    const blockchains = ['Tous', 'Ethereum', 'Solana', 'Polygon', 'Arbitrum', 'Base', 'BSC']

    // Filtrage
    const filteredDapps = dappsWithTutorials.filter(dapp => {
        const categoryMatch = selectedCategory === 'Tous' || dapp.category === selectedCategory
        const difficultyMatch = selectedDifficulty === 'Tous' || dapp.tutorial.difficulty === selectedDifficulty
        const blockchainMatch = selectedBlockchain === 'Tous' ||
            dapp.blockchains.some(chain => getBlockchainNameBySlug(chain) === selectedBlockchain)

        return categoryMatch && difficultyMatch && blockchainMatch
    })

    if (loading) {
        return (
            <div className="page">
                <div className="loading-section">
                    <h2>Chargement des tutoriels...</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="page">
            {/* Header éducatif */}
            <div className="page-header">
                <h1>🎓 Tutoriels dApps</h1>
                <p>Apprenez à utiliser les applications décentralisées étape par étape</p>
                <div className="header-description">
                    <p>
                        Découvrez comment utiliser concrètement les dApps grâce à nos tutoriels vidéo courts et pratiques.
                        Chaque vidéo vous montre exactement quoi faire, étape par étape.
                    </p>
                </div>
            </div>

            {/* Section Comprendre les Bases */}
            <section className="basics-concepts">
                <div className="section-header">
                    <h2>💡 Les Concepts Clés</h2>
                    <p>Quelques termes importants que vous retrouverez dans les tutoriels</p>
                </div>

                <div className="concepts-grid">
                    <div className="concept-card">
                        <div className="concept-icon">💰</div>
                        <h3>TVL</h3>
                        <p><strong>Total Value Locked</strong> = montant total d'argent déposé dans la dApp</p>
                        <div className="concept-tip">Plus le TVL est élevé, plus la dApp est utilisée</div>
                    </div>

                    <div className="concept-card">
                        <div className="concept-icon">🔄</div>
                        <h3>Volume</h3>
                        <p><strong>Volume 24h</strong> = montant total échangé sur 24 heures</p>
                        <div className="concept-tip">Indique l'activité de la dApp</div>
                    </div>

                    <div className="concept-card">
                        <div className="concept-icon">📈</div>
                        <h3>APY</h3>
                        <p><strong>Annual Percentage Yield</strong> = rendement annuel estimé</p>
                        <div className="concept-tip">Combien vous pourriez gagner en %</div>
                    </div>

                    <div className="concept-card">
                        <div className="concept-icon">⛽</div>
                        <h3>Gas</h3>
                        <p><strong>Frais de transaction</strong> = coût pour utiliser la blockchain</p>
                        <div className="concept-tip">Varie selon l'activité du réseau</div>
                    </div>
                </div>
            </section>

            {/* Filtres */}
            <div className="tutorial-filters">
                <div className="filter-group">
                    <label>Catégorie:</label>
                    <select
                        className="filter-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
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

                <div className="filter-group">
                    <label>Blockchain:</label>
                    <select
                        className="filter-select"
                        value={selectedBlockchain}
                        onChange={(e) => setSelectedBlockchain(e.target.value)}
                    >
                        {blockchains.map(chain => (
                            <option key={chain} value={chain}>{chain}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-stats">
                    <span className="results-count">
                        {filteredDapps.length} tutoriel{filteredDapps.length > 1 ? 's' : ''}
                    </span>
                </div>
            </div>

            {/* Grille des tutoriels */}
            <div className="tutorials-grid">
                {filteredDapps.map((dapp) => (
                    <div key={dapp.slug} className="tutorial-card">
                        {/* Thumbnail vidéo */}
                        <div className="tutorial-thumbnail">
                            <img
                                src={dapp.tutorial.thumbnailUrl}
                                alt={`Tutoriel ${dapp.name}`}
                                onError={(e) => {
                                    // Fallback si pas d'image
                                    e.currentTarget.style.display = 'none'
                                }}
                            />
                            <div className="thumbnail-overlay">
                                <div className="play-button">▶️</div>
                                <div className="video-duration">{dapp.tutorial.duration}</div>
                            </div>
                            {dapp.verified && (
                                <div className="verified-badge">✓</div>
                            )}
                        </div>

                        {/* Contenu */}
                        <div className="tutorial-content">
                            <div className="tutorial-header">
                                <h3>{dapp.name}</h3>
                                <div className="tutorial-badges">
                                    <span className={`category-badge ${dapp.category.toLowerCase()}`}>
                                        {dapp.category}
                                    </span>
                                    <span className={`difficulty-badge ${dapp.tutorial.difficulty.toLowerCase()}`}>
                                        {dapp.tutorial.difficulty}
                                    </span>
                                </div>
                            </div>

                            <p className="tutorial-description">{dapp.description}</p>

                            <div className="learning-goals">
                                <h4>Ce que vous apprendrez :</h4>
                                <ul>
                                    {dapp.tutorial.learningGoals.map((goal, index) => (
                                        <li key={index}>{goal}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="tutorial-prerequisites">
                                <h4>Prérequis :</h4>
                                <div className="prerequisites-list">
                                    {dapp.tutorial.prerequisites.map((prereq, index) => (
                                        <span key={index} className="prerequisite-tag">
                                            {prereq}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="supported-chains">
                                <h4>Disponible sur :</h4>
                                <div className="chains-list">
                                    {dapp.blockchains.map((chainSlug) => (
                                        <span key={chainSlug} className="chain-tag">
                                            {getBlockchainNameBySlug(chainSlug)}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="tutorial-actions">
                            <button className="action-btn primary">
                                📺 Voir le tutoriel
                            </button>
                            <Link
                                to={`/dapps/${dapp.slug}`}
                                className="action-btn secondary"
                            >
                                ℹ️ Plus d'infos
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Section CTA */}
            <section className="tutorial-cta">
                <h2>Vous ne trouvez pas le tutoriel recherché ?</h2>
                <p>Suggérez-nous une dApp ou une blockchain à couvrir dans nos prochains tutoriels</p>
                <button className="cta-btn primary">Suggérer un tutoriel</button>
            </section>
        </div>
    )
}

// Fonctions utilitaires (à déplacer dans apis.ts plus tard)
function getDurationByCategory(category: string): string {
    const durations = {
        'DEX': '4 min',
        'Lending': '6 min',
        'Staking': '5 min',
        'Gaming': '8 min',
        'NFT': '3 min',
        'Bridge': '4 min',
        'Yield': '7 min'
    }
    return durations[category as keyof typeof durations] || '5 min'
}

function getDifficultyByCategory(category: string): string {
    const difficulties = {
        'DEX': 'Débutant',
        'Lending': 'Intermédiaire',
        'Staking': 'Intermédiaire',
        'Gaming': 'Avancé',
        'NFT': 'Débutant',
        'Bridge': 'Intermédiaire',
        'Yield': 'Avancé'
    }
    return difficulties[category as keyof typeof difficulties] || 'Débutant'
}

function getPrerequisitesByBlockchain(blockchains: string[]): string[] {
    const prerequisites = ['Wallet MetaMask installé']

    if (blockchains.includes('solana')) {
        prerequisites.push('Wallet Phantom (pour Solana)')
    }
    if (blockchains.includes('ethereum')) {
        prerequisites.push('Quelques ETH pour les frais')
    }

    return prerequisites
}

function getLearningGoalsByCategory(category: string): string[] {
    const goals = {
        'DEX': [
            'Comment connecter votre wallet',
            'Échanger des tokens en toute sécurité',
            'Comprendre le slippage et les frais'
        ],
        'Lending': [
            'Déposer des crypto-monnaies',
            'Emprunter avec des garanties',
            'Comprendre les taux d\'intérêt'
        ],
        'Staking': [
            'Staker vos tokens',
            'Calculer les récompenses',
            'Gérer les risques'
        ],
        'Gaming': [
            'Créer un compte joueur',
            'Acheter/vendre des NFTs',
            'Comprendre le play-to-earn'
        ]
    }
    return goals[category as keyof typeof goals] || ['Utiliser la dApp efficacement']
}

