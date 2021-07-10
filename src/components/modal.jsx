import { React, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import firebase from "./firebase";

export default function ModalView({ sendDataToModal }) {
  const [show, setShow] = useState(false);
  const [newsContent, setNews] = useState(null);
  const [cardValue, setCardValue] = useState(null);

  const handleChange = (event) => {
    setNews(event.target.value);
  };

  const handleOptionChange = (event) => {
    setCardValue(event.target.value);
  };

  const handleClose = () => {
    setShow(false);
    setNews(null);
  };
  const handleShow = () => setShow(true);

  const handleUser = () => {
    const store = firebase.database().ref("/CardNews/" + cardValue);
    let data = {
      News: newsContent,
      Cardid: cardValue,
    };
    store.set(data);
  };

  return (
    <>
      <Button className="mt-3 modal-btn" onClick={handleShow}>
        + ADD NEWS
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title as="h5">
            Add the circular/news to respective cards{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="SelectCard">
            <Form.Label>Choose the card</Form.Label>
            <Form.Control
              as="select"
              custom
              style={{
                backgroundColor: "#E7F8FD	",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
              onChange={handleOptionChange}
              onClick={handleOptionChange}
            >
              <option value="">----select----</option>
              <option value="1">AU HOME</option>
              <option value="2">AUKDC FEE</option>
              <option value="3">ACOE</option>
              <option value="4">CEG HOSTEL</option>
              <option value="5">SEMS</option>
              <option value="6">JUNIOR-SENIOR</option>
            </Form.Control>
            {/* <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select> */}

            <Form.Control
              as="textarea"
              rows={5}
              defaultValue={newsContent}
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleUser();
              sendDataToModal(cardValue);
              //sendValueToModal(cardValue);

              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
