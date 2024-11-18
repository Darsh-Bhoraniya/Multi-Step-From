// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MultiStepForm from './components/MultiStepForm';  // Assuming your form component is here
import PersonalInformation from './components/PersonalInformation';  // Your Personal Detail page component
import ContactDetails from './components/ContactDetails';  // Your Contact Details page component
import EducationDetails from './components/EducationDetails';  // Your Education Details page component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MultiStepForm />} />
          <Route path="/PersonalInformation" element={<PersonalInformation />} />
          <Route path="/ContactDetails" element={<ContactDetails />} />
          <Route path="/EducationDetails" element={<EducationDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
