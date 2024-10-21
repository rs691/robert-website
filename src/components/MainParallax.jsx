import { useEffect, useRef, useState, useMemo } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import styles from "./MainParallax.module.css";


const MainParallax = () => {
    const alignCenter = { display: "flex", alignItems: "center" };
    const location = useLocation();
    const navigate = useNavigate();
    const parallaxRef = useRef(null);
  
    // Initialize isHomePage
    const isHomePage = location.pathname === '/';
  
    // State to track parallax scroll position
    const [lastParallaxPosition, setLastParallaxPosition] = useState(0);
    const [isReturning, setIsReturning] = useState(false);
    const [lastVisitedSection, setLastVisitedSection] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
  

    // Define the sections for the parallax
    // useMemo is used to prevent re-creating the sections array on every render
    const sections = useMemo(() => [
      { offset: 1.3, speed: 1, content: 'Education', link: '/education' },
      { offset: 3.2, speed: 1.4, content: 'Projects', link: '/projects' },
      { offset: 5.0, speed: 1.4, content: 'Contact', link: '/contact' },
      { offset: 7.0, speed: 2.0, content: 'Other', link: '/other' }
    ], []);



const handleBack = (e) => {
    e.preventDefault();
    setIsReturning(true);

    if(parallaxRef.current) {
      parallaxRef.current.scrollTo(lastParallaxPosition || 0);
    }

    navigate('/');
  };




  // Set the last scroll position before navigating to a section
  const handleSectionClick = (link) => {
    if (parallaxRef.current) {
      setLastParallaxPosition(parallaxRef.current.current);
      setLastVisitedSection(link);
    }
    navigate(link);
  };




    useEffect(() => {
        if (parallaxRef.current) {
          setTimeout(() => {
          if (isHomePage && lastVisitedSection) {
            // Determine the initial scroll position based on the last visited section
            const initialScrollPosition = sections.find(section => section.link === lastVisitedSection)?.offset || 0;
            parallaxRef.current.scrollTo(initialScrollPosition);
          } else if (isHomePage && isReturning) {
            parallaxRef.current.scrollTo(lastParallaxPosition);
            setIsReturning(false);
          }
        }, 100);
      }
      }, [isHomePage, isReturning, lastParallaxPosition, lastVisitedSection, sections]);
  

  
    return (
      <div>
        <div className={styles.background} />
        {isHomePage ? (
          <>
            <Parallax pages={10} ref={parallaxRef}>
              <ParallaxLayer
                offset={0}
                speed={0.3}
                style={{ ...alignCenter, justifyContent: "center" }}
              >
                <div className={styles.stickyText}>
                  <h1>This is a short story about a software
                     developer named Rob</h1>
                  </div>

              </ParallaxLayer>

              <ParallaxLayer
                sticky={{ start: 1, end: 2 }}
                style={{ ...alignCenter, justifyContent: "flex-start", zIndex: -1 }}
              >
                <div className={`${styles.stickyText}`}>
                  <h1>heres a little about my education</h1>
                </div>
               
              </ParallaxLayer>
  
              <ParallaxLayer
                sticky={{ start: 3, end: 4 }}
                style={{ ...alignCenter, justifyContent: "flex-start", zIndex: -1 }}
              >
                <div className={`${styles.stickyText} ${styles.sticky}`}>
                  <h1>where i worked and what i did</h1>
                  
                </div>
             
              </ParallaxLayer>
  
              <ParallaxLayer
                sticky={{ start: 5, end: 6 }}
                style={{ ...alignCenter, justifyContent: "flex-start", zIndex: -1 }}
              >
                <div className={`${styles.stickyText} ${styles.sticky}`}>
                  <h1>heres how to contact me.</h1>
                  
                </div>
              </ParallaxLayer>

              <ParallaxLayer
                sticky={{ start: 7, end: 8 }}
                style={{ ...alignCenter, justifyContent: "flex-start", zIndex: -1 }}
              >
                <div className={`${styles.stickyText} ${styles.sticky}`}>
                  <h1>Other.</h1>
                  
                </div>
              </ParallaxLayer>

              <ParallaxLayer
                sticky={{ start: 9, end: 10 }}
                style={{ ...alignCenter, justifyContent: "center", zIndex: -1 }}
              >
               <div className={styles.stickyText}>
                  <h1>the end.....</h1>
    
                </div>
              </ParallaxLayer>
  
              {sections.map((section) => (
                <ParallaxLayer
                  key={section.content}
                  offset={section.offset}
                  speed={section.speed}
                  style={{ ...alignCenter, justifyContent: "flex-end", zIndex: 2 }}
                >
                  <div 
                    className={styles.clickableText}
                    onClick={() => handleSectionClick(section.link)}
                  >
                    {section.content}
                  </div>
                </ParallaxLayer>
              ))}
            </Parallax>
          </>
        ) : (
          // <div className={styles.contentPage}>
          //   <button 
          //     onClick={handleBack}
          //     className={styles.backButton}
          //   >
          //     Back to Main
          //   </button>
          //   <Outlet />
          // </div>

<div className={styles.contentPage}>
{/* home icon */}
<button 
              onClick={handleBack}
              className={styles.backButton}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                position: 'fixed',
                top: '30px',
                left: '30px',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                padding: '10px',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={isHovered ? "3" : "2"}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: 'all 0.3s ease'
                }}
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </button>
<Outlet />
</div>
        )}
      </div>
    );
  };
  
  export default MainParallax;
  