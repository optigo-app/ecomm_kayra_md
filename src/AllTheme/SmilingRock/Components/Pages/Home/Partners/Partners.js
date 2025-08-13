import React from "react";
import './Partners.scss';
import { storImagePath } from '../../../../../../utils/Glob_Functions/GlobalFunction';

const Partners = () => {
    return (
        <div className="smr_part_wrapper">
            <h2 className="part-title">Why Partner with D’fine Jewellery?</h2>
            <div className="smr_part_div">
                <div
                    className="smr_part_image"
                    style={{
                        backgroundImage: `url(${storImagePath()}/Banner/Partner.webp)`
                    }}
                ></div>

                <div className="smr_part_content">
                    <p>
                        Step into the dazzling world of D’fine Jewellery, where over 20 years of unmatched experience meet innovation and creativity!
                        As a premier manufacturing partner for jewellery wholesalers and retailers in India and the USA, we're not just crafting
                        exquisite pieces—we're cultivating meaningful partnerships that spark long-term success.
                    </p>
                    <p>
                        Join forces with us as we navigate the entire jewellery value chain together:
                    </p>
                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                        <li>
                            <strong>✨Ethical Diamond Sourcing</strong> – Discover the brilliance of responsibly sourced, conflict-free diamonds that shine with consistent quality and integrity.
                        </li>
                        <li>
                            <strong>✨Strategic Merchandising</strong> – Unlock product planning tailored to your market's unique needs, ensuring your collections resonate with your customers.
                        </li>
                        <li>
                            <strong>✨Custom & Bespoke Designs</strong> – Elevate your brand with exclusive, made-to-order creations designed around your vision and identity.
                        </li>
                        <li>
                            <strong>✨Modern Manufacturing Excellence</strong> – Experience top-notch quality and efficiency powered by cutting-edge technology and streamlined processes.
                        </li>
                        <li>
                            <strong>✨Uncompromised Quality Assurance</strong> – Rest easy knowing that every piece undergoes rigorous quality checks throughout production, backed by certification from trusted labs.
                        </li>
                    </ul>
                    <p>
                        What sets D’fine apart Our personalized approach. We dive deep into understanding your needs and challenges, allowing us to craft customized solutions—spanning product development, design, and delivery—that empower you to scale your business confidently and swiftly.
                    </p>
                    <p>
                        Let’s embark on this sparkling journey together!
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Partners;
