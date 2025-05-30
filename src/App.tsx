// App.tsx

import { BrowserRouter as Router, Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Blockchains from './pages/blockchains/Blockchains';
import Dapps from './pages/dapps/Dapps';
import Testnets from './pages/Testnets';
import Developers from './pages/Developers';
import BlockchainDetail from './pages/blockchains/BlockchainDetail';
import BlockchainDapps from './pages/blockchains/BlockchainDapps';
import BlockchainDevelopers from './pages/blockchains/BlockchainDevelopers';
import DappDetail from './pages/dapps/DappDetail';

import './App.css';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Routes principales */}
                    <Route index element={<Homepage />} />
                    <Route path="blockchains" element={<Blockchains />} />
                    <Route path="dapps" element={<Dapps />} />
                    <Route path="testnets" element={<Testnets />} />
                    <Route path="developers" element={<Developers />} />

                    {/* Routes dynamiques pour les blockchains */}
                    <Route path="blockchain/:slug" element={<BlockchainDetail />} />
                    <Route path="blockchain/:slug/tutos" element={<BlockchainTutos />} />
                    <Route path="blockchain/:slug/airdrops" element={<BlockchainAirdrops />} />
                    <Route path="blockchain/:slug/dapps" element={<BlockchainDapps />} />
                    <Route path="blockchain/:slug/developers" element={<BlockchainDevelopers />} />

                    {/* Route dynamique pour les dApps */}
                    <Route path="dapps/:slug" element={<DappDetail />} />
                    <Route path="dapps/:slug/tutos" element={<PageSoon />} />
                    <Route path="dapps/:slug/airdrops" element={<PageSoon />} />
                    <Route path="dapps/:slug/blockchains" element={<PageSoon />} />
                    <Route path="dapps/:slug/developers" element={<PageSoon />} />
                </Route>
            </Routes>
        </Router>
    )
}


// Composant Layout
function Layout() {
    const location = useLocation()

    const isActive = (path: string) => {
        if (path === '/' && location.pathname === '/') return 'nav-link active'
        if (path !== '/' && location.pathname.startsWith(path)) return 'nav-link active'
        return 'nav-link'
    }

    return (
        <div className="app">
            <header className="header">
                <div className="header-content">
                    <div className="logo">
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h1>CryptoFada</h1>
                            <span className="tagline">Introduction à la blockchain</span>
                        </Link>
                    </div>

                    <nav className="nav">
                        <Link to="/" className={isActive('/')}>Accueil</Link>
                        <Link to="/blockchains" className={isActive('/blockchains')}>Blockchains</Link>
                        <Link to="/dapps" className={isActive('/dapps')}>dApps</Link>
                        <Link to="/testnets" className={isActive('/testnets')}>Testnets</Link>
                        <Link to="/developers" className={isActive('/developers')}>Développeurs</Link>
                    </nav>
                </div>
            </header>

            <main className="main">
                <Outlet />
            </main>

            <footer className="footer">
                <p>&copy; 2025 CryptoFada - Votre porte d'entrée vers l'écosystème blockchain</p>
            </footer>
        </div>
    )
}


function BlockchainTutos() {
    return (
        <div className="page">
            <div className="page-header">
                <h1>BlockchainTutos. Prochainement...</h1>
            </div>
        </div>
    );
}

function BlockchainAirdrops() {
    return (
        <div className="page">
            <div className="page-header">
                <h1>BlockchainAirdrops. Prochainement...</h1>
            </div>
        </div>
    );
}

function PageSoon() {
    return (
        <div className="page">
            <div className="page-header">
                <h1>Prochainement...</h1>
            </div>
        </div>
    );
}


export default App
