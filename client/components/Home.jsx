import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home Component
 * Hosts localized welcome metrics, targeted mission outlines, and structural anchor shortcuts.
 */
export default function Home() {
    return (
        <div style={{ textAlign: 'center', padding: '40px 20px', maxWidth: '750px', margin: '0 auto' }}>
            <h1 style={{ color: 'var(--text-h)', fontSize: '36px', marginBottom: '10px' }}>Welcome to My Creative Workspace</h1>
            <p style={{ fontSize: '18px', color: 'var(--text)' }}>Engineering responsive, clean, and highly optimized scalable web solutions.</p>
            
            {/* Assignment Requirement: Strategic Mission Statement Section */}
            <div style={{ 
                margin: '35px 0', 
                padding: '20px 25px', 
                background: 'var(--code-bg)', 
                borderRadius: '8px', 
                borderLeft: '4px solid var(--accent)',
                textAlign: 'left'
            }}>
                <h3 style={{ marginTop: 0, color: 'var(--text-h)' }}>Mission Statement</h3>
                <p style={{ fontStyle: 'italic', lineHeight: '1.6', margin: 0, color: 'var(--text)' }}>
                    "To continuously design and deploy highly accessible Single Page Applications (SPAs) that leverage component-driven architectures, ensuring robust cross-platform usability and code efficiency."
                </p>
            </div>

            {/* Assignment Requirement: Navigation redirect bypass buttons to child pages */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
                <Link to="/about" className="counter" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    More About Me
                </Link>
                <Link to="/project" className="counter" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    View My Portfolios
                </Link>
            </div>
        </div>
    );
}