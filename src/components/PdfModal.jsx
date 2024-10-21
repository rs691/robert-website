import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const PdfModal = ({ pdfUrl }) => {
  const [show, setShow] = useState(false);

  // Handlers to show and hide the modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Button to open the modal */}
      <Button variant="primary" onClick={handleShow}>
        Open PDF
      </Button>

      {/* Modal to display the PDF */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>PDF Viewer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={pdfUrl}
            width="100%"
            height="500px"
            title="PDF Viewer"
            style={{ border: 'none' }}
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
PdfModal.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
};

export default PdfModal;

