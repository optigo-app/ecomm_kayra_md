import React, { useState } from "react";
import "./Collection.scss";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { smr_loginState } from "../../../Recoil/atom";
import pako from "pako";
import { motion } from 'framer-motion';
import { formatRedirectTitleLine, storImagePath } from "../../../../../../utils/Glob_Functions/GlobalFunction";

const products = [
    {
        code: "CMRR 0473",
        kt: "14KT",
        image: "https://corejewellery.com/wp-content/uploads/2025/05/CRBR-41621B-Top-YG-1-1.png",
        gross: "6.770",
        net: "6.656",
        diaWt: "0.50",
        diaQty: 114,
    },
    {
        code: "CMPR 959",
        kt: "10KT",
        image: "https://corejewellery.com/wp-content/uploads/2025/05/CRBR-41621B-Top-YG-1-1.png",
        gross: "8.511",
        net: "8.2117",
        diaWt: "1.50",
        diaQty: 399,
    },
    {
        code: "CMPR 9028",
        kt: "14KT",
        image: "https://corejewellery.com/wp-content/uploads/2025/05/CRBR-41621B-Top-YG-1-1.png",
        gross: "7.534",
        net: "7.233",
        diaWt: "1.50",
        diaQty: 214,
    },
    {
        code: "CMPBR 831",
        kt: "14KT",
        image: "https://corejewellery.com/wp-content/uploads/2025/05/CRBR-41621B-Top-YG-1-1.png",
        gross: "22.632",
        net: "22.032",
        diaWt: "3.00",
        diaQty: 194,
    },
    {
        code: "CMRR 692CN",
        kt: "14KT",
        image: "https://corejewellery.com/wp-content/uploads/2025/05/CRBR-41621B-Top-YG-1-1.png",
        gross: "0.000",
        net: "21.573",
        diaWt: "2.00",
        diaQty: 185,
    },
    {
        code: "CRBR 41621",
        kt: "14KT",
        image: "https://corejewellery.com/wp-content/uploads/2025/05/CRBR-41621B-Top-YG-1-1.png",
        gross: "0.000",
        net: "6.65",
        diaWt: "1.00",
        diaQty: 119,
    },
    {
        code: "CMBBR 0189",
        kt: "14KT",
        image: "https://corejewellery.com/wp-content/uploads/2025/05/CRBR-41621B-Top-YG-1-1.png",
        gross: "0.000",
        net: "102.472",
        diaWt: "10.02",
        diaQty: 1580,
    },
    {
        code: "CMBNBR 041",
        kt: "14KT",
        image: "https://corejewellery.com/wp-content/uploads/2025/05/CRBR-41621B-Top-YG-1-1.png",
        gross: "0.000",
        net: "41.655",
        diaWt: "7.00",
        diaQty: 742,
    },
];

const Collection = ({ data, title, link, collNo }) => {

    const storeInit = JSON.parse(sessionStorage.getItem("storeInit"));
    const islogin = useRecoilValue(smr_loginState);
    const loginUserDetail = JSON.parse(sessionStorage.getItem("loginUserDetail"));
    const navigate = useNavigate();

    const [selectedMetalId, setSelectedMetalId] = useState(islogin ? loginUserDetail?.MetalId : storeInit?.MetalId);
    const [selectedDiaId, setSelectedDiaId] = useState(islogin ? loginUserDetail?.cmboDiaQCid : storeInit?.cmboDiaQCid);
    const [selectedCsId, setSelectedCsId] = useState(islogin ? loginUserDetail?.cmboCSQCid : storeInit?.cmboCSQCid);

    const compressAndEncode = (inputString) => {
        try {
            const uint8Array = new TextEncoder().encode(inputString);

            const compressed = pako.deflate(uint8Array, { to: 'string' });


            return btoa(String.fromCharCode.apply(null, compressed));
        } catch (error) {
            console.error('Error compressing and encoding:', error);
            return null;
        }
    };

    const decodeAndDecompress = (encodedString) => {
        try {
            // Decode the Base64 string to binary data
            const binaryString = atob(encodedString);

            // Convert binary string to Uint8Array
            const uint8Array = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                uint8Array[i] = binaryString.charCodeAt(i);
            }

            // Decompress the data
            const decompressed = pako.inflate(uint8Array, { to: 'string' });

            // Convert decompressed data back to JSON object
            const jsonObject = JSON.parse(decompressed);

            return jsonObject;
        } catch (error) {
            console.error('Error decoding and decompressing:', error);
            return null;
        }
    };

    const handleMoveToDetail = (productData) => {
        let obj = {
            a: productData?.autocode,
            b: productData?.designno,
            m: selectedMetalId,
            d: selectedDiaId,
            c: selectedCsId,
        }
        // console.log('ksjkfjkjdkjfkjsdk--', obj);
        // compressAndEncode(JSON.stringify(obj))

        decodeAndDecompress()

        let encodeObj = compressAndEncode(JSON.stringify(obj))

        navigate(`/d/${formatRedirectTitleLine(productData?.TitleLine)}${productData?.designno}?p=${encodeObj}`);

    }

    return (
        <>
            {collNo === 1 && <CollectionBannner1 storImagePath={storImagePath} navigate={navigate} link={link} />}
            {collNo === 2 && <CollectionBannner2 storImagePath={storImagePath} collNo={collNo} navigate={navigate} link={link} />}
            {collNo === 3 && <CollectionBannner3 storImagePath={storImagePath} navigate={navigate} link={link} />}
        </>
    );
};

export default Collection;

const GridView = ({ title, link, data, storeInit, handleMoveToDetail, navigate }) => {
    return (
        <section className="mens-products">
            <div className="section-title">
                <h2>{title}</h2>
                <span onClick={() => navigate(link)}>View More</span>
            </div>
            <div className="product-grid">
                {data?.slice(0, 10)?.map((prod, index) => {
                    const image = `${storeInit?.CDNDesignImageFolThumb}${prod?.designno}~1.jpg`;
                    return (
                        <div className="product-card" key={index}>
                            <div className="product-image" onClick={() => handleMoveToDetail(prod)}>
                                <img src={image} alt={prod.code} />
                            </div>
                            <div className="product-info">
                                <p className="product-code">
                                    <strong>{prod.designno}</strong> <span>{prod.MetalTypePurity?.split(" ")[1]}T.</span>
                                </p>
                                <hr style={{ marginBlock: "5px" }} />
                                <div className="prod_desc">
                                    <span>
                                        Gross Wt: {prod.Gwt}
                                    </span>
                                    <span>
                                        Net Wt: {prod.Nwt}
                                    </span>
                                </div>
                                <div className="prod_desc">
                                    <span>
                                        Dia Wt: {prod.Dwt}
                                    </span>
                                    <span>
                                        DiaQty: {prod.Dpcs}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

const CollectionBannner1 = ({ storImagePath, navigate, link }) => {
    return (
        <div className="smr_coll_wrapper">
            <div className="smr_coll_div">
                <div style={{ position: "relative" }}>
                    <motion.div
                        className="smr_coll_image"
                        style={{
                            backgroundImage: `url(${storImagePath()}/Banner/piecut.webp)`
                        }}
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.4 }}
                    />
                    <motion.button
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="col_view-more-btn" onClick={() => navigate(link)}>
                        SHOP
                    </motion.button>
                </div>

                <motion.div
                    className="smr_coll_content"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h3>Pie Cut Collections</h3>
                    <p>
                        The pie-cut setting is all about creating brilliance from the unexpected. Instead of using one large diamond, this design brings
                        together smaller, perfectly cut stones that fit together like slices of a pie. From a distance, it looks like one big, dazzling gem —
                        but up close, it’s a beautiful display of precision and artistry. It’s a smart, stylish choice that gives you the feel of a big diamond
                        with a fresh and modern twist.
                    </p>
                    {/* <button className="view-more-btn" onClick={() => navigate(link)}>View More</button> */}
                </motion.div>
            </div>
        </div >
    )
}

const CollectionBannner2 = ({ storImagePath, collNo, navigate, link }) => {
    return (
        <div className="smr_coll_wrapper">
            <div className={`smr_coll_div ${collNo === 2 ? "right-align" : ""}`}>
                <motion.div
                    className="smr_coll_content"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h3>Invisible Collections</h3>
                    <p>
                        The invisible setting is designed for those who love seamless sparkle. In this technique, the diamonds are carefully cut and set
                        side-by-side so closely that no metal is visible. There are no prongs or bezels — just a smooth surface of light and shine. The
                        diamonds seem to float effortlessly, giving the jewellery a clean, sleek, and luxurious finish. It’s minimal, elegant, and totally
                        mesmerizing.
                    </p>
                    {/* <button className="view-more-btn" onClick={() => navigate(link)}>View More</button> */}
                </motion.div>
                <div style={{ position: "relative" }}>
                    <motion.div
                        className="smr_coll_image"
                        style={{
                            backgroundImage: `url(${storImagePath()}/Banner/invisible.webp)`
                        }}
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.4 }}
                    />
                    <motion.button
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="col_view-more-btn" style={{ background: "#fff", color: "#1B3349" }} onClick={() => navigate(link)}>
                        SHOP
                    </motion.button>
                </div>
            </div>
        </div >
    )
}

const CollectionBannner3 = ({ storImagePath, navigate, link }) => {
    return (
        <div className="smr_coll_wrapper">
            <div className="smr_coll_div">
                <div style={{ position: "relative" }}>
                    <motion.div
                        className="smr_coll_image"
                        style={{
                            backgroundImage: `url(${storImagePath()}/Banner/bezel.webp)`
                        }}
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.4 }}
                    />
                    <motion.button
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="col_view-more-btn" onClick={() => navigate(link)}>
                        SHOP
                    </motion.button>
                </div>

                <motion.div
                    className="smr_coll_content"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <h3>Bezel Collections</h3>
                    <p>
                        For timeless elegance with a touch of modern style, the bezel setting is a favourite. It gently wraps a thin rim of metal around
                        the edge of the diamond, holding it securely in place. Not only does this setting protect the stone, but it also gives a soft,
                        sophisticated look that’s perfect for everyday wear. Whether you're drawn to simplicity or durability, the bezel setting brings
                        both — all while keeping your sparkle intact.
                    </p>
                    {/* <button className="view-more-btn" onClick={() => navigate(link)}>View More</button> */}
                </motion.div>
            </div>
        </div >
    )
}