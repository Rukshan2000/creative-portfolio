import React from 'react';
import SubNav from '../components/SubNav';
import Compiler from '../Tools/Compiler';

import Footer from '../components/Footer';
import QRCodeGenerator from '../Tools/QRCodeGenerator';

const QRCodeGeneratorPage = () => {
    return (
        <div>
            {/* Set the page title */}
            {/* Include the top navigation component */}
            <SubNav />
            {/* Include the About component */}
            <QRCodeGenerator />
            {/* Set the footer at the bottom */}
            <Footer/>
        </div>
    );
};

export default QRCodeGeneratorPage;
