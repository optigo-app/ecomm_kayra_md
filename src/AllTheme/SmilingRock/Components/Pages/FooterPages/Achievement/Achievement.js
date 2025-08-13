import React, { useEffect, useState } from 'react';
import './Achievement.scss'
import Footer from '../../Home/Footer/Footer';
import { storImagePath } from '../../../../../../utils/Glob_Functions/GlobalFunction';

// const achievements = [
//     {
//         title: "Jayantibhai Savaliya Appointed as GJEPC Regional Chairman – Gujarat",
//         content: (
//             <>
//                 <p>We are proud to announce that <strong>Mr. Jayantibhai Savaliya</strong> has been appointed as the <strong>Regional Chairman of GJEPC</strong> (Gem & Jewellery Export Promotion Council) for Gujarat.</p>
//                 <p>With over 40 years of experience in the diamond and jewellery industry, he has made a strong contribution to the growth of Gujarat’s gem and jewellery sector. Known for his deep knowledge, innovation, and leadership, he has played an important role in promoting high-quality diamond work and modern jewellery craftsmanship.</p>
//                 <p>As the new Regional Chairman, he aims to encourage exports and brand promotion, making the export process easier for businesses. He also focuses on employee welfare and improving health and safety standards in the industry.</p>
//             </>
//         ),
//         images: [`${storImagePath()}/Banner/gjepc-2.webp`, `${storImagePath()}/Banner/gjepc-4.webp`, `${storImagePath()}/Banner/gjepc-3.webp`, `${storImagePath()}/Banner/gjepc-1.webp`]
//     },
//     {
//         title: "Jayantibhai Savaliya – President of SJMA (Surat Jewellery Manufacturers Association)",
//         content: (
//             <>
//                 <p>Mr. Jayantibhai Savaliya has proudly served as the President of SJMA from 2017 to 2025. SJMA is an important organization that supports jewellery makers in Surat.</p>
//                 <p>Under his leadership, SJMA works hard to improve jewellery quality, train skilled workers, and make Surat famous as a leading jewellery city. They focus on four main pillars: <strong>Quality, Health, Happiness, and Green (environmental care)</strong>.</p>
//                 <p>He also helps organize big events like the <strong>ROOTZ Expo</strong> and <strong>Jewellery Week</strong>, which encourage new ideas and help both small and large manufacturers grow their businesses.</p>
//                 <p>Jayantibhai strongly supports women’s empowerment. He promotes free learning sessions for women because he believes they can succeed in every industry.</p>
//             </>
//         ),
//         images: [`${storImagePath()}/Banner/achievement.webp`, `${storImagePath()}/Banner/sjma-1.webp`, `${storImagePath()}/Banner/sjma-2.webp`]
//     },
//     {
//         title: "Organizer of ROOTZ Expo",
//         content: (
//             <>
//                 <p>Jayantibhai is also the <strong>organizer of the ROOTZ Expo</strong>, a big jewellery trade show held in Surat. The expo brings together designers, manufacturers, and buyers from India and around the world.</p>
//                 <p>Through ROOTZ Expo, he helps jewellery businesses show their latest designs and technology, find new customers, and build strong partnerships. This event plays a key role in making Surat a well-known jewellery market globally.</p>
//             </>
//         ),
//         images: [`${storImagePath()}/Banner/rootz-1.webp`, `${storImagePath()}/Banner/rootz-2.webp`, `${storImagePath()}/Banner/rootz-3.webp`]
//     }
// ];

const Achievement = () => {
    // const [htmlContent, sethtmlContent] = useState(null);

    // useEffect(() => {
    //     fetch(`${storImagePath()}/html/Achievement.html`)   /* for dfine */

    //         .then((response) => response.text())
    //         .then((html) => {
    //             sethtmlContent(html);
    //         })
    //         .catch((error) => {
    //             throw new Error(error)
    //         });
    // }, []);


    return (
        <div className='smr_achi_mainDiv'>
            <div className='daimondsEveryachi'>
                <div className='smr_daimondsEveryachi_sub' style={{ paddingBottom: '80px', minHeight: '400px' }}>
                    <div className='smr_wra_achieve'>
                        {/* <Banner />
                        <div className="smr_achieve">
                            <ImageBanner />
                            <div dangerouslySetInnerHTML={{
                                __html: htmlContent
                            }} />
                        </div> */}
                        <div className="achievements">
                            <div className="achievements__container">
                                {/* <h1 className="achievements__title">Achievements</h1> */}
                                <Banner />
                                {/* First Achievement */}
                                <div className="achievement-card">
                                    <div className="achievement-card__content">
                                        <div className="achievement-card__image">
                                            <img
                                                src={`${storImagePath()}/Banner/gjepc-2.webp`}
                                                alt="GJEPC Regional Chairman Appointment"
                                                className="achievement-card__photo"
                                            />
                                        </div>
                                        <div className="achievement-card__text">
                                            <h2 className="achievement-card__heading">
                                                Jayantibhai Savaliya Appointed as GJEPC Regional Chairman – Gujarat
                                            </h2>
                                            <p className="achievement-card__description">
                                                We are proud to announce that <strong>Mr. Jayantibhai Savaliya</strong> has been appointed
                                                as the <strong>Regional Chairman of GJEPC (Gem & Jewellery Export Promotion Council)</strong> for Gujarat.
                                            </p>
                                            <p className="achievement-card__description">
                                                With over 40 years of experience in the diamond and jewellery industry, he has
                                                made a strong contribution to the growth of Gujarat's gem and jewellery sector.
                                                Known for his deep knowledge, innovation, and leadership, he has played an
                                                important role in promoting high-quality diamond work and modern jewellery
                                                craftsmanship.
                                            </p>
                                            <p className="achievement-card__description">
                                                As the new Regional Chairman, he aims to encourage exports and brand
                                                promotion, making the export process easier for businesses. He also focuses on
                                                employee welfare and improving health and safety standards in the industry.
                                            </p>
                                            <p className="achievement-card__description">
                                                This is a proud moment for all who know and work with him, and we wish him
                                                continued success in this new responsibility.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="achievement-card__gallery">
                                        <img src={`${storImagePath()}/Banner/gjepc-4.webp`} alt="Event 1" className="gallery-image" />
                                        <img src={`${storImagePath()}/Banner/gjepc-3.webp`} alt="Event 2" className="gallery-image" />
                                        <img src={`${storImagePath()}/Banner/gjepc-1.webp`} alt="Event 3" className="gallery-image" />
                                    </div>
                                </div>

                                {/* Second Achievement */}
                                <div className="achievement-card">
                                    <div className="achievement-card__content">
                                        <div className="achievement-card__image">
                                            <img
                                                src={`${storImagePath()}/Banner/achievement.webp`}
                                                alt="SJMA President"
                                                className="achievement-card__photo"
                                            />
                                        </div>
                                        <div className="achievement-card__text">
                                            <h2 className="achievement-card__heading">
                                                Jayantibhai Savaliya – President of SJMA<br />
                                                (Surat Jewellery Manufacturers Association)
                                            </h2>
                                            <p className="achievement-card__description">
                                                <strong>Mr. Jayantibhai Savaliya</strong> has proudly served as the President of
                                                SJMA from 2017 to 2025. SJMA is an important organization
                                                that supports jewellery makers in Surat.
                                            </p>
                                            <p className="achievement-card__description">
                                                Under his leadership, SJMA works hard to improve jewellery
                                                quality, train skilled workers, and make Surat famous as a leading jewellery city. They focus on four main
                                                pillars: <strong>Quality, Health, Happiness, and Green (environmental care)</strong>.
                                            </p>
                                            <p className="achievement-card__description">
                                                He also helps organize big events like the <strong>ROOTZ Expo</strong> and <strong>Jewellery Week</strong>, which encourage new ideas and
                                                help both small and large manufacturers grow their businesses.
                                            </p>
                                            <p className="achievement-card__description">
                                                Jayantibhai strongly supports women's empowerment. He promotes free learning sessions for women because
                                                he believes they can succeed in every industry.
                                            </p>
                                            <p className="achievement-card__description">
                                                His hard work and vision inspire many in the jewellery community and create new opportunities for Surat's
                                                jewellery industry to grow.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="achievement-card__gallery">
                                        <img src={`${storImagePath()}/Banner/sjma-1.webp`} alt="SJMA Event 1" className="gallery-image" />
                                        <img src={`${storImagePath()}/Banner/sjma-2.webp`} alt="SJMA Event 2" className="gallery-image" />
                                    </div>
                                </div>

                                {/* Third Achievement */}
                                <div className="achievement-card">
                                    <div className="achievement-card__content">
                                        <div className="achievement-card__image">
                                            <img
                                                src={`${storImagePath()}/Banner/rootz-1.webp`}
                                                alt="ROOTZ Expo Organizer"
                                                className="achievement-card__photo"
                                            />
                                        </div>
                                        <div className="achievement-card__text">
                                            <h2 className="achievement-card__heading">
                                                Organizer of ROOTZ Expo
                                            </h2>
                                            <p className="achievement-card__description">
                                                Jayantibhai is also the <strong>organizer of the ROOTZ Expo</strong>, a big jewellery
                                                trade show held in Surat. The expo brings together designers,
                                                manufacturers, and buyers from India and around the world.
                                            </p>
                                            <p className="achievement-card__description">
                                                Through ROOTZ Expo, he helps jewellery businesses show their latest
                                                designs and technology, find new customers, and build strong
                                                partnerships. This event plays a key role in making Surat a well-known
                                                jewellery market globally.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="achievement-card__gallery">
                                        <img src={`${storImagePath()}/Banner/rootz-2.webp`} alt="ROOTZ Expo 1" className="gallery-image" />
                                        <img src={`${storImagePath()}/Banner/rootz-3.webp`} alt="ROOTZ Expo 2" className="gallery-image" />
                                    </div>
                                </div>
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
    )
}

export default Achievement


const Banner = ({ title = "Gallery" }) => {
    return (
        <>
            <div
                className="smr-banner-ab"
            >
                <h1>{title}</h1>
            </div>
        </>
    );
};

const ImageBanner = () => {
    return (
        <>
            <div
                className="smr_achieve_image"
                style={{
                    backgroundImage: `url(${storImagePath()}/Banner/achievement.webp)`,
                    marginBottom: "3rem"
                }}
            />
        </>
    );
};