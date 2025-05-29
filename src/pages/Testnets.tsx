// pages/Testnets.tsx

const testnets = [
    {
        name: 'Monad Testnet',
        symbol: 'MON',
        slug: 'monad',
        color: '#627EEA',
        description: 'La blockchain EVM L1 aux 10k TPS',
        tvl: '$0',
        status: 'active'
    },
    {
        name: 'MegaETH',
        symbol: 'ETH',
        slug: 'megaeth',
        color: '#627EEA',
        description: 'La blockchain EVM L2 aux 100k TPS',
        tvl: '$0',
        status: 'active'
    },
];


export default function Testnets() {
    return (
        <div className="page">
            <div className="page-header">
                <h1>Testnets & Autres Blockchains</h1>
                <p>Explorez les réseaux de test et les blockchains émergentes</p>
            </div>

            <div className="coming-soon">
                <h2>🚀 Bientôt disponible</h2>
                <p>Cette section présentera les testnets et blockchains alternatives</p>
            </div>
        </div>
    )
}

