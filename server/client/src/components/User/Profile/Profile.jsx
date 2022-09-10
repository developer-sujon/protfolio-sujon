//External Lib Import
import { useRef } from "react";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProfileRequest from "../../../APIRequest/ProfileRequest";

//Internal Lib Import
import FormValidation from "../../../helper/FormValidation";
import GetBase64 from "../../../helper/GetBase64";
import ToastMessage from "../../../helper/ToastMessage";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.Profile);

  let UserNameRef,
    UserMobileRef,
    UserImgRef,
    UserImgView,
    UserPostRef,
    UserCvRef,
    UserFacebookRef,
    UserGithubRef,
    UserLinkedinRef,
    UserBirthdayRef,
    UserAddressRef,
    UserMapRef,
    UserAboutMeRef = useRef();

  const previewImage = () => {
    const imgFile = UserImgRef.files[0];
    GetBase64(imgFile).then((base64Img) => {
      UserImgView.src = base64Img;
    });
  };

  const updateProfile = (e) => {
    e.preventDefault();
    if (FormValidation.isEmpty(UserNameRef.value)) {
      ToastMessage.errorMessage("Name is Required");
    } else if (!FormValidation.isMobile(UserMobileRef.value)) {
      ToastMessage.errorMessage("Invalid Mobile Number");
    } else {
      const Name = UserNameRef.value;
      const Phone = UserMobileRef.value;
      const Image = UserImgView.src;
      const Post = UserPostRef.value;
      const Cv = UserCvRef.value;
      const Facebook = UserFacebookRef.value;
      const Github = UserGithubRef.value;
      const Linkedin = UserLinkedinRef.value;
      const Birthday = UserBirthdayRef.value;
      const Address = UserAddressRef.value;
      const AboutMe = UserAboutMeRef.value;
      const MapLink = UserMapRef.value;

      ProfileRequest.UserUpdate({
        Name,
        Phone,
        Image,
        Post,
        Cv,
        Facebook,
        Github,
        Linkedin,
        Birthday,
        Address,
        AboutMe,
        MapLink,
      }).then((result) => {
        if (result) {
          navigate("/");
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
              <img
                ref={(input) => (UserImgView = input)}
                className="icon-nav-img-lg"
                src={user?.Image}
                alt={user?.Name}
                style={{ maxWidth: "200px" }}
              />
              <hr />

              <Form onSubmit={updateProfile}>
                <Row>
                  <Col md={4} className="p-2">
                    <Form.Group className="mb-3" controlId="photo">
                      <Form.Label>Profile Picture</Form.Label>
                      <Form.Control
                        onChange={previewImage}
                        ref={(input) => (UserImgRef = input)}
                        placeholder="User Email"
                        className="form-control animated fadeInUp"
                        type="file"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="p-2">
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={user?.Email}
                        readOnly={true}
                        placeholder="User Email"
                        className="form-control animated fadeInUp"
                        type="email"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="p-2">
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={user?.Name}
                        ref={(input) => (UserNameRef = input)}
                        placeholder="Name"
                        className="form-control animated fadeInUp"
                        type="text"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="p-2">
                    <Form.Group>
                      <Form.Label>Mobile</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={user?.Phone}
                        ref={(input) => (UserMobileRef = input)}
                        placeholder="Mobile"
                        className="form-control animated fadeInUp"
                        type="text"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="p-2">
                    <Form.Group>
                      <Form.Label>Post</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={user?.Post}
                        ref={(input) => (UserPostRef = input)}
                        placeholder="Post"
                        className="form-control animated fadeInUp"
                        type="text"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="p-2">
                    <Form.Group>
                      <Form.Label>Cv</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={user?.Cv}
                        ref={(input) => (UserCvRef = input)}
                        placeholder="Cv"
                        className="form-control animated fadeInUp"
                        type="url"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="p-2">
                    <Form.Group>
                      <Form.Label>Facebook</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={user?.Facebook}
                        ref={(input) => (UserFacebookRef = input)}
                        placeholder="Facebook"
                        className="form-control animated fadeInUp"
                        type="url"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="p-2">
                    <Form.Group>
                      <Form.Label>Github</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={user?.Github}
                        ref={(input) => (UserGithubRef = input)}
                        placeholder="Github"
                        className="form-control animated fadeInUp"
                        type="url"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="p-2">
                    <Form.Group>
                      <Form.Label>Linkedin</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={user?.Linkedin}
                        ref={(input) => (UserLinkedinRef = input)}
                        placeholder="Linkedin"
                        className="form-control animated fadeInUp"
                        type="url"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="p-2">
                    <Form.Group>
                      <Form.Label>Birthday</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={user?.Birthday}
                        ref={(input) => (UserBirthdayRef = input)}
                        placeholder="Birthday"
                        className="form-control animated fadeInUp"
                        type="date"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="p-2">
                    <Form.Group>
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={user?.Address}
                        ref={(input) => (UserAddressRef = input)}
                        placeholder="Address"
                        className="form-control animated fadeInUp"
                        type="text"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="p-2">
                    <Form.Group>
                      <Form.Label>Google Map Link</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={user?.MapLink}
                        ref={(input) => (UserMapRef = input)}
                        placeholder="Google Map Link"
                        className="form-control animated fadeInUp"
                        type="url"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12} className="p-2">
                    <Form.Group>
                      <Form.Label>AboutMe</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={user?.AboutMe}
                        ref={(input) => (UserAboutMeRef = input)}
                        placeholder="AboutMe"
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

export default Profile;
