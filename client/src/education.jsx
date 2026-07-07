import React from 'react';

/**
 * Education Component
 * Renders chronological data representations highlighting collegiate academic milestones.
 */
export default function Education() {
    return (
        <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
            <h1>Education & Qualifications</h1>
            
            {/* Academic Entry 1 */}
            <div style={{ marginBottom: '30px', borderLeft: '3px solid var(--accent)', paddingLeft: '20px' }}>
                <h3 style={{ margin: '0 0 5px 0', color: 'var(--text-h)' }}>Advanced Diploma in Software Engineering Technology</h3>
                <p style={{ margin: '0', fontWeight: '600', color: 'var(--accent)' }}>Centennial College (2024 - Present)</p>
                <p style={{ color: 'var(--text)', marginTop: '8px', lineHeight: '1.5' }}>
                    Focused on application engineering patterns, algorithmic database management systems, and client-server communication channels.
                </p>
            </div>

            {/* Academic Entry 2 */}
            <div style={{ marginBottom: '30px', borderLeft: '3px solid var(--accent)', paddingLeft: '20px' }}>
                <h3 style={{ margin: '0 0 5px 0', color: 'var(--text-h)' }}>Complete React Architecture Certification</h3>
                <p style={{ margin: '0', fontWeight: '600', color: 'var(--accent)' }}>Udemy Academic Credentials (2025)</p>
                <p style={{ color: 'var(--text)', marginTop: '8px', lineHeight: '1.5' }}>
                    Advanced training focused heavily on Single Page Application lifecycle management, hooks architecture, and performance auditing.
                </p>
            </div>
        </div>
    );
}