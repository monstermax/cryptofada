// data/guides_data.ts

import type { TestnetGuide } from "../types";


// Guides pour les testnets
export const TESTNET_GUIDES: TestnetGuide[] = [
    {
        blockchain: 'monad',
        title: 'Guide Monad Testnet - Préparez l\'airdrop',
        description: 'Participez au testnet Monad pour potentiellement recevoir un airdrop lors du mainnet.',
        difficulty: 'Moyen',
        estimatedTime: '2-3 heures',
        airdropPotential: 'Élevé',
        requirements: [
            'Wallet MetaMask',
            'Quelques ETH pour les frais de bridge',
            'Compte Twitter/Discord'
        ],
        steps: [
            {
                title: 'Configurer le réseau Monad',
                description: 'Ajoutez le réseau Monad Testnet à votre wallet MetaMask',
                links: ['https://testnet.monad.xyz/setup']
            },
            {
                title: 'Obtenir des tokens de test',
                description: 'Utilisez le faucet pour obtenir des MON de test',
                links: ['https://faucet.monad.xyz']
            },
            {
                title: 'Tester les dApps',
                description: 'Interagissez avec les dApps disponibles sur le testnet',
                links: ['https://testnet.monad.xyz/dapps']
            },
            {
                title: 'Participer à la communauté',
                description: 'Rejoignez Discord et partagez vos retours',
                links: ['https://discord.gg/monad']
            }
        ],
        rewards: [
            'Potentiel airdrop de tokens MON',
            'Early adopter NFT',
            'Accès prioritaire au mainnet'
        ]
    },
    {
        blockchain: 'megaeth',
        title: 'Guide MegaETH Testnet - Ultra haute performance',
        description: 'Testez la blockchain la plus rapide et préparez-vous pour l\'airdrop.',
        difficulty: 'Facile',
        estimatedTime: '1-2 heures',
        airdropPotential: 'Moyen',
        requirements: [
            'Wallet compatible EVM',
            'Quelques ETH pour les frais'
        ],
        steps: [
            {
                title: 'Setup wallet',
                description: 'Configurez MegaETH Testnet dans votre wallet'
            },
            {
                title: 'Faucet tokens',
                description: 'Récupérez des tokens de test gratuits'
            },
            {
                title: 'Test transactions',
                description: 'Effectuez des transactions pour tester la vitesse'
            }
        ],
        rewards: [
            'Possible airdrop de tokens',
            'Testnet contributor badge'
        ]
    }
];

