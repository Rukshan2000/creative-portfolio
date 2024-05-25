import React from 'react';

const ErrorNotice = () => {
  return (
    <div className="p-4 mb-4 bg-red-100 border border-red-400 rounded-md">
      <p className="mb-4 text-red-800">
        <strong>Apologies for the inconvenience.</strong> Due to current storage limitations, video downloads may not be available.
        We're actively working on resolving this issue and anticipate an update soon.
      </p>
      <p className="mb-4 text-red-800">
        <strong>Additionally, please note that</strong> in certain instances, errors may occur when attempting to download audio files with extensive lengths.
        We are aware of this issue and are diligently working to address it.
      </p>
      <p className="text-red-800">
        <strong>Thank you for your understanding and patience</strong> as we strive to enhance your experience.
      </p>
    </div>
  );
};

export default ErrorNotice;
