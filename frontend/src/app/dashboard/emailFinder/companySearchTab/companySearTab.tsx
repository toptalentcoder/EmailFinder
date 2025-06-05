import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const fakeResults = {
    domain: "strataleadership.com",
    employees: [
        { name: "Andy J", title: "President/Founder" },
        { name: "Nathan Mellor", title: "Chief Executive Officer" },
        { name: "Lei Fang", title: "Technical Recruiter" },
        { name: "Linda Le", title: "Technical Recruiter" },
        { name: "Shawn Ryan", title: "Principal Product Manager" },
        { name: "Chris Wood", title: "Principal Product Manager" },
        { name: "Raymond Lexi", title: "Manager of Program, Trainer" },
        { name: "Vivek S", title: "Executive Assistant to CEO" },
    ],
    companyInfo: {
        name: "Strata Leadership",
        industry: "Professional Training and Coaching",
        headcount: "1-10",
        address: "Edmond, Oklahoma, United States",
        type: "Privately Held",
        acceptAll: "NO",
    },
    similarCompanies: [
        { name: "IBM", icon: "🧠" },
        { name: "Accenture", icon: "🚀" },
        { name: "Wipro", icon: "🌐" },
        { name: "Teta Consultancy", icon: "📊" },
        { name: "EY", icon: "📈" },
    ],
};

export default function CompanySearchTab() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState(false);

    const [activeTab, setActiveTab] = useState("All Prospect");

    const filterByTab = (emp: { title: string }) => {
        if (activeTab === "All Prospect") return true;
        if (activeTab === "Director+") return /Director|Manager|Lead/i.test(emp.title);
        if (activeTab === "CXO") return /Chief|CEO|President/i.test(emp.title);
        return true;
    };

const filteredEmployees = fakeResults.employees.filter(filterByTab);

    const [isExpanded, setIsExpanded] = useState(true);

    const handleSearch = () => {
        if (search.toLowerCase().includes("strata")) {
            setResult(true);
        }
    };

    return (
        <div className="ml-4 mt-6 mb-10">
            <h2 className="mb-2 text-sm font-semibold text-gray-800">Domain Search</h2>

            <div className="flex items-center gap-2 max-w-xl">
                <input
                    type="text"
                    placeholder="Enter a domain or company name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 text-sm border border-gray-300 outline-none rounded-xl bg-gray-100"
                />
                <button
                    onClick={handleSearch}
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-xl py-2.5 px-3 cursor-pointer"
                >
                    <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>

            <hr className="mt-4 border-t border-gray-300 mb-4" />

            {fakeResults.employees.length} results for {fakeResults.domain}

            <hr className="mt-4 border-t border-gray-300 mb-4" />

            {result && (
                <div className="flex gap-6">

                    {/* Employee Table with Tabs */}
                    <div className="w-2/3 flex-1 border border-gray-300 rounded-lg">

                        {/* Filter Tabs */}
                        <div>
                            <div className="flex items-center justify-between">

                                <div className="relative flex items-center gap-6 text-sm font-medium pb-3 mx-4 mt-3">
                                    {["All Prospect", "Director+", "CXO"].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`relative px-3 py-1 transition-colors cursor-pointer hover:bg-gray-100 rounded-lg ${
                                                activeTab === tab
                                                ? "text-black bg-gray-100 border border-gray-300 "
                                                : "text-gray-500"
                                            }`}
                                        >
                                            {tab}

                                            {/* Black underline */}
                                            {activeTab === tab && (
                                                <span className="absolute left-0 bottom-[-12.5px] w-full h-[2px] bg-black rounded" />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 mx-4 bg-gray-100 hover:bg-gray-200 cursor-pointer px-4 py-1 rounded-lg">
                                    <CiFilter className="w-4 h-4 text-gray-600" />
                                    Filter
                                    <IoIosArrowDown className="w-4 h-4 text-gray-600" />
                                </div>
                            </div>

                            {/* Gray base underline for whole tab row */}
                            <hr className="border-t border-gray-300 mx-4" />
                        </div>

                        <div className="mx-4 mt-2">
                            {fakeResults.employees.length} All Employees
                        </div>

                        {/* Filtered Table */}
                        <div className="border border-gray-300 mt-2">
                            <table className="min-w-full text-sm">
                            <thead className="bg-gray-100 text-gray-600 text-xs">
                                <tr>
                                <th className="p-3"><input type="checkbox" /></th>
                                <th className="p-3 text-left">Name</th>
                                <th className="p-3 text-left">Job Title</th>
                                <th className="p-3 text-left">Email</th>
                                <th className="p-3 text-left">Lead</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEmployees.map((emp, idx) => (
                                    <tr key={idx} className="border-t border-gray-200">
                                        <td className="p-3">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="p-3 font-semibold text-gray-800 flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold">
                                            <IoPerson className="w-4 h-4" />
                                        </div>
                                            {emp.name}
                                        </td>
                                        <td className="p-3">{emp.title}</td>
                                        <td className="p-3">
                                            <button
                                                className={`flex items-center gap-1 px-2 py-1 rounded border text-xs font- cursor-pointer text-green-600 border-green-600 hover:text-white hover:bg-green-600`}
                                            >
                                                <MdOutlineMarkEmailRead className="w-4 h-4" />
                                                Access email
                                            </button>
                                        </td>
                                        <td className="p-3">
                                            <div>
                                                <button className="text-gray-800 border border-gray-300 px-2 py-0.5 text-sm flex items-center gap-1 rounded-lg hover:bg-gray-200 cursor-pointer">
                                                    <GoPlusCircle className="w-4 h-4" />
                                                    Add to Lead
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                    </div>


                    {/* Company Info + Similar Companies */}
                    <div className="w-1/3 bg-white border border-gray-300 rounded-lg p-4 text-sm shadow">
                        <span className="text-gray-500 text-lg">Company</span>
                        <h3 className="font-semibold text-lg mb-2 mt-4">{fakeResults.companyInfo.name}</h3>
                        <p className="text-gray-600 mb-2">
                            Strata Leadership is a leadership development company that offers training and resources for personal and professional growth.
                        </p>
                        <div className="flex items-center gap-2">
                            <FaLinkedin className="w-6 h-6 text-gray-500" />
                            <FaXTwitter className="w-6 h-6 text-gray-500" />
                        </div>

                        <div className="flex items-center gap-2 mt-4 mb-2">
                            <button className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg mb-2 cursor-pointer">Follow this company</button>
                            <button className="text-sm text-gray-500 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg mb-2 cursor-pointer">See more about {fakeResults.companyInfo.name}</button>
                        </div>

                        <hr className="mt-4 border-t border-gray-300 mb-4" />

                        <ul className="text-gray-700 space-y-1 mb-4">
                            <li><strong>Accept all:</strong> {fakeResults.companyInfo.acceptAll}</li>
                            <li><strong>Industry:</strong> {fakeResults.companyInfo.industry}</li>
                            <li><strong>Headcount:</strong> {fakeResults.companyInfo.headcount}</li>
                            <li><strong>Address:</strong> {fakeResults.companyInfo.address}</li>
                            <li><strong>Type:</strong> {fakeResults.companyInfo.type}</li>
                        </ul>

                        <div className="mt-4">
                            {/* Header row */}
                            <div
                                className="flex items-center justify-between mb-2 cursor-pointer"
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                <h4 className="font-semibold text-md mb-2">Similar Companies</h4>
                                {isExpanded ? (
                                    <IoIosArrowUp className="w-4 h-4 text-gray-500" />
                                ) : (
                                    <IoIosArrowDown className="w-4 h-4 text-gray-500" />
                                )}
                            </div>

                            {/* Divider */}
                            <hr className="mt-2 border-t border-gray-300 mb-4" />

                            {/* Content */}
                            {isExpanded && (
                                <ul className="space-y-2">
                                    {fakeResults.similarCompanies.map((comp, i) => (
                                        <li key={i} className="flex items-center justify-between text-gray-700">
                                            <span className="flex items-center gap-2">
                                                <span className="text-lg">{comp.icon}</span> {comp.name}
                                            </span>
                                            <button className="text-gray-800 border border-gray-300 px-2 py-0.5 text-sm flex items-center gap-1 rounded-lg hover:bg-gray-200 cursor-pointer">
                                                <GoPlusCircle className="w-4 h-4" />
                                                Save Company
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
