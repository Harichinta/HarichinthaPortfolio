import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import './Home.css'
import About from '../About/About'
import Skills from '../Skills/Skills'
import downarrow from '../../Source/source.gif'
import portfoliopic from '../../Source/codingpersion-removebg-preview.png'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Ido from '../Whatcanido/I_Do'
import arrowcircle from '../../Source/circlearr.svg'
import resumepath from '../../Source/Hari_Venkatesh_Chintha_3.pdf'
import downloadingres from '../../Source/downloadingresgif.gif'

function Home() {

    const text = "I AM HARI";
    const speed = 150;
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {

            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex(index + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else {
            const resetTimeout = setTimeout(() => {
                setDisplayedText('');
                setIndex(0);
            }, 2000);

            return () => clearTimeout(resetTimeout);
        }
    }, [index, text, speed]);


    const [downloadedStatus, setDownloadStatus] = useState(false);

    const handleDownload = (event) => {
        event.preventDefault();
        setDownloadStatus(true);
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = `${resumepath}`;
            link.download = 'Hari_Venkatesh_Resume.pdf';
            link.click();
            setDownloadStatus(false);
        }, 2000);
    };

    return (
        <>
            <div className='maincontainer' id='home' >
                <div className="row p-4">
                    <section className="col-md"></section>
                    <section className='col-md-6 herosection'>
                        <motion.section
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ type: 'tween', duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                        >
                            <h1 className='ownername mx-auto'><span className='Hi'>Hi&#128075;! </span> {displayedText}</h1>
                            <h2 className='desig mx-auto'> Full Stack Web Developer</h2>
                            <h5 className='cap mx-auto mb-5'>Passionate about crafting user-centric digital solutions with modern, cutting-edge technologies.</h5>
                            <div>
                                {!downloadedStatus && <span className='resumedownload' onClick={handleDownload} > <a href={resumepath} >Download Resume</a> </span>}
                                {downloadedStatus && <span><img src={downloadingres} width="60px" alt="Downloading..." /></span>}
                            </div>
                        </motion.section>
                        <motion.section
                            initial={{ scale: 0, z: 500 }}
                            animate={{ scale: 1, z: 0 }}
                            transition={{ type: 'tween', duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                            className='stamp d-none d-lg-block'>
                            <div className="circle-container">
                                <div className='inercircle'><img className='arrimg' src={arrowcircle} alt="" width="70px" /></div>
                                <div className="circle-text">
                                    <span>W</span><span>E</span><span>B</span><span style={{ color: "orange" }}>&bull;</span><span>D</span><span>E</span> <span>V</span><span>L</span><span>E</span><span>P</span><span>E</span><span>R</span><span>E</span><span style={{ color: "orange" }}>&bull;</span><span>H</span><span>A</span><span>R</span><span>I</span>
                                </div>
                            </div>
                        </motion.section>
                    </section>
                    <motion.section className='col-md-4 d-none d-md-block d-flex justify-content-center align-items-center'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'tween', duration: 0.5, ease: 'easeOut', delay: 0.5 }}>
                        <div style={{ width: "90%" }} className='mx-auto'><img src={portfoliopic} alt="" width="100%" /></div>
                    </motion.section>
                    <section className="col-md">
                    </section>
                </div>
                <div className='d-flex justify-content-center'>
                    <img className='mx-auto' src={downarrow} alt="" width="70px" />
                </div>

                <motion.span className='contactmestrip'
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'tween', duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                >
                    <a style={{ textDecoration: "none", color: "#ffffff" }} href="#contact">CONTACT ME</a>
                </motion.span>

            </div>

            <section id='About'>
                <About />
            </section>

            <section id='I_Do'>
                <Ido />
            </section>

            <section id='skills'>
                <Skills />
            </section>

            <section id='projects'>
                <Projects />
            </section>

            <section id='contact'>
                <Contact />
            </section>
        </>
    )
}

export default Home