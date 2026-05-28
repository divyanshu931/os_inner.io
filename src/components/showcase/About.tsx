import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Divyanshu Tomar</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a Software Engineer who completed an internship at Cisco with 1 year of professional experience! 
                    I recently graduated with my MCA (Master of Computer Applications) in May 2026.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:divyanshutomar943@gmail.com">
                        divyanshutomar943@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I have had a curiosity about how things
                    work and a strong interest in technology. I'm from Delhi, India,
                    and I moved here in 2009. My passion for technology grew throughout
                    my school years as I became increasingly fascinated by computer science
                    and software development. This curiosity naturally led me to pursue
                    programming and build innovative solutions.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    I started programming more seriously in high school,
                    initially learning how to scrape and interact with websites.
                    I went on to do a ton of passion projects, many of them with
                    one of my closest friends,{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/amit0yadav/"
                    >
                        Amit Yadav
                    </a>
                    . We worked on many projects together, including chat bots,
                    multiple game projects, apps, and more. One of these
                    projects is viewable on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                    In 2021, I got admitted to GGSIPU (Guru Gobind Singh Indraprastha University) 
                    to pursue my Bachelor of Computer Applications (BCA). During my academic journey, 
                    I completed an internship at Cisco, which was a great achievement and learning experience. 
                    After completing my BCA, I pursued my Master of Computer Applications (MCA) from Amity University, 
                    which I recently completed in May 2026. The Cisco internship was a significant milestone that 
                    helped me develop strong technical skills and industry experience.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                                    Beyond pure software development, I have a strong interest in Finance and Financial Technology. 
                            This passion has driven me to create products and solutions related to finance and financial management. 
                            I enjoy working on projects that bridge the gap between technology and finance, helping to build innovative 
                            fintech solutions. You can explore some of my software projects related to finance on my{' '}
                            <Link to="/projects/software">Software Projects</Link> page. I believe technology can play a transformative 
                            role in making financial services more accessible and efficient.
                            <br />
                            <br /> You can
                            read more about each of these on their respective
                            pages under my projects tab. Some other hobbies I
                            enjoy are working out, playing music, and (unsurprisingly)
                            playing video games.
                        </p>
                        <br />
                        <p>
                            Throughout my college years, I have been an active member of the coding community. 
                            I've participated in various coding competitions, hackathons, and technical meetups. 
                            I've met many talented developers and made meaningful connections within the tech community. 
                            These experiences have helped me grow as a developer and have exposed me to diverse ideas 
                            and perspectives in software engineering.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2022
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on LinkedIn{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/divyanshu-tomar-0b6380232/"
                    >
                        @/divyanshu-tomar-0b6380232
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:divyanshutomar943@gmail.com">
                        divyanshutomar943@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
