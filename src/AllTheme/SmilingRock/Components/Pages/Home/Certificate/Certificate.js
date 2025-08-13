import React from 'react';
import './Certificate.scss';
import { motion } from 'framer-motion';
import { storImagePath } from '../../../../../../utils/Glob_Functions/GlobalFunction';

const certificate = [
    {
        icon: `${storImagePath()}/Banner/diaquality.png`,
        title: 'Gold & Diamond Quality',
        description: `
            We make jewellery in <strong>22Kt, 18Kt, 14Kt,</strong> and <strong>10Kt</strong> gold.
            Our diamonds are carefully selected not just for the <strong>4Cs</strong> (cut, color, clarity, carat),
            but also for <strong>polish, symmetry,</strong> and <strong>shine</strong>.
            <br />
            <br />
            We use both <strong>natural</strong> and <strong>CVD (lab-grown) diamonds</strong>, depending on customer needs.
            All diamonds are <strong>conflict-free</strong> and <strong>ethically sourced</strong>.
        `,
    },
    {
        icon: `${storImagePath()}/Banner/sustainblity.png`,
        title: 'Sustainability & Packaging',
        description:
            `We care about the environment. That’s why we use <strong>eco-friendly packaging</strong> and choose materials that are <strong>safe for the planet</strong>. We make sure that our diamonds and processes do not harm people or nature.`,
    },
    {
        icon: `${storImagePath()}/Banner/certification.png`,
        title: 'Certifications & Quality Check',
        description:
            `Every piece of jewellery goes through a <strong>strict in-house quality check</strong>. We also provide certifications from top international labs like <strong>IGI</strong> and <strong>GIA</strong> to make sure our customers trust what they buy.
            <br />
            <br />
            We also have <strong>certifications like B1 and ZED</strong>, which show our commitment to quality and business excellence.
            In addition, we provide <strong>gold hallmarking certification</strong> to build <strong>trust and transparency</strong> with our customers.
            `,
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3, // delay based on index
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

const Certificate = () => {
    return (
        <section className="services-section">
            <h2 className="services-title">Certificate</h2>
            <div className="services-cards">
                {certificate.map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-card"
                        initial="hidden"
                        custom={index}
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }} // triggers once when 30% of card is in view
                        variants={cardVariants}
                        whileHover={{
                            y: -30,
                            boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.08)',
                            transition: { duration: 0.10 },
                        }}
                    >
                        <img className="service-icon" src={service.icon} />
                        <h3 className="service-title">{service.title}</h3>
                        <div
                            className="service-description"
                            dangerouslySetInnerHTML={{ __html: service.description }}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certificate;
