import React from "react";

import { createPortal } from "react-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col,
} from "reactstrap";
const ModalNaturezaFato = (props) => {
  if (props.isShowing) {
    return createPortal(
      <>
        <Modal
          className="modal-dialog-centered"
          size="sm"
          isOpen={props.isShowing}
          toggle={props.setIsShowing(!props.isShowing)}
        >
          <div className="modal-body p-0">
            
          </div>
        </Modal>
      </>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default ModalNaturezaFato;
