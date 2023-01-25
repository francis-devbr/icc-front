import { Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="https://www.tokiomarine.com.br"
              rel="noopener noreferrer"
              target="_blank"
            >
              Grupo Carrefour - Todos os direitos reservados.
            </a>
          </div>
        </Col>

      </Row>
    </footer>
  );
};

export default Footer;
