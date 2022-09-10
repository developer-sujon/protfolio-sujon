//External Lib Import
import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import SummeryRequest from "../../APIRequest/SummeryRequest";

const Dashboard = () => {
  useEffect(() => {
    SummeryRequest.BlogSummery();
    SummeryRequest.PortfolioSummery();
    SummeryRequest.TestimonialSummery();
    SummeryRequest.ClientSummery();
    SummeryRequest.EducationSummery();
    SummeryRequest.ExperienceSummery();
    SummeryRequest.SkillSummery();
    SummeryRequest.EmailSummery();
    SummeryRequest.CommentSummery();
  }, []);

  const {
    Blog,
    Portfolio,
    Testimonial,
    Client,
    Education,
    Experience,
    Skill,
    Email,
    Comment,
  } = useSelector((state) => state.Summery);

  return (
    <Container fluid>
      <Row>
        <Col md={4} className="my-3 animate__animated  animate__fadeInUp">
          <Card className="card h-100">
            <Card.Body className="card-body">
              <h5 className="animated fadeInUp">Total Blog</h5>
              <h6 className="text-secondary animated fadeInUp">{Blog || 0}</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-3 animate__animated  animate__fadeInUp">
          <Card className="card h-100">
            <Card.Body className="card-body">
              <h5 className="animated fadeInUp">Total Portfolio</h5>
              <h6 className="text-secondary animated fadeInUp">
                {Portfolio || 0}
              </h6>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-3 animate__animated  animate__fadeInUp">
          <Card className="card h-100">
            <Card.Body className="card-body">
              <h5 className="animated fadeInUp">Total Testimonial</h5>
              <h6 className="text-secondary animated fadeInUp">
                {Testimonial}
              </h6>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-3 animate__animated  animate__fadeInUp">
          <Card className="card h-100">
            <Card.Body className="card-body">
              <h5 className="animated fadeInUp">Total Client</h5>
              <h6 className="text-secondary animated fadeInUp">
                {Client || 0}
              </h6>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-3 animate__animated  animate__fadeInUp">
          <Card className="card h-100">
            <Card.Body className="card-body">
              <h5 className="animated fadeInUp">Total Education</h5>
              <h6 className="text-secondary animated fadeInUp">
                {Education || 0}
              </h6>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-3 animate__animated  animate__fadeInUp">
          <Card className="card h-100">
            <Card.Body className="card-body">
              <h5 className="animated fadeInUp">Total Experience</h5>
              <h6 className="text-secondary animated fadeInUp">
                {Experience || 0}
              </h6>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-3 animate__animated  animate__fadeInUp">
          <Card className="card h-100">
            <Card.Body className="card-body">
              <h5 className="animated fadeInUp">Total Skill</h5>
              <h6 className="text-secondary animated fadeInUp">{Skill || 0}</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-3 animate__animated  animate__fadeInUp">
          <Card className="card h-100">
            <Card.Body className="card-body">
              <h5 className="animated fadeInUp">Total Email</h5>
              <h6 className="text-secondary animated fadeInUp">{Email || 0}</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-3 animate__animated  animate__fadeInUp">
          <Card className="card h-100">
            <Card.Body className="card-body">
              <h5 className="animated fadeInUp">Total Comment</h5>
              <h6 className="text-secondary animated fadeInUp">
                {Comment || 0}
              </h6>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
