import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import home from '../assets/home.svg';
import './project.module.css';


const projectImages = [
  {
    id: 0,
    title: "Advanced Web Forms",
    src: "./icons/project.png",
    description: "Description of Project One"
  },
  {
    id: 1,
    title: "Project Two",
    src: "../icons/screen.svg",
    description: "Description of Project Two"
  },
  {
    id: 2,
    title: "Project Three",
    src: { home },
    description: "Description of Project Three"
  }
];

function Projects() {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  return (
    <div className="hero-section" style={{
      height: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '',
      color: '#fff',
      textAlign: 'center',
      padding: '0 2rem',
    }}>
      <h1 style={{ fontSize: '150px', marginBottom: '2rem', padding: '4rem' }}>Projects</h1>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', 
        padding: '5rem' }}>
        {projectImages.map((project) => (
          <Button
            key={project.id}
            variant="outline-light"
            onClick={() => handleShow(project)}
            style={{
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              borderRadius: '8px',
              transition: 'background 0.3s',
              background: 'rgba(255, 255, 255, 0.1)'
            }}
          >
            {project.title}
          </Button>
        ))}
      </div>

      {/* Modal for selected project */}
      {selectedProject && (
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="project-modal-title"
          size="lg"
        >
          <Modal.Header closeButton style={{ background: '#1a1a1a', color: '#fff' }}>
            <Modal.Title id="project-modal-title">
              {selectedProject.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ background: '#1a1a1a', color: '#fff' }}>
            <img
              style={{
                width: "50%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: '1rem'
              }}
              src={selectedProject.src}
              alt={selectedProject.title}
            />
            <h4 style={{ color: '#D83BD2', marginTop: '1rem' }}>Project Details</h4>
            <p>{selectedProject.description}</p>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

Projects.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default Projects;
