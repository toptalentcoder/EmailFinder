"use client";

import { useState } from "react";
import Image from "next/image";
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { TooglePageProps } from "@/types/TooglePageProps";
import { FaBriefcase, FaPlus, FaRegCalendarAlt, FaRegThumbsUp } from "react-icons/fa";
import { WifiIcon } from "@heroicons/react/24/outline";

export default function UpdatesPage({ togglePanel }: TooglePageProps) {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => {
        setCollapsed(prev => !prev);
        togglePanel();
    };

    return (
        <div className="flex flex-col min-h-screen text-sm text-gray-800 font-sans">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center mb-4 mt-8 ml-8">
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
                    <h1 className="text-2xl font-semibold ml-2">Updates</h1>
                </div>

                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mr-4">
                    <FaPlus className="w-3 h-3" />
                    New Update
                </button>
            </div>

            {/* Updates Container */}
            <div className="bg-gray-100 shadow rounded-lg p-4 mx-4">
                <h2 className="font-semibold text-gray-700 mb-4 flex items-center">
                    <WifiIcon className="w-4 h-4 text-blue-600" />
                    <span className="ml-2">Updates</span>
                    <span className="ml-2 text-sm text-gray-500">2</span>
                </h2>

                {/* Update Items */}
                <div className="space-y-4">
                    {/* Card 1 - Job Opening */}
                    <div
                        onClick={() => console.log("Job Opening clicked")}
                        className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-4 shadow-sm hover:shadow-md cursor-pointer transition"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="bg-gray-100 rounded-lg p-2">
                                <FaBriefcase className="text-gray-700 w-5 h-5" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-900">Job opening</div>
                                <div className="text-sm text-gray-500">Job openings → Companies that published a job</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                <FaRegThumbsUp className="w-4 h-4" />
                                0%
                            </div>
                            <div className="text-sm text-green-600 font-medium">Active</div>
                            <div className="text-sm text-gray-500 bg-gray-100 rounded-full px-2 py-0.5 text-xs">+10</div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                <FaRegCalendarAlt className="w-4 h-4" />
                                May 16, 2025
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    console.log("Edit clicked");
                                }}
                                className="text-sm px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                            >
                                Edit
                            </button>
                        </div>
                    </div>

                    {/* Card 2 - Attend.com */}
                    <div
                        onClick={() => console.log("Attend.com clicked")}
                        className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-4 shadow-sm hover:shadow-md cursor-pointer transition"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 relative rounded-lg overflow-hidden bg-white border border-gray-100">
                                <Image
                                    src="/attend-logo.png"
                                    alt="Attend Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <div className="font-medium text-gray-900">Updates for Attend.com</div>
                                <div className="text-sm text-gray-500">Company updates</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                <FaRegThumbsUp className="w-4 h-4" />
                                0%
                            </div>
                            <div className="text-sm text-green-600 font-medium">Active</div>
                            <div className="text-sm text-gray-500 bg-gray-100 rounded-full px-2 py-0.5 text-xs">7</div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                <FaRegCalendarAlt className="w-4 h-4" />
                                May 16, 2025
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    console.log("Edit clicked");
                                }}
                                className="text-sm px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
