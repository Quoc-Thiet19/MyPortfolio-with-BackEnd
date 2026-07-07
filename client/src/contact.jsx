import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Contact Component
 * Handles real-time field change syncs and routes context states back to home views upon post submission intercepts.
 */
export default function Contact() {
    const navigate = useNavigate();
    
    // Assignment Requirement: Capturing explicitly First Name, Last Name, Contact Number, Email Address, and Message
    const [fields, setFields] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    // Update form properties within internal field synchronization buffers
    const handleSync = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value });
    };

    // Process submission data and execute view state routing
    const handleSubmitAction = (e) => {
        e.preventDefault();
        
        // Output tracing logs to fulfill diagnostic operational rules
        console.log("Captured Metadata Packets:", fields);
        
        // Assignment Requirement: Redirect the application view state directly back to the Home page
        navigate("/");
    };

    return (
        <div style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'left', padding: '0 20px', width: '100%' }}>
            <h1>Contact Me</h1>
            <p style={{ color: 'var(--text)' }}>Fill out the required verification inputs below to broadcast formal communication hooks.</p>

            <div style={{ 
                background: 'var(--code-bg)', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid var(--border)',
                marginTop: '20px',
                marginBottom: '25px',
                fontSize: '15px',
                lineHeight: '1.6'
            }}>
                <h3 style={{ marginTop: 0, marginBottom: '15px', color: 'var(--text-h)' }}>My Direct Contact</h3>
                <div style={{ marginBottom: '8px' }}>
                    <strong>📍 Address:</strong> Toronto, Ontario, Canada
                </div>
                <div style={{ marginBottom: '8px' }}>
                    <strong>📧 Email:</strong> <a href="mailto:alex.pham@gmail.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>alex.pham@gmail.com</a>
                </div>
                <div style={{ marginBottom: '8px' }}>
                    <strong>📞 Phone:</strong> +1 416 123 4567
                </div>
                <div>
                    <strong>🌐 GitHub:</strong> <a href="https://github.com/Quoc-Thiet19" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>github.com/Quoc-Thiet19</a>
                </div>
            </div>

            <form onSubmit={handleSubmitAction} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '25px' }}>
                
                {/* Dual Column Configuration for Names */}
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1, minWidth: '120px' }}>
                        <label style={{ fontWeight: '500', fontSize: '15px' }}>First Name:</label>
                        <input type="text" name="firstName" value={fields.firstName} onChange={handleSync} style={{ padding: '10px', border: '1px solid var(--border)', borderRadius: '5px' }} required />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1, minWidth: '120px' }}>
                        <label style={{ fontWeight: '500', fontSize: '15px' }}>Last Name:</label>
                        <input type="text" name="lastName" value={fields.lastName} onChange={handleSync} style={{ padding: '10px', border: '1px solid var(--border)', borderRadius: '5px' }} required />
                    </div>
                </div>

                {/* Mandated Field: Contact Number */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontWeight: '500', fontSize: '15px' }}>Contact Number:</label>
                    <input type="tel" name="contactNumber" value={fields.contactNumber} onChange={handleSync} style={{ padding: '10px', border: '1px solid var(--border)', borderRadius: '5px' }} required />
                </div>
                
                {/* Mandated Field: Email Address */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontWeight: '500', fontSize: '15px' }}>Email Address:</label>
                    <input type="email" name="email" value={fields.email} onChange={handleSync} style={{ padding: '10px', border: '1px solid var(--border)', borderRadius: '5px' }} required />
                </div>
                
                {/* Mandated Field: Message Body */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontWeight: '500', fontSize: '15px' }}>Message:</label>
                    <textarea name="message" rows="5" value={fields.message} onChange={handleSync} style={{ padding: '10px', border: '1px solid var(--border)', borderRadius: '5px', fontFamily: 'inherit' }} required />
                </div>

                {/* Action Submit Wrapper Leveraging Global Theme Styles */}
                <button type="submit" className="counter" style={{ cursor: 'pointer', alignSelf: 'flex-start', padding: '10px 25px', marginTop: '5px' }}>
                    Submit Inquiry
                </button>
            </form>
        </div>
    );
}