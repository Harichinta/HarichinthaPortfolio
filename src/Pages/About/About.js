// import React, { useEffect, useRef, useState } from 'react'
// import './About.css'
// import { motion } from 'framer-motion';

// function About() {

//   const [hasAnimated, setHasAnimated] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!ref.current) return;

//       const rect = ref.current.getBoundingClientRect();
//       const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

//       if (isInView && !hasAnimated) {
//         setHasAnimated(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); 

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [hasAnimated]);

//   return (
//     <div className='aboutmain'>
//       <div className="row aboutcontain">
//         <section className="col-md"></section>
//         <section className="col-md-10 p-3">
//           <h2 className='abouthead'>About</h2>
//           <p style={{ fontSize: "14px" , textAlign:"center"}}><span>_____</span>I'm Hari Venkatesh, a dedicated web developer with a passion for creating dynamic, responsive web applications that blend functionality with aesthetic appeal. With expertise in both front-end technologies like HTML5, CSS3, and JavaScript, and back-end development using Node.js and databases such as MySQL and MongoDB, I bring a full-stack approach to every project. My experience spans from small business websites to complex web applications, all with a focus on delivering high-quality code and innovative solutions tailored to client needs. I'm always eager to learn, collaborate, and take on new challenges in the ever-evolving world of web development.</p>
//           <section className='row aboutrow'>
//             <motion.section className="col-md aboutsub card"
//             ref={ref}
//             initial={{ x: '-100vw' }} 
//             animate={{ x: hasAnimated ? 0 : '-100vw' }}
//             transition={{ type: 'tween', duration: 0.5, ease: 'easeOut'}} 
//             >
//               <h4 >Education</h4>
//               <div className="subcard">
//                 <ul>
//                   <li>
//                     <span>Adhikavi Nannaya Univercity Rajamandry</span> <br />
//                     <span>Barcholor's Degree in computers</span> <br />
//                     <span>2017-2020</span>
//                   </li>
//                   <li>
//                     <span>Board Of Intermidiate Aandhra Pradesh</span> <br />
//                     <span>MPC</span> <br />
//                     <span>2015-2017</span>
//                   </li>
//                   <li>
//                     <span>ZPP Hight School, Antervedi</span> <br />
//                     <span>SSC</span> <br />
//                     <span>2015 Passed Out</span>
//                   </li>
//                 </ul>
//               </div>
//             </motion.section>
//             <section className='col-md-1'></section>
//             <motion.section className="col-md aboutsub card"
//             ref={ref}
//             initial={{ x: '100vw' }}
//             animate={{ x: hasAnimated ? 0 : '100vw' }}
//             transition={{ type: 'tween', duration: 0.5, ease: 'easeOut' }} 
//             >
//               <h4>Experence</h4>
//               <div className="subcard">
//                 <ul>
//                   <li>
//                     <span style={{fontSize:"22px"}}>Software Engineer</span> <br />
//                     <span>Dataevolve Solutions Pvt Ltd</span> <br />
//                     <span>Aug 2022 - July 2024</span> <br />
//                     <span> Madhapur, Hyderabad, Telangana, India</span>
//                     <p style={{ paddingLeft: "10px", marginTop: "10px", fontSize:"14px" }}>As a Software Engineer, I developed and optimized both web and mobile applications, focusing on delivering high-performance, user-friendly experiences. My role involved collaborating with diverse teams to create innovative solutions that meet client needs and adhere to industry best practices.</p>
//                   </li>
//                 </ul>
//               </div>
//             </motion.section>
//           </section>
//         </section>
//         <section className="col-md"></section>
//       </div>
//     </div>
//   )
// }

// export default About


import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import { motion } from 'framer-motion';

function About() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to detect mobile view
  const ref = useRef(null);

  useEffect(() => {
    // Detect if the screen is mobile size on load and resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Consider 768px as mobile breakpoint
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isInView && !hasAnimated) {
        setHasAnimated(true);
      }
    };

    if (!isMobile) {
      // Only add scroll listener if not mobile
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [hasAnimated, isMobile]);

  return (
    <div className='aboutmain'>
      <div className="row aboutcontain">
        <section className="col-md"></section>
        <section className="col-md-10 p-3">
          <h2 className='abouthead'>About</h2>
          <p style={{ fontSize: "14px", textAlign: "center" }}>
            <span>_____</span>I'm Hari Venkatesh, a dedicated web developer with a passion for creating dynamic, responsive web applications that blend functionality with aesthetic appeal. With expertise in both front-end technologies like HTML5, CSS3, and JavaScript, and back-end development using Node.js and databases such as MySQL and MongoDB, I bring a full-stack approach to every project. My experience spans from small business websites to complex web applications, all with a focus on delivering high-quality code and innovative solutions tailored to client needs. I'm always eager to learn, collaborate, and take on new challenges in the ever-evolving world of web development.
          </p>
          <section className='row aboutrow'>
            {/* Education Section */}
            {isMobile ? (
              // Render static sections for mobile view
              <section className="col-md aboutsub card">
                <h4>Education</h4>
                <div className="subcard">
                  <ul>
                    <li>
                      <span>Adhikavi Nannaya University, Rajamandry</span> <br />
                      <span>Bachelor's Degree in Computers</span> <br />
                      <span>2017-2020</span>
                    </li>
                    <li>
                      <span>Board Of Intermediate Andhra Pradesh</span> <br />
                      <span>MPC</span> <br />
                      <span>2015-2017</span>
                    </li>
                    <li>
                      <span>ZPP High School, Antervedi</span> <br />
                      <span>SSC</span> <br />
                      <span>2015 Passed Out</span>
                    </li>
                  </ul>
                </div>
              </section>
            ) : (
              // Render motion section for larger screens
              <motion.section className="col-md aboutsub card"
                ref={ref}
                initial={{ x: '-100vw' }}
                animate={{ x: hasAnimated ? 0 : '-100vw' }}
                transition={{ type: 'tween', duration: 0.5, ease: 'easeOut' }}
              >
                <h4>Education</h4>
                <div className="subcard">
                  <ul>
                    <li>
                      <span>Adhikavi Nannaya University, Rajamandry</span> <br />
                      <span>Bachelor's Degree in Computers</span> <br />
                      <span>2017-2020</span>
                    </li>
                    <li>
                      <span>Board Of Intermediate Andhra Pradesh</span> <br />
                      <span>MPC</span> <br />
                      <span>2015-2017</span>
                    </li>
                    <li>
                      <span>ZPP High School, Antervedi</span> <br />
                      <span>SSC</span> <br />
                      <span>2015 Passed Out</span>
                    </li>
                  </ul>
                </div>
              </motion.section>
            )}

            <section className='col-md-1'></section>

            {/* Experience Section */}
            {isMobile ? (
              <section className="col-md aboutsub card">
                <h4>Experience</h4>
                <div className="subcard">
                  <ul>
                    <li>
                      <span style={{ fontSize: "22px" }}>Software Engineer</span> <br />
                      <span>Dataevolve Solutions Pvt Ltd</span> <br />
                      <span>Aug 2022 - July 2024</span> <br />
                      <span>Madhapur, Hyderabad, Telangana, India</span>
                      <p style={{ paddingLeft: "10px", marginTop: "10px", fontSize: "14px" }}>
                        As a Software Engineer, I developed and optimized both web and mobile applications, focusing on delivering high-performance, user-friendly experiences. My role involved collaborating with diverse teams to create innovative solutions that meet client needs and adhere to industry best practices.
                      </p>
                    </li>
                  </ul>
                </div>
              </section>
            ) : (
              <motion.section className="col-md aboutsub card"
                ref={ref}
                initial={{ x: '100vw' }}
                animate={{ x: hasAnimated ? 0 : '100vw' }}
                transition={{ type: 'tween', duration: 0.5, ease: 'easeOut' }}
              >
                <h4>Experience</h4>
                <div className="subcard">
                  <ul>
                    <li>
                      <span style={{ fontSize: "22px" }}>Software Engineer</span> <br />
                      <span>Dataevolve Solutions Pvt Ltd</span> <br />
                      <span>Aug 2022 - July 2024</span> <br />
                      <span>Madhapur, Hyderabad, Telangana, India</span>
                      <p style={{ paddingLeft: "10px", marginTop: "10px", fontSize: "14px" }}>
                        As a Software Engineer, I developed and optimized both web and mobile applications, focusing on delivering high-performance, user-friendly experiences. My role involved collaborating with diverse teams to create innovative solutions that meet client needs and adhere to industry best practices.
                      </p>
                    </li>
                  </ul>
                </div>
              </motion.section>
            )}
          </section>
        </section>
        <section className="col-md"></section>
      </div>
    </div>
  );
}

export default About;
