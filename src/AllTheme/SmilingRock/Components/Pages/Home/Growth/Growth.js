import React, { useEffect, useRef, useState } from 'react';
import './Growth.scss';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { storImagePath } from '../../../../../../utils/Glob_Functions/GlobalFunction';

const data = [
    {
        image: 'customers.png',
        end: 150,
        label: 'Customers',
        duration: 2,
        suffix: '+',
    },
    {
        image: 'design.png',
        end: 18000,
        label: 'Total Number Of Design',
        duration: 2,
        suffix: '+',
    },
    {
        image: 'employes.png',
        end: 100,
        label: 'Employees',
        duration: 2,
        suffix: '',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.3,
            duration: 0.5,
            ease: 'easeOut',
        },
    }),
};

const Growth = () => {
    const [visibleIndices, setVisibleIndices] = useState([]);
    const itemRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setVisibleIndices((prev) =>
                            prev.includes(index) ? prev : [...prev, index]
                        );
                    }
                });
            },
            {
                threshold: 0.4,
            }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            itemRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="smr_growth_div">
            <h2 className="smr_growth_title">Growth</h2>
            <div className="smr_growth_details">
                {data.map((item, index) => (
                    <motion.div
                        className="smr_growth_datas"
                        key={index}
                        ref={(el) => (itemRefs.current[index] = el)}
                        data-index={index}
                        initial="hidden"
                        animate={visibleIndices.includes(index) ? 'visible' : 'hidden'}
                        custom={index}
                        variants={cardVariants}
                    >
                        <div
                            className="smr_growth_image"
                            style={{
                                backgroundImage: `url(${storImagePath()}/Banner/${item.image})`,
                            }}
                        />
                        <div className="smr_growth_desc">
                            <span className="smr_growth_digits">
                                {visibleIndices.includes(index) && (
                                    <CountUp
                                        end={item.end}
                                        duration={item.duration}
                                        separator={item.end > 999 ? ',' : ''}
                                    />
                                )}
                                {item.suffix}
                            </span>
                            <span className="smr_growth_det">{item.label}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Growth;
