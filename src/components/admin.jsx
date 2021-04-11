// import React from "react";
// import { Modal, Button } from "react-bootstrap";

// const Admin = (props) => {
//   return (
//     <>
//       <h1>Admin</h1>
//       <button
//         onClick={() => {
//           console.log("sa");

//           console.log("sga");
//         }}
//         className="btn btn-info"
//       >
//         Button info
//       </button>
//     </>
//   );
// };

import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function Admin(props) {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var number = document.getElementById("number");

  // Listen for input event on numInput.
  if (number) {
    number.onkeydown = function (e) {
      if (
        !(
          (e.keyCode > 95 && e.keyCode < 106) ||
          (e.keyCode > 43 && e.keyCode < 58) ||
          e.keyCode === 8 ||
          e.keyCode === 45
        )
      ) {
        return false;
      }
    };
  }

  const [setName, setPrice, name] = useState();

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Button variant="primary" onClick={handleShow}>
          Add Product
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {" "}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name of Product</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              min="0"
              max="99999"
              placeholder="Enter Price"
              controlid="number"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              label="Example file input"
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
              console.log("hh");
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

export default Admin;
