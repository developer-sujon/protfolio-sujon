//External Lib Import
import { useRef } from "react";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

//Internal Lib Import
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";
import ClientRequest from "../../APIRequest/ClientRequest";
import { useEffect } from "react";

const ClientUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    ClientRequest.ClientSingle(id);
  }, [id]);

  const { Client } = useSelector((state) => state.Client);

  let imageRef,
    previewRef = useRef();

  const preview = (event) => {
    previewRef.src = URL.createObjectURL(event.target.files[0]);
  };

  const CreateNew = (e) => {
    e.preventDefault();
    const postBody = new FormData();
    postBody.append("Image", imageRef.files[0]);

    if (!imageRef.files[0]) {
      ToastMessage.errorMessage("Client Image is Required");
    } else {
      ClientRequest.ClientUpdate(id, postBody).then((result) => {
        if (result) {
          navigate("/Client-list");
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
              <h4>Create New Client</h4>
              <br />
              <img
                className="w-20"
                ref={(input) => (previewRef = input)}
                src={Client?.Image}
                alt=""
              />
              <hr />
              <Form onSubmit={CreateNew}>
                <Form.Group className="mb-3" controlId="Image">
                  <Form.Label>Client Image</Form.Label>
                  <Form.Control
                    ref={(input) => (imageRef = input)}
                    placeholder="Client Image"
                    className="form-control animated fadeInUp"
                    type="file"
                    onChange={preview}
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

export default ClientUpdate;
