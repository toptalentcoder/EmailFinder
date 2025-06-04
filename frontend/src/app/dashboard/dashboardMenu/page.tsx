"use client";

import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { FaSearch } from "react-icons/fa";
import { RiMailCheckFill } from "react-icons/ri";
import { BsSendCheckFill } from "react-icons/bs";
export default function DashboardMenu({
    collapsed,
    setCollapsed,
}: {
    collapsed: boolean;
    setCollapsed: (val: boolean) => void;
}) {

    const data = [
        { name: "Deliverable", value: 1432, color: "#22c55e" }, // green-500
        { name: "Risky", value: 287, color: "#f97316" },         // orange-400
        { name: "Invalid", value: 157, color: "#ef4444" },       // red-500
    ];

    return (
        <div className="flex flex-col gap-6 p-6 text-black bg-white max-h-screen overflow-y-auto">

            {/* Header with Collapse Button */}
            <div className="flex items-center mb-4">
                {collapsed ? (
                    <TbLayoutSidebarRightCollapseFilled
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => setCollapsed(false)}
                    />
                ) : (
                    <TbLayoutSidebarLeftCollapseFilled
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => setCollapsed(true)}
                    />
                )}
                <h1 className="text-2xl font-semibold ml-2">Dashboard</h1>
            </div>

            {/* Top Summary Cards */}
            <div className="grid grid-cols-4 gap-4 min-w-1/8">
                <SummaryCard title="Leads Found" value="2,543" change="+12%" subChange="+156 this week" />
                <SummaryCard title="Email Found" value="1,876" change="+8%" subChange="+92 this week" />
                <SummaryCard title="Verified Emails" value="1,432" change="+5%" subChange="+64 this week" />
                <SummaryCard title="Enrichment Rate" value="76.2%" change="-3%" subChange="Target: 80%" isNegative />
            </div>

            {/* Funnel & Chart */}
            <div className="grid grid-cols-2 gap-6 min-w-1/4">
                <div className="bg-white p-4 rounded-xl shadow-lg">
                    <h2 className="font-semibold mb-4">Lead Generation Funnel</h2>
                    <div className="space-y-2 flex flex-col items-center h-[300px] justify-center">
                        {[
                            ["Lead Founds", 2543, "w-9/12", "bg-blue-600"],
                            ["Contact Info", 2102, "w-8/12", "bg-blue-500"],
                            ["Verified Emails", 1432, "w-7/12", "bg-blue-400"],
                            ["Enriched", 987, "w-5/12", "bg-blue-300"],
                            ["Qualified", 645, "w-3/12", "bg-blue-200"],
                        ].map(([label, count, width, bg]) => (
                            <div
                                key={label}
                                className={`${width} ${bg} text-white px-4 py-2 rounded-md text-center font-semibold`}
                            >
                                {label}: {count}
                            </div>
                        ))}
                    </div>


                    {/* Horizontal Line */}
                    <hr className="mt-6 border-t border-gray-300" />

                    <div className="text-sm mt-4 text-gray-600 flex items-center justify-between">
                        <span className="text-gray-800">Conversation rate: 25.4%</span>
                        <span className="text-green-600 border border-gray-400 rounded-full px-2 py-0.5">+7.9% from last month</span>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-lg w-full relative">
                    <h2 className="font-semibold mb-4">Email Verification Results</h2>

                    <div className="relative w-full h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={100}
                                    dataKey="value"
                                    startAngle={90}
                                    endAngle={-270}
                                    paddingAngle={0}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>

                        {/* Center Text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none text-gray-800">
                            <p className="text-xl font-bold drop-shadow">76.3%</p>
                            <p className="text-sm drop-shadow">Deliverable</p>
                        </div>
                    </div>

                    {/* Horizontal Line */}
                    <hr className="mt-6 border-t border-gray-300" />

                    {/* Legend */}
                    <div className="mt-4 text-sm flex justify-around">
                        {data.map((entry) => (
                            <div key={entry.name} className="flex items-center gap-2">
                                <span
                                className="inline-block w-3 h-3 rounded-full"
                                style={{ backgroundColor: entry.color }}
                                ></span>
                                <span className="text-gray-700">{entry.name}: {entry.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Action */}
            <div className="bg-gray-100 rounded-xl shadow min-w-1/4">
                <div className="px-4 py-3">
                    <h2 className="font-semibold text-lg">Quick Action</h2>
                </div>
                <div className="space-y-1 px-1">
                    <ActionItem
                        title="Find leads and email addresses"
                        desc="Use our B2B lead database and powerful market segmentation features."
                        button="Start Prospecting"
                        icon={FaSearch}
                    />
                    <ActionItem
                        title="Verify email address"
                        desc="Verify individual email address with the most complete email checker."
                        button="Start Verifying"
                        icon={RiMailCheckFill}
                    />
                    <ActionItem
                        title="Send cold email campaigns"
                        desc="Connect your email to create, personalize, and send campaigns at scale."
                        button="Start a Campaign"
                        icon={BsSendCheckFill}
                    />
                </div>
            </div>

        </div>
    );
}

function SummaryCard({
    title,
    value,
    change,
    subChange,
    isNegative = false,
}: {
    title: string;
    value: string;
    change: string;
    subChange: string;
    isNegative?: boolean;
}) {
    return (
        <div className="bg-gray-100 rounded-xl shadow p-0.5">
            <div className="px-4 py-2">
                <h3 className="text-gray-600 text-sm">{title}</h3>
            </div>
            <div className="bg-white rounded-xl px-4 py-2">
                <p className="text-xl font-semibold mt-1">{value}</p>
                <div className="flex items-center mt-2 justify-between">
                    <p className={`text-sm ${isNegative ? "text-red-500" : "text-green-600"}`}>
                        {change} <span className="text-gray-500">from last month</span>
                    </p>
                    <p className="text-xs text-gray-400 border px-2 py-0.5 rounded-full">{subChange}</p>
                </div>
            </div>
        </div>
    );
}

function ActionItem({
    title,
    desc,
    button,
    icon: Icon,
}: {
    title: string;
    desc: string;
    button: string;
    icon: React.ElementType;
}) {
    return (
        <div className="border border-gray-100 rounded-lg p-4 flex bg-white">
            <div>
                <div className="w-6 h-6 rounded-full flex items-start justify-start mr-4 mt-1">
                    <Icon className="text-gray-800 w-full h-full" />
                </div>
            </div>
            <div>
                <div>
                    <h4 className="font-medium">{title}</h4>
                    <p className="text-sm text-gray-500">{desc}</p>
                </div>
                <button className="border border-gray-300 text-gray-800 text-sm px-4 py-1 rounded-lg hover:bg-gray-500 hover:text-white mt-4">
                    {button}
                </button>
            </div>
        </div>
    );
}

