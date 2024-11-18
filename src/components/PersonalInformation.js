import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PersonalInformation = ({ data, onChange, onNext }) => {

  
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    middleName: Yup.string().required('Middle Name is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required'),
    gender: Yup.string().required('Gender is required'),
  });

  return (
    <div className="container mt-4 p-4 shadow rounded bg-light">
      <h3 className="text-center mb-4">Step 1: Personal Information</h3>
      <Formik
        initialValues={{
          firstName: data.firstName,
          lastName: data.lastName,
          middleName: data.middleName,
          dateOfBirth: data.dateOfBirth,
          gender: data.gender,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onChange({ target: { name: 'firstName', value: values.firstName } });
          onChange({ target: { name: 'lastName', value: values.lastName } });
          onChange({ target: { name: 'middleName', value: values.middleName } });
          onChange({ target: { name: 'dateOfBirth', value: values.dateOfBirth } });
          onChange({ target: { name: 'gender', value: values.gender } });
          onNext();
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                  />
                  <ErrorMessage name="firstName" component="div" className="text-danger" />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group controlId="middleName">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="middleName"
                    value={values.middleName}
                    onChange={handleChange}
                    placeholder="Enter your middle name"
                  />
                  <ErrorMessage name="middleName" component="div" className="text-danger" />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                  />
                  <ErrorMessage name="lastName" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="dateOfBirth">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="dateOfBirth"
                    value={values.dateOfBirth}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="dateOfBirth" component="div" className="text-danger" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Field
                    as="select"
                    name="gender"
                    className="form-select"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Field>
                  <ErrorMessage name="gender" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-end">
              <Button type="submit" className="mt-3 btn-primary">
                Next
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInformation;
