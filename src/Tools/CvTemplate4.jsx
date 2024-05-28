import React, { useRef, useEffect, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

// ConfirmationDialog component
const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="confirmation-dialog">
            <div className="message">{message}</div>
            <div className="buttons">
                <button onClick={onConfirm} className="confirm-button">Yes</button>
                <button onClick={onCancel} className="cancel-button">No</button>
            </div>
        </div>
    );
};

// CvTemplate component
const CvTemplate = ({ formData }) => {
    const cvRef = useRef();
    const [minHeight, setMinHeight] = useState('1075px');
    const [showDialog, setShowDialog] = useState(false);

    const handlePrint = useReactToPrint({
        content: () => cvRef.current,
        documentTitle: formData.name || 'CV', 
    });

    const handleReload = () => {
        setShowDialog(true);
    };

    const handleConfirm = () => {
        setShowDialog(false);
        window.location.reload();
    };

    const handleCancel = () => {
        setShowDialog(false);
    };

    useEffect(() => {
        const checkHeight = () => {
            if (cvRef.current.scrollHeight > 1080) {
                setMinHeight('2150px');
            } else {
                setMinHeight('1075px');
            }
        };

        checkHeight();
    }, [formData]);

    return (
        <div className="cv-container">
            <style>
                {`
                    .cv-container {
                        width: 100%;
                        max-width: 210mm; /* A4 paper width */
                        margin: auto;
                    }

                    @media print {
                        .page-break {
                            page-break-before: always;
                        }
                        .no-break-inside {
                            page-break-inside: avoid;
                        }
                        .print-button {
                            display: none;
                        }
                    }

                    .confirmation-dialog {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: rgba(0, 0, 0, 0.5);
                    }

                    .confirmation-dialog .message {
                        margin-bottom: 1rem;
                        font-size: 1.25rem;
                    }

                    .confirmation-dialog .buttons {
                        display: flex;
                        justify-content: center;
                    }

                    .confirmation-dialog .buttons button {
                        margin: 0 0.5rem;
                        padding: 0.5rem 1rem;
                        font-size: 1rem;
                        cursor: pointer;
                        border: none;
                        border-radius: 0.25rem;
                    }

                    .confirmation-dialog .confirm-button {
                        background-color: #ff4d4f;
                        color: #fff;
                    }

                    .confirmation-dialog .cancel-button {
                        background-color: #d9d9d9;
                        color: #000;
                    }
                `}
            </style>
            <div ref={cvRef}>
                <div className="flex max-w-4xl mx-auto bg-white" style={{ width: '220mm', minHeight: minHeight }}>
                    <div className="w-1/3 p-5 text-white bg-green-700">
                        <div className="text-center">
                            {formData.profilePhoto && <img src={URL.createObjectURL(formData.profilePhoto)} alt="Profile" className="mx-auto mb-4 rounded-full w-36 h-36" />}
                        </div>
                        <div className="mt-6">
                            <h3 className="pb-1 mb-3 border-b border-yellow-700">Contact</h3>
                            <p className="text-sm"><strong>Phone:</strong> {formData.phone}</p>
                            <p className="text-sm"><strong>Email:</strong> {formData.email}</p>
                            <p className="text-sm"><strong>Address:</strong> {formData.address}</p>
                        </div>
                        <div className="mt-6">
                            <h3 className="pb-1 mb-3 border-b border-gray-700">Education</h3>
                            {formData.education.map((edu, index) => (
                                <p key={index} className="text-sm">
                                    <strong>{edu.year}</strong><br />
                                    • {edu.degree}<br />
                                    • {edu.university}
                                </p>
                            ))}
                        </div>
                        <div className="mt-6">
                            <h3 className="pb-1 mb-3 border-b border-gray-700">Expertise</h3>
                            <ul className="p-0 list-none">
                                {formData.expertise.map((exp, index) => (
                                    <li key={index} className="text-sm">• {exp}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-6">
                            <h3 className="pb-1 mb-3 border-b border-gray-700">Language</h3>
                            {formData.language.map((lang, index) => (
                                <p key={index} className="text-sm">• {lang}</p>
                            ))}
                        </div>
                    </div>
                    <div className="w-2/3 p-5">
                        <div className="text-start">
                            <h1 className="text-3xl font-bold text-yellow-700">{formData.name}</h1>
                            <h2 className="mt-2 text-xl font-semibold">{formData.jobTitle}</h2>
                            <p className="mt-4 text-sm text-justify">{formData.description}</p>
                        </div>
                        <div className="mb-6 mt-7">
                            <h3 className="pb-2 mb-4 text-gray-800 border-b-2 border-gray-300">Experience</h3>
                            {formData.experiences.map((exp, index) => (
                                <div key={index} className="mb-6">
                                    <p className="text-sm font-semibold">
                                        <strong>{exp.fromYear} - {exp.toYear}</strong><br />
                                        {exp.companyName} | {exp.jobPosition}
                                    </p >
                                    <p className="mt-3 text-sm text-justify ">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3 className="pb-2 mb-4 text-gray-800 border-b-2 border-gray-300">Reference</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {formData.references.map((ref, index) => (
                                    <div key={index} className="mb-6">
                                        <p className="text-sm">
                                            <strong>{ref.name}</strong><br />
                                            {ref.jobPosition}, {ref.companyName}
                                        </p>
                                        <p className="text-sm"><strong>Phone:</strong> {ref.phone}</p>
                                        <p className="text-sm"><strong>Email:</strong> {ref.email}</p>
                                    </div>
                               
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-center">
                <button onClick={handlePrint} className="px-4 py-2 text-white bg-blue-500 rounded print-button">Download Resume</button>
            </div>
            <div className="mt-4 text-center">
                <button onClick={handleReload} className="px-4 py-2 ml-3 text-white bg-green-600 rounded print-button">Create New Resume</button>
            </div>
            {showDialog && (
                <ConfirmationDialog 
                    message="Are you sure you want to create a new resume?"
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};

export default CvTemplate;
