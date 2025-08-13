import React from 'react';
import './Mission.scss';
import { storImagePath } from '../../../../../../utils/Glob_Functions/GlobalFunction';

const Mission = () => {
    return (
        <div className="vision-mission-wrapper">
            <div className="vision-box">
                <div
                    className="image"
                    style={{
                        backgroundImage: `url(${storImagePath()}/Banner/vision.jpg)`
                    }}
                />
                <h3>Vision</h3>
                <p>
                    To be the leading innovator in PIE CUT Diamond Jewellery, setting new standards of excellence in design,
                    quality, and customer satisfaction.
                </p>
            </div>

            <div className="divider" />

            <div className="mission-box">
                <div
                    className="image"
                    style={{
                        backgroundImage: `url(${storImagePath()}/Banner/mission.jpg)`
                    }}
                />
                <h3>Mission</h3>
                <p>
                    At DFINE, our mission is to create jewellery pieces that celebrate individuality and elegance. We are
                    dedicated to providing our customers with timeless and unique PIE CUT Diamond Jewellery that reflects their
                    style and personality.
                </p>
            </div>
        </div>
    );
};

export default Mission;
