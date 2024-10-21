
import './Other.module.css';
// import ProjectCard from './ProjectCard';
import PDFResumeModal from './PDFResumeModal.jsx';




function Other() {


  return (
    <div className={StyleSheet.other}>
    <h1>Other</h1>
   
    <div>
      <h1>Your Page Content</h1>
      <PDFResumeModal pdfUrl="./public/resume.pdf" />
    </div>
    </div>
  );
}

export default Other;
