import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Cisco</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.cisco.com/'}
                        >
                            <h4>www.cisco.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>System Engineer Trainee</h3>
                        <b>
                            <p>November 2024 - November 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    As a System Engineer Trainee at Cisco, I gained valuable experience working on 
                    enterprise-level networking solutions and infrastructure management. I contributed to 
                    the development and maintenance of critical networking components while developing a 
                    deep understanding of Cisco's technology stack and systems architecture.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Worked extensively on Cisco IOS XR AppMgr (Application Manager), a key 
                            component for managing applications and services on Cisco routing platforms.
                        </p>
                    </li>
                    <li>
                        <p>
                            Contributed to the Sandbox component, enabling secure testing and development 
                            environments for Cisco network applications and configurations.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed and debugged system-level code, working with networking protocols 
                            and infrastructure components.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated with senior engineers and product teams to identify and resolve 
                            technical issues and improve system reliability.
                        </p>
                    </li>
                    <li>
                        <p>
                            Participated in code reviews and contributed to documentation for system 
                            components and architectural decisions.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Freelance Developer</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Developer (Part-Time)</h3>
                        <b>
                            <p>February 2026 - May 2026</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    As a part-time freelance developer while completing my MCA studies, I worked on multiple 
                    enterprise-level projects, delivering complete web development solutions for various clients. 
                    I designed and developed custom applications with a focus on user experience, scalability, 
                    and business requirements while balancing academic responsibilities.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>Udhuav.com Website:</b> Designed and developed a complete website 
                            with modern responsive design, user-friendly interface, and optimized 
                            performance across all devices.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Bhavika Plastic Ltd. - Accounting & Inventory Management System:</b> 
                            Built an enterprise-level accounting and inventory management application 
                            with features for tracking inventory, managing accounts, generating reports, 
                            and streamlining business operations.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Om Sai Trading - Accounting & Inventory Management System:</b> 
                            Developed a comprehensive accounting and inventory management solution 
                            tailored to the client's business needs, enabling efficient tracking of 
                            transactions, inventory levels, and financial reporting.
                        </p>
                    </li>
                </ul>
            </div>

        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
