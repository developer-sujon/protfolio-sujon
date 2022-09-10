//External Lib Import
import { useRef } from "react";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

//Internal Lib Import
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";
import EducationRequest from "../../APIRequest/EducationRequest";
import { useEffect } from "react";

const EducationUpdate = () => {
  const { id } = useParams();

  useEffect(() => {
    EducationRequest.EducationSingle(id);
  }, [id]);

  const navigate = useNavigate();
  const { Education } = useSelector((state) => state.Education);

  let NameRef,
    DescriptionRef,
    DateRef = useRef();

  const updateEducationUpdate = (e) => {
    e.preventDefault();
    if (FormValidation.isEmpty(NameRef.value)) {
      ToastMessage.errorMessage("Education Name is Required");
    } else if (FormValidation.isEmpty(DescriptionRef.value)) {
      ToastMessage.errorMessage("Education Description is Required");
    } else if (FormValidation.isEmpty(DateRef.value)) {
      ToastMessage.errorMessage("Education Date is Required");
    } else {
      const Name = NameRef.value;
      const Description = DescriptionRef.value;
      const Date = DateRef.value;

      EducationRequest.EducationUpdate(id, {
        Name,
        Description,
        Date,
      }).then((result) => {
        if (result) {
          navigate("/education-list");
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
              <Form onSubmit={updateEducationUpdate}>
                <Row>
                  <Col md={4} className="p-2">
                    <Form.Group controlId="Name">
                      <Form.Label>Education Name</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={Education?.Name}
                        ref={(input) => (NameRef = input)}
                        placeholder="Education Name"
                        className="form-control animated fadeInUp"
                        type="text"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="p-2">
                    <Form.Group>
                      <Form.Label>Education Date</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={Education?.Date}
                        ref={(input) => (DateRef = input)}
                        className="form-control animated fadeInUp"
                        type="text"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="p-2">
                    <Form.Group controlId="Description">
                      <Form.Label>Education Description</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={Education?.Description}
                        ref={(input) => (DescriptionRef = input)}
                        placeholder="Education Description"
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

export default EducationUpdate;
