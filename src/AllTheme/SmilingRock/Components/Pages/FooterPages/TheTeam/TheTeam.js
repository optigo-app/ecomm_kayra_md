import React from "react";
import './TheTeam.scss';
import { storImagePath } from '../../../../../../utils/Glob_Functions/GlobalFunction';
import Footer from "../../Home/Footer/Footer";

const TheTeam = () => {
    return (
        <div className='smr_theteam_mainDiv'>
            <div className='daimondsEverytheteam'>
                <div className='smr_daimondsEverytheteam_sub' style={{ paddingBottom: '80px', minHeight: '400px' }}>
                    <div className="smr-banner-tm">
                        <h1>The Team</h1>
                    </div>

                    <div className="smr_team_wrapper">
                        <div className="smr_team_div">
                            <div
                                className="smr_team_image"
                                style={{
                                    backgroundImage: `url(${storImagePath()}/Banner/team.webp)`
                                }}
                            ></div>

                            <div className="smr_team_content">
                                <h3 style={{ textAlign: "center" }}>Our Team</h3>
                                <p>
                                    Our company has over <strong>100 skilled workers</strong>, including designers,
                                    sketch artists, stone setters, polishers, and quality checkers. Many of them have
                                    over <strong>20 years of experience</strong> in jewellery making.
                                </p>
                                <p>
                                    Everything is made <strong>in-house, under one roof</strong>. We have the latest
                                    machines, including <strong>RPT machines</strong> for rhodium plating, casting machines,
                                    and advanced tools for every step of the production. This helps us
                                    <strong> control quality at every stage</strong> and deliver the best to our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: '30px' }}>
                <p style={{ margin: '0px', fontWeight: 500, width: '100px', color: 'white', cursor: 'pointer' }} onClick={() => window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })}>BACK TO TOP</p>
            </div>
        </div>
    );
};

export default TheTeam;
