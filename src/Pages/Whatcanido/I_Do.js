// import React, { useEffect, useRef, useState } from 'react'
// import './I_Do.css'
// import mobileimgbg from '../../Source/mbimg.png'
// import laptopimgbg from '../../Source/laptopimg.png'
// import { motion } from 'framer-motion';

// function I_Do() {

//     const [hasAnimated, setHasAnimated] = useState(false);
//     const [hasAnimated2, setHasAnimated2] = useState(false);
//     const ref2 = useRef(null);
//     const ref3 = useRef(null);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!ref2.current || !ref3.current) return;

//             const rect = ref2.current.getBoundingClientRect();
//             const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

//             const rect2 = ref3.current.getBoundingClientRect();
//             const isInView2 = rect2.top <= window.innerHeight && rect2.bottom >= 0;

//             if (isInView && !hasAnimated) {
//                 setHasAnimated(true);
//             }
//             if (isInView2 && !hasAnimated2) {
//                 setHasAnimated2(true);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll();

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [hasAnimated, hasAnimated2]);

//     return (
//         <>
//             <h2 className='abouthead whatidocnt' style={{ letterSpacing: "1px" }}>What I Can Do?</h2>
//             <div style={{ overflowX: "hidden" }}>
//                 <div className='candoconatin mb-5'>
//                     <section className="row webandmobsec">
//                         <div className='col-lg-6  websection'>
//                             <motion.div className='mt-5 subweb'
//                             ref={ref2}
//                             initial={{ scale: 0, z: 500 }}
//                             animate={{ scale: hasAnimated ? 1 : 0, z: hasAnimated ? 0 : 1}}
//                             transition={{type: 'tween', duration: 0.5, ease: 'easeOut', delay:0.2 }} >
//                                 <h3 className='Mobapphead'>Web App Developement</h3>
//                                 <h3 className='Mobapphead'>Angular, React.js</h3>
//                                 <div className='underbar'></div>
//                                 <p className='mt-5'>Web development with Angular and React.js involves creating dynamic, responsive applications using a component-based architecture for modular UI elements. Angular offers built-in tools for state management and routing, while React.js provides flexibility with tools like Redux and Context API. Both frameworks ensure optimal performance through efficient rendering techniques, making them ideal for managing complex user interfaces. I leverage the strengths of both Angular and React.js to deliver robust and scalable web applications.</p>
//                             </motion.div>
//                         </div>
//                         <div className='col-lg-6 d-flex align-items-end justify-content-center' >
//                             <motion.img
//                             ref={ref2}
//                             initial={{ scale: 0, z: 500 }}
//                             animate={{ scale: hasAnimated ? 1 : 0, z: hasAnimated ? 0 : 1}}
//                             transition={{type: 'tween', duration: 0.5, ease: 'easeOut',delay:0.3 }}
//                             src={laptopimgbg} alt="" width="100%" />
//                         </div>
//                     </section>
//                     <section className="row webandmobsec2">
//                         <div className='col-lg-6 mobsection'>
//                             <motion.div className='mt-5 subweb'
//                             ref={ref3}
//                             initial={{ scale: 0, z: 500 }}
//                             animate={{ scale: hasAnimated2 ? 1 : 0, z: hasAnimated2 ? 0 : 1 }}
//                             transition={{type: 'tween', duration: 0.5, ease: 'easeOut', delay:0.2 }} >
//                                 <h3 className='Mobapphead'>Mobile App Developement With</h3>
//                                 <h3 className='Mobapphead'>React Native</h3>
//                                 <div className='underbar'></div>
//                                 <p className='mt-5'>Mobile app development with React Native for Android focuses on creating high-performance, native-like applications specifically for Android devices using a single JavaScript codebase. React Native allows developers to build visually appealing and responsive Android apps by leveraging reusable components, native device features, and third-party libraries, all while ensuring a smooth and efficient development process.</p>
//                             </motion.div>
//                         </div>
//                         <div className='col-lg-6 d-flex align-items-end justify-content-center'>
//                             <motion.img 
//                              ref={ref3}
//                              initial={{ scale: 0, z: 500 }}
//                              animate={{ scale: hasAnimated2 ? 1 : 0, z: hasAnimated2 ? 0 : 1 }}
//                              transition={{type: 'tween', duration: 0.5, ease: 'easeOut', delay:0.3 }}
//                              src={mobileimgbg} alt="" width="100%" />
//                         </div>
//                     </section>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default I_Do



// {/* <img src={mobileimgbg} alt="" width="100%" height="500px" /> */ }

// {/* <div className='col-md-5 d-flex  align-item-center' style={{height:"inherit"}}>
//             <section className='border mobiledesc'>lfkajsdlkf</section>
//           </div> */}


import React, { useEffect, useRef, useState } from 'react'
import './I_Do.css'
import mobileimgbg from '../../Source/mbimg.png'
import laptopimgbg from '../../Source/laptopimg.png'
import { motion } from 'framer-motion';

function I_Do() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [hasAnimated2, setHasAnimated2] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // State to track mobile view
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    useEffect(() => {
        // Detect if the device is mobile (screen width < 768px)
        const checkMobileView = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', checkMobileView);
        checkMobileView(); // Check initially

        const handleScroll = () => {
            if (!ref2.current || !ref3.current) return;

            const rect = ref2.current.getBoundingClientRect();
            const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

            const rect2 = ref3.current.getBoundingClientRect();
            const isInView2 = rect2.top <= window.innerHeight && rect2.bottom >= 0;

            if (isInView && !hasAnimated) {
                setHasAnimated(true);
            }
            if (isInView2 && !hasAnimated2) {
                setHasAnimated2(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('resize', checkMobileView);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasAnimated, hasAnimated2]);

    return (
        <>
            <h2 className='abouthead whatidocnt' style={{ letterSpacing: "1px" }}>What I Can Do?</h2>
            <div style={{ overflowX: "hidden" }}>
                <div className='candoconatin mb-5'>
                    <section className="row webandmobsec">
                        <div className='col-lg-6  websection'>
                            <motion.div className='mt-5 subweb'
                                ref={ref2}
                                initial={isMobile ? { scale: 1, z: 0 } : { scale: 0, z: 500 }}
                                animate={isMobile ? {} : { scale: hasAnimated ? 1 : 0, z: hasAnimated ? 0 : 1 }} // Disable animation on mobile
                                transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 0.4, delay: 0.1 }} 
                                // transition={{ type: 'tween', duration: 0.3, ease: 'easeOut', delay: 0.2 }}
                                >
                                <h3 className='Mobapphead'>Web App Developement</h3>
                                <h3 className='Mobapphead'>Angular, React.js</h3>
                                <div className='underbar'></div>
                                <p className='mt-5'>Web development with Angular and React.js involves creating dynamic, responsive applications using a component-based architecture for modular UI elements. Angular offers built-in tools for state management and routing, while React.js provides flexibility with tools like Redux and Context API. Both frameworks ensure optimal performance through efficient rendering techniques, making them ideal for managing complex user interfaces. I leverage the strengths of both Angular and React.js to deliver robust and scalable web applications.</p>
                            </motion.div>
                        </div>
                        <div className='col-lg-6 d-flex align-items-end justify-content-center' >
                            <motion.img
                                ref={ref2}
                                initial={isMobile ? { scale: 1, z: 0 } : { scale: 0, z: 500 }}
                                animate={isMobile ? {} : { scale: hasAnimated ? 1 : 0, z: hasAnimated ? 0 : 1 }} // Disable animation on mobile
                                // transition={{ type: 'tween', duration: 0.3, ease: 'easeOut', delay: 0.3 }}
                                transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 0.4, delay: 0.1 }} 
                                src={laptopimgbg} alt="" width="100%" />
                        </div>
                    </section>
                    <section className="row webandmobsec2">
                        <div className='col-lg-6 mobsection'>
                            <motion.div className='mt-5 subweb'
                                ref={ref3}
                                initial={isMobile ? { scale: 1, z: 0 } : { scale: 0, z: 500 }}
                                animate={isMobile ? {} : { scale: hasAnimated2 ? 1 : 0, z: hasAnimated2 ? 0 : 1 }} // Disable animation on mobile
                                transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 0.4, delay: 0.1 }} 
                                // transition={{ type: 'tween', duration: 0.3, ease: 'easeOut', delay: 0.2 }}
                                >
                                <h3 className='Mobapphead'>Mobile App Developement With</h3>
                                <h3 className='Mobapphead'>React Native</h3>
                                <div className='underbar'></div>
                                <p className='mt-5'>Mobile app development with React Native for Android focuses on creating high-performance, native-like applications specifically for Android devices using a single JavaScript codebase. React Native allows developers to build visually appealing and responsive Android apps by leveraging reusable components, native device features, and third-party libraries, all while ensuring a smooth and efficient development process.</p>
                            </motion.div>
                        </div>
                        <div className='col-lg-6 d-flex align-items-end justify-content-center'>
                            <motion.img
                                ref={ref3}
                                initial={isMobile ? { scale: 1, z: 0 } : { scale: 0, z: 500 }}
                                animate={isMobile ? {} : { scale: hasAnimated2 ? 1 : 0, z: hasAnimated2 ? 0 : 1 }} // Disable animation on mobile
                                // transition={{ type: 'tween', duration: 0.3, ease: 'easeOut', delay: 0.3 }}
                                transition={{ type: 'spring', stiffness: 70, damping: 20, duration: 0.4, delay: 0.1 }} 
                                src={mobileimgbg} alt="" width="100%" />
                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}

export default I_Do
