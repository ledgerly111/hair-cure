import React from 'react';
import Navbar from './Navbar';
import Section_Footer from './Section_Footer';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <Section_Footer />
        </div>
    );
};

export default Layout;
