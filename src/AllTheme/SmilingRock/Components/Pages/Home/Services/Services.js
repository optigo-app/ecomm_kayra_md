import React from 'react';
import './Services.scss';
import { motion } from 'framer-motion';
import { FaGem, FaIndustry, FaGlobe } from 'react-icons/fa';

const services = [
    {
        icon: <FaGem />,
        title: 'Gold & Diamond Quality',
        description: `We craft jewellery using <strong>22Kt, 18Kt, 14Kt, and 10Kt gold</strong>, with carefully selected natural and 
                CVD diamonds. Every stone is <strong>conflict-free, ethically sourced, and graded for superior 
                brilliance and precision.</strong>`,
    },
    {
        icon: <FaIndustry />,
        title: 'Sustainability & Packaging',
        description:
            `We prioritize <strong>eco-friendly manufacturing, recycled materials, and sustainable packaging.</strong>
        Our processes reduce environmental impact while supporting community welfare and ethical 
        sourcing.`,
    },
    {
        icon: <FaGlobe />,
        title: 'Certifications & Quality Check',
        description:
            `Every D’fine piece is <strong>quality-checked in-house</strong> and certified by <strong>IGI, GIA, and BIS Hallmark,</strong>
ensuring purity, authenticity, and international standards.`,
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

const Services = () => {
    return (
        <section className="services-section">
            <h2 className="services-title">Services</h2>
            <div className="services-cards">
                {services.map((service, index) => (
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
                        <div className="service-icon">{service.icon}</div>
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

export default Services;
