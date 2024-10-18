import React from 'react'
import './Contact.css'
import linkedinlogo from '../../Source/linkedsvglog.svg';
import mailicon from '../../Source/Maillogosvg.svg';
import phoneicons from '../../Source/phone-call.svg';
import locationicon from '../../Source/locationcon.svg';
import whatsappicon from '../../Source/whatsapp.svg';
import Githublog from '../../Source/Githublogo.svg';
import Resumedownload from '../../Source/resumedownload.svg';
import resumepath from '../../Source/Hari_Venkatesh_Chintha_3.pdf'


function Contact() {
    return (
        <div className='contactcnt'>
            <div className="row contactsection pb-4">
                <section className="col-md"></section>
                <section className="col-md-6">
                        <h2 className='mb-5 Contacthead'>Contact Me</h2>
                    
                    <section className="cntdtls">
                        <div>
                            <img src={mailicon} alt="Email" width="26px" style={{ marginRight: "10px" }} /><a href="mailTo:harivenkateshjb12@gmail.com">harivenkateshjb12@gmail.com</a>
                        </div>
                        <div><img src={phoneicons} alt="" width="20px" /> +91 9100251660
                        </div>
                    </section>
                    <section className="cntdtls2 mt-3 mb-3">
                        <div><img src={locationicon} alt="" width="20px" /> Madhapur, Hyderabad, India</div>
                        <div><a href="https://github.com/Harichinta" target='blank'><img src={Githublog} alt="" width="20px" /><span style={{marginLeft:"10px"}}>GitHub</span></a></div>
                    </section>
                    <a href='https://www.linkedin.com/in/hari9100' target='blank'><img src={linkedinlogo} alt="" width="82px" /></a>
                    <a href="https://wa.me/9100251660" target="_blank">
                        <img src={whatsappicon} alt="WhatsApp" width="36px" />
                    </a>
                    <a style={{marginLeft:"16px"}} href={resumepath} download="Hari_Venkatesh_Resume.pdf" target="_blank">
                        <img src={Resumedownload} alt="WhatsApp" width="36px" />
                    </a>
                </section>
                <section className="col-md"></section>
            </div>
        </div>
    )
}

export default Contact