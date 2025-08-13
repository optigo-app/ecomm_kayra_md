import React from "react";
import "./SocialMedia.scss";

// Sample data
const mediaItems = [
    { type: "image", src: "/media/image1.jpg" },
    { type: "image", src: "/media/image2.jpg" },
    { type: "video", src: "/media/video1.mp4", thumbnail: "/media/thumb1.jpg" },
    { type: "image", src: "/media/image3.jpg" },
    { type: "video", src: "/media/video2.mp4", thumbnail: "/media/thumb2.jpg" },
    { type: "image", src: "/media/image4.jpg" },
    { type: "video", src: "/media/video3.mp4", thumbnail: "/media/thumb3.jpg" },
    { type: "image", src: "/media/image5.jpg" },
];

const SocialMedia = () => {
    return (
        <div className="insta-gallery">
            <div className="insta-header">
                <img src="/media/logo.png" alt="Logo" />
                <div>
                    <h3>corejewelleryworld</h3>
                    <p>
                        Manufacturers & Suppliers of Gold & Diamond Jewellery 💎 Curated for
                        Wholesalers, Retailers 💰 Competitive Prices 🌐 Fast Worldwide Shipping
                    </p>
                </div>
            </div>

            <div className="grid">
                {mediaItems.map((item, index) => (
                    <div className="media-item" key={index}>
                        {item.type === "image" ? (
                            <img src={item.src} alt={`img-${index}`} />
                        ) : (
                            <div className="video-wrapper">
                                <img src={item.thumbnail} alt={`thumb-${index}`} />
                                <span className="play-icon">▶</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="follow-btn">
                <button>📷 Follow on Instagram</button>
            </div>
        </div>
    );
};

export default SocialMedia;
