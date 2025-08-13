import React from 'react';
import './QualityCore.scss';
import { storImagePath } from '../../../../../../utils/Glob_Functions/GlobalFunction';

const QualityControl = () => {
    return (
        <section className="quality-control">
            <h2 className="quality-title"></h2>
            {/* <h2 className="quality-title">Dfine Quality Assurance</h2> */}
            <div className="quality-content">
                <div
                    className="quality-image"
                    style={{
                        backgroundImage: `url(${storImagePath()}/Banner/Quality.webp)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '1px solid #000',
                        width: '300px',
                        height: '300px',
                    }}
                ></div>

                <div className="quality-text">
                    <div className="quality-block-1">
                        <h3>Dfine Quality Assurance</h3>
                        <p>At D’fine, quality is not a checkpoint — it's the foundation of everything we create. Every piece of jewellery we craft undergoes
                            a thorough multi-stage, in-house quality check to ensure it meets the highest standards of craftsmanship, finishing, durability,
                            and brilliance. From the initial casting to the final polish, our skilled quality control experts inspect each step with precision
                            and care.</p>
                        <p>
                            We combine the finesse of human expertise with advanced technology to maintain perfect symmetry, flawless settings, and
                            lasting shine in every piece. Precision tools are used to measure and verify every detail — ensuring that what reaches the
                            client is not just beautiful, but built to last.
                        </p>
                        <p>
                            All finished pieces can be certified by globally recognized laboratories such as IGI, GIA, or any preferred institute, depending
                            on client needs. We proudly comply with BIS Hallmarking standards and hold ZED and B1 certifications, reflecting our
                            commitment to trust, transparency, and responsible business practices.
                        </p>
                        <p>
                            At D’fine, we don’t just deliver jewellery — we deliver confidence, reliability, and lasting value with every creation
                        </p>
                    </div>

                    <div className="quality-block-2">
                        <h3>LAB Grown Diamond</h3>
                        <p>
                            We have an integrated 3 layer testing done once at the time diamonds are sourced/ <em>Bagged</em> / randomly checked during production & at Final Q.C. After checking loose diamonds for <strong>Lab grown diamonds</strong> the diamonds get checked after setting and before the jewelry gets shipped.
                        </p>
                        <p>
                            We have 2 Machines namely <strong>GII Arotek & J Smart Pro</strong> and each piece is processed through both the machines for stringent checks.
                        </p>
                        <p>
                            We have auto saving mode for every batch of testing that can be back tracked in case of any ambiguity in near future.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualityControl;
