//External Lib Import
import { useRef } from "react";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

//Internal Lib Import
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";
import SkillRequest from "../../APIRequest/SkillRequest";
import { useEffect } from "react";

const SkillUpdate = () => {
  const { id } = useParams();

  useEffect(() => {
    SkillRequest.SkillSingle(id);
  }, [id]);

  const navigate = useNavigate();
  const { Skill } = useSelector((state) => state.Skill);

  let nameRef,
    percentageRef = useRef();

  const updateSkillUpdate = (e) => {
    const Name = nameRef.value;
    const Percentage = percentageRef.value;

    e.preventDefault();
    if (FormValidation.isEmpty(Name)) {
      ToastMessage.errorMessage("Skill Name is Required");
    } else if (FormValidation.isEmpty(Percentage)) {
      ToastMessage.errorMessage("Skill Percentage is Required");
    } else {
      SkillRequest.SkillUpdate(id, {
        Name,
        Percentage,
      }).then((result) => {
        if (result) {
          navigate("/Skill-list");
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
              <h4>Update Skill</h4>
              <hr />
              <Form onSubmit={updateSkillUpdate}>
                <Row>
                  <Col md={4} className="p-2">
                    <Form.Group controlId="Name">
                      <Form.Label>Skill Name</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={Skill?.Name}
                        ref={(input) => (nameRef = input)}
                        placeholder="Skill Name"
                        className="form-control animated fadeInUp"
                        type="text"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="p-2">
                    <Form.Group>
                      <Form.Label>Skill Percentage</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={Skill?.Percentage}
                        ref={(input) => (percentageRef = input)}
                        className="form-control animated fadeInUp"
                        type="number"
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

export default SkillUpdate;
