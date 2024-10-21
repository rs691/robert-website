import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './pdfView.module.css';

const PDFResumeModal = ({ pdfUrl }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Resume
      </Button>

<Modal
show={show}
onHide={() => setShow(false)}
dialogClassName='modal-90w'
aria-labelledby="example-custom-modal-styling-title"
size="lg"
>



<Modal.Header closeButton>
<Modal.Title id="example-custom-modal-styling-title">
Resume
</Modal.Title>
</Modal.Header>
<Modal.Body>
<iframe
src={pdfUrl
}
width="100%"  height="100%"
style={{ border: 'none' }}
title="Resume PDF"
/>

</Modal.Body>
</Modal>





      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.modalBack} style={{ height: '80vh'}}>
            <iframe className={styles.pdfView}
              src={`${pdfUrl}#toolbar=0`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Resume PDF"
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

//add prop types
PDFResumeModal.propTypes = {
    pdfUrl: PropTypes.string.isRequired,
   
  };


export default PDFResumeModal;