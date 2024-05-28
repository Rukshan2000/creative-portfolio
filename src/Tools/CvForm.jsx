import React, { useState } from 'react';

const CvForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        profilePhoto: null,
        name: '',
        jobTitle: '',
        description: '',
        phone: '',
        email: '',
        address: '',
        education: [{ year: '', degree: '', university: '' }],
        expertise: [''],
        language: [''],
        experiences: [{ fromYear: '', toYear: '', companyName: '', jobPosition: '', description: '' }],
        references: [{ name: '', jobPosition: '', companyName: '', phone: '', email: '' }],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const nameParts = name.split('.');

        if (nameParts.length > 1) {
            const [section, index, field] = nameParts;

            setFormData((prevFormData) => {
                const updatedSection = [...prevFormData[section]];
                updatedSection[index] = {
                    ...updatedSection[index],
                    [field]: value,
                };
                return {
                    ...prevFormData,
                    [section]: updatedSection,
                };
            });
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleArrayChange = (e, section, index) => {
        const { value } = e.target;
        setFormData((prevFormData) => {
            const updatedSection = [...prevFormData[section]];
            updatedSection[index] = value;
            return {
                ...prevFormData,
                [section]: updatedSection,
            };
        });
    };

    const removeItem = (section, index) => {
        setFormData((prevFormData) => {
            const updatedData = { ...prevFormData };
            updatedData[section].splice(index, 1);
            return updatedData;
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const addEducation = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            education: [...prevFormData.education, { year: '', degree: '', university: '' }],
        }));
    };

    const addExpertise = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            expertise: [...prevFormData.expertise, ''],
        }));
    };

    const addLanguage = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            language: [...prevFormData.language, ''],
        }));
    };

    const addExperience = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            experiences: [...prevFormData.experiences, { fromYear: '', toYear: '', companyName: '', jobPosition: '', description: '' }],
        }));
    };

    const addReference = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            references: [...prevFormData.references, { name: '', jobPosition: '', companyName: '', phone: '', email: '' }],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormSubmitted(true);
    };

    return (
        <div>
            <NoticeWithToggle />
            {!formSubmitted && (
                <form onSubmit={handleSubmit} className="p-4">
                    <h2 className="mb-4 text-2xl font-bold">CV Form - use descstop or desctop mode of your browser for get better preview of cv</h2>
                    <p className="mb-4 "> Use descstop or desctop mode of your browser for get better preview of cv</p>

                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Profile Photo</label>
                        <input type="file" name="profilePhoto" onChange={handleFileChange} className="w-full p-2 border" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Job Title</label>
                        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="w-full p-2 border" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Description</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border" required></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Phone</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Address</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border" required />
                    </div>
                    {/* Education */}
                    <div className="mb-4">
                        <h3 className="mb-2 text-lg font-bold">Education</h3>
                        {formData.education.map((education, index) => (
                            <div key={index} className="flex flex-col items-center mb-2 sm:flex-row">
                                <input type="text" name={`education.${index}.year`} value={education.year} onChange={handleChange} placeholder="Year" className="w-full p-2 mb-2 border sm:mr-2" required />
                                <input type="text" name={`education.${index}.degree`} value={education.degree} onChange={handleChange} placeholder="Degree" className="w-full p-2 mb-2 border sm:mr-2" required />
                                <input type="text" name={`education.${index}.university`} value={education.university} onChange={handleChange} placeholder="University/College" className="w-full p-2 mb-2 border sm:mr-2" required />
                                <button type="button" onClick={() => removeItem('education', index)} className="px-4 py-2 mb-2 text-white bg-red-500 rounded">Remove</button>
                            </div>
                        ))}
                        <button type="button" onClick={addEducation} className="px-4 py-2 bg-gray-300 rounded">Add Education</button>
                    </div>

                    {/* Expertise */}
                    <div className="mb-4">
                        <h3 className="mb-2 text-lg font-bold">Expertise</h3>
                        {formData.expertise.map((expertise, index) => (
                            <div key={index} className="flex flex-col items-center mb-2 sm:flex-row">
                                <input type="text" value={expertise} onChange={(e) => handleArrayChange(e, 'expertise', index)} placeholder="Add expertise" className="w-full p-2 mb-2 border sm:mr-2" required />
                                <button type="button" onClick={() => removeItem('expertise', index)} className="px-4 py-2 mb-2 text-white bg-red-500 rounded">Remove</button>
                            </div>
                        ))}
                        <button type="button" onClick={addExpertise} className="px-4 py-2 bg-gray-300 rounded">Add Expertise</button>
                    </div>

                    {/* Language */}
                    <div className="mb-4">
                        <h3 className="mb-2 text-lg font-bold">Language</h3>
                        {formData.language.map((language, index) => (
                            <div key={index} className="flex flex-col items-center mb-2 sm:flex-row">
                                <input type="text" value={language} onChange={(e) => handleArrayChange(e, 'language', index)} placeholder="Add language" className="w-full p-2 mb-2 border sm:mr-2" required />
                                <button type="button" onClick={() => removeItem('language', index)} className="px-4 py-2 mb-2 text-white bg-red-500 rounded">Remove</button>
                            </div>
                        ))}
                        <button type="button" onClick={addLanguage} className="px-4 py-2 bg-gray-300 rounded">Add Language</button>
                    </div>

                    {/* Experiences */}
                    <div className="mb-4">
                        <h3 className="mb-2 text-lg font-bold">Experiences</h3>
                        {formData.experiences.map((experience, index) => (
                            <div key={index} className="flex flex-col mb-2">
                                <input type="text" name={`experiences.${index}.fromYear`} value={experience.fromYear} onChange={handleChange} placeholder="From Year" className="w-full p-2 mb-2 border" required />
                                <input type="text" name={`experiences.${index}.toYear`} value={experience.toYear} onChange={handleChange} placeholder="To Year" className="w-full p-2 mb-2 border" required />
                                <input type="text" name={`experiences.${index}.companyName`} value={experience.companyName} onChange={handleChange} placeholder="Company Name" className="w-full p-2 mb-2 border" required />
                                <input type="text" name={`experiences.${index}.jobPosition`} value={experience.jobPosition} onChange={handleChange} placeholder="Job Position" className="w-full p-2 mb-2 border" required />
                                <textarea name={`experiences.${index}.description`} value={experience.description} onChange={handleChange} placeholder="Description" className="w-full p-2 mb-2 border" required></textarea>
                                <button type="button" onClick={() => removeItem('experiences', index)} className="px-2 py-2 mb-2 text-white bg-red-500 rounded">Remove</button>
                            </div>
                        ))}
                        <button type="button" onClick={addExperience} className="px-4 py-2 bg-gray-300 rounded">Add Experience</button>
                    </div>

                    {/* References */}
                    <div className="mb-4">
                        <h3 className="mb-2 text-lg font-bold">References</h3>
                        {formData.references.map((reference, index) => (
                            <div key={index} className="flex flex-col mb-2">
                                <input type="text" name={`references.${index}.name`} value={reference.name} onChange={handleChange} placeholder="Name with Initials" className="w-full p-2 mb-2 border" required />
                                <input type="text" name={`references.${index}.jobPosition`} value={reference.jobPosition} onChange={handleChange} placeholder="Job Position" className="w-full p-2 mb-2 border" required />
                                <input type="text" name={`references.${index}.companyName`} value={reference.companyName} onChange={handleChange} placeholder="Company Name" className="w-full p-2 mb-2 border" required />
                                <input type="text" name={`references.${index}.phone`} value={reference.phone} onChange={handleChange} placeholder="Phone" className="w-full p-2 mb-2 border" required />
                                <input type="email" name={`references.${index}.email`} value={reference.email} onChange={handleChange} placeholder="Email" className="w-full p-2 mb-2 border" required />
                                <button type="button" onClick={() => removeItem('references', index)} className="px-2 py-2 mb-2 text-white bg-red-500 rounded">Remove</button>
                            </div>
                        ))}
                        <button type="button" onClick={addReference} className="px-4 py-2 bg-gray-300 rounded">Add Reference</button>
                    </div>

                    <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">Submit</button>
                </form>
            )}
            {formSubmitted && <p>Form submitted successfully!</p>}
        </div>
    );
};

const NoticeWithToggle = () => {
    const [showText, setShowText] = useState(false);
    
    const toggleText = () => {
        setShowText(!showText);
    };
    
    return (
        <div className="p-4 text-lg leading-7 text-blue-800 bg-blue-100">
            <p className="font-semibold">Important Notice:</p>
            <p>Beta Version of Resume Maker</p>
            {!showText && (
                <button className="mt-2 text-blue-500 underline" onClick={toggleText}>
                    Show Guidelines
                </button>
            )}
            {showText && (
                <>
                    <p className="mt-2 font-semibold">Guidelines:</p>
                    <ul className="pl-6 list-disc">
                        <li>Crop your image to squre size for better view.</li>
                        <li>Education, Expertise, and Language: Limit entries to a maximum of 5 for each category.</li>
                        <li>Description: Introduce yourself in 70-80 words.</li>
                        <li>Experience: Limit to a maximum of 6 entries. Describe each experience in no more than 20 words.</li>
                        <li>References: Include up to 2 references.</li>
                    </ul>
                    <p>
                        While you have the flexibility to exceed these limitations, adhering to them will assist in creating a sleek and contemporary CV.
                    </p>
                    <button className="mt-2 text-blue-500 underline" onClick={toggleText}>
                        Hide Guidelines
                    </button>
                </>
            )}
        </div>
    );
};

export default CvForm;
