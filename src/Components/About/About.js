import React from 'react';
import './About.css'

const About = () => {
    const url ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1G3n9-myvHAt1plJ5ViBjRHttOWxzC10gA&usqp=CAU"

    const url1 ="https://training.devskill.com/Content/site/img/team_1.jpg";

    const url2 ="https://training.devskill.com/Content/site/img/team_2.jpg"
    return (
        <div>
            <div  >
            <h1 className="headline1">
            BEST IT TRAINING IN THE COUNTRY
            </h1>
            <h4 className="headline2"><em>Learn real world software engineering from industry experts. Upgrade your skill to international level.</em></h4>
            </div>

            <div className="about ">
               

               <div className ="part">
                    <div>
                    <h4>
                       <span> <img src ={url} alt="" /></span>
                        Real World Project Development
                            
                    </h4>
                    <p >
                    Learn using real world projects with customer requirements and specifications. Enrich your experience of working with real people with real projects. Start building project from scratch and finish it with publishing and deploying it in server.
                    </p>
                    </div>
                    <div>
                    <h4>
                    <span > <img src ={url} alt="" /></span>
                   <span className="span2">  Build Solid Foundations</span></h4>
                    <p>
                    Successful career depend on a solid mastery of the fundamentals. Build a solid foundations on the essential programming skills and knowledge
                    </p>
                    </div>
              
                
                </div>
                <div className ="part1">
                <div>
                    <h4> <span > <img src ={url} alt="" /></span>
                        <span>Follow Latest Industry Standard Tools and Techniques</span></h4>
                    <p>
                    Always up to date; our courses take into consideration newer frameworks, technology, work process and development criterias used in top companies. Be on the edge.
                    </p>
                </div>
                <div>
                    <h4>
                    <span > <img src ={url} alt="" /></span>
                   <span className="span3"> Learn Teamwork and Collaboration</span></h4>
                    <p>
                    Get to know how to work in a project with your colleagues. Collaborate with other people in the process and learn team work.
                    </p>
                </div>
                </div>
            </div>
                <hr />
            <div className="describe">
                <div className= "word">
                    <h2>Working for the IT Industry</h2>
                    <p>Programming-Skill-Center has always been passionatly working for the betterment of IT industry. We want to grow skilled IT professionals who will rock the world with their extraordinary professionalism. As part of our mission, we arrange programming contest, software engineering events and seminars. We believe in hard core industry specialization to grow the top 10% IT professionals in the country and around the globe.</p>
                    <br />

                    <h2>Why Chose Dev Skill:
                    </h2>
                    <br />
                    <h4>Real World Project Development
                    </h4>

                        <p>
                        Learn using real world projects with customer requirements and specifications. Enrich your experience of working with real people with real projects. Start building project from scratch and finish it with publishing and deploying it in server.
                    </p>
                    <br />

                        <h4>Follow Latest Industry Standard Tools and Techniques
                        </h4>

                        <p>
                        Always up to date; our courses take into consideration newer frameworks, technology, work process and development criterias used in top companies. Be on the edge.
                        </p>
                        <br />

                        <h4>Learn Teamwork and Collaboration</h4>
                        <p>
                        Get to know how to work in a project with your colleagues. Collaborate with other people in the process and learn team work.
                        </p>
                </div>

                <div>
                  
                        <div>
                        <img className="image1" src={url1} alt="" />
                        </div>
                            <br />
                        <div>
                        <img className="image1" src={url2} alt="" />
                        </div>

                </div>
                
            </div>
            
        </div>
    );
};

export default About;