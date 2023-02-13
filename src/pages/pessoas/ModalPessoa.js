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
const ModalPessoa = (props) => {
  return createPortal(
    <>
      <Modal
        className="modal-dialog-centered"
        isOpen={props.isShowing}
        toggle={props.close}
      >
        <div className="modal-header">
          <h6 className="modal-title" id="modal-title-default">
            Type your modal title
          </h6>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={props.close}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>

        <div className="modal-footer">
          <Button color="primary" type="button">
            Save changes
          </Button>
          <Button
            className="ml-auto"
            color="link"
            data-dismiss="modal"
            type="button"
            onClick={props.close}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>,
    document.querySelector("#modal-root")
  );
};

export default ModalPessoa;
