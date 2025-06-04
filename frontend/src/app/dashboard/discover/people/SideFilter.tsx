"use client";

import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaBuilding, FaIndustry, FaBriefcase, FaGlobe, FaUsers, FaSitemap, FaCalendarAlt, FaTags, FaTools, FaMoneyCheckAlt, FaUser, FaUserTag } from "react-icons/fa";

const filters = [
    "Company Name",
    "Industry",
    "Job Title",
    "Location",
    "Company Size",
    "Company Type",
    "Founded",
    "Keywords",
    "Technologies",
    "Funding",
    "First Name",
    "Last Name",
];

// Map labels to corresponding icons
const iconMap: { [key: string]: React.ReactNode } = {
    "Company Name": <FaBuilding className="text-gray-600" />,
    "Industry": <FaIndustry className="text-gray-600" />,
    "Job Title": <FaBriefcase className="text-gray-600" />,
    "Location": <FaGlobe className="text-gray-600" />,
    "Company Size": <FaUsers className="text-gray-600" />,
    "Company Type": <FaSitemap className="text-gray-600" />,
    "Founded": <FaCalendarAlt className="text-gray-600" />,
    "Keywords": <FaTags className="text-gray-600" />,
    "Technologies": <FaTools className="text-gray-600" />,
    "Funding": <FaMoneyCheckAlt className="text-gray-600" />,
    "First Name": <FaUser className="text-gray-600" />,
    "Last Name": <FaUserTag className="text-gray-600" />,
};

export default function SideFilterbar() {
    const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

    const toggle = (label: string) => {
        setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
    };

    const renderField = (label: string) => {
        switch (label) {
            case "Company Name":
            case "Job Title":
            case "Location":
            case "Keywords":
            case "Technologies":
            case "First Name":
            case "Last Name":
                return (
                    <input
                        type="text"
                        placeholder={`Enter ${label}`}
                        className="w-full border rounded px-2 py-1 text-sm"
                    />
                );

            case "Industry":
            case "Company Type":
                return (
                    <select className="w-full border rounded px-2 py-1 text-sm">
                        <option value="">Select {label}</option>
                        <option value="tech">Tech</option>
                        <option value="finance">Finance</option>
                        <option value="health">Health</option>
                    </select>
                );

            case "Company Size":
                return (
                    <select className="w-full border rounded px-2 py-1 text-sm">
                        <option value="">Select Size</option>
                        <option value="1-10">1–10</option>
                        <option value="11-50">11–50</option>
                        <option value="51-200">51–200</option>
                        <option value="201-1000">201–1000</option>
                        <option value="1000+">1000+</option>
                    </select>
                );

            case "Founded":
                return (
                    <input
                        type="number"
                        placeholder="e.g. 2015"
                        className="w-full border rounded px-2 py-1 text-sm"
                    />
                );

            case "Funding":
                return (
                    <select className="w-full border rounded px-2 py-1 text-sm">
                        <option value="">Select Funding Stage</option>
                        <option value="seed">Seed</option>
                        <option value="series-a">Series A</option>
                        <option value="series-b">Series B</option>
                        <option value="public">Public</option>
                    </select>
                );

            default:
                return null;
        }
    };

    return (
        <aside className="w-64 bg-white border border-gray-200">
            {filters.map((label) => (
                <div key={label} className="border-b last:border-0 border-gray-200 ">
                    <div
                        className="flex justify-between items-center cursor-pointer hover:bg-gray-50 px-6 py-3"
                        onClick={() => toggle(label)}
                    >
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                            {iconMap[label]}
                            <span>{label}</span>
                            <span className="text-xs text-gray-400">ⓘ</span>
                        </div>
                        {expanded[label] ?
                            (
                                <FaAngleUp className="text-gray-500" />
                            ) : (
                                <FaAngleDown className="text-gray-500" />
                            )
                        }
                    </div>
                    {expanded[label] && (
                        <div className="px-4 py-2 text-sm text-gray-600 bg-gray-50">
                            {renderField(label)}
                        </div>
                    )}
                </div>
            ))}
            <div className="pt-4 flex items-center gap-2 px-6 border-b border-gray-300 py-5">
                <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-1 rounded-lg cursor-pointer">Search</button>
                <button className="w-full py-1 border rounded-lg cursor-pointer hover:bg-gray-200">Clear filter</button>
            </div>
        </aside>
    );
}
