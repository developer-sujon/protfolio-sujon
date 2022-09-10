//External Lib Import
import { useRef } from "react";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

//Internal Lib Import
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";
import ServiceRequest from "../../APIRequest/ServiceRequest";
import { useEffect } from "react";

const ServiceUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    ServiceRequest.ServiceSingle(id);
  }, [id]);

  const { Service } = useSelector((state) => state.Service);

  let nameRef,
    imageRef,
    descriptionRef,
    previewRef = useRef();

  const preview = (event) => {
    previewRef.src = URL.createObjectURL(event.target.files[0]);
  };

  const CreateNew = (e) => {
    e.preventDefault();
    const postBody = new FormData();
    postBody.append("Name", nameRef.value);

    if (imageRef.files[0]) {
      postBody.append("Image", imageRef.files[0]);
    }

    postBody.append("Description", descriptionRef.value);

    if (FormValidation.isEmpty(nameRef.value)) {
      ToastMessage.errorMessage("Service Name is Required");
    } else if (FormValidation.isEmpty(descriptionRef.value)) {
      ToastMessage.errorMessage("Service Description is Required");
    } else {
      ServiceRequest.ServiceUpdate(id, postBody).then((result) => {
        if (result) {
          navigate("/service-list");
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
              <h4>Create New Service</h4>
              <br />
              <img
                className="w-20"
                ref={(input) => (previewRef = input)}
                src={Service?.Image}
                alt=""
              />
              <hr />
              <Form onSubmit={CreateNew}>
                <Form.Group className="mb-3" controlId="Name">
                  <Form.Label>Service Name</Form.Label>
                  <Form.Control
                    defaultValue={Service?.Name}
                    ref={(input) => (nameRef = input)}
                    placeholder="Service Name"
                    className="animated fadeInUp"
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Image">
                  <Form.Label>Service Image</Form.Label>
                  <Form.Control
                    ref={(input) => (imageRef = input)}
                    placeholder="Service Image"
                    className="form-control animated fadeInUp"
                    type="file"
                    onChange={preview}
                  />
                </Form.Group>

                <br />

                <Form.Group controlId="Description">
                  <Form.Label>Service Description</Form.Label>
                  <Form.Control
                    defaultValue={Service?.Description}
                    ref={(input) => (descriptionRef = input)}
                    placeholder="Service Description"
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

export default ServiceUpdate;
