import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const ContactDetails = ({ data, onChange, onSubmit, onPrev }) => {
  const neviagtor = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    address: Yup.string().optional(),
  });
const hendelFinal = () => {
  alert('Form Submitted Successfully');
  // neviagtor('/PersonalInformation')
};
  return (
    <div className="p-4">
      <h3 className="mb-4">Step 3: Contact Details</h3>
      <Formik
        initialValues={{
          email: data.email || '',
          phone: data.phone || '',
          address: data.address || '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          Object.entries(values).forEach(([key, value]) =>
            onChange({ target: { name: key, value } })
          );
          onSubmit(); // Trigger final submission
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={(e) => {
                      handleChange(e);
                      onChange(e);
                    }}
                    className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                  />
                  <ErrorMessage name="email" component="div" className="text-danger mt-1" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <input
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={(e) => {
                      handleChange(e);
                      onChange(e);
                    }}
                    className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                  />
                  <ErrorMessage name="phone" component="div" className="text-danger mt-1" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Group controlId="address">
                  <Form.Label>Address (Optional)</Form.Label>
                  <input
                    type="text"
                    name="address"
                    value={values.address}
                    onChange={(e) => {
                      handleChange(e);
                      onChange(e);
                    }}
                    className="form-control"
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Buttons closely aligned */}
            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button variant="secondary" onClick={onPrev}>
                Previous
              </Button>
              <Button type="submit" className="btn btn-success" onClick={hendelFinal}>
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactDetails;
