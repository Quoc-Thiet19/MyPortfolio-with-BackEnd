import React from 'react';
import profileImage from './assets/profile.jpg';
/**
 * About Component
 * Exposes core legal names, profile graphics setups, and structural document transfer links.
 */
export default function About() {
    return (
        <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
            <h1>About Me</h1>
            
            {/* Assignment Requirement: Legal Name Declaration */}
            <h3 style={{ color: 'var(--accent)', marginTop: '0' }}>Full Name: Quoc Thiet Pham (Alex)</h3>
            
            <div style={{ display: 'flex', gap: '30px', alignItems: 'center', margin: '25px 0', flexWrap: 'wrap' }}>
                {/* Assignment Requirement: Personal Profile Image Placeholder Grid */}
                <div style={{ 
                    width: '140px', 
                    height: '140px', 
                    borderRadius: '50%', 
                    background: 'var(--code-bg)', 
                    border: '2px dashed var(--accent)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '13px',
                    color: 'var(--text)'
                }}>
                <div>
                    <img 
                        src={profileImage} 
                        alt="John Doe Profile Headshot" 
                        style={{ 
                            width: '140px', 
                            height: '140px', 
                            borderRadius: '50%',               
                            objectFit: 'cover',                
                            border: '3px solid var(--accent)', 
                            boxShadow: 'var(--shadow)'        
                        }} 
                    />
                </div>
                </div>
                
                <p style={{ fontSize: '17px', lineHeight: '1.6', flex: '1', minWidth: '280px', margin: 0 }}>
                    I am a dedicated Web Application Developer pursuing cutting-edge certifications in reactive script compiling. 
                    My focus revolves around modular programming principles, semantic DOM rendering, and automated integration styling matrices.
                </p>
            </div>

            <h2>Core Technical Stack</h2>
            <ul style={{ lineHeight: '1.8', color: 'var(--text)' }}>
                <li><strong>Languages:</strong> HTML5, CSS3, JavaScript, Python, Java, C#</li>
                <li><strong>Libraries & Frameworks:</strong> React.js, React Router v7, Vite.js Compiler</li>
                <li><strong>Deployment & Tools:</strong> Git Versioning, GitHub Repositories, Vercel Hosting</li>
            </ul>

            {/* Assignment Requirement: Absolute or Relative Hyperlink to a PDF version of your Resume */}
            <p style={{ marginTop: '35px' }}>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="counter" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    Download Official Resume (PDF)
                </a>
            </p>
        </div>
    );
}