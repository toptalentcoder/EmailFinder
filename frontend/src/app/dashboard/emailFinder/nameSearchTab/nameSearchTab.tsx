"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import { FiCheckCircle } from "react-icons/fi";
import { TiShoppingBag } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function NameSearchTab() {
    const [fullName, setFullName] = useState("");
    const [company, setCompany] = useState("");
    const [showResult, setShowResult] = useState(false);

    // Fake response for demonstration
    const fakeData = {
        name: "Nathan Mellor",
        email: "nmellor@strataleadership.com",
        domain: "strataleadership.com",
        verified: true,
        verifiedRate: "96%",
        title: "Chief Executive Officer",
        otherCount: 16,
    };

    const handleSearch = () => {
        // Simulate a match only if inputs include "nathan" and "strata"
        if (
        fullName.toLowerCase().includes("nathan") &&
        company.toLowerCase().includes("strata")
        ) {
        setShowResult(true);
        } else {
        setShowResult(false);
        }
    };

    return (
        <div className="mt-6 ml-4 text-gray-600">
            <div className="bg-gray-100 shadow rounded-lg px-1 py-0.5">
                <span className="block px-4 py-3 text-lg font-semibold text-gray-800 border-b border-gray-200">
                    Email Finder
                </span>
                <div className="flex items-center bg-white px-4 py-3 rounded-lg">
                <input
                    type="text"
                    placeholder="Enter full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="flex-1 px-3 py-1 max-w-2/9 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="px-2 py-2 border border-gray-300">
                    <MdAlternateEmail className="text-gray-300 w-4 h-4" />
                </div>
                <input
                    type="text"
                    placeholder="Enter company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="flex-1 px-3 py-1 max-w-2/9 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 ml-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                    <FaSearch />
                </button>
                </div>
            </div>

            <div className="bg-gray-100 p-0.5 rounded-lg mt-6">
                {showResult && (
                    <div className=" bg-white border border-gray-300 rounded-lg shadow p-4">
                        {/* Top Row */}
                        <div className="flex justify-between items-start">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-red-400 text-white flex items-center justify-center text-xs font-bold">
                                    <IoPerson className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{fakeData.name}</h3>
                                    <p className="text-sm text-gray-600">{fakeData.email}</p>
                                    <div className="flex items-center gap-2 mt-1 text-sm mb-2">
                                        <span className="text-green-700 border-green-800 border font-medium bg-green-100 px-2 py-0.5 rounded-xl">
                                            <FiCheckCircle className="inline-block mr-2" />
                                            {fakeData.verifiedRate}
                                        </span>
                                        <span className="text-green-600">Verified</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <TiShoppingBag className="text-gray-800 w-5 h-5" />
                                        <span className="text-gray-600">{fakeData.title}</span>
                                        <FaLinkedin className="text-gray-600 w-5 h-5" />

                                    </div>

                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="text-sm text-gray-700 border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                    <GoPlusCircle className="text-gray-500 w-4 h-4" />
                                    Add to Lead
                                </button>
                                <button className="text-sm text-gray-700 border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                    <GoPlusCircle className="text-gray-500 w-4 h-4" />
                                    Add to a campaign
                                </button>
                            </div>
                        </div>

                        {/* Footer Section */}
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 flex gap-3">
                                <div className="">
                                    <div className="bg-white p-2">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.33325 2.68604C7.163 2.95302 6.0739 3.49689 5.15739 4.27197C4.24087 5.04706 3.52371 6.03073 3.06611 7.1404C2.60851 8.25006 2.42384 9.45333 2.5276 10.6491C2.63136 11.845 3.02053 12.9984 3.66242 14.0127L2.49992 17.5002L5.98742 16.3377C7.00168 16.9796 8.15515 17.3688 9.35097 17.4725C10.5468 17.5763 11.7501 17.3916 12.8597 16.934C13.9694 16.4764 14.9531 15.7592 15.7281 14.8427C16.5032 13.9262 17.0471 12.8371 17.3141 11.6669M17.3141 8.33353C16.9994 6.9562 16.3025 5.6956 15.3035 4.69659C14.3045 3.69757 13.0439 3.0007 11.6666 2.68604M14.1666 10.0002C14.1666 8.89513 13.7276 7.83532 12.9462 7.05392C12.1648 6.27252 11.105 5.83353 9.99992 5.83353M10.8333 10.0002C10.8333 9.77919 10.7455 9.56723 10.5892 9.41095C10.4329 9.25466 10.2209 9.16687 9.99992 9.16687"
                                                stroke="#22272B"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </div>

                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold mb-1">Stay informed about changes at Strata Leadership.</h4>
                                    <p className="text-xs text-gray-600 mb-2">
                                        Get notified when Strata Leadership opens new jobs, raises funds, and more.
                                    </p>
                                    <button className="text-sm text-gray-600 font-medium bg-white px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-200">
                                        Follow this company
                                    </button>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 flex gap-3">
                                <div className="">
                                    <div className="bg-white p-2">
                                        <FaSearch className="text-gray-700 w-5 h-5" />
                                    </div>

                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold mb-1">We found {fakeData.otherCount} email addresses for {fakeData.domain}</h4>
                                    <p className="text-xs text-gray-600 mb-2">
                                        Find the list of email addresses associated with this company that are publicly available on the web.
                                    </p>
                                    <button className="text-sm text-gray-600 font-medium bg-white px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-200">
                                        See All Results
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
