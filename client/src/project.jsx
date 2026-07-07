import React from 'react';

/**
 * Project Component
 * Maps static collection arrays out seamlessly into visually unified grid cards.
 */
export default function Project() {
    // Array catalog listing featured enterprise code outputs
    const projects = [
        { title: "Dynamic Reactive Portfolio", desc: "A customizable portfolio shell configured via client-side routing routines and Vite asset optimization loops.", tech: "React.js, CSS Grid, React Router" },
        { title: "Task Pipeline Engine", desc: "A task tracking grid managing operational data storage via active browser data structures.", tech: "JavaScript ES6, Web Storage API" },
        { title: "Meteorological Matrix API", desc: "A live asynchronous dashboard pulling real-time environmental metrics utilizing remote network endpoints.", tech: "JSON Parsing, Fetch REST API" }
    ];

    return (
        <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
            <h1>Featured Projects</h1>
            
            {/* Responsive Card Container Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '25px' }}>
                {projects.map((proj, idx) => (
                    <div key={idx} style={{ border: '1px solid var(--border)', padding: '20px', borderRadius: '8px', background: 'var(--code-bg)' }}>
                        <h3 style={{ marginTop: '0', color: 'var(--text-h)' }}>{proj.title}</h3>
                        <p style={{ fontSize: '15px', color: 'var(--text)', minHeight: '65px', lineHeight: '1.5' }}>{proj.desc}</p>
                        <code style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 'bold' }}>{proj.tech}</code>
                    </div>
                ))}
            </div>
        </div>
    );
}