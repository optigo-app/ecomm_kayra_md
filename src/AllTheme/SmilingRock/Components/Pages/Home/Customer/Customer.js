import React from "react";
import "./Customer.scss";
import { storImagePath } from '../../../../../../utils/Glob_Functions/GlobalFunction';

const countries = [
    { name: "Australia", flag: `${storImagePath()}/Banner/australia.jpg` },
    { name: "Hong Kong", flag: `${storImagePath()}/Banner/hong-kong.jpg` },
    { name: "USA", flag: `${storImagePath()}/Banner/usa.jpg` },
    { name: "UK", flag: `${storImagePath()}/Banner/uk.jpg` },
    { name: "Dubai", flag: `${storImagePath()}/Banner/dubai.jpg` },
    { name: "China", flag: `${storImagePath()}/Banner/china.jpg` },
    { name: "Israel", flag: `${storImagePath()}/Banner/Israel.jpg` },
    { name: "Italy", flag: `${storImagePath()}/Banner/italy.jpg` },
    { name: "Japan", flag: `${storImagePath()}/Banner/japan.jpg` },
];

const Customer = () => {
    return (
        <div className="global-customers">
            <h2>Global Customers</h2>
            <div className="flags">
                {countries.map((country, index) => (
                    <div className="flag-box" key={index}>
                        <img src={country.flag} alt={country.name} />
                        <span>{country.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Customer;
