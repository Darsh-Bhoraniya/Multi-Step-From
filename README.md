# Multi-Step Form Project

This is a React-based multi-step form that uses the **Formik** library for handling form state, **Yup** for schema validation, and **React-Bootstrap** for responsive and styled components.

## Features

- Multi-step form navigation
- Form validation using Yup
- Responsive layout using Bootstrap

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Formik**: A React library for building forms with validation and state management.
- **Yup**: Schema-based validation for JavaScript objects, used for form validation.
- **React-Bootstrap**: Bootstrap components built with React.
- **React Router**: For navigation between different steps of the form.

## Components

The form is divided into three main components, each representing a step in the multi-step form:

### 1. **PersonalInformation**
This is the first step of the form, where users input their basic personal information such as:
- First Name
- Last Name
- Date of Birth

This component collects the user's basic details.

### 2. **EducationDetails**
The second step of the form, where users provide their education details. This includes:
- Highest Qualification
- Institution Name
- Year of Graduation

This component collects the user's educational background.

### 3. **ContactDetails**
The final step of the form, where users enter their contact details such as:
- Email Address
- Phone Number
- Address (Optional)

This component collects the user's contact information and concludes the form submission.

## Installation

To get started with the project, follow the steps below:

### Step 1: Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/multi-step-form.git
