// pages/dapps//Dapps.tsx

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { dappHasAirdrop, getDapps } from '../../api/apis'
import { BlockchainSlug } from '../../data/blockchains_data'
import { useDapps, useDappsCategories } from '../../hooks/useDapp'
import { useBlockchains } from '../../hooks/useBlockchain'

import type { DappCategorySlug } from '../../data/dapps_categories_data'



export default function Dapps() {
    const { blockchains } = useBlockchains();
    const { dapps, setDapps, loading } = useDapps();
    const { dappsCategories } = useDappsCategories();

    const [selectedCategory, setSelectedCategory] = useState<DappCategorySlug | null>(null)
    const [selectedDifficulty, setSelectedDifficulty] = useState('Tous')
    const [selectedBlockchain, setSelectedBlockchain] = useState<BlockchainSlug | null>(null)

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

    const filterCategories: DappCategorySlug[] = dappsCategories.map(cat => cat.slug);
    const filterDifficulties: string[] = ['Débutant', 'Intermédiaire', 'Avancé']
    const filterBlockchains: BlockchainSlug[] = blockchains.map(chain => chain.slug);


    const getBlockchainNameBySlug = (slug: BlockchainSlug) => {
        const blockchain = blockchains.find(blockchain => blockchain.slug == slug);
        return blockchain?.name || slug;
    }


    // Filtrage
    const filteredDapps = dappsWithTutorials.filter(dapp => {
        const categoryMatch = selectedCategory === null || dapp.category === selectedCategory;

        const difficultyMatch = selectedDifficulty === 'Tous' || dapp.tutorial.difficulty === selectedDifficulty;

        const blockchainMatch = selectedBlockchain === null ||
            dapp.blockchains.some(chainSlug => chainSlug === selectedBlockchain)

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
                        value={selectedCategory as DappCategorySlug}
                        onChange={(e) => setSelectedCategory(e.target.value as DappCategorySlug)}
                    >
                        <option value="">Toutes</option>

                        {filterCategories.map(cat => (
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
                        <option value="">Toutes</option>

                        {filterDifficulties.map(diff => (
                            <option key={diff} value={diff}>{diff}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-group">
                    <label>Blockchain:</label>
                    <select
                        className="filter-select"
                        value={selectedBlockchain as BlockchainSlug}
                        onChange={(e) => setSelectedBlockchain(e.target.value as BlockchainSlug)}
                    >
                        <option value="">Toutes</option>

                        {filterBlockchains.map(chainSlug => (
                            <option key={chainSlug} value={chainSlug}>{getBlockchainNameBySlug(chainSlug)}</option>
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
                        </div>

                        {/* Contenu */}
                        <div className="tutorial-content">
                            <div className="tutorial-header">
                                <h3>{dapp.name}</h3>
                                <div className="tutorial-badges">
                                    <span className={`category-badge ${dapp.category.toLowerCase()}`}>
                                        {dapp.category}
                                    </span>
                                    {dappHasAirdrop(dapp.slug) && <>
                                        TODO: lien vers page airdrop de la dapp
                                    </>}
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
                            <Link
                                to={`/dapps/${dapp.slug}`}
                                className="action-btn secondary"
                            >
                                ℹ️ Plus d'infos
                            </Link>

                            <Link
                                to={`/dapps/${dapp.slug}/tutos`}
                                className="action-btn secondary"
                            >
                                📺 Voir le tutoriel
                            </Link>

                            {dappHasAirdrop(dapp.slug) && <>
                                <Link
                                    to={`/dapps/${dapp.slug}/airdrops`}
                                    className="action-btn secondary">
                                    Guide Airdrop
                                </Link>
                            </>}
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
function getDurationByCategory(category: DappCategorySlug): string {
    const durations: Partial<Record<DappCategorySlug, string>> = {
        'dex': '4 min',
        'lending': '6 min',
        'staking': '5 min',
        'gaming': '8 min',
        'nft': '3 min',
        'bridge': '4 min',
        'yield': '7 min'
    };

    return durations[category as keyof typeof durations] || '5 min'
}


function getDifficultyByCategory(category: DappCategorySlug): string {
    const difficulties: Partial<Record<DappCategorySlug, string>> = {
        'dex': 'Débutant',
        'lending': 'Intermédiaire',
        'staking': 'Intermédiaire',
        'gaming': 'Avancé',
        'nft': 'Débutant',
        'bridge': 'Intermédiaire',
        'yield': 'Avancé'
    };

    return difficulties[category as keyof typeof difficulties] || 'Débutant';
}


function getPrerequisitesByBlockchain(blockchains: BlockchainSlug[]): string[] {
    const prerequisites = ['Wallet MetaMask installé']

    if (blockchains.includes(BlockchainSlug.SOLANA)) {
        prerequisites.push('Wallet Phantom (pour Solana)')
    }
    if (blockchains.includes(BlockchainSlug.ETHEREUM)) {
        prerequisites.push('Quelques ETH pour les frais')
    }

    return prerequisites;
}


function getLearningGoalsByCategory(category: DappCategorySlug): string[] {
    const goals: Partial<Record<DappCategorySlug, string[]>> = {
        'dex': [
            'Comment connecter votre wallet',
            'Échanger des tokens en toute sécurité',
            'Comprendre le slippage et les frais'
        ],
        'lending': [
            'Déposer des crypto-monnaies',
            'Emprunter avec des garanties',
            'Comprendre les taux d\'intérêt'
        ],
        'staking': [
            'Staker vos tokens',
            'Calculer les récompenses',
            'Gérer les risques'
        ],
        'gaming': [
            'Créer un compte joueur',
            'Acheter/vendre des NFTs',
            'Comprendre le play-to-earn'
        ],
    };

    return goals[category as keyof typeof goals] || ['Utiliser la dApp efficacement'];
}


