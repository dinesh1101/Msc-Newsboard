import { React, useState } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";

export default function ModalView({ sendDataToModal }) {
  const [show, setShow] = useState(false);
  const [newsContent, setNews] = useState(null);
  const [cardValue, setCardValue] = useState(null);

  const handleChange = (event) => {
    setNews(event.target.value);
  };

  const handleOptionChange = (event) => {
    event.preventDefault();
    setCardValue(event.target.value);
  };

  const handleClose = () => {
    setShow(false);
    setNews(null);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info  w-100" onClick={handleShow}>
        A D D ___ N E W S
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title as="h3">Update News</Modal.Title>
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
              onClick={handleOptionChange}
            >
              <option value="1">AU HOME</option>
              <option value="2">AUKDC FEE</option>
              <option value="3">ACOE</option>
              <option value="4">CEG HOSTEL</option>
              <option value="5">SEMS</option>
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
              sendDataToModal(newsContent, cardValue);
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
