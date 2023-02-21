import { useKeycloak } from "@react-keycloak/web";
import SimpleHeader from "components/header/SimpleHeader";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";


import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';


import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import List from "./List";
import { useState } from "react";

const OcorrenciasInternas = () => {
  
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
      width: 100,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });
 


  const MyDocument = () => (
   alert('teste')
  );


  const PDF = () => (
    ReactDOM.render(<MyDocument />, document.getElementById('root'))
  );

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <SimpleHeader name="Ocorrencia" parentName="Ocorrencia" />
      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card className="shadow" style={{ minHeight: "550px" }}>
              <CardHeader className="border-0">
                {keycloak?.hasResourceRole("manager") && (
                  <><Button
                    color="success"
                    className="btn mb-2 "
                    onClick={() => navigate("/admin/ocorrencias-internas/new")}
                  >
                    <i className="ni ni-briefcase-24"></i> Adicionar Nova
                    Ocorrência
                  </Button><Button
                    color="danger"
                    className="btn mb-2 "
                    onClick={toggle}
                  >
                      <i className="fas fa-file-pdf"></i> Gerar Relatório PDF
                    </Button></>
                )}
              </CardHeader>
              <CardBody>
                <List />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <div>
      
       
        
      

        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
      <Container fluid>
        <Row> 
          <Col md={12}>
            <PDFViewer>
              <Document>
                <Page size="A4" style={styles.page}>
                  <View style={styles.section}>
                    <Text>Case Principal</Text>
                  </View>
                  <View style={styles.section}>
                    <Text>COD LOJA</Text>
                  </View>
                  <View style={styles.section}>
                    <Text>REGIÃO</Text>
                  </View>
                </Page>
              </Document>
            </PDFViewer>
          </Col>
        </Row>
      </Container>
      </ModalBody>
          
        
      <ModalFooter>
          <Button color="success" onClick={toggle}>
            Baixar Relatório
          </Button>{' '}
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
       </Modal>
     
    </div>
      
    </>
  );
};

export default OcorrenciasInternas;
