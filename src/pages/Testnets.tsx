// pages/Testnets.tsx

import { useState, useEffect, type FC } from 'react';
import { Link } from 'react-router-dom';

import { blockchainHasAirdrop } from '../api/apis';
import { useBlockchainsAirdrops } from '../hooks/useBlockchainAirdrop';
import { useBlockchains } from '../hooks/useBlockchain';

import type { Blockchain, BlockchainAirdrop, BlockchainMetrics } from '../types/blockchains_types';



export default function Testnets() {
    const { blockchains, loading: blockchainsLoading } = useBlockchains();
    const { blockchainsAirdrops, loading } = useBlockchainsAirdrops();

    const blockchainsHavingTestnets = blockchains.filter(b => b.networks.some(network => !network.isMainnet));

    if (blockchainsLoading || loading) {
        return (
            <div className="page">
                <div className="loading-section">
                    <h2>Chargement des testnets...</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="page">
            <div className="page-header">
                <h1>🧪 Testnets</h1>
                <p>Testez les nouvelles blockchains et préparez-vous aux potentiels airdrops</p>
            </div>

            {/* Section Warning */}
            <div className="warning-section">
                <div className="warning-card">
                    <div className="warning-icon">⚠️</div>
                    <div className="warning-content">
                        <h3>Attention - Réseaux de test</h3>
                        <p>
                            Ces blockchains sont en phase de test. Les tokens n'ont aucune valeur réelle.
                            Participez uniquement dans le but de tester et potentiellement recevoir des airdrops futurs.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section Liste des Testnets */}
            <TestnetsList
                blockchainsHavingTestnets={blockchainsHavingTestnets}
                blockchainsAirdrops={blockchainsAirdrops}
                />

            {/* Section Guides d'Airdrop */}
            <AirdropGuides
                testnets={blockchainsHavingTestnets}
                blockchainsAirdrops={blockchainsAirdrops}
                />

            {/* Section Conseils */}
            <Tips />

        </div>
    )
}


type TestnetsListProps = {
    blockchainsHavingTestnets: Blockchain[],
    blockchainsAirdrops: BlockchainAirdrop[],
};


const TestnetsList: FC<TestnetsListProps> = ({ blockchainsHavingTestnets, blockchainsAirdrops }) => {
    return (
        <>
            {/* Section Liste des Testnets */}
            <section className="testnets-section">
                <div className="section-header">
                    <h2>🔗 Testnets Disponibles</h2>
                    <p>Liste complète des blockchains en phase de test</p>
                </div>

                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Blockchain</th>
                                <th>Catégorie</th>
                                <th>Performance</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blockchainsHavingTestnets.map((blockchain) => {
                                const hasGuide = blockchainsAirdrops.some(g => g.blockchain === blockchain.slug);
                                const blockchainMetrics: BlockchainMetrics | null = null as BlockchainMetrics | null;
                                const hasAirdrop = blockchainHasAirdrop(blockchain.slug);

                                return (
                                    <tr key={blockchain.slug}>
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
                                        <td>
                                            <div className="performance-info">
                                                <div className="perf-item">
                                                    <span className="perf-label">TPS:</span>
                                                    <span className="perf-value">
                                                        {blockchainMetrics && <>
                                                            {blockchainMetrics.blockTime === '0.1s' ? '10k+' :
                                                                blockchainMetrics.blockTime === '0.05s' ? '100k+' : '1k+'}
                                                        </>}
                                                        {!blockchainMetrics && <>-</>}
                                                    </span>
                                                </div>
                                                <div className="perf-item">
                                                    <span className="perf-label">Block:</span>
                                                    <span className="perf-value">{blockchainMetrics ? blockchainMetrics.blockTime : '-'}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="action-buttons">
                                                <Link
                                                    to={`/blockchain/${blockchain.slug}`}
                                                    className="action-btn primary"
                                                >
                                                    Explorer
                                                </Link>

                                                {hasGuide && (
                                                    <Link
                                                        to={`/blockchain/${blockchain.slug}/tutos`}
                                                        className="action-btn secondary guide-btn"
                                                    >
                                                        Guide
                                                    </Link>
                                                )}

                                                {hasAirdrop && (
                                                    <Link
                                                        to={`/blockchain/${blockchain.slug}/airdrop`}
                                                        className="action-btn secondary guide-btn"
                                                    >
                                                        Airdrop
                                                    </Link>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}


type AirdropGuidesProps = {
    testnets: Blockchain[],
    blockchainsAirdrops: BlockchainAirdrop[],
};

const AirdropGuides: FC<AirdropGuidesProps> = ({ testnets, blockchainsAirdrops }) => {

    return (
        <>
            {/* Section Guides d'Airdrop */}
            <section className="guides-section">
                <div className="section-header">
                    <h2>🎯 Guides d'Airdrop</h2>
                    <p>Parcours conseillés pour maximiser vos chances de recevoir des airdrops</p>
                </div>

                <div className="guides-grid">
                    {blockchainsAirdrops.map((guide) => {
                        const blockchain = testnets.find(t => t.slug === guide.blockchain)
                        return (
                            <div key={guide.blockchain} className="guide-card">
                                <div className="guide-header">
                                    {blockchain && (
                                        <div className="blockchain-info">
                                            <div
                                                className="blockchain-dot-large"
                                                style={{ backgroundColor: blockchain.color }}
                                            ></div>
                                            <div>
                                                <h3>{blockchain.name}</h3>
                                                <span className="blockchain-subtitle">{guide.title}</span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="guide-badges">
                                        <span className={`difficulty-badge ${guide.difficulty.toLowerCase()}`}>
                                            {guide.difficulty}
                                        </span>
                                        <span className={`airdrop-badge ${guide.airdropPotential.toLowerCase()}`}>
                                            {guide.airdropPotential} potentiel
                                        </span>
                                    </div>
                                </div>

                                <p className="guide-description">{guide.description}</p>

                                <div className="guide-meta">
                                    <div className="meta-item">
                                        <span className="meta-label">⏱️ Temps estimé:</span>
                                        <span className="meta-value">{guide.estimatedTime}</span>
                                    </div>
                                </div>

                                <div className="guide-requirements">
                                    <h4>Prérequis:</h4>
                                    <ul>
                                        {guide.requirements.map((req, index) => (
                                            <li key={index}>{req}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="guide-steps">
                                    <h4>Étapes principales:</h4>
                                    <div className="steps-list">
                                        {guide.steps.slice(0, 3).map((step, index) => (
                                            <div key={index} className="step-item">
                                                <span className="step-number">{index + 1}</span>
                                                <div className="step-content">
                                                    <span className="step-title">{step.title}</span>
                                                    <span className="step-desc">{step.description}</span>
                                                </div>
                                            </div>
                                        ))}
                                        {guide.steps.length > 3 && (
                                            <div className="step-item more">
                                                <span className="step-number">+</span>
                                                <span className="step-title">
                                                    {guide.steps.length - 3} étapes supplémentaires
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="guide-rewards">
                                    <h4>Récompenses potentielles:</h4>
                                    <div className="rewards-list">
                                        {guide.rewards.map((reward, index) => (
                                            <span key={index} className="reward-tag">
                                                {reward}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="guide-actions">
                                    {blockchain && (
                                        <>
                                            <Link
                                                to={`/blockchain/${blockchain.slug}`}
                                                className="action-btn primary"
                                            >
                                                Explorer
                                            </Link>

                                            {blockchainHasAirdrop(blockchain.slug) && <>
                                                <Link
                                                    to={`/blockchain/${blockchain.slug}/airdrops`}
                                                    className="action-btn secondary">
                                                    Guide Airdrop
                                                </Link>
                                            </>}
                                        </>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    );
}


function Tips() {
    return (
        <>
            {/* Section Conseils */}
            <section className="tips-section">
                <div className="section-header">
                    <h2>💡 Conseils pour les Airdrops</h2>
                    <p>Bonnes pratiques pour maximiser vos chances</p>
                </div>

                <div className="tips-grid">
                    <div className="tip-card">
                        <div className="tip-icon">🎯</div>
                        <h3>Soyez actif</h3>
                        <p>Effectuez des transactions régulières, ne vous contentez pas d'une seule interaction.</p>
                    </div>

                    <div className="tip-card">
                        <div className="tip-icon">📱</div>
                        <h3>Participez à la communauté</h3>
                        <p>Rejoignez Discord, suivez sur Twitter, donnez des retours constructifs.</p>
                    </div>

                    <div className="tip-card">
                        <div className="tip-icon">🔐</div>
                        <h3>Sécurité avant tout</h3>
                        <p>N'investissez jamais d'argent réel sur les testnets. Utilisez des wallets séparés.</p>
                    </div>

                    <div className="tip-card">
                        <div className="tip-icon">⏰</div>
                        <h3>Agissez tôt</h3>
                        <p>Plus vous participez tôt au testnet, plus vous avez de chances d'être récompensé.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

