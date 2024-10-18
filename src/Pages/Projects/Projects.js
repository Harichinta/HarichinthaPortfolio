import React from 'react'
import './Projects.css'
import helloclick from "../../Source/hello-click-here.gif"

function Projects() {


    const Projects = [

        {
            prjName: "Work Permit",
            PrjImgurl: require('../../Source/workpermit.jpg'),
            Prjdesc: "The GAIL Gas Work Permit Management Application, developed in React Native, streamlines work permit requests and issuances across GAIL Gas work sites. It features secure login, role-based access, and document management. Users can submit requests, attach documents, and track permit statuses, supporting a multi-tier approval process and incident reporting."
        }, {
            prjName: "SeedFund Scheem India",
            projectlink: "https://seedfund.startupindia.gov.in/",
            PrjImgurl: require('../../Source/seedfund.jpeg'),
            Prjdesc: "Startup India The Startup India Seed Fund Scheme (SISFS) aims to provide financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization. The goal is to help startups reach a stage where they can attract investments from angel investors, venture capitalists, or obtain loans from banks and financial institutions."
        }, {
            prjName: "Gail Tenders",
            projectlink: "https://gailgastenders.gail.co.in/",
            PrjImgurl: require('../../Source/Gailtenders.jpg'),
            Prjdesc: "The GAIL Gas tenders management system streamlines bid submissions, automates evaluations, and enhances transparency for gas infrastructure projects, ensuring efficient and compliant tendering processes while providing real-time updates and comprehensive reporting. It also facilitates seamless stakeholder communication and maintains thorough records for auditing"
        }, {
            prjName: "Gail Gas Public",
            projectlink: "https://gailgas.com/home",
            PrjImgurl: require('../../Source/gailgaspublic.jpg'),
            Prjdesc: "Gail gas is a gas distribution company. GAIL Gas Limited is a limited company under the Companies Act, 1956. With an experienced team from Maharatna GAIL (India) Limited, the pioneers of City Gas Distribution in our country, GAIL Gas is committed to create a meaningful difference in the lives of many."
        }, {
            prjName: "Gail Gas Admin",
            PrjImgurl: require('../../Source/cngadmin.jpg'),
            Prjdesc: "Gail gas company is specializing in Natural Gas retailing and distribution, with a strong focus on City Gas Distribution. The company is dedicated to exceptional customer care and value creation. Its operations extend to gas transmission, marketing, and intricate processing, including the fractionation of LPG, Propane, SBP Solvent."
        }, {
            prjName: "Dataevolve Official website",
            projectlink: "https://www.dataevolve.in/",
            PrjImgurl: require('../../Source/dataevolve.jpeg'),
            Prjdesc: "Dataevolve solutions website is a company website that shows services they provide in AWS and around 20 service providing by Dataevolve solutions Showcasing in website. Html5,CSS3, Angular, typescript,aos , animation,and scroll animation are used in this project and implemented seo and Google analytics in this website"
        }
    ]


    return (
        <div className='Projectscontain pt-5'>
            <h2 className='abouthead mx-auto' style={{fontSize:"40px"}}>Projects</h2>
            <p className='mx-auto mb-4 projectdesc' >Explore a curated collection of my most impactful projects, each a testament to my expertise in web and mobile development. These projects illustrate my ability to design and build innovative solutions, tackle complex challenges, and deliver high-quality applications with a focus on performance, scalability, and user experience. Leveraging technologies like Angular, React.js, and Node.js, I bring ideas to life through thoughtful design and meticulous execution.</p>
            <div className="row projectsection pt-4">
                <section className="col-md"></section>
                <section className="col-md-9 projectcards">
                    {Projects && Projects.map((item, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className='cardlayer'>
                                    <h5>Want to know more About this Project ?</h5>
                                    <img src={helloclick} width="100%" alt="" />
                                    <div className='text-center'><button className='mx-auto clickme'>Know More</button></div><br />
                                    {item.projectlink && <div style={{ padding: "5px", textAlign: "center" }}>Visit Site: <a href={item.projectlink} target='blank'>{item.projectlink}</a></div>}
                                </div>
                                <div style={{ height: "200px", backgroundImage: `url(${item.PrjImgurl})`, backgroundSize: "cover" }}></div>
                                <h5 className='card-title pt-3'>{item.prjName}</h5>
                                <div className="descriptionpg">{item.Prjdesc}</div>
                            </div>
                        )
                    })}
                </section>
                <section className="col-md"></section>
            </div>
        </div>
    )
}

export default Projects