import React, { useState, useEffect } from 'react';
import SubNav from '../components/SubNav';
import SubNavSm from '../components/SubNavSm';
import Button from '../components/Button'; // Check if Button component is imported correctly
import Footer from '../components/Footer';
import InvoiceForm from './Tools/InvoiceForm';
import InvoiceTemplate from './Tools/InvoiceTemplate';

const InvoiceGenerator = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const [invoiceData, setInvoiceData] = useState(null);

  const handleGenerateInvoice = (data) => {
    setInvoiceData(data);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isLargeScreen ? <SubNav /> : <SubNavSm />}
      <div className="min-h-screen py-10 bg-gray-100">
        <div className="container mx-auto">
          {!invoiceData ? (
            <InvoiceForm onGenerateInvoice={handleGenerateInvoice} />
          ) : (
            <InvoiceTemplate data={invoiceData} />
          )}
        </div>
      </div>
      <Footer />
      <Button /> 
    </div>
  );
};

export default InvoiceGenerator;
