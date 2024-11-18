import React, { useState } from 'react';
import PersonalInformation from './PersonalInformation';
import ContactDetails from './ContactDetails';
import EducationDetails from './EducationDetails';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    education: '',
    university: '',
    email: '',
    phoneNumber: '',
  });

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    alert('Form Submitted!');
    console.log(formData);
  };

  return (
    <div className="container mt-4">
      <h2>Multi-Step Form</h2>
      {currentStep === 1 && (
        <PersonalInformation data={formData} onChange={handleChange} onNext={handleNext} />
      )}
      {currentStep === 2 && (
        <EducationDetails
          data={formData}
          onChange={handleChange}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentStep === 3 && (
        <ContactDetails
          data={formData}
          onChange={handleChange}
          onPrev={handlePrev}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
