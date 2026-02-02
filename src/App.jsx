import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { PageTransition } from './components/ui/PageTransition';
import './index.css';

// Wrapper component to handle AnimatePresence with useLocation
const AnimatedRoutes = () => {
    const location = useLocation();
    
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <PageTransition>
                        <Home />
                    </PageTransition>
                } />
                <Route path="/services" element={
                    <PageTransition>
                        <Services />
                    </PageTransition>
                } />
                <Route path="/results" element={
                    <PageTransition>
                        <Gallery />
                    </PageTransition>
                } />
                <Route path="/about" element={
                    <PageTransition>
                        <About />
                    </PageTransition>
                } />
                <Route path="/contact" element={
                    <PageTransition>
                        <Contact />
                    </PageTransition>
                } />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <Router>
            <Layout>
                <AnimatedRoutes />
            </Layout>
        </Router>
    );
}

export default App;
