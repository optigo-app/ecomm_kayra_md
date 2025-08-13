import React from "react";
import './WhyChooseUs.scss';
import { motion } from 'framer-motion';
import { storImagePath } from '../../../../../../utils/Glob_Functions/GlobalFunction';

const WhyChooseUs = () => {
    return (

        <div className="smr_choose_wrapper">
            <div className="smr_choose_div">
                <motion.div
                    className="smr_choose_content"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h3 className="smr_choose_title">Why Choose Us</h3>
                    <p>
                        At D’fine, we don’t just make jewellery — we craft confidence, character, and timeless elegance.
                    </p>
                    <p>
                        For over two decades, our family has been rooted in the art of diamond cutting and jewellery manufacturing. What sets us apart isn’t just our
                        skill — it’s our care, our consistency, and our commitment to giving you something truly valuable.
                    </p>
                    <p>
                        We specialize in <strong>Illusion Pie-Cut and Invisible-Setting Jewellery</strong> — known for its brilliance, clean lines, and precision. Every piece is made
                        in-house, by hand, by people who love what they do. From design sketch to diamond setting, our team ensures every detail is just right.
                    </p>
                    <p>
                        Our advanced manufacturing setup uses <strong>international-grade tools and technology</strong> — but what makes it special is the heart we put into it.
                        Whether you're a retailer, wholesaler, or a customer looking for something custom — you'll find D’fine a partner who listens, delivers, and
                        exceeds expectations.
                    </p>
                    <p>
                        <strong>Designed for women who carry grace with strength, beauty with boldness.</strong>
                        <br />
                        From everyday elegance to once-in-a-lifetime moments — our jewellery reflects her story
                    </p>
                </motion.div>
                <motion.div
                    className="smr_choose_image"
                    style={{
                        backgroundImage: `url(${storImagePath()}/Banner/whyus.jpg)`
                    }}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                />
            </div>
        </div >
    );
};

export default WhyChooseUs;
