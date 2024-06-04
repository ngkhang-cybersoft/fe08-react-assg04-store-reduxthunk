import { Link } from "react-router-dom";
import bg_error from "../../assets/img/bg-page404.png";
import "./page404.scss";
import { Button, Col, Row } from "antd";

const Page404 = () => {
  return (
    <Row
      id="page404"
      justify="center"
      align="middle"
      className="vh-100 position-relative"
      style={{ backgroundImage: `url(${bg_error})` }}
    >
      <Col span={12} align="middle" className="p-3 rounded-3 shadow-lg">
        <h1 className="text-center mb-4">Page Not Pound</h1>
        <p className="mb-5 fs-3">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <Link to="/" className="d-inline-block w-50">
          <Button block className="text-uppercase py-2">
            back to home
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default Page404;
