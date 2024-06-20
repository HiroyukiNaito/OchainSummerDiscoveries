

const rawRegistryData = [
    {
        "name": "Coinbase",
        "url": "https://www.coinbase.com",
        "description": "Coinbase is a secure online platform for buying, selling, transferring, and storing cryptocurrency.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/wallet-retail.webp"
    },
    {
        "name": "Connext",
        "tags": [
            "bridge"
        ],
        "description": "Connext is an intent-based modular interoperability protocol for securely passing funds and data between chains with the best possible speed, pricing, and security.",
        "url": "https://bridge.connext.network/",
        "imageUrl": "/images/partners/connext.webp"
    },
    {
        "name": "Infusion",
        "tags": [
            "defi"
        ],
        "description": "Infusion is an AMM protocol that facilitates deep and stabilized liquidity. It's time-lock component that allows for liquidity to be utilized as an onchain primitive for DApps.",
        "url": "https://infusion.finance",
        "imageUrl": "/images/partners/infusion.png"
    },
    {
        "name": "Defi Launch",
        "tags": [
            "defi"
        ],
        "description": "Decentralized hub for easy onboarding and bridging powered by LayerZero",
        "url": "https://defilaunch.app/",
        "imageUrl": "/images/partners/defilaunch.png"
    },
    {
        "name": "Chad Finance",
        "tags": [
            "defi"
        ],
        "description": "Chad Finance allows for the minting of stable coins against yield bearing LP positions of concentrated liquidity based Dexes like Uniswap. ",
        "url": "https://chadfinance.xyz/",
        "imageUrl": "/images/partners/chadfinance.png"
    },
    {
        "name": "The Open X Project",
        "tags": [
            "defi"
        ],
        "description": "Auto-compounding Vaults. 1% fee NFT Marketplace. Next-gen Aggregator. DeFi applications accessible and open to everyone.",
        "url": "https://app.openxswap.exchange/",
        "imageUrl": "/images/partners/openx.png"
    },
    {
        "name": "Earn Finance",
        "tags": [
            "defi"
        ],
        "description": "Earn Finance is the first token within the #Hold2Earn sector of crypto that is exclusively on the Base Network. Holding $EarnFi gives you automatic & passive Ethereum rewards sent directly to your wallet!",
        "url": "https://earnfinance.org/",
        "imageUrl": "/images/partners/earnfinance.png"
    },
    {
        "name": "MoonPay",
        "tags": [
            "onramp"
        ],
        "description": "MoonPay is the world’s leading Web3 infrastructure company, empowering brands and consumers to unlock next-gen transactions..",
        "url": "https://www.moonpay.com/business/onramps",
        "imageUrl": "/images/partners/moonpay.png"
    },
    {
        "name": "Vrbs DAO",
        "tags": [
            "dao"
        ],
        "description": "Vrbs is a global, community-run organization that uses money raised by the community to fund open-source technology, art and public-works projects. ",
        "url": "https://vrbs.build",
        "imageUrl": "/images/partners/vrbsdao.png"
    },
    {
        "name": "TransFi",
        "tags": [
            "onramp"
        ],
        "description": "Buy or sell crypto with 100+ local payment methods in 40+ countries around the world.",
        "url": "https://buy.transfi.com/",
        "imageUrl": "/images/partners/transfi.png"
    },
    {
        "name": "Heroes of Mavia",
        "tags": [
            "gaming"
        ],
        "description": "Heroes of Mavia is a mobile multiplayer Web3 strategy game where players use their base and army to battle other players. ",
        "url": "https://www.mavia.com",
        "imageUrl": "/images/partners/mavia.png"
    },
    {
        "name": "KOMPETE",
        "tags": [
            "gaming"
        ],
        "description": "Create your build, lock in your playstyle, and drop into some of the best multiplayer game modes of all time across different genres. ",
        "url": "https://kompete.game",
        "imageUrl": "/images/partners/kompete.png"
    },
    {
        "name": "Function Over Form",
        "tags": [
            "gaming"
        ],
        "description": "A collection of on-chain games, utilities, and apps, all packaged as collectible NFTs on Base.",
        "url": "https://functionoverform.xyz",
        "imageUrl": "/images/partners/formoverfunction.png"
    },
    {
        "name": "EthXY",
        "tags": [
            "gaming"
        ],
        "description": "Onchain MMORPG on Base. Create a pixel RPG character, strengthen your attributes, gather loot, battle boss monsters, duel other players.",
        "url": "https://ethxy.com",
        "imageUrl": "/images/partners/ethxy.png"
    },
    {
        "name": "GhostLogs.xyz",
        "tags": [
            "infra"
        ],
        "description": "GhostLogs allows anyone to edit live smart contract code for tailored data emission.",
        "url": "https://ghostlogs.xyz",
        "imageUrl": "/images/partners/ghostLogs.webp"
    },
    {
        "name": "Bulla Network",
        "tags": [
            "defi"
        ],
        "description": "Bulla is a global onchain credit protocol that streamlines web3 business with one-step invoicing, payments, payroll, loans and multi-functional account management and tax reporting across 14 chains.",
        "url": "https://www.bulla.network/",
        "imageUrl": "/images/partners/bulla.webp"
    },
    {
        "name": "DeFi Saver",
        "tags": [
            "defi"
        ],
        "description": "DeFi Saver is an all-in-one management app for decentralised finance, providing you fully non-custodial access to protocols such as Aave, Compound, Morpho, Maker & Liquity.",
        "url": "https://defisaver.com/",
        "imageUrl": "/images/partners/defisaver.webp"
    },
    {
        "name": "BitAvatar",
        "tags": [
            "social"
        ],
        "description": "A Soulbound Avatar Identity for Multi-Ecosystem Social & Communication. Customize, interact, and build verifiable reputation with unique and personalized digital identities.",
        "url": "https://bitavatar.io/",
        "imageUrl": "/images/partners/bitavatar.webp"
    },
    {
        "name": "Crypto Tax Calculator",
        "tags": [
            "social"
        ],
        "description": "Sort out your crypto tax nightmare with the most degen-friendly calculator in web3.",
        "url": "https://cryptotaxcalculator.io",
        "imageUrl": "/images/partners/cryptotax.webp"
    },
    {
        "name": "Show Up",
        "tags": [
            "social"
        ],
        "description": "Onchain RSVP and Event management protocol designed to reshape event participation.",
        "url": "https://www.showup.events/",
        "imageUrl": "/images/partners/showup.webp"
    },
    {
        "name": "Catalog Radio",
        "tags": [
            "social"
        ],
        "description": "Internet radio made for independent music. Enjoy and directly support artists in real time. ",
        "url": "https://catalog.radio/",
        "imageUrl": "/images/partners/catalog.webp"
    },
    {
        "name": "Lore",
        "tags": [
            "infra"
        ],
        "description": "Upgrade Your Web3 Experience with Lore as your primary explorer for Ethereum, Avalanche (C-Chain), Fantom Opera, Base. Stay ahead of the curve with LoreAI, notifications, and more.",
        "url": "https://searchcrypto.com/",
        "imageUrl": "/images/partners/lore.png"
    },
    {
        "name": "RubyScore",
        "tags": [
            "infra"
        ],
        "description": "Onchain ranking protocol. Track your progress in your favorite projects and rise to the top.\n",
        "url": "https://rubyscore.io/",
        "imageUrl": "/images/partners/rubyscore.png"
    },
    {
        "name": "BotFi.app",
        "tags": [
            "defi"
        ],
        "description": "BotFi is an innovative AI-assisted crypto bot available on Telegram and Messenger designed to streamline your daily DeFi tasks, including swapping, bridging, and sniping across various blockchains.",
        "url": "https://botfi.app",
        "imageUrl": "/images/partners/botfi.webp"
    },
    {
        "name": "Blocto",
        "tags": [
            "wallet"
        ],
        "description": "Blocto is an account abstraction wallet supporting EVM chains. We boast a user base of 1.7 million so far with a seamless social log in and speedy 30-second onboarding experience, completely coinless.",
        "url": "https://blocto.io/",
        "imageUrl": "/images/partners/Blocto.webp"
    },
    {
        "name": "Cred Protocol",
        "tags": [
            "defi"
        ],
        "description": "Credit risk management infrastructure, quantifying on-chain lending risk at scale. Realtime Credit Scoring, Reporting and Monitoring across 200M EVM addresses.",
        "url": "https://credprotocol.com",
        "imageUrl": "/images/partners/Cred.webp"
    },
    {
        "name": "Ducky City",
        "tags": [
            "gaming"
        ],
        "description": "Ducky City is a gamefi project built on Base, and is a MMORPG game run on browser compatible with all devices.",
        "url": "https://duckycity.io/",
        "imageUrl": "/images/partners/DuckyCity.webp"
    },
    {
        "name": "Nirvana Labs",
        "tags": [
            "infra"
        ],
        "description": "Built by crypto engineers and optimized for the bandwidth, storage, and compute workloads of blockchain transactions, Nirvana offers a bare metal cloud with vertically integrated managed RPC services.",
        "url": "https://nirvanalabs.io/",
        "imageUrl": "/images/partners/Nirvana.webp"
    },
    {
        "name": "Oku Trade",
        "tags": [
            "defi"
        ],
        "description": "Oku Trade is the best DEX interface. Powered by Uniswap v3, the trading platform offers limit orders, analytics, and position management without fees.",
        "url": "https://oku.trade",
        "imageUrl": "/images/partners/Oku.webp"
    },
    {
        "name": "SubQuery",
        "tags": [
            "infra"
        ],
        "description": "Fast, reliable, opens source, decentralised, and customised APIs supercharging dApps on over 150 networks, enabling a user-focused web3 world. SubQuery Network is innovating web3 infrastructure with tools that empower builders to decentralise the future.\n",
        "url": "https://subquery.network/",
        "imageUrl": "/images/partners/Subquery.webp"
    },
    {
        "name": "Subsquid",
        "tags": [
            "infra"
        ],
        "description": "Subsquid Network is Web3 necessiware—a decentralized data lake and query engine for blazing-fast cross-chain indexing and queries. Infinitely horizontally scalable, Subsquid makes the consumer dApps that real people want to use possible, from social media to games and DeFi. Secured by ZK proofs, Subsquid supports over 100 networks.",
        "url": "https://subsquid.io",
        "imageUrl": "/images/partners/Subsquid.webp"
    },
    {
        "name": "Hitdex",
        "tags": [
            "defi"
        ],
        "description": "A decentralized ecosystem for cross-chain trading and buying & selling crypto. Trade ETH and your favorite tokens across eight chains including Base, Ethereum, Solana, Polygon PoS, Optimism, and more.",
        "url": "https://www.hitdex.com/#/base",
        "imageUrl": "/images/partners/hitdex.webp"
    },
    {
        "name": "Brian",
        "tags": [
            "bridge"
        ],
        "description": "Brian offers a non custodial solution to perform transactions, research web3 info and deploy smart contracts via prompting.",
        "url": "https://www.brianknows.org/",
        "imageUrl": "/images/partners/brian.webp"
    },
    {
        "name": "Cede.Store",
        "tags": [
            "onramp"
        ],
        "description": "Access and transfer your assets from 10+ centralized exchanges, with a DeFi UX.",
        "url": "https://send.cede.store/",
        "imageUrl": "/images/partners/cede.webp"
    },
    {
        "name": "L2Pass",
        "tags": [
            "bridge"
        ],
        "description": "L2Pass is an Omni-Chain Protocol Designed for Seamless Multi-Chain Token Movement, Swaps, and Art Performances.",
        "url": "https://l2pass.com/",
        "imageUrl": "/images/partners/l2pass.webp"
    },
    {
        "name": "MES Protocol",
        "tags": [
            "bridge"
        ],
        "description": "MES is a stablecoin-focused bridge and swap. Traders enjoy instant and secure cross chain transactions at low cost.",
        "url": "https://www.mesprotocol.com/",
        "imageUrl": "/images/partners/mes.webp"
    },
    {
        "name": "SafeSwap",
        "tags": [
            "bridge"
        ],
        "description": "SafeSwap is a decentralized atomic swap bridge for native tokens. The Atomic Swap protocol enables builders to transport their native tokens to other EVM-based blockchains, without having to rely on wrapped tokens.",
        "url": "http://safeswap.io/",
        "imageUrl": "/images/partners/safeswap.webp"
    },
    {
        "name": "OmniKingdoms",
        "tags": [
            "gaming"
        ],
        "description": "OmniKingdoms is an on-chain MMORPG that focuses on state transitions. Players can join the community and earn rewards for questing, battling, crafting and much more. We aim to integrate the newest gaming mechanics and other projects.",
        "url": "https://www.omnikingdoms.io/",
        "imageUrl": "/images/partners/omnikingdom.webp"
    },
    {
        "name": "Cyberscope ",
        "tags": [
            "security"
        ],
        "description": "An award-winning blockchain security firm specializing in smart contract audits. We work with some of the biggest networks out there such as Polygon, Chainlink, Klaytn, Oasis, and many more.",
        "url": "cyberscope.io",
        "imageUrl": "/images/partners/cyberscope.webp"
    },
    {
        "name": "Intract",
        "tags": [
            "social"
        ],
        "description": "Intract is a web3 growth platform to help you educate new users and build community engagement.\n\n\n",
        "url": "www.intract.io",
        "imageUrl": "/images/partners/intract.webp"
    },
    {
        "name": "Layerr",
        "tags": [
            "nft"
        ],
        "description": "Layerr is crafting an innovative platform where users can effortlessly tokenize a variety of consumer-based digital assets. Our platform simplifies the complexities of blockchain, allowing users to tokenize at scale.",
        "url": "https://layerr.xyz/",
        "imageUrl": "/images/partners/layerr.webp"
    },
    {
        "name": "Irys",
        "tags": [
            "infra"
        ],
        "description": "Irys is the only provenance layer. It enables users to limitlessly upload and sequence data while precisely attributing its origin.",
        "url": "https://irys.xyz/",
        "imageUrl": "/images/partners/irys.webp"
    },
    {
        "name": "Envio",
        "url": "https://envio.dev",
        "description": "Envio is a modern, multi-chain EVM blockchain indexing framework speed-optimized for querying real-time and historical data. ",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/envio.webp"
    },
    {
        "name": "Reserve Protocol",
        "url": "https://reserve.org/",
        "description": "The Reserve Protocol enables the creation of a new kind of money that holds long term value better than fiat currency.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/reserve.webp"
    },
    {
        "name": "ARPA Network",
        "url": "https://www.arpanetwork.io/en-US/randcast",
        "description": "A secure computation network that builds Randcast, an onchain verifiable RNG for tamper-proof randomness in AW, gaming, and NFTs.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/arpa2.webp"
    },
    {
        "name": "BaseSwap",
        "url": "https://baseswap.fi/",
        "description": "BaseSwap is an independent decentralized exchange (DEX) that introduces a groundbreaking concept by allowing users to not only trade assets but also earn protocol-generated revenue from fees. This innovative feature is made possible through the $BSWAP & $BSX tokens, boosting rewards, and enabling users to directly earn cryptocurrencies from swap fees.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/baseswap.webp"
    },
    {
        "name": "Bitwave",
        "url": "bitwave.io",
        "description": "The #1 Digital Asset Finance Platform For Enterprises! Bitwave combines audit-proven tax and accounting automation software with workflow and process expertise.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/bitwave.webp"
    },
    {
        "name": "ZKP2P",
        "url": "https://zkp2p.xyz/",
        "description": "ZKP2P is a trustless P2P fiat to crypto on/offramp powered by zero knowledge proofs. Convert USD in Venmo to USDC in 60 seconds!",
        "tags": [
            "onramp"
        ],
        "imageUrl": "/images/partners/zkp2p.webp"
    },
    {
        "name": "Rubic",
        "url": "https://rubic.exchange/",
        "description": "Rubic is a Cross-Chain Tech Aggregator for users + tools for dApps. Trade 15,500+ tokens across 70+ networks, through the aggregation of 220+ DEXs and bridges!",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/rubic.webp"
    },
    {
        "name": "Wombat Exchange",
        "url": "https://www.wombat.exchange/",
        "description": "Swap stablecoins at minimal slippage and stake at maximum yield. Just one stablecoin currency to earn it all.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/wombat.webp"
    },
    {
        "name": "NetherFi",
        "url": "https://nether.fi/#/dashboard",
        "description": "Nether.Fi is a Base-native Perpetuals and Spot DEX. Traders can enjoy deep liquidity and reliable price data backed by industry-leading oracles. 100% of fees generated on Nether.Fi are distributed to liquidity providers and stakers!",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/netherfi.webp"
    },
    {
        "name": "XDOGE",
        "url": "https://xdoge.art/",
        "description": "xdoge is a perpetual contract trading platform on Base to support up to 150x leverage, designed to be user-friendly, secure, and simple.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/xdoge.webp"
    },
    {
        "name": "SlashToken",
        "url": "https://slashtoken.io/",
        "description": "SlashToken is a powerful and budget-friendly tool for sending tokens and NFTs to multiple wallets at once.",
        "tags": [
            "other"
        ],
        "imageUrl": "/images/partners/slashtoken.webp"
    },
    {
        "name": "Everdex",
        "url": "https://www.everdex.app/",
        "description": "Everdex is a multi-chain native decentralized exchange (DEX) that makes trading various tokens across networks simple and efficient. Leveraging Chainrunner, we provide optimized route for swap.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/everdex.webp"
    },
    {
        "name": "Contango",
        "url": "https://contango.xyz/",
        "description": "Perps built through looping, the native way of trading on-chain",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/contango.webp"
    },
    {
        "name": "Avantis",
        "url": "https://www.avantisfi.com/",
        "description": "Onchain perpetuals exchange for crypto, forex and commodities with advanced risk management for LPs and up to 100x leverage for traders.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/avantis.webp"
    },
    {
        "name": "Seamless Protocol",
        "url": "https://www.seamlessprotocol.com/",
        "description": "Seamless is the first native, decentralized lending protocol on Base. Seamless enables a new form of undercollateralized borrowing—integrated liquidity markets—which are isolated, smart contract-to-smart contract markets for amplifying strategies.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/seamless.webp"
    },
    {
        "name": "IceCream Swap",
        "url": "https://icecreamswap.com/?chainId=8453",
        "description": "Multi-chain DeFi Ecosystem. Swap, Bridge, Farm and Launch across multiple blockchains.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/icecream.webp"
    },
    {
        "name": "BiFi",
        "url": "https://crosschain.bifi.finance/",
        "description": "BiFi is a cross-chain lending platform. User can deposit asset and lend any asset from different networks by CCCP (Cross-chain Communication Protocol). Our approach provides improved UX and security.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/bifi.webp"
    },
    {
        "name": "Bifrost Network Bridge",
        "url": "https://www.bifrostnetwork.com/bridge",
        "description": "Bifrost bridge allows users to bridge their assets across the chains with enhanced security. Unlike the other bridges that use backend solutions, our bridge is validated by Bifrost network nodes.",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/bifrostbridge.webp"
    },
    {
        "name": "trustalabs",
        "url": "https://www.trustalabs.ai/",
        "description": "Trusta Labs aims to build web3 security and data infrastructure to bring more trust and less friction to the web3 world.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/trusta.webp"
    },
    {
        "name": "BlockWallet",
        "url": "https://blockwallet.io/networks/base-wallet",
        "description": "BlockWallet is a self-custodial Web3 wallet focused on speed, reliability, and security ensuring users genuinely own their digital assets without technical concerns.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/blockwallet.webp"
    },
    {
        "name": "Redlion Printer",
        "url": "https://app.prints.red",
        "description": "Redlion Printer is an innovative solution for the cryptoart community, designed to seamlessly integrate the digital with physical forms of art, offering a novel solution for artists and art owners.",
        "tags": [
            "NFT"
        ],
        "imageUrl": "/images/partners/redlion.webp"
    },
    {
        "name": "builder.fi",
        "url": "https://www.builder.fi/",
        "description": "builder.fi is a SocialFi app where builders can capitalize on their reputation and earn crypto for answering questions.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/builderfi.webp"
    },
    {
        "name": "Collab.Land",
        "url": "https://www.collab.land/",
        "description": "Collab.Land is the original community management tool that curates social membership based on tokens. We verify and confirm that members possess the required token(s) to participate in communities.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/collabland.webp"
    },
    {
        "name": "OpenFriend",
        "url": "https://openfriend.tech/",
        "description": "OpenFriend.Tech is an auxiliary tool providing multi-dimensional data analytics for Friend.Tech users, allowing every user to build their own on-chain reputation based on Friend.Tech.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/openfriend.webp"
    },
    {
        "name": "Nextme",
        "url": "https://nextme.one/",
        "description": "Nextme is committed to building a social economic network that connects creators, brands and users.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/nextme.webp"
    },
    {
        "name": "Sound.xyz",
        "url": "https://www.sound.xyz/",
        "description": "Discover amazing new music and prove that you were there first.",
        "tags": [
            "NFT"
        ],
        "imageUrl": "/images/partners/sound.webp"
    },
    {
        "name": "GetBlock",
        "url": "https://getblock.io/",
        "description": "GetBlock offers fast and cost-efficient RPC nodes for over 50 blockchains, including Base, catering to hundreds of dApps from diverse segments.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/getblock.webp"
    },
    {
        "name": "Moralis",
        "url": "https://moralis.io/",
        "description": "Moralis is a leading crypto data provider that helps companies build great user experiences, drive engagement, growth & revenue in their applications with plug-and-play Web3 APIs. ",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/moralis.webp"
    },
    {
        "name": "Quick Intel",
        "url": "https://app.quickintel.io/",
        "description": "Quick intel provides the security tools you need to avoid scams, have more peace of mind and become a confident crypto trader.",
        "tags": [
            "security"
        ],
        "imageUrl": "/images/partners/quickintel.webp"
    },
    {
        "name": "Cobo Argus",
        "url": "https://www.cobo.com/argus",
        "description": "Cobo Argus is a secure and efficient on-chain digital asset management solution that supports role-based access controls, DeFi investment strategies and more. ",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/coboargus.webp"
    },
    {
        "name": "Surf Protocol",
        "url": "https://www.surf.one/",
        "description": "the first permissionless derivative exchange, enabling trading and listing of over 10,000+ assets.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/surf.webp"
    },
    {
        "name": "LlamaNodes",
        "url": "https://llamanodes.com/",
        "description": "Fast and private RPC infrastructure designed for Web3 native teams 🦙",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/llamanodes.webp"
    },
    {
        "name": "OKLink",
        "url": "https://www.oklink.com/base",
        "description": "OKLink Base explorer is a multi-chain aggregated blockchain explorer that allows users to search through transactions, blocks, wallet addresses, smart contracts and other on-chain data covering 20+ mainstream chains including BTC, ETH, BSC, Base,Solana, polygon,etc. OKLink Base explorer is an intuitive and powerful explorer to be part of the Base ecosystem.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/oklink.webp"
    },
    {
        "name": "Symbiosis",
        "url": "https://app.symbiosis.finance/",
        "description": "Symbiosis is a cross-chain AMM DEX that pools together liquidity from different networks: L1s and L2s, EVM and non-EVM. With Symbiosis, you can easily swap any token and move your assets across different networks.",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/symbiosis.webp"
    },
    {
        "name": "VMEX Finance",
        "url": "https://vmex.finance/",
        "description": "VMEX is a lending protocol that uses an isolated pool structure to support the expansion of collateral in DeFi. Your one-stop-shop for leveraging staked LP, vault tokens, and borrowing against RWA.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/vmex.webp"
    },
    {
        "name": "Equalizer",
        "url": "https://base.equalizer.exchange",
        "description": "Equalizer provides a liquidity hub for Base chain through it's capital efficient system.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/equalizer.webp"
    },
    {
        "name": "BMX",
        "url": "https://bmx.morphex.trade/",
        "description": "BMX by Morphex: A unique derivative trading platform that boosts capital efficiency. Liquidity providers access market-making liquidity via wBLT, which is transferable and can pair with any asset to LP for rewards.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/bmx.webp"
    },
    {
        "name": "F1337",
        "url": "https://f1337.vercel.app/",
        "description": "F1337 is the world first memetic onchain game exclusively for Farcaster users.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/F1337.webp"
    },
    {
        "name": "Singular",
        "url": "https://singular.app",
        "description": "The home of NFTs 2.0 by @RmrkApp. Create and trade your nestable, equippable, soulbound, and multi-asset NFTs.",
        "tags": [
            "nft"
        ],
        "imageUrl": "/images/partners/singular.webp"
    },
    {
        "name": "Coinvise",
        "url": "https://coinvise.co",
        "description": "Coinvise makes it simple for web3 projects, communities and brands to reward onchain contributions—distribute tokens/NFTs for completing actions such as actions on DeFi platforms, collecting NFTs on marketplaces, engaging on social platforms (eg: lens), bridging assets, holding tokens/NFTs and even reward custom smart contract actions.",
        "tags": [
            "nft"
        ],
        "imageUrl": "/images/partners/coinvise.webp"
    },
    {
        "name": "Mellow",
        "url": "https://mellow.to",
        "description": "Mellow is a new take on social media that connects creators and their communities.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/mellow2.webp"
    },
    {
        "name": "Dmail Network",
        "url": "https://mail.dmail.ai/login",
        "description": "Dmail Network is building an AI-powered decentralized communication infra, offering encrypted emails, consolidated notifications, and targeted marketing services across multiple chains and dApps.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/dmail.webp"
    },
    {
        "name": "Desig",
        "url": "https://desig.io/",
        "description": "Meet Desig: A Smart Multisig wallet simplifying treasury ops. Flourishing funds with intuitive tracking, smart allocation & insightful cashflow reports. Enjoy gasless vault control; intel-driven swap.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/desig.webp"
    },
    {
        "name": "friend.tech",
        "url": "https://www.friend.tech/",
        "description": "Your network is your net worth.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/friendtech.webp"
    },
    {
        "name": "Cradles",
        "url": "https://www.cradles.io/",
        "description": "Cradles stands out as an AAA MMORPG blockchain game, boasting features such as PvP, PvE, ecological strategies, and the discovery of extinct species. Gamers can traverse cities, hunt for treasures, and solve puzzles in bustling taverns and casinos.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/cradles.webp"
    },
    {
        "name": "Lore",
        "url": "https://lore.xyz/",
        "description": "Community driven fun. With Lore, communities can run engagement programs, create media and own assets — together.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/lore.webp"
    },
    {
        "name": "Gem Wallet",
        "url": "https://gemwallet.com",
        "description": "Gem Wallet is a community owned, privacy respecting crypto wallet for iOS and Android. It supports multiple cryptocurrencies, tokens and NFTs, and lets you buy, swap, stake, and explore Web3.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/gemwallet.webp"
    },
    {
        "name": "DrawTech",
        "url": "https://www.draw.tech/",
        "description": "A fully onchain drawing game. Draw with others and earn rewards — until you get drawn over!",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/drawtechlogo.webp"
    },
    {
        "name": "TokenTerminal",
        "url": "https://app.xtokenterminal.io/mining/discover?utm_source=coinbase&utm_medium=web",
        "description": "The vision for Terminal is to build a capital markets and liquidity management platform designed for DeFi and NFT projects.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/tokenterminal.webp"
    },
    {
        "name": "Coinage Media",
        "url": "https://www.coinage.media/?utm_source=coinbase&utm_medium=web",
        "description": "Coinage is a community-owned media organization answering crypto’s biggest questions, with host and finance reporter Zack Guzman. Our 5,000 Caucus membership passes give you the option to join the Coinage Co-op, the ability to collaborate on production, and the ability to own crypto’s most trusted narrative.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/coinnagemedia.webp"
    },
    {
        "name": "Sonne Finance",
        "url": "https://sonne.finance/",
        "description": "Sonne Finance is a decentralized lending protocol for individuals, institutions and protocols to access financial services. It is a permissionless and open source protocol serving users on Base. Users can deposit their assets, use them as collateral and borrow against them.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/sonne.webp"
    },
    {
        "name": "Xena Finance",
        "url": "https://xena.finance/",
        "description": "Xena Finance is a Perpetual DEX Platform that aims to revolutionize digital asset trading by seamlessly integrating optimized strategies and bespoke risk management. With minimal collateral, users can harness on-demand liquidity, access an automated trading system, and benefit from on-chain transparency.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/xena.webp"
    },
    {
        "name": "OKX DEX",
        "url": "https://www.okx.com/web3/dex-swap#inputChain=1&inputCurrency=ETH&outputChain=1&outputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "description": "OKX DEX is a cross-chain DEX Aggregator that provides users with the best possible prices on the market through an intelligent routing algorithm.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/okxdex.webp"
    },
    {
        "name": "DIP Exchange",
        "url": "https://www.dip.exchange/#/",
        "description": "A transparent decentralized derivatives exchange enabling permissionless perpetual trading for any asset by anyone.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/dip.webp"
    },
    {
        "name": "OpenPool",
        "url": "https://www.openpool.co/",
        "description": "OpenPool's onchain API processes wallet txs at scale to calculate real-time and historical pricing, cost basis, P&Ls, and realization events so you don't have to.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/openpool2.webp"
    },
    {
        "name": "Sweep n' Flip",
        "url": "https://app.sweepnflip.io/sweep?chainId=8453",
        "description": "NFT DEX built for Liquidity.",
        "tags": [
            "NFT"
        ],
        "imageUrl": "/images/partners/sweep2.webp"
    },
    {
        "name": "Register.app",
        "url": "https://register.app/#/?chainId=1",
        "description": "Register enables anyone to mint, redeem, stake and govern asset-backed stablecoins, flatcoins and indexes (“RTokens”) on the Reserve Protocol",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/register.webp"
    },
    {
        "name": "NewThrone",
        "url": "https://www.newthrone.gg/",
        "description": "Join NewThrone today, a browser-based PVP Game project built on the Base Chain. NewThrone delivers an easy-to-use and profitable experience, as playing engages you in attacking enemies with the end goal of stealing WETH as a reward for battles won.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/newthrone.webp"
    },
    {
        "name": "Shibaments",
        "url": "https://app.shibaments.com/",
        "description": "Shibaments is a GameFi ecosystem that will allow users to play, trade and earn on the Base Network. We will be offering not only our own in-house developed P2E games, but also ShibaCore - an interface allowing the community to rapidly plug their own NFT collections, smart contracts and web3 games into the ecosystem. At launch, Shibaments and ShiBattle will be available - The Genesis NFT collection based on unique powerful elemental shibas,and their associated game that allows players to earn rewards such by battling each other's NFTs.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/shibaments.webp"
    },
    {
        "name": "Coinarcade",
        "url": "https://dapp.playcoinarcade.xyz/entryPage",
        "description": "CoinArcade is a Decentralized Esports Layer for All Gamers. With our unified platform experience and weekly tournament designing, players can play/battle/stake 2 earn prizes anytime and anywhere.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/coinarcade.webp"
    },
    {
        "name": "Add3",
        "url": "https://add3.io",
        "description": "EVM smart contract creation and management for web3 projects - Use Add3 to deploy customizable & compliant web3 smart contract products, dapp & analytics in minutes. Code or no-code options available!",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/add3.webp"
    },
    {
        "name": "Timeswap",
        "url": "https://timeswap.io/",
        "description": "Timeswap is the first fully decentralized lending & borrowing protocol in DeFi. Timeswap enables the permissionless creation of lending & borrowing markets for any ERC-20 token pair using a 3-variable AMM - (x+y)z=k.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/timeswap.webp"
    },
    {
        "name": "Supra",
        "url": "https://supraoracles.com/",
        "description": "Supra is a middleware network that connects L1 and L2, Web2 and Web3, which we call an IntraLayer. Supra as an IntraLayer is a powerful framework that brings our solutions together - oracles, VRFs, and a native cross-chain protocol through singular shared-security infrastructure.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/supra.webp"
    },
    {
        "name": "Pheasant Network",
        "url": "https://pheasant.network/",
        "description": "Pheasant Network is an optimistic bridge specialized for Layer 2. Cheap gas fees and strong security improve scalability and interoperability of Ethereum.",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/pnetwork.webp"
    },
    {
        "name": "Based Nouns",
        "url": "https://nouns.build/dao/base/0x10a5676EC8aE3D6b1F36a6F1A1526136BA7938BF/67",
        "description": "Empowering web3 innovation through community-driven incubation on the Base network: Welcome to Based Nouns.",
        "tags": [
            "dao"
        ],
        "imageUrl": "/images/partners/nouns.webp"
    },
    {
        "name": "SimpleHash",
        "url": "https://simplehash.com/",
        "description": "The SimpleHash API provides access to all NFT data across 40+ chains, including media, floor prices, sales, listings and more. Get started today!",
        "tags": [
            "NFT"
        ],
        "imageUrl": "/images/partners/simplehash.webp"
    },
    {
        "name": "Cymbal",
        "url": "https://cymbal.xyz/",
        "description": "Cymbal's mission is to take the world's blockchain data — all the billions of events and activities stored onchain — and make it understandable. We are building the “human readable” blockchain explorer!",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/cymbal.webp"
    },
    {
        "name": "Banxa",
        "url": "https://www.banxa.com/",
        "description": "Banxa is the leading compliant fiat-to-crypto payments infrastructure provider that allows users to seamlessly on and off-ramp to your app using a huge variety of global and local payment methods.",
        "tags": [
            "onramp"
        ],
        "imageUrl": "/images/partners/banxa.webp"
    },
    {
        "name": "Omniscia",
        "url": "https://omniscia.io/",
        "description": "Omniscia is a smart contract auditing firm. Our team of experienced smart contract auditors & developers have been building and auditing complex decentralized networks and applications since. 2017.",
        "tags": [
            "security"
        ],
        "imageUrl": "/images/partners/omniscia.webp"
    },
    {
        "name": "Hexens Cybersecurity",
        "url": "https://hexens.io/",
        "description": "Leading cybersecurity provider and novel cryptography experts, including zk, liquid staking and more.",
        "tags": [
            "security"
        ],
        "imageUrl": "/images/partners/hexens.ong.webp"
    },
    {
        "name": "Toaster Finance",
        "url": "https://www.toaster.finance/",
        "description": "All-in-one DeFi platform focusing on a UX solution to enable users easy usage to multiple DeFi protocols by abstracting complicated hurdles and unifying the UI to a friendly, user-oriented interface.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/toaster2.webp"
    },
    {
        "name": "IntentX",
        "url": "https://intentx.io/",
        "description": "Decentralized derivatives exchange using intent based architecture to provide the best trading experience possible.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/intentx.webp"
    },
    {
        "name": "Llama",
        "url": "https://llama.xyz/",
        "description": "Llama is a fullstack platform for onchain governance and access control. It enables protocols to securely take action using onchain policies and custom execution strategies.",
        "tags": [
            "dao"
        ],
        "imageUrl": "/images/partners/llama.webp"
    },
    {
        "name": "Overtime",
        "url": "https://overtimemarkets.xyz/#/?lang=en",
        "description": "Overtime, the premier onchain sportsbook, offers seamless trading via our sports AMM in a fully decentralized manner. Rooted in Thales, we merge DeFi and real-world sports.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/overtime.webp"
    },
    {
        "name": "Chainstack",
        "url": "https://chainstack.com/",
        "description": "The limitless Web3 development stack to build applications for every scale, in DeFi, NFT, gaming, analytics, and everything in between.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/chainstack.webp"
    },
    {
        "name": "Halliday",
        "url": "https://www.halliday.xyz/",
        "description": "Halliday enables game developers to build their next breakout hit on the blockchain. Our programmable ERC-4337 Smart Accounts are fully non-custodial, built to scale, and most importantly, designed specifically for games! With seamless onboarding, easy monetization and next-gen growth tooling, developers can fully immerse players in the world they have created, all while leveraging the full potential of the blockchain and offering their game’s own UI.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/Halliday.webp"
    },
    {
        "name": "QuestN",
        "url": "https://questn.com/",
        "description": "QuestN is a one-stop tool offering comprehensive solutions for Marketing, Growth, and Analysis in Web3. QuestN's range of services enables Projects to effectively engage in the entire cycle of user attraction, acquisition, and analysis.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/questn.webp"
    },
    {
        "name": "Unlonely",
        "url": "https://www.unlonely.app/",
        "description": "Your cozy space on the internet. Start your own channel and launch your own arcade token.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/unlonley.webp"
    },
    {
        "name": "PitchTalk",
        "url": "https://pitchtalk.com/",
        "description": "PitchTalk is a platform for communication between projects, investors, and communities. We help you overcome hurdles and reach the pinnacles of success through open and effective communication. ",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/appicon.webp"
    },
    {
        "name": "Bitget Wallet",
        "url": "https://web3.bitget.com/",
        "description": "Ultimate Web3 Portal to the Crypto Universe with integrated Cross-Chain Swap, Nft Marketplace, Onramp, Dapp store, Defi, and Staking solution catering 12 million+ users across 168 countries.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/bitget.webp"
    },
    {
        "name": "imToken",
        "url": "https://token.im/",
        "description": "imToken, a reliable non-custodial mobile wallet for tokens you own - cryptocurrencies, stable coins, NFTs, and more. We are inspired to make digital life equally accessible to everyone.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/imtoken.webp"
    },
    {
        "name": "Furrend",
        "url": "http://furrend.xyz/",
        "description": "Furrend is a web3 pet video-sharing social network that provides the tools, resources, and infrastructure for content creators to monetize their work and engage with their community through digital assets.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/furrend.webp"
    },
    {
        "name": "Land, Labor, and Capitol",
        "url": "https://llcgame.io/",
        "description": "Onchain tycoon game where players are in true control: to create new retail assets (as NFTs), to launch player owned companies (ERC-6551 concept, since each company can hold deeds, resources etc) and ultimately to launch new game instances, creating a huge economy with multiple game instances.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/landlabor.webp"
    },
    {
        "name": "Superbridge",
        "url": "https://superbridge.app",
        "description": "Native token bridging interface for OP Stack chains.",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/superbridge.webp"
    },
    {
        "name": "Alchemy",
        "url": "https://www.alchemy.com/",
        "description": "Alchemy is the leading web3 developer platform. Alchemy’s Account Abstraction APIs and SDK make it easy to offer seamless transactions and simple, secure accounts. Build anything on Base with Alchemy!",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/alchemy.webp"
    },
    {
        "name": "Fonbnk",
        "url": "https://fonbnk.com/",
        "description": "We are the leading global marketplace enabling you to convert your airtime into digital money!",
        "tags": [
            "onramp"
        ],
        "imageUrl": "/images/partners/fonbnk.webp"
    },
    {
        "name": "Mellow Protocol",
        "url": "https://mellow.finance/",
        "description": "Permissionless system for on-chain active liquidity management on AMMs and building cross-protocol DeFi strategies.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/mellow.webp"
    },
    {
        "name": "Orbiter Finance",
        "url": "https://www.orbiter.finance/",
        "description": "Orbiter Finance is an ultimate solution that optimises the performance of Ethereum by supporting cross-rollup transactions and synchronising mainnet-rollups interoperabilities.",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/orbiterfinance.webp"
    },
    {
        "name": "OKX NFT",
        "url": "https://www.okx.com/web3/marketplace/nft",
        "description": "OKX NFT Marketplace - Zero-fees, one-stop shop for NFTs across chains and marketplaces.",
        "tags": [
            "NFT"
        ],
        "imageUrl": "/images/partners/okx.webp"
    },
    {
        "name": "OpenName",
        "url": "https://open.name/",
        "description": "Building Omnichain Name Service for 1,000,000,000 Users.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/openname.webp"
    },
    {
        "name": "GeckoTerminal",
        "url": "https://www.geckoterminal.com/",
        "description": "GeckoTerminal is a DEX tracker and cryptocurrency price charting tool by CoinGecko. Track on-chain trading activities in real time across Ethereum, Polygon, Solana and 100+ networks.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/geckoterminal.webp"
    },
    {
        "name": "NFTScan",
        "url": "https://www.nftscan.com/",
        "description": "The world's largest NFT data infrastructure, supporting the complete amount of NFT data for 17 blockchain networks. Providing NFT API for developers.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/nftscan.webp"
    },
    {
        "name": "Alien Base",
        "url": "https://app.alienbase.xyz/",
        "description": "Alien Base is the Base-native decentralized exchange ecosystem. Use it to trade blue chip assets and derivatives, or check out Area 51 to play with experimental tokens, predictions and lotteries",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/alienbase.webp"
    },
    {
        "name": "BasePaint",
        "url": "https://basepaint.xyz/",
        "description": "BasePaint is a collaborative pixel art app. Artists come together daily to paint on a shared pixel-art canvas. The next day, the canvas is turned into a 24-hour open edition NFT mint. Once the mint concludes, that day’s artists receive a share of ETH from the mint.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/basepaint.webp"
    },
    {
        "name": "Layer3",
        "url": "https://layer3.xyz/",
        "description": "Discover the world of crypto like never before with Layer3. Our interactive Quests make learning and exploring web3 fun, engaging, and rewarding.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/layer3.webp"
    },
    {
        "name": "Thales",
        "url": "https://thalesmarket.io/",
        "description": "Thales provides an oracle-based automated liquidity solution that is used to create various types of onchain Positional Markets limited only by the amount of data that is available to the blockchain.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/thales.webp"
    },
    {
        "name": "Arkham",
        "url": "https://www.arkhamintelligence.com/",
        "description": "Arkham is a crypto intelligence platform that systematically analyzes and deanonymizes blockchain transactions, showing users the people and companies behind blockchain activity, along with data and analytics about their behavior.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/arkham.webp"
    },
    {
        "name": "KyberSwap",
        "url": "https://kyberswap.com",
        "description": "KyberSwap is a next-gen decentralized exchange (DEX), aggregator and liquidity protocol that provides superior rates for traders and maximizes returns for liquidity providers in DeFi.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/kyber.webp"
    },
    {
        "name": "Transit Swap",
        "url": "https://swap.transit.finance/",
        "description": "The brand new way to experience decentralized exchanges, better liquitidy and better returns, all chains in one single Transit Swap.",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/transitswap.webp"
    },
    {
        "name": "Aerodrome Finance",
        "url": "http://aerodrome.finance",
        "description": "The central trading and liquidity marketplace on Base.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/aerodrome.webp"
    },
    {
        "name": "Unibot",
        "url": "https://unibot.app/",
        "description": "A Unified Crypto Trading Terminal.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/unibot.webp"
    },
    {
        "name": "API3 DAO",
        "url": "https://api3.org/",
        "description": "API3 is a collaborative project to deliver API services to smart contract platforms in a decentralized and trust-minimized way. It is governed by a decentralized autonomous organization (DAO), namely the API3 DAO.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/API3.webp"
    },
    {
        "name": "NodeReal",
        "url": "https://nodereal.io/",
        "description": "NodeReal is a one-stop blockchain infrastructure and service provider that embraces the high-speed blockchain era and empowers developers.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/nodereal.webp"
    },
    {
        "name": "zkLink",
        "url": "https://zk.link/",
        "description": "zkLink is a unified multi-chain trading infrastructure secured with zk-SNARKS, empowering the next-generation of decentralized trading products such as order book DEX, NFT marketplaces, and more.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/zklink.webp"
    },
    {
        "name": "Element Market",
        "url": "https://element.market",
        "description": "Element Market, the first community-driven aggregated marketplace, provides users with high liquidity, lowest transition fee, powerful trading utilities, and intelligent & instant data services.",
        "tags": [
            "NFT"
        ],
        "imageUrl": "/images/partners/elementmarket.webp"
    },
    {
        "name": "Ambire Wallet",
        "url": "https://www.ambire.com/",
        "description": "Ambire Wallet is an open-source self-custodial smart wallet that utilizes account abstraction, acting as a gateway to Web3 applications and providing users with secure and effortless management of their digital assets.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/ambire.webp"
    },
    {
        "name": "Ledger",
        "url": "https://www.ledger.com/",
        "description": "Buy, sell, swap, lend, stake and manage more than 6000+ cryptos with your Ledger hardware wallet and the Ledger Live companion app. Achieve financial freedom in a secure, stress-free environment.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/ledger.webp"
    },
    {
        "name": "TokenPocket",
        "url": "https://www.tokenpocket.pro/",
        "description": "TokenPocket is the world’s leading multi-chain self-custodial wallet, which supports mainstream public chains including Ethereum, BASE, BNB Chain, Polygon, TRON, Optimism, Arbitrum, etc.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/tokenpocket.webp"
    },
    {
        "name": "Angle Protocol",
        "url": "https://www.angle.money/",
        "description": "Angle is a decentralized and community governed protocol. Everyone is welcome to take part in the governance of the protocol to collectively start shaping its future.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/angle.webp"
    },
    {
        "name": "DexGuru Block Explorer",
        "url": "https://base.dex.guru/",
        "description": "DexGuru is an analytics platform and block explorer for Base.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/dexguru.webp"
    },
    {
        "name": "RSS3",
        "url": "https://rss3.io",
        "description": "RSS3 is an information dissemination protocol designed to achieve open, efficient, and secure flow of information on the Open Web.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/rss3.webp"
    },
    {
        "name": "Zerion",
        "url": "https://app.zerion.io/",
        "description": "Manage your DeFi and NFT portfolios, trade across 10+ networks and connect to any decentralized application with one wallet.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/zerion.webp"
    },
    {
        "name": "OpenZeppelin",
        "url": "https://www.openzeppelin.com/",
        "description": "Technology, processes, and people to minimize risk when launching and scaling. Ship faster and more safely.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/oz.webp"
    },
    {
        "name": "PancakeSwap",
        "url": "https://pancakeswap.finance/",
        "description": "Technology, processes, and people to minimize risk when launching and scaling. Ship faster and more safely.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/pancake.webp"
    },
    {
        "name": "RAI Finance",
        "url": "https://rai.finance/",
        "description": "RAI Finance is your premier All-in-One Solution, offering DEXs, Social Trading, and NFTFi across diverse blockchain networks..",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/rai.webp"
    },
    {
        "name": "Jumper Exchange",
        "url": "https://jumper.exchange",
        "description": "Crypto's Everything Exchange. Powered by @lifiprotocol.",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/jumper_exchange.webp"
    },
    {
        "name": "Ramp Network",
        "url": "https://ramp.network",
        "description": "Empower users to buy & sell crypto inside your app.",
        "tags": [
            "onramp"
        ],
        "imageUrl": "/images/partners/ramp.webp"
    },
    {
        "name": "Owlto Finance",
        "url": "https://owlto.finance",
        "description": "Owlto Finance is a cross-rollup module developed on the Ethereum L2 rollup solution, providing a low-cost, secure, and fast asset transfer solution.",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/owlto.webp"
    },
    {
        "name": "ONTO Wallet",
        "url": "https://onto.app/",
        "description": "An all-in-one solution for Web3 to manage identity, data, and assets, with 1M+ users, 1,000+ supported dapps across 60+ blockchains.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/ontowallet.webp"
    },
    {
        "name": "DRPC",
        "url": "https://drpc.org",
        "description": "Reliable, Scalable & Cost-efficient RPC solution for EVM-based networks.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/drpc.webp"
    },
    {
        "name": "Particle Network",
        "url": "https://particle.network",
        "description": "Particle Network simplifies Web3 app development with seamless authentication and wallet infra solutions.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/particle.webp"
    },
    {
        "name": "Masa",
        "url": "https://www.masa.finance/",
        "description": "Masa is pioneering intelligent growth and analytics infrastructure for web3. Builders can easily target, retain, and analyze valuable users in their communities, without compromising user privacy.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/masa.webp"
    },
    {
        "name": "Pocket Universe",
        "url": "https://www.pocketuniverse.app",
        "description": "Pocket Universe analyzes transactions to protect you from scam transactions. As a user, you get up to $2000 of insurance for free on your transactions.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/pocket.webp"
    },
    {
        "name": "Openfort",
        "url": "https://www.openfort.xyz",
        "description": "Openfort is a headless wallet service for developers that want to offer a seemless experience to their players. It allows you to create and manage smart wallets powered by account abstraction.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/openfort.webp"
    },
    {
        "name": "JokeRace",
        "url": "https://www.jokerace.xyz",
        "description": "JokeRace is the contest platform for communities to make, execute, and reward decisions. Contests enable communities to submit responses to a prompt and voters to vote on their favorites — and for anyone to win rewards if they win.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/jokerace.webp"
    },
    {
        "name": "STP",
        "url": "https://www.myclique.io/daos",
        "description": "STP is building and scaling an identity framework for Autonomous Worlds. Its ecosystem of DAO tooling, native dApps and third party integrations help DAOs evolve to Autonomous Worlds.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/STP.webp"
    },
    {
        "name": "Coinbase Commerce",
        "url": "https://www.coinbase.com/commerce",
        "description": "Learn how to securely accept Bitcoin, Litecoin, Ethereum, and other cryptocurrencies with Coinbase Commerce. Get started in minutes.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/commerce.webp"
    },
    {
        "name": "Coinbase Onramp",
        "url": "https://www.coinbase.com/developer-platform/products/onramp",
        "description": "Let your users buy or transfer digital assets with the most trusted name in crypto.",
        "tags": [
            "onramp"
        ],
        "imageUrl": "/images/partners/pay.webp"
    },
    {
        "name": "Coinbase Prime",
        "url": "https://www.coinbase.com/prime",
        "description": "Coinbase Prime is a full-service prime brokerage platform with everything that institutions need to execute trades and custody assets at scale.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/prime.webp"
    },
    {
        "name": "Synthswap",
        "url": "https://www.synthswap.io/",
        "description": "A decentralized protocol for trading with margin and synthetics on the Ethereum network - best known for Low Fees, Concentrated Liquidity and Futures.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/synthswap.webp"
    },
    {
        "name": "FXDX",
        "url": "https://fxdx.exchange",
        "description": "FXDX is a 0-trading fee decentralized derivative exchange offering 50x Leverage on ETH, cbETH and offers innovative yet robust LP structure for Real Yield.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/fxdx.webp"
    },
    {
        "name": "Tarot",
        "url": "https://www.tarot.to",
        "description": "Tarot is a decentralized lending protocol where users can participate as lenders or borrowers in isolated lending pools.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/tarot.webp"
    },
    {
        "name": "DefiEdge",
        "url": "https://www.defiedge.io",
        "description": "DefiEdge is an asset management protocol built on concentrated liquidity dexes and provides decentralized, non custodial way of managing strategies and protocol liquidity.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/defiedge.webp"
    },
    {
        "name": "HaloFi",
        "url": "https://halofi.me",
        "description": "Join HaloFi's savings challenges on Base! 🚀 Earn NFTs, build wealth & foster good financial habits. Fun & rewarding personal finance. All onchain!",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/halofi.webp"
    },
    {
        "name": "Slingshot Finance",
        "url": "https://slingshot.finance",
        "description": "The Slingshot web app and DeFi wallet support multi-chain swapping for top networks, 70k+ cryptocurrencies, cross-chain bridging, and the ultimate DeFi experience!",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/slingshot.webp"
    },
    {
        "name": "Theaggregator",
        "url": "https://theaggregator.xyz",
        "description": "Theaggregator stands as an exemplar of a highly potent decentralized finance (DeFi) toolkit, developed upon the foundational network of Base. This innovative toolkit seamlessly transposes the sophisticated realm of centralized finance into the domain of Decentralized Finance, exclusively within the confines of the Base network.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/theaggregator.webp"
    },
    {
        "name": "Dackieswap",
        "url": "https://www.dackieswap.xyz",
        "description": "DackieSwap is the native and community-owned DEX/Launchpad on Base. It offers great liquidity, simple features, friendly interface and unlimited benefits.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/dackie.webp"
    },
    {
        "name": "Synapse Protocol",
        "url": "https://www.synapseprotocol.com",
        "description": "Synapse is comprised of a cross-chain messaging framework and an economically secure method to reach consensus on the validity of cross-chain transactions, enabling developers to build truly native cross-chain apps.",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/synpase.webp"
    },
    {
        "name": "Enkrypt",
        "url": "https://www.enkrypt.com",
        "description": "Hold, buy, send, receive, and swap tokens. Manage your NFTs. Access web3 apps across multiple blockchains.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/enkrypt.webp"
    },
    {
        "name": "Obvious",
        "url": "https://www.obvious.technology",
        "description": "Obvious is a ERC-4337 compatible smart contract wallet focussed on simplifying transaction experience.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/obvious.webp"
    },
    {
        "name": "Krystal Wallet",
        "url": "https://krystal.app",
        "description": "Krystal is the simplest web3 wallet offering cutting-edge portfolio management and numerous on-chain transactions along with multiple security features to keep your assets secure.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/krystal.webp"
    },
    {
        "name": "Coinbase WaaS",
        "url": "https://www.coinbase.com/cloud/products/waas",
        "description": "The most user-friendly way to onboard your customers to web3.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/waas.webp"
    },
    {
        "name": "Coinbase Wallet",
        "url": "https://www.coinbase.com/wallet",
        "description": "The easiest and most secure crypto wallet and dapp browser. Your gateway to the decentralized web.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/wallet.webp"
    },
    {
        "name": "1rpc",
        "url": "https://1rpc.io",
        "description": "1RPC is a private RPC relay that eradicates metadata exposure and leakage, allowing users to gain control of their interactions with the blockchain with a one-click user experience.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/1rpc.webp"
    },
    {
        "name": "Aave",
        "url": "https://app.aave.com",
        "description": "Aave Protocol is a non-custodial liquidity protocol. Users can participate as suppliers, borrowers, or liquidators, earning interest on supplied assets and borrowing in an overcollateralized manner.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/aave.webp"
    },
    {
        "name": "Across Protocol",
        "url": "https://across.to/",
        "description": "Across Protocol is a leading cross-chain token bridge that is secured by UMA's optimistic oracle. It is optimized for capital efficiency with a single liquidity pool, a competitive relayer landscape, and a no-slippage fee model. You can expect secure, fast and affordable cross-chain token transfers with Across.",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/across_protocol.webp"
    },
    {
        "name": "Anotherblock",
        "url": "https://anotherblock.io/",
        "description": "anotherblock is empowering the emotional and financial connection between creators and consumers. Collectors own future streaming royalties of high-end tracks and earn royalties when they stream.",
        "tags": [
            "nft"
        ],
        "imageUrl": "/images/partners/anotherblock.webp"
    },
    {
        "name": "Aragon Project",
        "url": "https://aragon.org/",
        "description": "Aragon builds secure and flexible tools that enable anyone to launch and manage DAOs. Aragon built the first DAO framework, which secures the governance of over 15B in TVL, and recently launched the no-code Aragon App and modular Aragon OSx protocol.",
        "tags": [
            "dao"
        ],
        "imageUrl": "/images/partners/aragon_project.webp"
    },
    {
        "name": "Axelar",
        "url": "https://axelar.network",
        "description": "Axelar delivers secure interchain communication. That means dApp users can interact with any asset, any application, on any chain, with one click. You can think of it as Stripe for Web3.\n\nDevelopers interact with a simple API atop a permissionless network that routes messages and ensures network security via proof-of-stake consensus.",
        "tags": [
            "x-chain"
        ],
        "imageUrl": "/images/partners/axelar.webp"
    },
    {
        "name": "Beefy",
        "url": "https://beefy.com/",
        "description": "Beefy automates yield farming to make DeFi easy, safe and efficient for all. By autocompounding your tokens, Beefy unlocks higher returns so you earn more of what you love.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/beefy.webp"
    },
    {
        "name": "Blockdaemon",
        "url": "https://blockdaemon.com",
        "description": "The institutional-grade blockchain infrastructure for Web3. Blockdaemon provides an end-to-end suite of blockchain tools, including dedicated nodes, APIs, staking, liquid staking, MPC tech, and more.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/blockdaemon.webp"
    },
    {
        "name": "Blocknative",
        "url": "https://onboard.blocknative.com",
        "description": "Blocknative’s Web3 Onboard is an open-source library that enables dapps to easily connect 40+ wallets, preview transactions, deliver real-time notifications, and more through a great developer UX.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/blocknative.webp"
    },
    {
        "name": "Bonfire",
        "url": "https://www.bonfire.xyz/",
        "description": "Bonfire is a no-code website builder and community platform for web3 creators. Bonfire’s toolkit lets creators design custom drops, and offer fans exclusive content and gated experiences on their own branded website.",
        "tags": [
            "nft"
        ],
        "imageUrl": "/images/partners/bonfire.webp"
    },
    {
        "name": "Celer Network",
        "url": "https://celer.network/",
        "description": "Celer Network is a blockchain interoperability protocol that allows users to seamlessly access a diverse range of tokens, DeFi protocols, GameFi applications, NFT marketplaces, and more across multiple blockchains with just one click.",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/celer_network.webp"
    },
    {
        "name": "Cielo",
        "url": "https://app.cielo.finance",
        "description": "The most powerful onchain wallet tracking platform. Retail, degens, investors, and onchain researchers all use Cielo to better understand the blockchain. Track up to 250 wallets for free.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/cielo.webp"
    },
    {
        "name": "Compound",
        "url": "https://compound.finance",
        "description": "The Compound Protocol is one of the first decentralized finance applications to let users earn interest on their digital assets, or borrow using digital assets as collateral.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/compound.webp"
    },
    {
        "name": "Covalent",
        "url": "https://www.covalenthq.com/",
        "description": "Covalent's industry-leading Unified API brings visibility to billions of data points across 100+ blockchains for developers building multi-chain applications.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/covalent.webp"
    },
    {
        "name": "Crossmint",
        "url": "https://crossmint.com",
        "description": "Enterprise-grade infrastructure to build NFT use cases accessible to everyone. Including NFT wallets-as-a-service, minting, payments, and token-gating APIs.",
        "tags": [
            "nft"
        ],
        "imageUrl": "/images/partners/crossmint.webp"
    },
    {
        "name": "CyberConnect",
        "url": "https://cyberconnect.me/",
        "description": "CyberConnect is web3’s earliest and biggest social network that enables developers to create social applications utilizing ERC-4337/Account Abstraction, empowering users to own their digital identity, content, connections, and interactions.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/cyberconnect.webp"
    },
    {
        "name": "Debank",
        "url": "https://debank.com",
        "description": "The Web3-native messenger & the best Web3 portfolio tracker that covers all your tokens, DeFi protocols, NFTs across all EVM chains.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/debank.webp"
    },
    {
        "name": "deBridge",
        "url": "https://debridge.finance/",
        "description": "deBridge is an infrastructure for high performance interoperability. By removing the bottlenecks and risks of liquidity pools, deBridge enables DeFi applications to scale faster with ultra capital-efficient and deep liquidity transfers across chains.",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/debridge.webp"
    },
    {
        "name": "Decent",
        "url": "https://decent.xyz/",
        "description": "Cross-chain transactions, meet one-tap payments. Serve customers of every stripe with The Box, empowering them with automatic swaps, built‑in bridging, and seamless secondary sales.",
        "tags": [
            "nft"
        ],
        "imageUrl": "/images/partners/decent.webp"
    },
    {
        "name": "Galxe",
        "url": "https://galxe.com/",
        "description": "Galxe is the leading platform for building web3 community. With over 11 million active users to date, Galxe has propelled the growth of Optimism, Polygon, Arbitrum, and more than 2800 partners with reward-based loyalty programs. Start your campaign today at galxe.com",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/galxe.webp"
    },
    {
        "name": "Gauntlet",
        "url": "https://www.gauntlet.xyz",
        "description": "Solving DeFi's most complex economic problems to drive adoption and understanding of the financial systems of the future | research, risk mgmt, and optimization",
        "tags": [
            "security",
            "infra"
        ],
        "imageUrl": "/images/partners/gauntlet.webp"
    },
    {
        "name": "Helika",
        "url": "https://www.helika.io/",
        "description": "Helika is a full-stack blockchain analytics company focusing on integrated onchain, off-chain and social data to provide gaming studios and brands with powerful self-serve analytics to help better understand users, increase engagement, improve retention and drive growth.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/helika.webp"
    },
    {
        "name": "Mirror",
        "url": "https://www.mirror.xyz",
        "description": "Built on web3 for web3, Mirror’s robust publishing platform pushes the boundaries of writing online—whether it’s the next big white paper or a weekly community update.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/mirror.webp"
    },
    {
        "name": "Highlight",
        "url": "https://www.highlight.xyz",
        "description": "Highlight is a platform for making art and culture on the blockchain.",
        "tags": [
            "nft"
        ],
        "imageUrl": "/images/partners/highlight.webp"
    },
    {
        "name": "Hop Protocol",
        "url": "https://hop.exchange/",
        "description": "A protocol for sending tokens across rollups and their shared layer-1 network in a quick and trustless manner.",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/hop_protocol.webp"
    },
    {
        "name": "Iskra",
        "url": "https://iskra.world/",
        "description": "Iskra offers an all-in-one web3 game platform that rewards players and developers through a unique community system. We believe that on-boarding the next generation of web3 users will be driven by engaging games that demonstrate the true value of digital ownership.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/iskra.webp"
    },
    {
        "name": "Moonwell",
        "url": "https://moonwell.fi",
        "description": "Moonwell is an open and permissionless lending and borrowing DeFi protocol.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/moonwell.webp"
    },
    {
        "name": "Moso",
        "url": "https://moso.xyz",
        "description": "Shop online at one of the 2,500 supported Moso stores and earn the crypto of your choice!",
        "tags": [
            "onramp"
        ],
        "imageUrl": "/images/partners/moso.webp"
    },
    {
        "name": "Nansen",
        "url": "https://www.nansen.ai",
        "description": "Nansen is a blockchain analytics platform that enriches onchain data with millions of wallet labels. Crypto investors use Nansen to discover opportunities, perform due diligence and defend their portfolios with our real-time dashboards and alerts.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/nansen.webp"
    },
    {
        "name": "Odos",
        "url": "http://app.odos.xyz",
        "description": "Odos traverses a large universe of possible token swap combinations and non-linear paths delivering greater savings to its users. Swap one or multiple tokens in a single atomic transaction.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/odos.webp"
    },
    {
        "name": "Omni Network",
        "url": "https://omni.network",
        "description": "The Omni Network is a layer 1 blockchain that empowers developers to build global applications across all rollups. This is achieved securely by restaking $ETH through EigenLayer.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/omni_network.webp"
    },
    {
        "name": "OpenCover",
        "url": "https://opencover.com",
        "description": "OpenCover makes it easy and affordable to cover your portfolio against onchain risks such as smart contract exploits and oracle failures.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/opencover.webp"
    },
    {
        "name": "Pyth Network",
        "url": "https://pyth.network/",
        "description": "Pyth delivers real-time market data feeds to 20+ blockchains by sourcing from exchanges, market makers, and trading firms. 150+ DeFi apps trust and rely on Pyth to stay competitive.\n\nOnly Pyth provides the speed, market coverage, and robustness needed to onboard millions of users.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/pyth_network.webp"
    },
    {
        "name": "Rainbow Wallet",
        "url": "https://rainbow.me",
        "description": "Rainbow is a fun, simple, and secure way to get started with crypto and explore the new world of Ethereum. You can use Rainbow to purchase, manage, and display Ethereum-based assets.\n\nGreat for newcomers and power users alike, Rainbow allows you to be in total control of your money.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/rainbow_wallet.webp"
    },
    {
        "name": "Socket",
        "url": "https://socket.tech/",
        "description": "Socket is an interoperability protocols which allows seamless asset & data transfer across chains, enabling developers to build truly cross-chain apps",
        "tags": [
            "x-chain"
        ],
        "imageUrl": "/images/partners/socket.webp"
    },
    {
        "name": "Syndicate",
        "url": "https://syndicate.io/",
        "description": "Syndicate is a platform that allows customers to create communities, products, and experiences onchain at enterprise scale.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/syndicate.webp"
    },
    {
        "name": "Tally",
        "url": "https://www.tally.xyz",
        "description": "Tally powers the largest DAOs in the Ethereum ecosystem. With Tally, you can decentralize your Protocol, project, L2 and more. Build on Tally for a robust decentralized ecosystem of tooling.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/tally.webp"
    },
    {
        "name": "Tenderly",
        "url": "https://tenderly.co/",
        "description": "Tenderly is a full-stack infrastructure solution for every step of the dapp development lifecycle. Focus on your product with Tenderly infra and tooling for dapp development, testing, deployment, and monitoring.",
        "tags": [
            "security",
            "infra"
        ],
        "imageUrl": "/images/partners/tenderly.webp"
    },
    {
        "name": "The Graph",
        "url": "https://thegraph.com/",
        "description": "The Graph is the indexing and query layer of web3. Developers build and publish open APIs, called subgraphs, that applications can query using GraphQL. The Graph currently supports indexing data from over 40 different networks including Ethereum, NEAR, Arbitrum, Optimism, ZkSync, Polygon, Avalanche, Celo, Fantom, Moonbeam, IPFS, Cosmos Hub and PoA with more networks coming soon. To date, 88,900+ subgraphs have been deployed on the hosted service. Tens of thousands of developers use The Graph for applications such as Uniswap, Synthetix, KnownOrigin, Art Blocks, Gnosis, Balancer, Livepeer, DAOstack, Audius, Decentraland, and many others.\n\nThe Graph Network’s self service experience for developers launched in July 2021; since then over 800+ subgraphs have migrated to the Network, with 450+ Indexers serving subgraph queries, 11,300+ Delegators, and 2,500+ Curators to date. More than 5.6+ million GRT has been signaled to date.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/the_graph.webp"
    },
    {
        "name": "ThirdWeb",
        "url": "https://thirdweb.com/",
        "description": "thirdweb is a complete web3 development framework that provides everything you need to build, launch, and manage web3 apps. We provide dev tools (SDKs in common languages, plug-and-play UI components, ContractKit) and fully managed infrastructure services (storage, RPC nodes, onchain analytics, and more) to enable you to go-to-market faster.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/thirdweb.webp"
    },
    {
        "name": "Wormhole",
        "url": "https://wormhole.com",
        "description": "Wormhole is a generic cross-chain message-passing protocol that gives developers the power to build decentralized applications that span the rapidly evolving blockchain ecosystem.",
        "tags": [
            "x-chain"
        ],
        "imageUrl": "/images/partners/wormhole.webp"
    },
    {
        "name": "XMTP",
        "url": "https://xmtp.org/",
        "description": "A decentralized communication protocol for secure and private messaging. \n\n- XMTP does notifications, DMs, 1:many broadcast messages, and soon group chats across web3 wallets and applications.\n- Over 400+ developers building with XMTP today.\n- XMTP is the messaging layer for Lens apps.\n- XMTP provides messaging within the Coinbase Wallet.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/xmtp.webp"
    },
    {
        "name": "Animoca Brands",
        "url": "https://www.animocabrands.com/",
        "description": "Animoca Brands and its various subsidiaries develop and publish a broad portfolio of blockchain games, traditional games, and other products",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/animoca_brands.webp"
    },
    {
        "name": "Parallel",
        "url": "https://parallel.life/",
        "description": "Parallel is a vast sci-fi universe with five factions battling for home. Assemble a deck and take the fight to Earth.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/parallel.webp"
    },
    {
        "name": "0x",
        "url": "https://0x.org/",
        "description": "Your one stop shop to build financial products on crypto rails. Enable faster trading, better prices and superior UX in your app.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/0x.webp"
    },
    {
        "name": "Amberdata",
        "url": "https://amberdata.io",
        "description": "Amberdata delivers comprehensive digital asset data and insights into blockchain networks, crypto markets, and decentralized finance, empowering financial institutions with critical data for research, trading, risk, analytics, reporting, and compliance.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/amberdata.webp"
    },
    {
        "name": "Balancer",
        "url": "https://balancer.fi/",
        "description": "Balancer is a decentralized automated market maker (AMM) protocol built on Ethereum that represents a flexible building block for programmable liquidity.\n\nBy separating the AMM curve logic and math from the core swapping functionality, Balancer becomes an extensible AMM that can incorporate any number of swap curves and pool types.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/balancer.webp"
    },
    {
        "name": "Beam",
        "url": "https://beam.eco",
        "description": "Beam is a self-custody payments wallet for the mainstream — no download or signup required. It's the easiest way on the planet to send money. Beam works with USDC and ECO (eco.com).",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/beam.webp"
    },
    {
        "name": "Biconomy",
        "url": "https://www.biconomy.io/",
        "description": "Biconomy brings blockchain-agnostic, web2-like experiences to dApps in a non-custodial manner with our comprehensive software development kit which is built on top of ERC4337 and designed specifically for decentralized applications (dApps).",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/biconomy.webp"
    },
    {
        "name": "Blast by Bware Labs",
        "url": "https://blastapi.io/",
        "description": "Blast is a decentralized API platform with best-in-class response times and availability. It leverages the power of hundreds of node providers and advanced routing algorithms for unmatched service quality!",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/blast.webp"
    },
    {
        "name": "Blockscout",
        "url": "https://www.blockscout.com/",
        "description": "Blockscout is a comprehensive open-source tool for viewing blockchain data, including transactions, addresses, and contracts. Plus, it offers easy-to-use APIs.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/blockscout.webp"
    },
    {
        "name": "Brave",
        "url": "https://brave.com",
        "description": "Brave is on a mission to protect your privacy online. We make a suite of internet privacy tools—including our browser and search engine—that shield you from the ads, trackers, and other creepy stuff trying to follow you across the web.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/brave.webp"
    },
    {
        "name": "Bridge",
        "url": "https://bridge.xyz",
        "description": "APIs to move into, out of, and between any form of a dollar.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/bridge.webp"
    },
    {
        "name": "Bungee",
        "url": "https://Bungee.Exchange",
        "description": "Bungee integrates bridges & DEXs to help you find the best route across 13+ chains.",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/bungee.webp"
    },
    {
        "name": "ChainSafe Gaming",
        "url": "https://gaming.chainsafe.io/",
        "description": "We empower creators. From digital collectibles to in-game assets, incentive mechanisms, and everything in between, change how your players own, create, and get rewarded with ChainSafe Gaming.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/chainsafe_gaming.webp"
    },
    {
        "name": "DefiLlama",
        "url": "https://defillama.com/",
        "description": "DefiLlama is the largest TVL aggregator for DeFi (Decentralized Finance). We are fully open-source and our focus is on accurate data and transparent methodology",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/defillama.webp"
    },
    {
        "name": "DeForm",
        "url": "https://deform.cc/",
        "description": "DeForm is the most beautiful and easiest to use web3 form builder. Get verified wallet addresses, onchain data lookups, Twitter/Discord/Telegram accounts, and talk to your community!",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/deform.webp"
    },
    {
        "name": "Exodus",
        "url": "https://www.exodus.com/",
        "description": "Exodus lets users secure, manage, and swap cryptocurrencies like Bitcoin, Ethereum, & more across 10,000+ asset pairs from a beautiful, easy-to-use wallet. Available for desktop, mobile, and browser.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/exodus.webp"
    },
    {
        "name": "Extra Finance",
        "url": "https://app.extrafi.io/",
        "description": "Extra Finance is a leveraged yield strategy & lending protocol.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/extra_finance.webp"
    },
    {
        "name": "Fireblocks",
        "url": "https://www.fireblocks.com/",
        "description": "Fireblocks provides a suite of applications to manage digital asset operations and a complete development platform to build your business on the blockchain.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/fireblocks.webp"
    },
    {
        "name": "Flipside",
        "url": "https://flipsidecrypto.xyz/",
        "description": "Builders, investors an analysts can unlock Web3 success with Flipside's trusted blockchain data and expert insights. Grow with governance, acquisition tools, business intelligence and analytics.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/flipside.webp"
    },
    {
        "name": "GangstaVerse",
        "url": "https://war-base.gangstaverse.co/",
        "description": "GangstaVerse is a multi-chain RPG that combines digital art and web3 game ecosystem. GangWar is a semi-passive simulation-based game where gangsters and detectives fight to establish power in the city.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/gangstaverse.webp"
    },
    {
        "name": "Go-Go-Glover",
        "url": "https://go-go-glover.com",
        "description": "\"Dive into the Glover universe in a thrilling endless runner! Dodge obstacles, collect magic crystals, and relive the N64 magic on mobile!\"",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/go-go-glover.webp"
    },
    {
        "name": "Guild",
        "url": "https://guild.xyz",
        "description": "Guild is an automation platform for onboarding Web3 communities, it can identify NFT holders, active developers, social media influencers and any other custom categories of community members based on their Guild account.",
        "tags": [
            "nft"
        ],
        "imageUrl": "/images/partners/guild.webp"
    },
    {
        "name": "LayerZero",
        "url": "https://layerzero.network/",
        "description": "LayerZero is the leading blockchain messaging protocol. LayerZero's advanced messaging infrastructure seamlessly connects over 30 blockchains and facilitates transparent and secure cross-chain messaging from one easy-to-use interface.",
        "tags": [
            "x-cross"
        ],
        "imageUrl": "/images/partners/layerzero.webp"
    },
    {
        "name": "Onramp Money",
        "url": "https://onramp.money/",
        "description": "Onramp.money is a convenient & secure way to convert your FIAT to Web3 money in <60s! We allow your users to buy & sell digital assets with lowest processing fees. Onramp.money can be easily integrated with your global decentralized application (dApp) to smoothly onboard users to purchase multiple digital assets across chains.",
        "tags": [
            "onramp"
        ],
        "imageUrl": "/images/partners/onramp_money.webp"
    },
    {
        "name": "Pike",
        "url": "https://pike.finance",
        "description": "Pike is a Universal Liquidity Protocol, it is designed to unleash utility for native crypto assets by aggregating liquidity across blockchain networks.\n\nPike’s vision is to become a universal liquidity layer that enables frictionless movement and accessibility of native assets across ecosystems. Pike is built on top of Wormhole’s Cross-Chain Data Messaging and Circle’s Cross-Chain Transfer Protocol (CCTP).\n\nOne fundamental primitive of Pike is to enable users to supply native crypto assets on source chains and borrow native crypto assets on destination chains without interacting with cross-chain bridges and handling wrapped assets.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/pike.webp"
    },
    {
        "name": "Privy",
        "url": "https://www.privy.io/",
        "description": "Privy is a simple library to onboard all your users to web3, with embedded wallets for web3 newcomers, reliable connectors for web3 natives, and powerful user management.",
        "tags": [
            "onramp"
        ],
        "imageUrl": "/images/partners/privy.webp"
    },
    {
        "name": "Quicknode",
        "url": "https://www.quicknode.com/",
        "description": "As the leading end-to-end web3 developer platform, QuickNode is transforming blockchain infrastructure and tooling by simplifying web3 development and providing high-performance access to 24+ blockchains. Since 2017, QuickNode has empowered hundreds of thousands of top developers and companies to focus on innovation by accelerating dApp build times and offering enterprise-grade solutions to businesses of every size.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/quicknode.webp"
    },
    {
        "name": "Rabby Wallet",
        "url": "https://rabby.io",
        "description": "The game-changing wallet for Ethereum and all EVM chains",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/rabby_wallet.webp"
    },
    {
        "name": "Reservoir",
        "url": "https://reservoir.tools/",
        "description": "The most powerful tools to build buying & selling into your app - access NFT data, create, store, and fill NFT orders.",
        "tags": [
            "nft"
        ],
        "imageUrl": "/images/partners/reservoir.webp"
    },
    {
        "name": "rhino.fi",
        "url": "https://app.rhino.fi/bridge",
        "description": "Your lightning-fast secure bridge for seamless cross-chain transactions.",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/rhinofi.webp"
    },
    {
        "name": "Satsuma",
        "url": "https://www.satsuma.xyz/",
        "description": "Save months of development time with our hosted subgraph indexing. Instead of focusing on backend development and devops, write a subgraph in < 1 hr and get a custom GraphQL API for your dApp.\n\nProjects like Decentraland, Aragon, and Treasure use Satsuma for our 99.9% uptime, up to 5x+ faster indexing, and comprehensive developer tooling.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/satsuma.webp"
    },
    {
        "name": "Sequence",
        "url": "https://sequence.xyz/",
        "description": "Sequence is the all-in-one developer platform + smart wallet that makes building web3 games and applications easy.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/sequence.webp"
    },
    {
        "name": "Snaky Cat",
        "url": "https://snakycat.io",
        "description": "Control a unique feline with a snake-like body, feast on food to stretch and grow. Outmaneuver other cats, seize their remains, become the longest cat and slither up the leaderboard, scoring purr-ecious tokens!",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/snaky_cat.webp"
    },
    {
        "name": "Spearbit",
        "url": "https://spearbit.com/",
        "description": "Spearbit is a global distributed network of industry-leading security experts that offer web3 security review and consulting services.",
        "tags": [
            "security",
            "infra"
        ],
        "imageUrl": "/images/partners/spearbit.webp"
    },
    {
        "name": "Superfluid",
        "url": "https://www.superfluid.finance/",
        "description": "Superfluid is the industry-leading revolutionary asset streaming protocol that brings real-time subscriptions, salaries, vesting, and rewards to DAOs and crypto-native businesses worldwide.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/superfluid.webp"
    },
    {
        "name": "Transak",
        "url": "https://transak.com/",
        "description": "Transak is a global web3 payment and onboarding infrastructure provider, facilitating seamless transitions between traditional finance and crypto assets.\n\nWeb3 platforms using Transak can embed the best way to onboard users by enabling them to buy or sell crypto assets from 150+ countries, as Transak abstracts away the complexity of user KYC, risk monitoring, compliance, payment methods and customer support.\n\nTransak’s product suite includes robust fiat-to-crypto services (On/Off-Ramps), a fiat-to-smart-contract solution (Transak One), and a fiat-to-NFT checkout solution.\n\nAs a regulated, non-custodial payments layer, Transak supports onboarding to 160+ crypto assets across 75+ blockchains. Trusted by over 350+ applications, including MetaMask and Coinbase Wallet, Transak is making web3 applications more accessible.\n\nFor more information, visit transak.com or follow us on twitter.com/transak",
        "tags": [
            "onramp"
        ],
        "imageUrl": "/images/partners/transak.webp"
    },
    {
        "name": "Truflation",
        "url": "https://truflation.com/",
        "description": "Truflation is revolutionizing financial insights with real-time, unbiased economic data through a decentralized onchain oracle",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/truflation.webp"
    },
    {
        "name": "WalletConnect",
        "url": "https://www.walletconnect.com",
        "description": "WalletConnect was founded with the mission to connect wallets and dapps, and the scope of our ambition has erupted along with the ecosystem. Today, WalletConnect is the communications protocol connecting web3, as we focus on assembling a messaging layer with our SDKs that enable authentication, push notifications, and wallet messaging. Our infrastructure and tools help developers build apps and expand experiences for the millions - and soon, billions - of users exploring the fast-growing world of web3.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/walletconnect.webp"
    },
    {
        "name": "Words3",
        "url": "https://words3.xyz",
        "description": "Compete for ETH in a new crossword-style game... where every move is onchain!",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/words3.webp"
    },
    {
        "name": "XDAO",
        "url": "https://xdao.app",
        "description": "XDAO is a versatile tool that empowers individuals and teams to effortlessly create a DAO.",
        "tags": [
            "dao"
        ],
        "imageUrl": "/images/partners/xdao.webp"
    },
    {
        "name": "Yield Guild Games",
        "url": "https://yieldguild.io",
        "description": "Yield Guild Games (YGG) is the world’s first and biggest web3 gaming guild where players can enrich themselves as they find their community, discover games and level up together.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/yield_guild_games.webp"
    },
    {
        "name": "Zapper",
        "url": "https://zapper.xyz/",
        "description": "Zapper is a social web3 explorer which allows users to follow the blockchain journey of other people in NFTs, DeFi and DAOs. Our mission to make the blockchain readable and accessible to everyone.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/zapper.webp"
    },
    {
        "name": "Zellic",
        "url": "https://zellic.io/",
        "description": "Zellic is a blockchain security firm solving the most critical software assurance problems. Our audits prevent business-ending hacks.",
        "tags": [
            "security",
            "infra"
        ],
        "imageUrl": "/images/partners/zellic.webp"
    },
    {
        "name": "Ankr",
        "url": "https://www.ankr.com/",
        "description": "Build on Web3 with a fast, reliable and distributed network of blockchain nodes",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/ankr.webp"
    },
    {
        "name": "Chainlink",
        "url": "https://chain.link/",
        "description": "Chainlink is the industry-standard Web3 services platform connecting the people, businesses, and data of today with the Web3 world of tomorrow.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/chainlink.webp"
    },
    {
        "name": "DODO",
        "url": "https://dodoex.io/en",
        "description": "DODO is a decentralized trading platform that uses the innovative Proactive Market Maker (PMM) algorithm to provide efficient onchain liquidity for Web3 assets, making it easy for everyone to issue and trade these assets.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/dodo.webp"
    },
    {
        "name": "ETHLas",
        "url": "https://ethlas.com/",
        "description": "Ethlas engineers the future of gaming. The company builds games and infrastructure tools, unlocking the next level of Web3 experiences. They make Web3 more accessible and safe for both users and companies.\n\nEthlas aspires to be the Epic Valve of Web3 – great companies who have built lasting impact both through the game titles they create, but also through the gaming infrastructure that they provide to other game companies.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/ethlas.webp"
    },
    {
        "name": "Manifold",
        "url": "https://studio.manifold.xyz/",
        "description": "Manifold Studio allows you to build your own personalized web3 creative platform and sell digital goods(NFTs). The tools allow for the highest level of provenance and complete control of your work.",
        "tags": [
            "nft"
        ],
        "imageUrl": "/images/partners/manifold.webp"
    },
    {
        "name": "OpenSea",
        "url": "https://opensea.io/",
        "description": "OpenSea is a peer-to-peer marketplace for NFTs, rare digital items, and crypto collectibles. Buy, sell, auction, and discover rare digital art, blockchain game items, and more.",
        "tags": [
            "nft"
        ],
        "imageUrl": "/images/partners/opensea.webp"
    },
    {
        "name": "UNKJD",
        "url": "http://unkjd.com/",
        "description": "In UNKJD players take on the role of a soccer team owner, collecting athletes and playing in the leagues. It's a fast-paced, strategic, turn-based board game.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/unkjd2.webp"
    },
    {
        "name": "Uniswap",
        "url": "http://uniswap.com/",
        "description": "The Uniswap Protocol is the largest decentralized exchange with over $1.6T in trading volume. Uniswap Labs builds products that let you buy, sell, and use your self custodied digital assets in a safe, simple, and secure way.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/uniswap.webp"
    },
    {
        "name": "Unlock Protocol",
        "url": "https://unlock-protocol.com/",
        "description": "Unlock is an open-source, collectively owned, community-governed, peer-to-peer system that creates time-based memberships",
        "tags": [
            "nft"
        ],
        "imageUrl": "/images/partners/unlock_protocol.webp"
    },
    {
        "name": "AppliedPrimate",
        "url": "https://appliedprimate.com/",
        "description": "AppliedPrimate Megaforce Sentinel Collectible Card Game is an onchain PVP game featuring AppliedPrimate Sentinel NFTs that was designed under advisement from Richard Garfield, creator of MAGIC: THE GATHERING.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/appliedprimate.webp"
    },
    {
        "name": "DIA",
        "url": "https://www.diadata.org/",
        "description": "DIA redefines oracles on 30+ L1/L2s: Fully customizable, unmet asset coverage 100% transparent. Enabling new primitives for DeFi, NFTfi, and GameFi.\n\nDIA's data feeds are fully customized with regard to the mix of sources and methodologies, resulting in tailor-made, high resilience feeds and thereby setting a new paradigm for oracles.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/dia.webp"
    },
    {
        "name": "Frame",
        "url": "https://frame.sh",
        "description": "System-wide web3 wallet for macOS, Windows, and Linux. Seamlessly access your web3 accounts from any browser, command-line, or native dapp.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/frame.webp"
    },
    {
        "name": "Game7",
        "url": "https://game7.io/",
        "description": "We are the voice at the forefront of the industry turning Web3 technology into tangible, real-world solutions for gaming. By supporting open-source software, diversity, education, and events we rally behind a core mission to solve Web3 gaming problems.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/game7.webp"
    },
    {
        "name": "Goldsky",
        "url": "https://goldsky.com/",
        "description": "Web3's Realtime Data Platform.\n\nBuild powerful dApps faster with premium blockchain indexing, instant subgraphs, and custom data streaming pipelines.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/goldsky.webp"
    },
    {
        "name": "Landtorn",
        "url": "https://landtorn.com/lorak",
        "description": "LandTorn is a platform hosting BASE native games. Play, compete, trade and win. Initially powered by multiple games around the TORN IP and NFT system.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/landtorn.webp"
    },
    {
        "name": "Maverick Protocol",
        "url": "https://app.mav.xyz/pools",
        "description": "Maverick Protocol is eliminating inefficiency from DeFi by helping users put liquidity where it can do the most work. Backed by Founders Fund, Pantera Capital, Coinbase Ventures, Circle Ventures, etc",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/maverick_protocol.webp"
    },
    {
        "name": "Nouns Builder",
        "url": "https://nouns.build",
        "description": "Governed by BuilderDAO, Nouns Builder is a tool lets you create Nounish DAOs easily. Build and empower your community with onchain governance and treasury.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/nouns_builder.webp"
    },
    {
        "name": "Onboard",
        "url": "https://onboard.xyz",
        "description": "The simplest and most secure self-custody wallet to convert digital assets to local currency in minutes and spend your crypto anytime, anywhere.",
        "tags": [
            "onramp"
        ],
        "imageUrl": "/images/partners/onboard.webp"
    },
    {
        "name": "Pixelmon",
        "url": "https://www.pixelmon.ai/",
        "description": "Building the First Truly Decentralized IP starting with a Multiplayer Open World Adventure and Monster Combat Arena.",
        "tags": [
            "gaming"
        ],
        "imageUrl": "/images/partners/pixelmon.webp"
    },
    {
        "name": "Safe Wallet",
        "url": "https://safe.global/",
        "description": "Safe is the most trusted platform to manage digital assets on Ethereum.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/safe.webp"
    },
    {
        "name": "Stargate Finance",
        "url": "https://stargate.finance/",
        "description": "Stargate is a fully composable liquidity transport protocol that lives at the heart of Omnichain DeFi",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/stargate.webp"
    },
    {
        "name": "SushiSwap",
        "url": "https://www.sushi.com/",
        "description": "Sushi is a leading multi-chain decentralized exchange (DEX) deployed across 25+ chains and featuring unique cross-chain swaps via SushiXSwap. Focusing on seamless user experiences, innovative trading, and enhanced liquidity provisions, Sushi is committed to being a community-built, open-source ecosystem of all the DeFi tools you need.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/sushiswap.webp"
    },
    {
        "name": "TBTC",
        "url": "https://dashboard.threshold.network/tBTC/mint",
        "description": "tBTC is a decentralized, permissionless, and scalable Bitcoin equivalent that allows users to access the Ethereum and the cross chain DeFi ecosystem. Each tBTC token is fully backed by 1 BTC held in reserve.\n\nThreshold Network, the builders of tBTC, replaces centralized intermediaries with a randomly selected group of node operators who secure users’ deposited Bitcoin through threshold cryptography.\n\nVisit https://threshold.network/ for more information.",
        "tags": [
            "bridge"
        ],
        "imageUrl": "/images/partners/tbtc.webp"
    },
    {
        "name": "Trust Wallet",
        "url": "https://trustwallet.com/",
        "description": "Trust Wallet is a multi-chain, self-custody wallet with 60M+ users. Supporting 70+ chains & 8M+ digital assets; you can manage crypto & NFTs, explore DeFi and connect to dApps safely & securely.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/trust_wallet.webp"
    },
    {
        "name": "Prophouse",
        "url": "https://prop.house",
        "description": "Prop House is public infrastructure by Nouns DAO that helps internet communities incentivize ecosystem development.",
        "tags": [
            "dao"
        ],
        "imageUrl": "/images/partners/prop_house.webp"
    },
    {
        "name": "Mint.fun",
        "url": "https://mint.fun/feed/trending",
        "description": "The fastest, safest, and most rewarding way to mint all the top new NFT projects.",
        "tags": [
            "nft"
        ],
        "imageUrl": "/images/partners/mint_fun.webp"
    },
    {
        "name": "Harvest Finance",
        "url": "https://harvest.finance",
        "description": "Taking advantage of the yield opportunities in DeFi can be a costly process in terms of time, risk and gas costs. Harvest Finance does the hard work of scouring the fields of DeFi for the best and safest yields, brings them to a single UX, and saves you a ton on gas fees with it's autocompounding feature. See the best yields that DeFi has to offer, set your crypto to work and let Harvest handle the rest!",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/harvest_finance.webp"
    },
    {
        "name": "Zora",
        "url": "https://zora.co/",
        "description": "Zora is a new kind of social network to express yourself. Create freely, connect with others, and discover the value of your imagination. Explore art, music, memes, and more.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/zora.webp"
    },
    {
        "name": "FWB",
        "url": "",
        "description": "Friends With Benefits (FWB) is a community of builders, creatives, and investors who believe in the power of social tokens and the communities they create.",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/fwb.webp"
    },
    {
        "name": "Indelible Labs",
        "url": "https://indelible.xyz/",
        "description": "We are making onchain NFT collections easy and affordable to create.",
        "tags": [
            "nft"
        ],
        "imageUrl": "/images/partners/indelible_labs.webp"
    },
    {
        "name": "OAK",
        "url": "https://www.oak.community/",
        "description": "OAK is a community currency for the People of Oakland ",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/oak.webp"
    },
    {
        "name": "Blackbird",
        "url": "https://www.blackbird.xyz/",
        "description": "Blackbird is a loyalty and membership platform built for the world's most exciting restaurants",
        "tags": [
            "social"
        ],
        "imageUrl": "/images/partners/blackbird.webp"
    },
    {
        "name": "Etherscan",
        "url": "https://basescan.org/",
        "description": "Etherscan is the leading block explorer and search, API & analytics platform for EVM compatible blockchains, with the mission of providing equitable access to blockchain data.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/etherscan.webp"
    },
    {
        "name": "RedStone",
        "url": "https://redstone.finance/",
        "description": "RedStone offers flexible Data Feeds with <10s update time perfect for Lending, Perpetuals, Options, Derivatives and other sophisticated DeFi Apps. Securing hundreds of millions of USD on mainnets.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/redstone.webp"
    },
    {
        "name": "Umbrella",
        "url": "https://www.umb.network/",
        "description": "Decentralized oracle with an extensive range of data solutions. Real-time, scalable and customizable data. Umbrella provides tailored solutions for specific needs.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/umbrella.webp"
    },
    {
        "name": "0xSplits",
        "url": "https://www.0xsplits.xyz/",
        "description": "Splits is a set of simple, modular smart contracts for safe and efficient onchain payments. You can split revenue from NFT sales, recoup expenses, diversify an income stream, withhold taxes, and much more.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/0xSplits.webp"
    },
    {
        "name": "Mnemonic",
        "url": "https://www.mnemonichq.com/",
        "description": "Build exceptional Web3 experiences faster with Mnemonic – the NFT data, analytics, and insights provider for builders, brands, and enterprises creating in Web3.",
        "tags": [
            "infra"
        ],
        "imageUrl": "/images/partners/mnemonic.webp"
    },
    {
        "name": "QiDao Protocol",
        "url": "http://mai.finance/",
        "description": "QiDao is an overcollateralized stablecoin protocol that allows users to mint stablecoins.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/qidao.webp"
    },
    {
        "name": "The Crypto App",
        "url": "https://thecrypto.app/",
        "description": "The Crypto App empowers crypto veterans and newcomers alike to enrich their understanding, make informed financial choices, manage investments, and stay on top of the latest in the space.",
        "tags": [
            "wallet"
        ],
        "imageUrl": "/images/partners/thecryptoapp.webp"
    },
    {
        "name": "DLN",
        "url": "https://dln.trade/",
        "description": "DLN is a high performance non-custodial exchange that enables fast, highly capital-efficient, and secure native trading across chains with zero locked liquidity.",
        "tags": [
            "defi"
        ],
        "imageUrl": "/images/partners/dln.webp"
    },
    {
        "name": "OpenCover",
        "tags": [
            "defi"
        ],
        "description": "OpenCover makes it easy and affordable to protect your portfolio against onchain risks. Get cover against smart contract hacks, oracle failures and more from vetted onchain underwriters.",
        "url": "https://opencover.com",
        "imageUrl": "/images/partners/opencover.png"
    },
    {
        "name": "DePerp DEX",
        "tags": [
            "defi"
        ],
        "description": "A trading platform that offers a fusion of exotic trading perps coupled with the comprehensive features of a CEX. Catering to a range of self-custody markets, including FX, Crypto, Metals, and Equity.",
        "url": "https://app.deperp.com/",
        "imageUrl": "/images/partners/deperp.png"
    },
    {
        "name": "Astaria",
        "tags": [
            "defi"
        ],
        "description": "Astaria is an oracle-less, intent-based, fixed-rate lending protocol supporting unlimited loan durations for ERC-20 and ERC-72. Mission: instant liquidity for any on-chain asset.",
        "url": "https://www.astaria.xyz",
        "imageUrl": "/images/partners/astaria.jpg"
    },
    {
        "name": "Orderly Network",
        "tags": [
            "defi"
        ],
        "description": "Orderly Network is revolutionizing trading with its permissionless liquidity layer. Built on omnichain infrastructure, Orderly incepts deep liquidity for any asset across blockchains.",
        "url": "https://orderly.network/",
        "imageUrl": "/images/partners/orderly.png"
    },
    {
        "name": "Krav Trade ",
        "tags": [
            "defi"
        ],
        "description": "At Krav, we're all about creating a robust DeFi infrasturcture where you, whether as a trader or a liquidity provider (LP), can truly thrive. If you're a trader, you'll love how you can use altcoins such as PEPE as collateral to open long or short positions on Bitcoin (BTC). And if you're an LP, you'll appreciate the steady income from transaction fees every time a trade happens.",
        "url": "https://krav.trade/",
        "imageUrl": "/images/partners/krav.png"
    },
    {
        "name": "goodcryptoX",
        "tags": [
            "defi"
        ],
        "description": "Non-custodial trading bot powered by smart contract wallets. Offers advanced DEX trading tools: from limit and trailing orders to DCA, Grid, Gems Sniper bots and much more",
        "url": "https://goodcrypto.app/x",
        "imageUrl": "/images/partners/goodcryptox.png"
    },
    {
        "name": "SwapBased",
        "tags": [
            "defi"
        ],
        "description": "Native Base DEX offering Swaps, Single Staking, Bridging, Perpetuals and Concentrated Liquidity all in one place!",
        "url": "https://swapbased.finance/",
        "imageUrl": "/images/partners/swapbased.png"
    },
    {
        "name": "Interport Finance",
        "tags": [
            "defi"
        ],
        "description": "Interport Finance stands out as a comprehensive cross-chain hub, designed to meet all your cross-chain needs in one place. This innovative platform is reshaping the world of DeFi by offering an intuitive and powerful solution that simplifies the complexities of blockchain interoperability.\n\nAs a point for various cross-chain functionalities, Interport Finance provides a seamless experience, making it an essential tool for navigating the dynamic and interconnected blockchain networks. Interport offers a user-centric, secure, and decentralized DeFi platform driven by innovation and community engagement\n\nOur core products are: cross-chain swaps - buy and sell any token on any supported chain, ensuring you have the fastest and cost-effective trade; bridge - effortlessly bridge stable and OFT tokens across multiple chains; gas transfer - efficient transfer of native tokens across an extensive network of 49 chains; earn - earning opportunities through our stablecoin pools and ITP farms.\n\nOur vision is to create a borderless DeFi ecosystem where every blockchain is interconnected. We aim to break down the barriers between chains, making the decentralized finance world more accessible, efficient, and user-friendly. Get ready to launch into DeFi's future with Interport! 🚀",
        "url": "https://interport.fi/",
        "imageUrl": "/images/partners/interport.png"
    },
    {
        "name": "Bitbond Token Tool",
        "tags": [
            "defi"
        ],
        "description": "Bitbond Token Tool is a web3 app that enables users to effortlessly create, manage and multisend ERC20 / ERC1400 tokens and NFTs across leading EVM chains. Users can rely on Token Tool’s configurable smart contract templates that have been audited by CertiK instead of having to program their own smart contracts. Token Tool offers a convenient user interface as well as an API in its enterprise version.",
        "url": "https://tokentool.bitbond.com/",
        "imageUrl": "/images/partners/tokentool.png"
    },
    {
        "name": "Crypto Hub",
        "tags": [
            "defi"
        ],
        "description": "Community-Driven Launchpad: Empowering Base Network startups with marketing services, retail fundraising, blockchain development, and tokenization.",
        "url": "https://cryptohub.investments/",
        "imageUrl": "/images/partners/cryptohub.png"
    },
    {
        "name": "Threebalance",
        "tags": [
            "defi"
        ],
        "description": "Threebalance is a portfolio rebalancing tool built on top of 1inch API. \nThe DApp enables you to rebalance or reposition your portfolio in 3 steps via one simple interface.",
        "url": "https://threebalance.co/",
        "imageUrl": "/images/partners/threebalance.png"
    },
    {
        "name": "Cat Town",
        "tags": [
            "gaming"
        ],
        "description": "Cat Town is an idle economy game where you can collect cats, earn rewards and embark on adventures! Discover tradable items and unlock soulbound NFTs and achievements!",
        "url": "https://www.cat.town",
        "imageUrl": "/images/partners/cattown.png"
    },
    {
        "name": "UMA",
        "tags": [
            "infra"
        ],
        "description": "UMA builds products that help builders scale. Deploy prediction markets and insurance protocols, with the Optimistic Oracle, Decentralize anything with oSnap. Capture OEV with Oval. \n",
        "url": "https://uma.xyz",
        "imageUrl": "/images/partners/uma.png"
    },
    {
        "name": "Pintu Web3",
        "tags": [
            "wallet"
        ],
        "description": "Pintu is an Indonesian-licensed crypto exchange that features an MPC wallet for easier Web3 access. It supports multiple blockchain networks, including Base, Ethereum, Polygon, Arbitrum, and Optimism.",
        "url": "https://pintu.co.id/en/web3",
        "imageUrl": "/images/partners/pintu.png"
    },
    {
        "name": "Nitro (by Router Protocol)",
        "tags": [
            "bridge"
        ],
        "description": "Router Nitro, developed by Router Protocol, stands out as a premier gas-efficient, rapid, and remarkably cost-effective intent-based bridge. It excels in supporting both EVM and non-EVM transactions. Renowned for its unparalleled affordability, speed, and security, it is one of the most economical, swift, and secure solutions available.",
        "url": "https://nitro.routerprotocol.com/",
        "imageUrl": "/images/partners/nitro.png"
    },
    {
        "name": "Retro Bridge",
        "tags": [
            "bridge"
        ],
        "description": "RetroBridge is an advanced cross-chain bridging solution designed to streamline the process of transferring assets across different blockchain networks. ",
        "url": "https://retrobridge.io/",
        "imageUrl": "/images/partners/retro.png"
    },
    {
        "name": "Chainge",
        "tags": [
            "bridge"
        ],
        "description": "One marketplace. All Crypto.",
        "url": "https://dapp.chainge.finance",
        "imageUrl": "/images/partners/chainge.png"
    },
    {
        "name": "Common",
        "tags": [
            "dao"
        ],
        "description": "An all-in-one space with transparent rewards, roles, and discussion for any community.",
        "url": "https://www.common.xyz",
        "imageUrl": "/images/partners/commonxyz.png"
    },
    {
        "name": "Cornucopias",
        "tags": [
            "gaming"
        ],
        "description": "Welcome to Cornucopias: a new MMO where you have the freedom to live any life you desire. Up here in the clouds, the sky is no longer the limit. ",
        "url": "https://cornucopias.io",
        "imageUrl": "/images/partners/cornucopias.png"
    },
    {
        "name": "Pixotchi",
        "tags": [
            "gaming"
        ],
        "description": "Pixotchi, where you grow, strategize, and earn rewards as you cultivate your garden on Base with $SEED! ",
        "url": "https://app.pixotchi.tech/",
        "imageUrl": "/images/partners/pixotchi.png"
    },
    {
        "name": "Chainbase Network",
        "tags": [
            "infra"
        ],
        "description": "Chainbase is the first omnichain data network powering the machine economy. It operates as a modular layer enabling interoperability and programmability between cross-chain data. It is designed to provide a trustless, permissionless, and permanent data access environment for Crypto and AI by building a global supercluster.",
        "url": "https://chainbase.com/",
        "imageUrl": "/images/partners/chainbase.png"
    },
    {
        "name": "Noves",
        "tags": [
            "infra"
        ],
        "description": "Noves (no-vez) is the leading provider of translated blockchain data. Instead of raw and unreadable data, Noves delivers translated data with meaningful information about any onchain transaction.",
        "url": "https://noves.fi ",
        "imageUrl": "/images/partners/noves.png"
    },
    {
        "name": "Cryptix Tokenization - Tokenlaunchpad",
        "tags": [
            "infra"
        ],
        "description": "Tokenlaunchpad by Cryptix Tokenization is a web app that enables anyone, with or without coding skills, to create a token. All that’s needed is a working browser and browser wallet such as Metamask.",
        "url": "https://app.tokenlaunchpad.eu/",
        "imageUrl": "/images/partners/cryptix.png"
    },
    {
        "name": "Portal",
        "tags": [
            "infra"
        ],
        "description": "Portal is an embedded blockchain infrastructure company with non-custodial wallets, on/off ramps, and security firewall to power cross-border payments, embedded Web3 wallets, remittances, and more.",
        "url": "https://www.portalhq.io/",
        "imageUrl": "/images/partners/portal.jpg"
    },
    {
        "name": "Mobula",
        "tags": [
            "infra"
        ],
        "description": "Mobula provides curated datasets for builders: market data with Octopus, wallets data, metadata with Metacore, alongside with REST, GraphSQL & SQL interfaces to query them.",
        "url": "https://mobula.io",
        "imageUrl": "/images/partners/mobula.jpg"
    },
    {
        "name": "Mintpad",
        "tags": [
            "nft"
        ],
        "description": "Mintpad makes it easy to start an NFT collection. All you need is your artwork and a cryptocurrency wallet. Our platform takes care of the rest, handling everything else you need.",
        "url": "https://mintpad.co/",
        "imageUrl": "/images/partners/mintpad.png"
    },
    {
        "name": "Collectify",
        "tags": [
            "nft"
        ],
        "description": "Launch NFT projects and build your own ecosystem with Collectify.\nOur no-code toolkit empowers small teams and individuals with tools from contract creation, to post-mint project management.",
        "url": "https://collectify.app/",
        "imageUrl": "/images/partners/collectify.png"
    },
    {
        "name": "Innovaz",
        "tags": [
            "nft"
        ],
        "description": "NFT-Marketplace-as-a-Service with diverse templates. Your dream NFT Marketplace, ready in 15 minutes!",
        "url": "https://innovaz.io/",
        "imageUrl": "/images/partners/innovaz.png"
    },
    {
        "name": "Codeslaw",
        "tags": [
            "security"
        ],
        "description": "Codeslaw is a code search engine for verified smart contracts on Base, Ethereum and beyond to help developers find and learn from verified and live smart contracts",
        "url": "https://codeslaw.app",
        "imageUrl": "/images/partners/codeslaw.png"
    },
    {
        "name": "Everyworld ",
        "tags": [
            "social"
        ],
        "description": "Everyworld is a rewarded ads protocol that rewards people for consuming and engaging with promoted content. ",
        "url": "https://www.everyworld.com/",
        "imageUrl": "/images/partners/everyworld.png"
    },
    {
        "name": "Circle.tech",
        "tags": [
            "social"
        ],
        "description": "Paywall and monetize your time by providing gated access and content to your most valuable fans.",
        "url": "https://circle.tech",
        "imageUrl": "/images/partners/circletech.jpeg"
    },
    {
        "name": "ResearchHub",
        "tags": [
            "social"
        ],
        "description": "ResearchHub is a modern day preprint server that incentivizes scientists to fund, create, and publish open and transparent research.",
        "url": "https://www.researchhub.com/",
        "imageUrl": "/images/partners/researchhub.png"
    },
    {
        "name": "tide protocol",
        "tags": [
            "social"
        ],
        "description": "Tide helps projects retain users via points and targeted airdrops",
        "url": "https://landing.tideprotocol.xyz/",
        "imageUrl": "/images/partners/tide.png"
    },
    {
        "name": "LogX",
        "tags": [
            "defi"
        ],
        "description": "LogX Pro is an Advanced Orderbook DEX for pro traders with instant trades, deep liquidity, tight spreads, and seamless, gas-free experience - all with unmatched security and transparency",
        "url": "https://pro.logx.trade/?redirect=true",
        "imageUrl": "/images/partners/logx.svg"
    },
    {
        "name": "OpenBlock Wallet",
        "tags": [
            "wallet"
        ],
        "description": "OpenBlock is an MPC wallet supporting BASE network with both Web portal and a Mobile App. OpenBlock incorporates a built-in DEX that also support BASE bridge and BASE swap. ",
        "url": "https://openblock.com/#/",
        "imageUrl": "/images/partners/openblock.png"
    },
    {
        "name": "Wert",
        "tags": [
            "onramp"
        ],
        "description": "Fiat Onramp and NFT checkout. Users paying with a card can execute any smart contract function and receive tokens/nfts directly to their wallet in the same transaction. ",
        "url": "wert.io",
        "imageUrl": "/images/partners/wert.png"
    },
    {
        "name": "Token Cache",
        "tags": [
            "gaming"
        ],
        "description": "Introducing Token Cache° The ultimate crypto treasure hunt for degens. Whoever can locate the hidden wallet via GPS coordianates first wins and may claim the crypto within. \nStart searching and be the first to uncover a hidden Token Cache° near you. Our inaugural drop is currently LIVE, a wallet containing 1 ETH is waiting to be found in Arizona.\n\nLedger Location: 33.46203° N, \n\nGo to bonfire.xyz/tokencache to UNLOCK the remaining GPS coordinates and begin your search! \n\nHappy Hunting ⛏",
        "url": "https://bonfire.xyz/tokencache",
        "imageUrl": "/images/partners/tokencache.png"
    },
    {
        "name": "Sablier",
        "tags": [
            "defi"
        ],
        "description": "Infrastructure for money streaming and token distribution. DAOs and businesses use Sablier for vesting, payroll, airdrops, and more.",
        "url": "https://sablier.com",
        "imageUrl": "/images/partners/sablier.png"
    },
    {
        "name": "Lossless",
        "tags": [
            "security"
        ],
        "description": "World's first unrivaled exploit identification and mitigation tools, designed to foolproof web3 from hacks. ",
        "url": "https://lossless.io/",
        "imageUrl": "/images/partners/lossless.png"
    },
    {
        "name": "W3.email",
        "tags": [
            "social"
        ],
        "description": "W3 email represents the future of email services. It allows you to read and respond to blockchain-based emails sent to you in a decentralized manner across multiple networks.",
        "url": "https://w3.email",
        "imageUrl": "/images/partners/w3mail.png"
    },
    {
        "name": "JOJO Exchange",
        "tags": [
            "defi"
        ],
        "description": "JOJO is a decentralized perpetual contract trading platform built on Base.\n\nJOJO balances liquidity and composability with an off-chain matching and on-chain settlement order book model, providing a smooth, fast, and low-cost trading experience.",
        "url": "https://app.jojo.exchange/trade/base/",
        "imageUrl": "/images/partners/jojo.png"
    },
    {
        "name": "JELLI",
        "tags": [
            "infra"
        ],
        "description": "JELLI is the first ever animated ERC20i token on Base! It uses ERC20i to depict dynamic, evolvable and interchangeable jellyfish on-chain. We're here to help grow and expand the ERC20i ecosystem!",
        "url": "https://jelli.blue",
        "imageUrl": "/images/partners/jelli.png"
    },
    {
        "name": "Civic",
        "tags": [
            "infra"
        ],
        "description": "Civic is a tokenized identity solution for the verifiable web, empowering people to privately manage their identities across chains with an on-chain representation of their reusable identity. ",
        "url": "https://www.civic.com/",
        "imageUrl": "/images/partners/civic.png"
    },
    {
        "name": "Arcadia Finance",
        "tags": [
            "defi"
        ],
        "description": "Arcadia built an intent-centric application where users can deposit their assets into sophisticated strategies that beat staking APRs and will dynamically suggest rebalancing actions into the highest-yielding opportunities available according to each individual’s preferences and constraints. Arcadia takes advantage of the composability of DeFi to combine different protocols in interesting ways to maximize yields while providing best-in-class execution that streamline the way users interface with underlying protocols.",
        "url": "https://arcadia.finance/",
        "imageUrl": "/images/partners/arcadiafinance.png"
    },
    {
        "name": "Basenji",
        "tags": [
            "gaming"
        ],
        "description": "Meet Basenji, the oldest dog breed in history, with Base in its name. ",
        "url": "https://app.basenjibase.com",
        "imageUrl": "/images/partners/basenji.png"
    },
    {
        "name": "rep3",
        "tags": [
            "social"
        ],
        "description": "rep3 is a gamified community engagement platform. No-code platform for you to build engaging campaigns via quests, loyalty programs, points and airdrops",
        "url": "https://rep3.gg",
        "imageUrl": "/images/partners/rep3.png"
    },
    {
        "name": "Nexandria",
        "tags": [
            "infra"
        ],
        "description": "Nexandria helps solve the blockchain data access trilemma of speed, cost & completeness, enabling uniquely powerful API endpoints for DeFi, SocialFi, AI agents or Analytics.",
        "url": "https://www.nexandria.com/",
        "imageUrl": "/images/partners/nexandria.png"
    },
    {
        "name": "Truffi",
        "tags": [
            "gaming"
        ],
        "description": "Truffi is an ERC20i on-chain art project which was designed and animated by Shameless Art Studio. The goal is to create fun on-chain art and to take ERC-20 inscriptions to the next level by introducing a flexible tier system and incorporating gamified elements like Seasonal Collections with rewards.",
        "url": "https://www.truffi.xyz/",
        "imageUrl": "/images/partners/truffi.png"
    },
    {
        "name": "Mint Sniper",
        "tags": [
            "nft"
        ],
        "description": "Realtime NFT mint monitor. Discover new projects, schedule mints ahead of time, and see what's minting live!",
        "url": "https://www.mintsniper.com/",
        "imageUrl": "/images/partners/mintsniper.png"
    },
    {
        "name": "Aylab",
        "tags": [
            "infra"
        ],
        "description": "Aylab is a cutting-edge Web3 traffic acquisition platform revolutionizing how web3 projects acquire traffic at scale.\n",
        "url": "https://aylab.io/",
        "imageUrl": "/images/partners/aylab.png"
    },
    {
        "name": "NFTPriceFloor",
        "tags": [
            "nft"
        ],
        "description": "A gateway to the NFT ecosystem. Track and buy digital collectibles and other non-fungible tokens with the best data and marketplace aggregator in the market.",
        "url": "https://nftpricefloor.com/?blockchains=base",
        "imageUrl": "/images/partners/nftpricefloor.png"
    },
    {
        "name": "RockX",
        "tags": [
            "infra"
        ],
        "description": "RockX is a global blockchain node network and gateway for users to seamlessly access Web3, offering institutional-grade solutions and a full suite of developer tools for users to stake and build on all major blockchains.",
        "url": "https://access.rockx.com/product/base-blockchain-api-for-web3-builders",
        "imageUrl": "/images/partners/rockx.png"
    },
    {
        "name": "AlfaFrens",
        "tags": [
            "social"
        ],
        "description": "AlfaFrens is a SocialFi app on Farcaster for gated alfa chat subscriptions powered by Superfluid. Subscribe to creators with $DEGEN, earn $ALFA and stake it on creators for a share of their revenue.",
        "url": "https://alfafrens.com",
        "imageUrl": "/images/partners/alfafrens.png"
    },
    {
        "name": "Dockhive",
        "tags": [
            "infra"
        ],
        "description": "DockHive integrates Docker with blockchain for a decentralized cloud infrastructure, offering enhanced security, fault tolerance, dynamic scaling, and leveraging the DHT token for ecosystem transactions.",
        "url": "https://dockhive.io",
        "imageUrl": "/images/partners/dockhive.png"
    },
    {
        "name": "HERE Wallet",
        "tags": [
            "wallet"
        ],
        "description": "HERE wallet is a MPC mobile and Telegram wallet built on HOT Protocol. HOT Protocol is a decentralized validator network for MPC wallets.",
        "url": "https://hotdao.ai/",
        "imageUrl": "/images/partners/here-wallet.jpeg"
    },
    {
        "name": "Robots.Farm",
        "tags": [
            "defi"
        ],
        "description": "Robots.Farm is a Gamified Trading Platform that seamlessly merges decentralized finance with a captivating gaming experience. Developed independently, free from VC funding or paid influencers, $RBF platform serves as a decentralized exchange and aggregator, enabling effortless transactions across 9 networks with scalable capabilities. Engage in gameplay, swap tokens, farm rewards, and enhance your profile with XP points while collecting unique items to unlock special features!",
        "url": "https://robots.farm/",
        "imageUrl": "/images/partners/robots-farm.png"
    },
    {
        "name": "Galaxy Exchange",
        "tags": [
            "defi"
        ],
        "description": "Galaxy provides instant access to cross-chain liquidity from over 100 blockchains, bridges, and liquidity aggregators. Perform non-custodial token swaps and bridging for a wide range of crypto assets, any token to any token, irrespective of the underlying blockchain.",
        "url": "https://galaxy.exchange/",
        "imageUrl": "/images/partners/galaxy-exchange.png"
    },
    {
        "name": "Tegro",
        "tags": [
            "defi"
        ],
        "description": "Tegro is a Gen2 order book DEX for high-frequency trading. Enjoy CEX-level efficiency on-chain with efficient order books, unmatched gas efficiency, lightning-fast order matching and more!",
        "url": "https://tegro.com/",
        "imageUrl": "/images/partners/tegro.jpg"
    },
    {
        "name": "Vooi",
        "tags": [
            "defi"
        ],
        "description": "Vooi is an emerging intent-based Perp DEX Aggregator that provides an efficient liquidity mechanism, and the highest trade quality for professional and retail traders. \n",
        "url": "https://app.vooi.io/",
        "imageUrl": "/images/partners/vooi.png"
    },
    {
        "name": "Dyson Money",
        "tags": [
            "defi"
        ],
        "description": "Dyson is a yield maximizer & CL ALM that amplifies your yield returns. Offering auto-compounding vaults for diverse LPs across multiple chains, it aims to be the go-to dApp for maximising yields.",
        "url": "https://www.dyson.money/",
        "imageUrl": "/images/partners/dyson-money.png"
    },
    {
        "name": "QuillAudits",
        "tags": [
            "security"
        ],
        "description": "Web3 security leader equipped with robust security solutions and infra, trusted by teams from ZetaChain, Taiko, Polygon and many more since 2018. ",
        "url": "https://quillaudits.com",
        "imageUrl": "/images/partners/quill-audits.png"
    },
    {
        "name": "Center",
        "tags": [
            "infra"
        ],
        "description": "Real-time blockchain data, delivered instantly",
        "url": "https://center.app/",
        "imageUrl": "/images/partners/center-logo.png"
    },
    {
        "name": "droplinked",
        "tags": [
            "social"
        ],
        "description": "Providing web2 and web3 e-commerce functionality with diverse applications like tokenpay, inventory management, on-chain loyalty, gating and drops for physical and digital goods.",
        "url": "https://droplinked.com",
        "imageUrl": "/images/partners/droplinked.png"
    }
]
// Alighning tag value to lowercases.
const registryData = rawRegistryData.map(item => ({
    ...item,
    tags: item.tags.map(tag => tag.toLowerCase())
}));

console.log(registryData);