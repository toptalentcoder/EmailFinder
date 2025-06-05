"use client";

import { useState } from "react";
import { FaBuilding, FaUser } from "react-icons/fa";
import CompanySearchTab from "./companySearchTab/companySearTab";
import NameSearchTab from "./nameSearchTab/nameSearchTab";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
export default function EmailFinderPage({
    collapsed,
    setCollapsed,
}: {
    collapsed: boolean;
    setCollapsed: (val: boolean) => void;
}) {{
    const [activeTab, setActiveTab] = useState<"company" | "name">("company");

    return (
        <div className="flex p-6">
            <div className="flex-1 bg-white text-gray-800">

                <div className="flex items-center justify-between">
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
                        <h1 className="text-2xl font-semibold ml-2">Email Finder</h1>
                    </div>

                    {/* Upload button */}
                    <div className="mb-4">
                        <button className="px-4 py-1.5 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer shadow-sm hover:bg-gray-200">
                            Upload a list of domains to search
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex space-x-6 border-b border-gray-200 ml-4">
                    <button
                        onClick={() => setActiveTab("company")}
                        className={`flex items-center gap-2 pb-2 text-sm font-medium border-b-2 cursor-pointer ${
                        activeTab === "company"
                            ? "text-black border-black"
                            : "text-gray-500 border-transparent"
                        }`}
                    >
                        <FaBuilding />
                        Find email by company
                    </button>
                    <button
                        onClick={() => setActiveTab("name")}
                        className={`flex items-center gap-2 pb-2 text-sm font-medium border-b-2 cursor-pointer ${
                        activeTab === "name"
                            ? "text-black border-black"
                            : "text-gray-500 border-transparent"
                        }`}
                    >
                        <FaUser />
                        Find email by name
                    </button>
                </div>

                {/* Tab Content */}
                {activeTab === "company" && <CompanySearchTab />}
                {activeTab === "name" && <NameSearchTab />}
            </div>
        </div>
    );
}}
