import React, { useRef } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EducationRequest from "../../APIRequest/EducationRequest";
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";

const EducationCreate = () => {
  let nameRef,
    dateRef,
    descriptionRef = useRef();
  let navigate = useNavigate();

  const CreateNew = (e) => {
    e.preventDefault();
    const Name = nameRef.value;
    const Date = dateRef.value;
    const Description = descriptionRef.value;

    if (FormValidation.isEmpty(Name)) {
      ToastMessage.errorMessage("Ecudation Name is Required");
    } else if (FormValidation.isEmpty(Date)) {
      ToastMessage.errorMessage("Ecudation Date is Required");
    } else if (FormValidation.isEmpty(Description)) {
      ToastMessage.errorMessage("Ecudation Description is Required");
    } else {
      EducationRequest.EducationCreate({ Name, Description, Date }).then(
        (result) => {
          if (result) {
            navigate("/education-list");
          }
        },
      );
    }
  };

  return (
    <Container fluid={true} className="content-body">
      <Row className="d-flex justify-content-center">
        <Col className="col-12 col-lg-8  col-sm-12 col-md-8  p-2">
          <Card>
            <Card.Body>
              <h4>Create New Education</h4>
              <br />

              <Form onSubmit={CreateNew}>
                <Form.Group className="mb-3" controlId="Name">
                  <Form.Label>Education Name</Form.Label>
                  <Form.Control
                    ref={(input) => (nameRef = input)}
                    placeholder="Education Name"
                    className="animated fadeInUp"
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Date">
                  <Form.Label>Education Date</Form.Label>
                  <Form.Control
                    ref={(input) => (dateRef = input)}
                    placeholder="Education Date"
                    className="form-control animated fadeInUp"
                    type="text"
                  />
                </Form.Group>

                <br />

                <Form.Group controlId="Description">
                  <Form.Label>Education Description</Form.Label>
                  <Form.Control
                    ref={(input) => (descriptionRef = input)}
                    placeholder="Education Description"
                    className="form-control animated fadeInUp"
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="animated fadeInUp float-end mb-0 mt-4"
                >
                  Create
                </Button>
              </Form>

              <br />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EducationCreate;
