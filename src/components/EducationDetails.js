import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const EducationDetails = ({ data, onChange, onNext, onPrev }) => {
  // Validation schema for the form
  const validationSchema = Yup.object({
    education: Yup.string().required('Education is required'),
    university: Yup.string().required('University is required'),
    degree: Yup.string().required('Degree is required'),
    specialization: Yup.string().required('Specialization is required'),
    graduationYear: Yup.number()
      .required('Graduation Year is required')
      .min(1900, 'Year must be 1900 or later')
      .max(new Date().getFullYear(), `Year must be ${new Date().getFullYear()} or earlier`),
  });

  return (
    <div>
      <h3 className="mb-4">Step 2: Education Details</h3>
      <Formik
        initialValues={{
          education: data.education,
          university: data.university,
          degree: data.degree,
          specialization: data.specialization || '',
          graduationYear: data.graduationYear,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          Object.entries(values).forEach(([key, value]) =>
            onChange({ target: { name: key, value } })
          );
          onNext();
        }}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="education">
                  <Form.Label>Education Level</Form.Label>
                  <input
                    type="text"
                    name="education"
                    value={values.education}
                    onChange={handleChange}
                    className={`form-control ${
                      touched.education && errors.education ? 'is-invalid' : ''
                    }`}
                  />
                  {touched.education && errors.education && (
                    <div className="text-danger">{errors.education}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="university">
                  <Form.Label>University</Form.Label>
                  <input
                    type="text"
                    name="university"
                    value={values.university}
                    onChange={handleChange}
                    className={`form-control ${
                      touched.university && errors.university ? 'is-invalid' : ''
                    }`}
                  />
                  {touched.university && errors.university && (
                    <div className="text-danger">{errors.university}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="degree">
                  <Form.Label>Degree</Form.Label>
                  <input
                    type="text"
                    name="degree"
                    value={values.degree}
                    onChange={handleChange}
                    className={`form-control ${
                      touched.degree && errors.degree ? 'is-invalid' : ''
                    }`}
                  />
                  {touched.degree && errors.degree && (
                    <div className="text-danger">{errors.degree}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="specialization">
                  <Form.Label>Specialization</Form.Label>
                  <input
                    type="text"
                    name="specialization"
                    value={values.specialization}
                    onChange={handleChange}
                    className={`form-control ${
                      touched.specialization && errors.specialization ? 'is-invalid' : ''
                    }`}
                  />
                  {touched.specialization && errors.specialization && (
                    <div className="text-danger">{errors.specialization}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="graduationYear">
                  <Form.Label>Graduation Year</Form.Label>
                  <input
                    type="number"
                    name="graduationYear"
                    value={values.graduationYear}
                    onChange={handleChange}
                    className={`form-control ${
                      touched.graduationYear && errors.graduationYear ? 'is-invalid' : ''
                    }`}
                  />
                  {touched.graduationYear && errors.graduationYear && (
                    <div className="text-danger">{errors.graduationYear}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-between mt-4">
              <Button variant="secondary" onClick={onPrev}>
                Previous
              </Button>
              <Button type="submit" className="btn btn-primary">
                Next
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EducationDetails;
