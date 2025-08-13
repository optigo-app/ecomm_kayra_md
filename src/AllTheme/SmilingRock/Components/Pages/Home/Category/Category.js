import React from 'react'
import './Category.scss';
import { storImagePath } from '../../../../../../utils/Glob_Functions/GlobalFunction';
import { useNavigate } from 'react-router-dom';

const Category = () => {

    const navigate = useNavigate();
    const Category1 = `Pendant Set/category`;
    const Category2 = `Ring/category`;
    const Category3 = `Earring/category`;
    const Category4 = `Bracelet/category`;

    const DiamondLists = [
        { img: `${storImagePath()}/Banner/necklace.webp`, name: "Pendants & Necklace", link: `/p/Pendants/?M=${btoa(Category1)}` },
        { img: `${storImagePath()}/Banner/ring.webp`, name: "Ring", link: `/p/Rings/?M=${btoa(Category2)}` },
        { img: `${storImagePath()}/Banner/earring.webp`, name: "Earrings", link: `/p/Earrings/?M=${btoa(Category3)}` },
        { img: `${storImagePath()}/Banner/bracelet.webp`, name: "Bracelets", link: `/p/Bracelets/?M=${btoa(Category4)}` },
    ];

    return (
        <div className="category-section">
            <h2 className="category-title">Shop by Category</h2>
            <p className="category-subtitle">
                Dfine Jewellery designs feature the world’s finest diamonds and unparalleled craftsmanship—signatures of the House for almost two centuries.
            </p>
            <div className="category-list">
                {DiamondLists.map((val, i) => (
                    <div
                        key={i}
                        className="category-card"
                        onClick={() => navigate(val.link)}
                    >
                        <img src={val.img} alt={val.name} loading="lazy" />
                        <span>{val.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Category
