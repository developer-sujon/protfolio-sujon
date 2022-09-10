//External Lib Import
import { useRef } from "react";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//Internal Lib Import
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";
import BlogRequest from "../../APIRequest/BlogRequest";
import { useEffect } from "react";

const BlogUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    BlogRequest.BlogSingle(id);
  }, [id]);

  const { Blog } = useSelector((state) => state.Blog);

  let titleRef,
    imageRef,
    descriptionRef,
    previewRef = useRef();

  const preview = (event) => {
    previewRef.src = URL.createObjectURL(event.target.files[0]);
  };

  const CreateNew = (e) => {
    e.preventDefault();
    const postBody = new FormData();
    postBody.append("Title", titleRef.value);

    if (imageRef.files[0]) {
      postBody.append("Image", imageRef.files[0]);
    }

    postBody.append("Description", descriptionRef.value);

    if (FormValidation.isEmpty(titleRef.value)) {
      ToastMessage.errorMessage("Blog Name is Required");
    } else if (FormValidation.isEmpty(descriptionRef.value)) {
      ToastMessage.errorMessage("Blog Description is Required");
    } else {
      BlogRequest.BlogUpdate(id, postBody).then((result) => {
        if (result) {
          navigate("/Blog-list");
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
              <h4>Create New Blog</h4>
              <br />
              <img
                className="w-20"
                ref={(input) => (previewRef = input)}
                src={Blog?.Image}
                alt=""
              />
              <hr />
              <Form onSubmit={CreateNew}>
                <Form.Group className="mb-3" controlId="Name">
                  <Form.Label>Blog Title</Form.Label>
                  <Form.Control
                    defaultValue={Blog?.Title}
                    ref={(input) => (titleRef = input)}
                    placeholder="Blog Title"
                    className="animated fadeInUp"
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Image">
                  <Form.Label>Blog Image</Form.Label>
                  <Form.Control
                    ref={(input) => (imageRef = input)}
                    placeholder="Blog Image"
                    className="form-control animated fadeInUp"
                    type="file"
                    onChange={preview}
                  />
                </Form.Group>

                <br />

                <Form.Group controlId="Description">
                  <Form.Label>Blog Description</Form.Label>
                  <ReactQuill
                    theme="snow"
                    value={Blog?.Description}
                    ref={(input) => (descriptionRef = input)}
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

export default BlogUpdate;
