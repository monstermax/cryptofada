// data/blockchains_developper_resources_data.ts

import { BlockchainSlug } from "./blockchains_data";

import type { BlockchainDevelopperResource } from "../types/blockchains_types";



// Données mock des ressources développeurs par blockchain
export const BLOCKCHAINS_DEVELOPER_RESOURCES: BlockchainDevelopperResource[] = [
    {
        blockchain: BlockchainSlug.ETHEREUM,
        slug: 'ethereum',
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
        testnet: [
            {
                name: 'Sepolia',
                faucet: 'https://sepoliafaucet.com',
                explorer: 'https://sepolia.etherscan.io',
                rpc: 'https://sepolia.infura.io/v3/YOUR-PROJECT-ID',
            }
        ],
    },
    {
        blockchain: BlockchainSlug.SOLANA,
        slug: 'solana',
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
        testnet: [
            {
                name: 'Devnet',
                faucet: 'https://solfaucet.com',
                explorer: 'https://explorer.solana.com/?cluster=devnet',
                rpc: 'https://api.devnet.solana.com',
            }
        ],
    },
];
