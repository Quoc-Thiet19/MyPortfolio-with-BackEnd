import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../src/assets/logo.png'; 

/**
 * Layout Component
 * Manages standard responsive text logo positioning and global client navigation bars.
 */
export default function Layout() {
    return (
        <div style={{ padding: '20px 0', textAlign: 'center' }}>
            <div style={{ marginBottom: '15px' }}>
                <Link to="/">
                    <img 
                        src={logoImage} 
                        alt="My Portfolio Logo" 
                        style={{ 
                            height: '90px',       
                            width: 'auto',        
                            objectFit: 'contain'  
                        }} 
                    />
                </Link>
            </div>
            {/* Assignment Requirement: Custom Logo using a stylized color-filled primitive shape */}
            <div style={{ 
                display: 'inline-block', 
                padding: '8px 20px', 
                background: 'var(--accent-bg)', 
                border: '2px solid var(--accent)', 
                borderRadius: '8px', 
                fontWeight: 'bold', 
                color: 'var(--accent)',
                letterSpacing: '1px',
                marginBottom: '15px' 
            }}>
                Quoc Thiet Pham | PORTFOLIO
            </div>
            
            {/* Global Navigation scheme allowing frictionless view state traversal */}
            <nav style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '15px' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: '500' }}>Home</Link>
                <Link to="/about" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: '500' }}>About Me</Link>
                <Link to="/education" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: '500' }}>Education</Link>
                <Link to="/project" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: '500' }}>Projects</Link>
                <Link to="/contact" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: '500' }}>Contact Me</Link>
            </nav>
            <hr style={{ border: '0', borderTop: '1px solid var(--border)', marginBottom: '30px' }} />
        </div>
    );
}