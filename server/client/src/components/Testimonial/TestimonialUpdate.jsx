//External Lib Import
import { useRef } from "react";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

//Internal Lib Import
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";
import TestimonialRequest from "../../APIRequest/TestimonialRequest";
import { useEffect } from "react";

const TestimonialUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    TestimonialRequest.TestimonialSingle(id);
  }, [id]);

  const { Testimonial } = useSelector((state) => state.Testimonial);

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
      ToastMessage.errorMessage("Testimonial Name is Required");
    } else if (FormValidation.isEmpty(descriptionRef.value)) {
      ToastMessage.errorMessage("Testimonial Description is Required");
    } else {
      TestimonialRequest.TestimonialUpdate(id, postBody).then((result) => {
        if (result) {
          navigate("/Testimonial-list");
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
              <h4>Create New Testimonial</h4>
              <br />
              <img
                className="w-20"
                ref={(input) => (previewRef = input)}
                src={Testimonial?.Image}
                alt=""
              />
              <hr />
              <Form onSubmit={CreateNew}>
                <Form.Group className="mb-3" controlId="Name">
                  <Form.Label>Testimonial Name</Form.Label>
                  <Form.Control
                    defaultValue={Testimonial?.Name}
                    ref={(input) => (nameRef = input)}
                    placeholder="Testimonial Name"
                    className="animated fadeInUp"
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Image">
                  <Form.Label>Testimonial Image</Form.Label>
                  <Form.Control
                    ref={(input) => (imageRef = input)}
                    placeholder="Testimonial Image"
                    className="form-control animated fadeInUp"
                    type="file"
                    onChange={preview}
                  />
                </Form.Group>

                <br />

                <Form.Group controlId="Description">
                  <Form.Label>Testimonial Description</Form.Label>
                  <Form.Control
                    defaultValue={Testimonial?.Description}
                    ref={(input) => (descriptionRef = input)}
                    placeholder="Testimonial Description"
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

export default TestimonialUpdate;
