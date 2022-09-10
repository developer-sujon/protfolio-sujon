import React, { useRef } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SkillRequest from "../../APIRequest/SkillRequest";
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";

const SkillCreate = () => {
  let nameRef,
    percentageRef = useRef();
  let navigate = useNavigate();

  const CreateNew = (e) => {
    e.preventDefault();
    const Name = nameRef.value;
    const Percentage = percentageRef.value;

    if (FormValidation.isEmpty(Name)) {
      ToastMessage.errorMessage("Skill Name is Required");
    } else if (FormValidation.isEmpty(Percentage)) {
      ToastMessage.errorMessage("Skill Percentage is Required");
    } else {
      SkillRequest.SkillCreate({ Name, Percentage }).then((result) => {
        if (result) {
          navigate("/Skill-list");
        }
      });
    }
  };

  return (
    <Container fluid={true} className="content-body">
      <Row className="d-flex justify-content-center">
        <Col className="col-12 col-lg-8  col-sm-12 col-md-8  p-2">
          <Card>
            <Card.Body>
              <h4>Create New Skill</h4>
              <br />

              <Form onSubmit={CreateNew}>
                <Form.Group className="mb-3" controlId="Name">
                  <Form.Label>Skill Name</Form.Label>
                  <Form.Control
                    ref={(input) => (nameRef = input)}
                    placeholder="Skill Name"
                    className="animated fadeInUp"
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Date">
                  <Form.Label>Skill Percentage</Form.Label>
                  <Form.Control
                    ref={(input) => (percentageRef = input)}
                    placeholder="Skill Date"
                    className="form-control animated fadeInUp"
                    type="number"
                  />
                </Form.Group>

                <br />

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

export default SkillCreate;
