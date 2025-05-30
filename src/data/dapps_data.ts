// data/dapps_data.ts

import { BlockchainSlug } from "./blockchains_data";
import { DappCategorySlug } from "./dapps_categories_data";

import type { Dapp } from "../types/dapps_types";


// Liste unique des dApps

export enum DappSlug {
    // Ethereum
    AAVE = 'aave',
    UNISWAP = 'uniswap',
    COMPOUND = 'compound',
    MAKERDAO = 'makerdao',
    LIDO = 'lido',
    CURVE = 'curve',
    CONVEX = 'convex',
    OPENSEA = 'opensea',
    BALANCER = 'balancer',

    // Solana
    RAYDIUM = 'raydium',
    JUPITER = 'jupiter',
    MARINADE = 'marinade',
    ORCA = 'orca',
    MAGIC_EDEN = 'magic-eden',
    DRIFT = 'drift',

    // Polygon
    QUICKSWAP = 'quickswap',
    POLYGON_BRIDGE = 'polygon-bridge',
    GAINS_NETWORK = 'gains-network',

    // Arbitrum
    GMX = 'gmx',
    CAMELOT = 'camelot',
    GAINS_TRADE = 'gains-trade',
    ARBITRUM_BRIDGE = 'arbitrum-bridge',

    // Optimism
    SYNTHETIX = 'synthetix',
    VELODROME = 'velodrome',
    OPTIMISM_BRIDGE = 'optimism-bridge',

    // Base
    AERODROME = 'aerodrome',
    FRIEND_TECH = 'friend-tech',
    BASE_BRIDGE = 'base-bridge',

    // BSC
    PANCAKESWAP = 'pancakeswap',
    VENUS = 'venus',
    ALPACA_FINANCE = 'alpaca-finance',
    BISWAP = 'biswap',

    // Avalanche
    TRADER_JOE = 'trader-joe',
    BENQI = 'benqi',
    PLATYPUS = 'platypus',

    // Fantom
    SPOOKYSWAP = 'spookyswap',
    TOMB_FINANCE = 'tomb-finance',
    GEIST = 'geist',

    // Sui
    CETUS = 'cetus',
    SUI_BRIDGE = 'sui-bridge',
    KRIYA = 'kriya',

    // TON
    TONSWAP = 'tonswap',
    TONSTAKERS = 'tonstakers',

    // TRON
    JUSTSWAP = 'justswap',
    JUST_LEND = 'just-lend',
    SUN_IO = 'sun-io',
};



export const ALL_DAPPS: Dapp[] = [
    // === ETHEREUM ===
    {
        name: 'Uniswap',
        slug: DappSlug.UNISWAP,
        category: DappCategorySlug.DEX,
        description: 'Protocol d\'échange décentralisé leader',
        longDescription: 'Uniswap utilise un modèle de teneur de marché automatisé (AMM) qui permet aux utilisateurs de trader contre un pool de liquidité.',
        blockchains: [
            BlockchainSlug.ETHEREUM,
            BlockchainSlug.POLYGON,
            BlockchainSlug.ARBITRUM,
            BlockchainSlug.BASE,
        ],
        links: {
            website: 'https://app.uniswap.org',
            docs: 'https://docs.uniswap.org',
            github: 'https://github.com/Uniswap',
            twitter: 'https://twitter.com/Uniswap',
            discord: 'https://discord.gg/FCfyBSbCU5'
        },
        founded: '2018',
        team: 'Uniswap Labs',
        token: 'UNI',
    },
    {
        name: 'Aave',
        slug: DappSlug.AAVE,
        category: DappCategorySlug.LENDING,
        description: 'Protocole de prêt et d\'emprunt DeFi',
        longDescription: 'Aave permet aux utilisateurs de déposer des crypto-monnaies pour gagner des intérêts ou d\'emprunter des actifs.',
        blockchains: [
            BlockchainSlug.ETHEREUM,
            BlockchainSlug.POLYGON,
            BlockchainSlug.ARBITRUM,
        ],
        links: {
            website: 'https://app.aave.com',
            docs: 'https://docs.aave.com',
            github: 'https://github.com/aave',
            twitter: 'https://twitter.com/AaveAave',
            discord: 'https://discord.gg/CvKUrqM'
        },
        founded: '2017',
        team: 'Aave Companies',
        token: 'AAVE',
    },
    {
        name: 'Lido',
        slug: DappSlug.LIDO,
        category: DappCategorySlug.STAKING,
        description: 'Solution de staking liquide',
        blockchains: [
            BlockchainSlug.ETHEREUM,
            BlockchainSlug.SOLANA,
            BlockchainSlug.POLYGON,
        ],
        links: {
            website: 'https://lido.fi',
            docs: 'https://docs.lido.fi',
            github: 'https://github.com/LidoFinance',
            twitter: 'https://twitter.com/LidoFinance'
        },
        founded: '2020',
        team: 'Lido DAO',
        token: 'LDO',
    },
    {
        name: 'Compound',
        slug: DappSlug.COMPOUND,
        category: DappCategorySlug.LENDING,
        description: 'Protocole de finance algorithmique',
        blockchains: [
            BlockchainSlug.ETHEREUM,
            BlockchainSlug.POLYGON,
            BlockchainSlug.BASE,
        ],
        links: {
            website: 'https://compound.finance',
            docs: 'https://docs.compound.finance',
            github: 'https://github.com/compound-finance',
            twitter: 'https://twitter.com/compound'
        },
        founded: '2018',
        team: 'Compound Labs',
        token: 'COMP',
    },
    {
        name: 'MakerDAO',
        slug: DappSlug.MAKERDAO,
        category: DappCategorySlug.LENDING,
        description: 'Protocole de création de stablecoin DAI',
        longDescription: 'MakerDAO permet de créer le stablecoin DAI en déposant des garanties crypto et de participer à la gouvernance.',
        blockchains: [BlockchainSlug.ETHEREUM],
        links: {
            website: 'https://makerdao.com',
            docs: 'https://docs.makerdao.com',
            github: 'https://github.com/makerdao',
            twitter: 'https://twitter.com/MakerDAO'
        },
        founded: '2014',
        team: 'MakerDAO Foundation',
        token: 'MKR',
    },
    {
        name: 'Curve',
        slug: DappSlug.CURVE,
        category: DappCategorySlug.DEX,
        description: 'DEX spécialisé dans les stablecoins',
        longDescription: 'Curve est optimisé pour les échanges de stablecoins avec des frais réduits et moins de slippage.',
        blockchains: [BlockchainSlug.ETHEREUM, BlockchainSlug.POLYGON, BlockchainSlug.ARBITRUM],
        links: {
            website: 'https://curve.fi',
            docs: 'https://curve.readthedocs.io',
            github: 'https://github.com/curvefi',
            twitter: 'https://twitter.com/CurveFinance'
        },
        founded: '2020',
        team: 'Curve Finance',
        token: 'CRV',
    },
    {
        name: 'OpenSea',
        slug: DappSlug.OPENSEA,
        category: DappCategorySlug.NFT,
        description: 'Marketplace NFT leader mondial',
        longDescription: 'OpenSea est la plus grande plateforme d\'achat et vente de NFTs avec des millions d\'objets numériques.',
        blockchains: [BlockchainSlug.ETHEREUM, BlockchainSlug.POLYGON, BlockchainSlug.ARBITRUM],
        links: {
            website: 'https://opensea.io',
            docs: 'https://docs.opensea.io',
            github: 'https://github.com/opensea',
            twitter: 'https://twitter.com/opensea'
        },
        founded: '2017',
        team: 'OpenSea',
    },
    {
        name: 'Convex Finance',
        slug: DappSlug.CONVEX,
        category: DappCategorySlug.YIELD,
        description: 'Optimiseur de rendement pour Curve',
        longDescription: 'Convex permet aux utilisateurs de Curve d\'optimiser leurs récompenses sans avoir à voter ou gérer leurs positions.',
        blockchains: [BlockchainSlug.ETHEREUM],
        links: {
            website: 'https://convexfinance.com',
            docs: 'https://docs.convexfinance.com',
            github: 'https://github.com/convex-eth',
            twitter: 'https://twitter.com/ConvexFinance'
        },
        founded: '2021',
        team: 'Convex Finance',
        token: 'CVX',
    },

    // === SOLANA ===
    {
        name: 'Raydium',
        slug: DappSlug.RAYDIUM,
        category: DappCategorySlug.DEX,
        description: 'AMM et plateforme de liquidité sur Solana',
        blockchains: [
            BlockchainSlug.SOLANA,
        ],
        links: {
            website: 'https://raydium.io',
            docs: 'https://docs.raydium.io',
            github: 'https://github.com/raydium-io',
            twitter: 'https://twitter.com/RaydiumProtocol'
        },
        founded: '2021',
        team: 'Raydium Team',
        token: 'RAY',
    },
    {
        name: 'Jupiter',
        slug: DappSlug.JUPITER,
        category: DappCategorySlug.DEX,
        description: 'Agrégateur DEX leader sur Solana',
        longDescription: 'Jupiter trouve automatiquement les meilleurs prix en agrégeant la liquidité de tous les DEX Solana.',
        blockchains: [BlockchainSlug.SOLANA],
        links: {
            website: 'https://jup.ag',
            docs: 'https://docs.jup.ag',
            github: 'https://github.com/jup-ag',
            twitter: 'https://twitter.com/JupiterExchange'
        },
        founded: '2021',
        team: 'Jupiter Team',
        token: 'JUP',
    },
    {
        name: 'Marinade',
        slug: DappSlug.MARINADE,
        category: DappCategorySlug.STAKING,
        description: 'Staking liquide décentralisé de SOL',
        longDescription: 'Marinade permet de staker SOL tout en gardant la liquidité grâce au token mSOL.',
        blockchains: [BlockchainSlug.SOLANA],
        links: {
            website: 'https://marinade.finance',
            docs: 'https://docs.marinade.finance',
            github: 'https://github.com/marinade-finance',
            twitter: 'https://twitter.com/MarinadeFinance'
        },
        founded: '2021',
        team: 'Marinade Finance',
        token: 'MNDE',
    },
    {
        name: 'Orca',
        slug: DappSlug.ORCA,
        category: DappCategorySlug.DEX,
        description: 'DEX user-friendly sur Solana',
        longDescription: 'Orca propose une expérience d\'échange simple et intuitive avec des pools concentrés innovants.',
        blockchains: [BlockchainSlug.SOLANA],
        links: {
            website: 'https://orca.so',
            docs: 'https://docs.orca.so',
            github: 'https://github.com/orca-so',
            twitter: 'https://twitter.com/orca_so'
        },
        founded: '2021',
        team: 'Orca Team',
        token: 'ORCA',
    },
    {
        name: 'Magic Eden',
        slug: DappSlug.MAGIC_EDEN,
        category: DappCategorySlug.NFT,
        description: 'Marketplace NFT principal de Solana',
        longDescription: 'Magic Eden est la plateforme de référence pour acheter, vendre et créer des NFTs sur Solana.',
        blockchains: [BlockchainSlug.SOLANA, BlockchainSlug.ETHEREUM],
        links: {
            website: 'https://magiceden.io',
            docs: 'https://docs.magiceden.io',
            twitter: 'https://twitter.com/MagicEden'
        },
        founded: '2021',
        team: 'Magic Eden',
    },

    // === ARBITRUM ===
    {
        name: 'GMX',
        slug: DappSlug.GMX,
        category: DappCategorySlug.OTHER,
        description: 'Exchange de perpétuels décentralisé',
        longDescription: 'GMX permet de trader des perpétuels avec un effet de levier jusqu\'à 50x de manière décentralisée.',
        blockchains: [BlockchainSlug.ARBITRUM, BlockchainSlug.AVALANCHE],
        links: {
            website: 'https://gmx.io',
            docs: 'https://docs.gmx.io',
            github: 'https://github.com/gmx-io',
            twitter: 'https://twitter.com/GMX_IO'
        },
        founded: '2021',
        team: 'GMX Team',
        token: 'GMX',
    },
    {
        name: 'Camelot',
        slug: DappSlug.CAMELOT,
        category: DappCategorySlug.DEX,
        description: 'DEX natif optimisé pour Arbitrum',
        longDescription: 'Camelot est un DEX conçu spécifiquement pour Arbitrum avec des fonctionnalités avancées pour les projets.',
        blockchains: [BlockchainSlug.ARBITRUM],
        links: {
            website: 'https://camelot.exchange',
            docs: 'https://docs.camelot.exchange',
            twitter: 'https://twitter.com/CamelotDEX'
        },
        founded: '2022',
        team: 'Camelot Team',
        token: 'GRAIL',
    },

    // === BASE ===
    {
        name: 'Aerodrome',
        slug: DappSlug.AERODROME,
        category: DappCategorySlug.DEX,
        description: 'DEX principal sur Base',
        longDescription: 'Aerodrome est le DEX de référence sur Base, optimisé pour la liquidité et les récompenses.',
        blockchains: [BlockchainSlug.BASE],
        links: {
            website: 'https://aerodrome.finance',
            docs: 'https://docs.aerodrome.finance',
            twitter: 'https://twitter.com/AerodromeFi'
        },
        founded: '2023',
        team: 'Aerodrome Team',
        token: 'AERO',
    },
    {
        name: 'Friend.tech',
        slug: DappSlug.FRIEND_TECH,
        category: DappCategorySlug.OTHER,
        description: 'Réseau social avec tokenisation des créateurs',
        longDescription: 'Friend.tech permet d\'acheter et vendre des "parts" de créateurs pour accéder à leurs contenus exclusifs.',
        blockchains: [BlockchainSlug.BASE],
        links: {
            website: 'https://friend.tech',
            twitter: 'https://twitter.com/friendtech'
        },
        founded: '2023',
        team: 'Friend.tech',
    },

    // === BSC ===
    {
        name: 'PancakeSwap',
        slug: DappSlug.PANCAKESWAP,
        category: DappCategorySlug.DEX,
        description: 'DEX populaire multi-chaînes',
        blockchains: [
            BlockchainSlug.ETHEREUM,
            BlockchainSlug.BSC,
            BlockchainSlug.ARBITRUM,
        ],
        links: {
            website: 'https://pancakeswap.finance',
            docs: 'https://docs.pancakeswap.finance',
            github: 'https://github.com/pancakeswap',
            twitter: 'https://twitter.com/PancakeSwap'
        },
        founded: '2020',
        team: 'PancakeSwap Team',
        token: 'CAKE',
    },
    {
        name: 'Venus',
        slug: DappSlug.VENUS,
        category: DappCategorySlug.LENDING,
        description: 'Protocole de lending leader sur BSC',
        longDescription: 'Venus permet de prêter, emprunter et minter le stablecoin VAI sur BNB Smart Chain.',
        blockchains: [BlockchainSlug.BSC],
        links: {
            website: 'https://venus.io',
            docs: 'https://docs.venus.io',
            github: 'https://github.com/VenusProtocol',
            twitter: 'https://twitter.com/VenusProtocol'
        },
        founded: '2020',
        team: 'Venus Protocol',
        token: 'XVS',
    },
    {
        name: 'Biswap',
        slug: DappSlug.BISWAP,
        category: DappCategorySlug.DEX,
        description: 'DEX avec les frais les plus bas sur BSC',
        longDescription: 'Biswap propose des échanges avec seulement 0.1% de frais et des fonctionnalités de farming attractives.',
        blockchains: [BlockchainSlug.BSC],
        links: {
            website: 'https://biswap.org',
            docs: 'https://docs.biswap.org',
            github: 'https://github.com/biswap-org',
            twitter: 'https://twitter.com/Biswap_DEX'
        },
        founded: '2021',
        team: 'Biswap Team',
        token: 'BSW',
    },

    // === AVALANCHE ===
    {
        name: 'Trader Joe',
        slug: DappSlug.TRADER_JOE,
        category: DappCategorySlug.DEX,
        description: 'DEX et DeFi hub principal d\'Avalanche',
        longDescription: 'Trader Joe offre trading, lending, et des fonctionnalités DeFi avancées nativement sur Avalanche.',
        blockchains: [BlockchainSlug.AVALANCHE, BlockchainSlug.ARBITRUM],
        links: {
            website: 'https://traderjoexyz.com',
            docs: 'https://docs.traderjoexyz.com',
            github: 'https://github.com/traderjoe-xyz',
            twitter: 'https://twitter.com/traderjoe_xyz'
        },
        founded: '2021',
        team: 'Trader Joe Team',
        token: 'JOE',
    },
    {
        name: 'Benqi',
        slug: DappSlug.BENQI,
        category: DappCategorySlug.LENDING,
        description: 'Protocole de lending et staking liquide',
        longDescription: 'Benqi propose du lending/borrowing et du staking liquide d\'AVAX sur l\'écosystème Avalanche.',
        blockchains: [BlockchainSlug.AVALANCHE],
        links: {
            website: 'https://benqi.fi',
            docs: 'https://docs.benqi.fi',
            github: 'https://github.com/Benqi-fi',
            twitter: 'https://twitter.com/BenqiFinance'
        },
        founded: '2021',
        team: 'Benqi Team',
        token: 'QI',
    },

    // === FANTOM ===
    {
        name: 'SpookySwap',
        slug: DappSlug.SPOOKYSWAP,
        category: DappCategorySlug.DEX,
        description: 'DEX principal sur Fantom',
        longDescription: 'SpookySwap est le DEX de référence sur Fantom avec des fonctionnalités de farming et bridge.',
        blockchains: [BlockchainSlug.FANTOM],
        links: {
            website: 'https://spooky.fi',
            docs: 'https://docs.spooky.fi',
            github: 'https://github.com/SpookySwap',
            twitter: 'https://twitter.com/SpookySwap'
        },
        founded: '2021',
        team: 'SpookySwap Team',
        token: 'BOO',
    },
    {
        name: 'Geist Finance',
        slug: DappSlug.GEIST,
        category: DappCategorySlug.LENDING,
        description: 'Protocole de lending sur Fantom',
        longDescription: 'Geist Finance est un protocole de prêt décentralisé basé sur Aave, optimisé pour Fantom.',
        blockchains: [BlockchainSlug.FANTOM],
        links: {
            website: 'https://geist.finance',
            docs: 'https://docs.geist.finance',
            github: 'https://github.com/geist-finance',
            twitter: 'https://twitter.com/GeistFinance'
        },
        founded: '2021',
        team: 'Geist Finance',
        token: 'GEIST',
    },

    // === SUI ===
    {
        name: 'Cetus',
        slug: DappSlug.CETUS,
        category: DappCategorySlug.DEX,
        description: 'DEX principal sur Sui avec liquidité concentrée',
        longDescription: 'Cetus est un DEX innovant sur Sui utilisant la liquidité concentrée pour une efficacité maximale.',
        blockchains: [BlockchainSlug.SUI],
        links: {
            website: 'https://cetus.zone',
            docs: 'https://docs.cetus.zone',
            github: 'https://github.com/CetusProtocol',
            twitter: 'https://twitter.com/CetusProtocol'
        },
        founded: '2023',
        team: 'Cetus Protocol',
        token: 'CETUS',
    },

    // === TON ===
    {
        name: 'TONSwap',
        slug: DappSlug.TONSWAP,
        category: DappCategorySlug.DEX,
        description: 'DEX principal sur TON Blockchain',
        longDescription: 'TONSwap est le premier DEX sur The Open Network, intégré à l\'écosystème Telegram.',
        blockchains: [BlockchainSlug.TON],
        links: {
            website: 'https://tonswap.org',
            twitter: 'https://twitter.com/tonswap'
        },
        founded: '2023',
        team: 'TONSwap Team',
    },

    // === TRON ===
    {
        name: 'JustSwap',
        slug: DappSlug.JUSTSWAP,
        category: DappCategorySlug.DEX,
        description: 'DEX principal sur TRON',
        longDescription: 'JustSwap est le DEX de référence sur TRON avec des frais très bas et une intégration native.',
        blockchains: [BlockchainSlug.TRON],
        links: {
            website: 'https://justswap.org',
            twitter: 'https://twitter.com/justswaporg'
        },
        founded: '2020',
        team: 'JUST Foundation',
        token: 'JST',
    },
    {
        name: 'JustLend',
        slug: DappSlug.JUST_LEND,
        category: DappCategorySlug.LENDING,
        description: 'Protocole de lending sur TRON',
        longDescription: 'JustLend permet de prêter et emprunter des cryptomonnaies sur TRON avec des taux compétitifs.',
        blockchains: [BlockchainSlug.TRON],
        links: {
            website: 'https://justlend.org',
            twitter: 'https://twitter.com/justlendorg'
        },
        founded: '2020',
        team: 'JUST Foundation',
        token: 'JST',
    },

    // === BRIDGES ===
    {
        name: 'Polygon Bridge',
        slug: DappSlug.POLYGON_BRIDGE,
        category: DappCategorySlug.BRIDGE,
        description: 'Bridge officiel Ethereum ↔ Polygon',
        longDescription: 'Le bridge officiel pour transférer des tokens entre Ethereum et Polygon en toute sécurité.',
        blockchains: [BlockchainSlug.ETHEREUM, BlockchainSlug.POLYGON],
        links: {
            website: 'https://wallet.polygon.technology/polygon/bridge',
            docs: 'https://docs.polygon.technology/tools/wallets/polygon-bridge',
        },
        founded: '2020',
        team: 'Polygon Labs',
    },
    {
        name: 'Arbitrum Bridge',
        slug: DappSlug.ARBITRUM_BRIDGE,
        category: DappCategorySlug.BRIDGE,
        description: 'Bridge officiel Ethereum ↔ Arbitrum',
        longDescription: 'Le bridge officiel pour transférer des fonds entre Ethereum et Arbitrum One.',
        blockchains: [BlockchainSlug.ETHEREUM, BlockchainSlug.ARBITRUM],
        links: {
            website: 'https://bridge.arbitrum.io',
            docs: 'https://docs.arbitrum.io/getting-started-users',
        },
        founded: '2021',
        team: 'Offchain Labs',
    },
    {
        name: 'Base Bridge',
        slug: DappSlug.BASE_BRIDGE,
        category: DappCategorySlug.BRIDGE,
        description: 'Bridge officiel Ethereum ↔ Base',
        longDescription: 'Le bridge officiel Coinbase pour transférer des fonds entre Ethereum et Base.',
        blockchains: [BlockchainSlug.ETHEREUM, BlockchainSlug.BASE],
        links: {
            website: 'https://bridge.base.org',
            docs: 'https://docs.base.org/tools/bridges',
        },
        founded: '2023',
        team: 'Coinbase',
    },
];
