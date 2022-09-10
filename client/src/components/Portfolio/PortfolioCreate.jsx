import React, { useRef } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PortfolioRequest from "../../APIRequest/PortfolioRequest";
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";

const PortfolioCreate = () => {
  let titleRef,
    categoryRef,
    imageRef,
    urlRef,
    descriptionRef,
    previewRef = useRef();
  let navigate = useNavigate();

  const preview = (event) => {
    previewRef.src = URL.createObjectURL(event.target.files[0]);
  };

  const CreateNew = (e) => {
    e.preventDefault();
    const postBody = new FormData();
    postBody.append("Title", titleRef.value);
    postBody.append("Category", categoryRef.value);
    postBody.append("Image", imageRef.files[0]);
    postBody.append("Url", urlRef.value);
    postBody.append("Description", descriptionRef.value);

    if (FormValidation.isEmpty(titleRef.value)) {
      ToastMessage.errorMessage("Portfolio Name is Required");
    } else if (FormValidation.isEmpty(categoryRef.value)) {
      ToastMessage.errorMessage("Portfolio Category is Required");
    } else if (!imageRef.files[0]) {
      ToastMessage.errorMessage("Portfolio Image is Required");
    } else if (FormValidation.isEmpty(urlRef.value)) {
      ToastMessage.errorMessage("Portfolio Url is Required");
    } else if (FormValidation.isEmpty(descriptionRef.value)) {
      ToastMessage.errorMessage("Portfolio Description is Required");
    } else {
      PortfolioRequest.PortfolioCreate(postBody).then((result) => {
        if (result) {
          navigate("/portfolio-list");
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
              <h4>Create New Portfolio</h4>
              <br />
              <img
                className="w-20"
                ref={(input) => (previewRef = input)}
                src=""
                alt=""
              />
              <hr />
              <Form onSubmit={CreateNew}>
                <Form.Group className="mb-3" controlId="Title">
                  <Form.Label>Portfolio Title</Form.Label>
                  <Form.Control
                    ref={(input) => (titleRef = input)}
                    placeholder="Portfolio Title"
                    className="animated fadeInUp"
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Title">
                  <Form.Label>Portfolio Category</Form.Label>
                  <Form.Control
                    ref={(input) => (categoryRef = input)}
                    placeholder="Portfolio Category"
                    className="animated fadeInUp"
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Image">
                  <Form.Label>Portfolio Image</Form.Label>
                  <Form.Control
                    ref={(input) => (imageRef = input)}
                    placeholder="Portfolio Image"
                    className="form-control animated fadeInUp"
                    type="file"
                    onChange={preview}
                  />
                </Form.Group>

                <br />

                <Form.Group className="mb-3" controlId="Url">
                  <Form.Label>Portfolio Url</Form.Label>
                  <Form.Control
                    ref={(input) => (urlRef = input)}
                    placeholder="Portfolio Url"
                    className="animated fadeInUp"
                    type="url"
                  />
                </Form.Group>

                <br />

                <Form.Group controlId="Description">
                  <Form.Label>Portfolio Description</Form.Label>
                  <Form.Control
                    ref={(input) => (descriptionRef = input)}
                    placeholder="Portfolio Description"
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

export default PortfolioCreate;
