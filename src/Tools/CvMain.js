import React, { useState } from 'react';
import CvForm from './CvForm';
import CvTemplate1 from './CvTemplate1';
import CvTemplate2 from './CvTemplate2';
import CvTemplate3 from './CvTemplate3';
import CvTemplate4 from './CvTemplate4';
import CvTemplate5 from './CvTemplate5';

const CvMain = () => {
  const [cvData, setCvData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('Template1'); // Default selected template

  const handleFormSubmit = (data) => {
    setCvData(data);
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'Template1':
        return <CvTemplate1 formData={cvData} />;
      case 'Template2':
        return <CvTemplate2 formData={cvData} />;
      case 'Template3':
        return <CvTemplate3 formData={cvData} />;
      case 'Template4':
        return <CvTemplate4 formData={cvData} />;
      case 'Template5':
        return <CvTemplate5 formData={cvData} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 mb-8 bg-white rounded-lg shadow-md">
        <CvForm onSubmit={handleFormSubmit} />
      </div>
      <div className="dropdown-container">
        <label htmlFor="template-select" className="mr-2">Select Side Bar Colour: </label>
        <select id="template-select" value={selectedTemplate} onChange={(e) => setSelectedTemplate(e.target.value)} className="px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
          <option className="text-green-700" value="Template1">Green</option>
          <option className="text-gray-700" value="Template2">Gray</option>
          <option className="text-indigo-700" value="Template3">Indigo</option>
          <option className="text-yellow-700" value="Template4">Yellow</option>
          <option className="text-red-700"value="Template5">Red</option>
        </select>
      </div>
      {cvData && renderTemplate()}
    </div>
  );
};

export default CvMain;
