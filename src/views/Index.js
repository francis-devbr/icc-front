import {
  Card,
  Container,
  Row,
  CardHeader,
  CardFooter,
  Table,
} from "reactstrap";
import HeaderNoInfo from "../components/header/HeaderNoInfo";
const Index = (props) => {
  return (
    <>
      <HeaderNoInfo />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card tables</h3>
              </CardHeader>
              <Table
                className="align-items-center table-flush"
                responsive
              ></Table>
              <CardFooter className="py-4"></CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Index;
