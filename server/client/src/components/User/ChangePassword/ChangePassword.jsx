//External Lib Import
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";

//Internal Lib Import
import FormValidation from "../../../helper/FormValidation";
import ToastMessage from "../../../helper/ToastMessage";
import ProfileRequest from "../../../APIRequest/ProfileRequest";

const ChangePassword = () => {
  const navigate = useNavigate();

  let previousPasswordRef,
    newPasswordRef,
    confirmNewPasswordRef = useRef();

  const updatePassword = () => {
    if (FormValidation.isEmpty(previousPasswordRef.value)) {
      ToastMessage.errorMessage("Previous Password is Required");
    } else if (FormValidation.isEmpty(newPasswordRef.value)) {
      ToastMessage.errorMessage("New Password is Required");
    } else if (FormValidation.isEmpty(confirmNewPasswordRef.value)) {
      ToastMessage.errorMessage("Confirm Password is Required");
    } else if (newPasswordRef.value !== confirmNewPasswordRef.value) {
      ToastMessage.errorMessage("New & Confirm Password Not Match");
    } else {
      ProfileRequest.UserChecgePassword({
        PreviousPassword: previousPasswordRef.value,
        Password: newPasswordRef.value,
      }).then((result) => {
        if (result) {
          navigate("/Profile");
        }
      });
    }
  };

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center py-5">
        <Col md={6}>
          <Card>
            <Card.Body className="card-body">
              <Form.Group className="mb-3" controlId="previousPasswordRef">
                <Form.Label>Previous Password</Form.Label>
                <Form.Control
                  key={Date.now()}
                  ref={(input) => (previousPasswordRef = input)}
                  placeholder="Previous Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="newPasswordRef">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  key={Date.now()}
                  ref={(input) => (newPasswordRef = input)}
                  placeholder="New Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="confirmNewPasswordRef">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                  key={Date.now()}
                  ref={(input) => (confirmNewPasswordRef = input)}
                  placeholder="Confirm New Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
              </Form.Group>

              <Button
                variant="success"
                className="w-100 float-end animated fadeInUp"
                onClick={updatePassword}
              >
                Submit
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePassword;
