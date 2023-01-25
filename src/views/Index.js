import {
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
} from "reactstrap";
import Header from "../components/header/Header";
import { motion } from "framer-motion";
import HeaderNoInfo from "../components/header/HeaderNoInfo";
const Index = (props) => {
  return (
    <>
      <HeaderNoInfo />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
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
            </motion.div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Index;
