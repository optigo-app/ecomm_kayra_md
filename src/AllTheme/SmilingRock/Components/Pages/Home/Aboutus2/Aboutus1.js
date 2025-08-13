import React from "react";
import './Aboutus1.scss';
import { motion } from 'framer-motion';
import { storImagePath } from '../../../../../../utils/Glob_Functions/GlobalFunction';

const TheTeam = () => {
    return (

        <div className="smr_team_wrapper">
            <div className="smr_team_div">
                <motion.div
                    className="smr_team_image"
                    style={{
                        backgroundImage: `url(${storImagePath()}/Banner/aboutus.webp)`
                    }}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                />

                <motion.div
                    className="smr_team_content"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h3>About us</h3>
                    {/* <strong style={{ fontSize: "17px" }}>
                        About D’fine Jewellery
                    </strong> */}
                    <p>
                        stablished In 2005, D’fine Jewellery Is A Leading Manufacturer Of Diamond Jewellery, Specializing In Diamond Settings Such
                        As Illusion And Pie-Cut Designs. We Take Immense Pride In Our Craftsmanship. With Deep Roots In Diamond Cutting And
                        Polishing Dating Back To 1980, We Bring Generations Of Expertise To The Gem And Jewellery Industry
                    </p>
                    <p>
                        Our Passion For Craftsmanship And Precision Drives The Creation Of Each Piece. Supported By A Team Of Expert Artisans, We
                        Design And Develop State-Of-The-Art, Patented Machinery Specifically For Crafting Our Signature Pie-Cut Diamonds And
                        Diamond Jewellery. This Same Expertise Extends To All Our Fine Jewellery Manufacturing. Our Commitment To Innovation
                        And Excellence Positions D’fine At The Forefront Of The Industry, Consistently Setting New Standards In Diamond Jewellery
                        Manufacturing.
                    </p>
                    <p>
                        With A Global Clientele And In-House Capabilities From Design To Final Finishing, D’fine Is Recognized For Its Quality,
                        Reliability, And Trend-Forward Collections. We Believe In Blending Traditional Artistry With Modern Technology To Deliver
                        Unmatched Brilliance Every Time.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default TheTeam;
