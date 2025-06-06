"use client";

import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { TooglePageProps } from "@/types/TooglePageProps";
import { IoPerson } from "react-icons/io5";
import { GoPlusCircle } from "react-icons/go";
import { FiCheckCircle } from "react-icons/fi";
import { RiErrorWarningLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { GrPowerCycle } from "react-icons/gr";
import { MdContentCopy } from "react-icons/md";

type VerificationResult = {
    email: string;
    verified: boolean;
    score: number;
    checks: {
        format: boolean;
        domain: boolean;
        mailbox: boolean;
        blacklist: boolean;
        catchAll: boolean;
        disposable: boolean;
    };
    company: string;
    verifiedOn: string;
};

// FAKE BACKEND RESULT
const mockResult: VerificationResult = {
    email: "nmellor@strataleadership.com",
    verified: true,
    score: 96,
    checks: {
        format: true,
        domain: true,
        mailbox: true,
        blacklist: false,
        catchAll: true,
        disposable: false,
    },
    company: "Strata Leadership",
    verifiedOn: "May 15, 2025",
};

const mockRecent = [
    { email: "nmellor@strataleadership.com", status: "Valid", verifiedOn: "May 15, 2025" },
    { email: "ryan.ft@techcorp.com", status: "Invalid", verifiedOn: "May 15, 2025" },
    { email: "michael.few@vibez.com", status: "Risky", verifiedOn: "May 10, 2025" },
    { email: "Klaas.nadhost@nadhost.com", status: "Valid", verifiedOn: "May 7, 2025" },
];

export default function SingleVerificationPage({ togglePanel }: TooglePageProps) {

    const [collapsed, setCollapsed] = useState(false);
    const [email, setEmail] = useState("");
    const [result, setResult] = useState<VerificationResult | null>(null);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleToggle = () => {
        setCollapsed((prev) => !prev);
        togglePanel();
    };

    const handleSearch = () => {
        if (email.toLowerCase().includes("strata")) {
        setResult(mockResult);
        } else {
        setResult(null);
        }
    };

    return (
        <div className="max-h-screen text-sm text-gray-800 font-sans p-6 overflow-y-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center mb-4">
                    {collapsed ? (
                        <TbLayoutSidebarRightCollapseFilled
                        className="w-6 h-6 cursor-pointer"
                        onClick={handleToggle}
                        />
                    ) : (
                        <TbLayoutSidebarLeftCollapseFilled
                        className="w-6 h-6 cursor-pointer"
                        onClick={handleToggle}
                        />
                    )}
                    <h1 className="text-2xl font-semibold ml-2">Single Verification</h1>
                </div>
                <div className="mb-4">
                <button className="px-4 py-1.5 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200">
                    Upload a list of email address to verify
                </button>
                </div>
            </div>

            <div className="bg-gray-100 shadow rounded-lg mt-4 px-1 py-0.5">
                <span className="block px-4 py-3 text-lg font-semibold border-b border-gray-200">Email Verifier</span>
                <div className="flex items-center bg-white px-4 py-3 rounded-lg">
                    <input
                        type="text"
                        value={email}
                        placeholder="Enter an email address to verify"
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        className="flex-1 px-3 py-2 max-w-1/3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleSearch}
                        className="px-4 py-3 ml-4 bg-gray-100 rounded-lg hover:bg-gray-300"
                    >
                        <FaSearch className="text-gray-500" />
                    </button>
                </div>
            </div>

            <div className="bg-gray-100 p-0.5 rounded-lg mt-6">
                {result && (
                    <div className=" bg-white border border-gray-300 rounded-lg shadow p-4">
                        {/* Top Row */}
                        <div className="flex justify-between items-start">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-red-400 text-white flex items-center justify-center text-xs font-bold">
                                    <IoPerson className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{result.email}</h3>
                                    <p className="text-sm text-gray-600">This email address can be used safely.</p>
                                    <div className="flex items-center gap-2 mt-1 text-sm mb-2">
                                        <span className="text-green-700 border-green-800 border font-medium bg-green-100 px-2 py-0.5 rounded-xl">
                                            <FiCheckCircle className="inline-block mr-2" />
                                            {result.score}%
                                        </span>
                                        <span className="text-green-600">Verified</span>
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
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
                            <div>
                                <div className="mb-3">
                                    <div className="text-gray-500">Format $ Syntax</div>
                                    <div className="flex items-center gap-2 mt-1">
                                        <FiCheckCircle className={`text-lg ${result.checks.format ? 'text-green-500' : 'text-red-500'}`} />
                                        <span className={`text-md font-medium px-2 py-1 rounded-full`}>
                                            {result.checks.format ? 'Valid format' : 'Invalid format'}
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="text-gray-500">Mailbox Check</div>
                                    <div className="flex items-center gap-2 mt-1">
                                        <FiCheckCircle className={`text-lg ${result.checks.format ? 'text-green-500' : 'text-red-500'}`} />
                                        <span className={`text-md font-medium px-2 py-1 rounded-full`}>
                                            {result.checks.format ? 'Mailbox exists' : 'Mailbox does not exist'}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-gray-500">Spam Check</div>
                                    <div className="flex items-center gap-2 mt-1">
                                        <FiCheckCircle className={`text-lg ${result.checks.format ? 'text-green-500' : 'text-red-500'}`} />
                                        <span className={`text-md font-medium px-2 py-1 rounded-full`}>
                                            {result.checks.format ? 'Not listed on spam blacklist' : 'Listed on spam blacklist'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="mb-3">
                                    <div className="text-gray-500">Domain Check</div>
                                    <div className="flex items-center gap-2 mt-1">
                                        <FiCheckCircle className={`text-lg ${result.checks.format ? 'text-green-500' : 'text-red-500'}`} />
                                        <span className={`text-md font-medium px-2 py-1 rounded-full`}>
                                            {result.checks.format ? 'Domain exists and has valid MX records' : 'Domain does not exist'}
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="text-gray-500">Catch-All Check</div>
                                    <div className="flex items-center gap-2 mt-1">
                                        <RiErrorWarningLine className={`text-lg ${result.checks.format ? 'text-red-500' : 'text-red-500'}`} />
                                        <span className={`text-md font-medium px-2 py-1 rounded-full`}>
                                            {result.checks.format ? 'Domain has catch-all disabled' : 'Domain has catch-all enabled'}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-gray-500">Disposable Check</div>
                                    <div className="flex items-center gap-2 mt-1">
                                        <FiCheckCircle className={`text-lg ${result.checks.format ? 'text-green-500' : 'text-red-500'}`} />
                                        <span className={`text-md font-medium px-2 py-1 rounded-full`}>
                                            {result.checks.format ? 'Not a disposable email' : 'Disposable email detected'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 text-sm text-gray-500"></div>
                            <p>
                                <span className="font-semibold">Company Information</span>
                            </p>
                            <p>
                                <span>{result.company}</span>
                            </p>
                    </div>
                )}
            </div>

            {result && (
                <div className="bg-gray-100 px-1 py-0.5 rounded-lg mt-6">
                    <h3 className="px-4 py-3 font-semibold">Recent Verifications</h3>
                    <div className="bg-white rounded-lg">
                        <table className="w-full text-sm divide-y divide-gray-200">
                            <thead>
                                <tr className="text-left text-gray-600">
                                    <th className="px-4 py-2">Email Address</th>
                                    <th className="px-4 py-2">Status</th>
                                    <th className="px-4 py-2">Verified On</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {mockRecent.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-4 py-2">{item.email}</td>
                                        <td className="px-4 py-2">
                                            <span
                                                className={`px-2 py-1 rounded-lg text-white text-xs font-semibold ${
                                                item.status === "Valid"
                                                    ? "bg-green-500"
                                                    : item.status === "Invalid"
                                                    ? "bg-red-500"
                                                    : "bg-yellow-500"
                                                }`}
                                            >
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2">{item.verifiedOn}</td>
                                        <td className="px-4 py-2 relative">
                                            <div className="flex items-center gap-6">
                                                <GrPowerCycle className="text-gray-600 w-5 h-5 cursor-pointer" />
                                                <div className="relative">
                                                    <MdContentCopy
                                                        className="text-gray-600 w-5 h-5 cursor-pointer"
                                                        onClick={() => {
                                                        navigator.clipboard.writeText(item.email);
                                                        setCopiedIndex(index);
                                                        setTimeout(() => setCopiedIndex(null), 1500); // Reset after 1.5s
                                                        }}
                                                    />
                                                    {copiedIndex === index && (
                                                        <div className="absolute bottom-full mb-1 text-xs text-white bg-black px-2 py-0.5 rounded shadow">
                                                        Copied!
                                                        </div>
                                                    )}
                                                </div>

                                                <div>
                                                    <Menu>
                                                        <MenuButton>
                                                            <BsThreeDots className="text-gray-600 cursor-pointer" />
                                                        </MenuButton>
                                                            <MenuItems
                                                                anchor="bottom start"
                                                                className="w-40 rounded-lg bg-white shadow-2xl z-50 border border-gray-200 text-gray-800 py-2"
                                                            >
                                                            <MenuItem >
                                                                <div >
                                                                    <button className="px-4 py-2 cursor-pointer text-left w-full hover:bg-gray-100">View Details</button>
                                                                </div>
                                                            </MenuItem>
                                                            <MenuItem>
                                                                <div>
                                                                    <button className="px-4 py-2 cursor-pointer text-left w-full hover:bg-gray-100">Add to Lead</button>
                                                                </div>
                                                            </MenuItem>
                                                            <MenuItem>
                                                                <div>
                                                                    <button className="px-4 py-2 cursor-pointer text-left w-full hover:bg-gray-100">Add to Campaign</button>
                                                                </div>
                                                            </MenuItem>
                                                            {/* Horizontal Line */}
                                                            <hr className="mt-1 mb-1 border-t border-gray-300" />
                                                            <MenuItem>
                                                                <div>
                                                                    <button className="px-4 py-2 cursor-pointer text-left w-full text-red-600 hover:bg-gray-100">Remove</button>
                                                                </div>
                                                            </MenuItem>
                                                        </MenuItems>
                                                    </Menu>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            )}

        </div>
    );
}
