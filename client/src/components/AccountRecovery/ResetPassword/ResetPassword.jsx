//External  lib import
import React, { useRef } from "react";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProfileRequest from "../../../APIRequest/ProfileRequest";

//External lib Import
import FormValidation from "../../../helper/FormValidation";
import SessionHelper from "../../../helper/SessionHelper";
import ToastMessage from "../../../helper/ToastMessage";

const ResetPassword = () => {
  const navigate = useNavigate();
  let passwordRef,
    confirmPasswordRef = useRef();

  const resetPass = (e) => {
    e.preventDefault();

    if (FormValidation.isEmpty(passwordRef.value)) {
      ToastMessage.errorMessage("Password is Required");
    } else if (FormValidation.isEmpty(confirmPasswordRef.value)) {
      ToastMessage.errorMessage("Confirm Password is Required");
    } else if (confirmPasswordRef.value !== passwordRef.value) {
      ToastMessage.errorMessage("Password & Confirm Password Not Match");
    } else {
      ProfileRequest.RecoveryResetPass({ Password: passwordRef.value }).then(
        (result) => {
          if (result) {
            navigate("/login");
          }
        },
      );
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={7} lg={6} style={{ marginTop: "100px" }}>
          <Card className="w-90 p-4">
            <Card.Body>
              <Card.Title>Set New Password</Card.Title>
              <Form onSubmit={resetPass}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Your email address</Form.Label>
                  <Form.Control
                    readOnly={true}
                    value={SessionHelper?.getOtpEmail()}
                    className="animated fadeInUp"
                    type="email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="passwordRef">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    ref={(input) => (passwordRef = input)}
                    placeholder="New Password"
                    className="animated fadeInUp"
                    type="password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="passwordRef">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    ref={(input) => (confirmPasswordRef = input)}
                    placeholder="Confirm Password"
                    className="animated fadeInUp"
                    type="password"
                  />
                </Form.Group>
                <Button
                  variant="success"
                  type="submit"
                  className="w-100 animated fadeInUp float-end"
                >
                  Reset Password
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
