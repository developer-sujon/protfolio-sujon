//External Lib Import
import { useRef } from "react";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

//Internal Lib Import
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";
import ExperienceRequest from "../../APIRequest/ExperienceRequest";
import { useEffect } from "react";

const ExperienceUpdate = () => {
  const { id } = useParams();

  useEffect(() => {
    ExperienceRequest.ExperienceSingle(id);
  }, [id]);

  const navigate = useNavigate();
  const { Experience } = useSelector((state) => state.Experience);

  let NameRef,
    DescriptionRef,
    DateRef = useRef();

  const updateExperienceUpdate = (e) => {
    e.preventDefault();
    if (FormValidation.isEmpty(NameRef.value)) {
      ToastMessage.errorMessage("Experience Name is Required");
    } else if (FormValidation.isEmpty(DescriptionRef.value)) {
      ToastMessage.errorMessage("Experience Description is Required");
    } else if (FormValidation.isEmpty(DateRef.value)) {
      ToastMessage.errorMessage("Experience Date is Required");
    } else {
      const Name = NameRef.value;
      const Description = DescriptionRef.value;
      const Date = DateRef.value;

      ExperienceRequest.ExperienceUpdate(id, {
        Name,
        Description,
        Date,
      }).then((result) => {
        if (result) {
          navigate("/experience-list");
        }
      });
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col>
          <Card className="w-90">
            <Card.Body>
              <Form onSubmit={updateExperienceUpdate}>
                <Row>
                  <Col md={4} className="p-2">
                    <Form.Group controlId="Name">
                      <Form.Label>Experience Name</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={Experience?.Name}
                        ref={(input) => (NameRef = input)}
                        placeholder="Experience Name"
                        className="form-control animated fadeInUp"
                        type="text"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="p-2">
                    <Form.Group>
                      <Form.Label>Experience Date</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={Experience?.Date}
                        ref={(input) => (DateRef = input)}
                        className="form-control animated fadeInUp"
                        type="text"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="p-2">
                    <Form.Group controlId="Description">
                      <Form.Label>Experience Description</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={Experience?.Description}
                        ref={(input) => (DescriptionRef = input)}
                        placeholder="Experience Description"
                        className="form-control animated fadeInUp"
                        as="textarea"
                        rows={3}
                      />
                    </Form.Group>
                  </Col>

                  <Col className="p-2">
                    <Button
                      type="submit"
                      variant="success"
                      className="w-100 animated fadeInUp float-end mb-0 mt-4"
                    >
                      Update
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ExperienceUpdate;
