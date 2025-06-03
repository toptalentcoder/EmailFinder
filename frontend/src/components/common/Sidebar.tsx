"use client";

import { useState } from "react";
import {
  HomeIcon,
  BuildingOfficeIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  CheckBadgeIcon,
  WifiIcon,
  UsersIcon,
  MegaphoneIcon,
  Cog6ToothIcon,
  CodeBracketSquareIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  InboxIcon,
  RectangleStackIcon,
  Cog8ToothIcon,
  PlusIcon,
  ChartBarIcon,
  QueueListIcon,
  DocumentDuplicateIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

const groupedMenu = [
    {
        title: "Menu",
        items: [{ label: "Dashboard", icon: HomeIcon }],
    },
    {
        items: [
            { label: "Lead Scraper", icon: BuildingOfficeIcon },
            { label: "Discover", icon: MagnifyingGlassIcon },
            { label: "Email Finder", icon: EnvelopeIcon },
            { label: "Email Verifier", icon: CheckBadgeIcon },
            { label: "Updates", icon: WifiIcon },
        ],
    },
    {
        items: [
            { label: "Leads", icon: UsersIcon },
            { label: "Campaigns", icon: MegaphoneIcon },
        ],
    },
    {
        items: [
            { label: "Integration", icon: Cog6ToothIcon },
            { label: "API", icon: CodeBracketSquareIcon },
        ],
    },
];

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [activePanel, setActivePanel] = useState<string | null>(null);
    const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

    const handleMenuClick = (label: string) => {
        setSelectedMenu(label); 
        if (["Discover", "Email Verifier", "Leads", "Campaigns"].includes(label)) {
            setCollapsed(true);
            setActivePanel(label);
        } else {
            setCollapsed(false);
            setActivePanel(null);
        }
    };

    return (
        <div className="relative flex">

            {/* Sidebar */}
            <div className={`h-screen ${collapsed ? "w-20" : "w-64"} text-gray-800 bg-gray-100 p-3 flex flex-col transition-all duration-300`}>
                <div className="flex items-center gap-2 mb-6 ml-4">
                    <div className="h-6 w-6 rounded-full bg-blue-600" />
                    {!collapsed && <h1 className="text-lg font-bold">Caitalyst</h1>}
                </div>

                <div className="flex-1 space-y-6 overflow-y-auto">
                    {groupedMenu.map((group, groupIdx) => (
                        <div key={groupIdx}>
                            {group.title && (
                                <p className="text-xs text-gray-500 font-medium mb-1 px-3">{group.title}</p>
                            )}

                            {group.items.map(({ label, icon: Icon }) => (
                                <button
                                    key={label}
                                    onClick={() => handleMenuClick(label)}
                                    className={`flex items-center gap-3 w-full px-3 py-2 rounded-xl ${
                                        collapsed ? "justify-center" : ""
                                    } ${
                                        selectedMenu === label
                                        ? "bg-white text-blue-600 font-semibold"
                                        : "hover:bg-white text-black"
                                    }`}
                                >
                                    <Icon
                                        className={`h-5 w-5 ${
                                        selectedMenu === label ? "text-blue-600" : "text-black"
                                        }`}
                                    />
                                    {!collapsed && <span className="text-sm font-medium">{label}</span>}
                                </button>
                            ))}

                            {groupIdx !== groupedMenu.length - 1 && <hr className="my-3 border-gray-200" />}
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="space-y-1 pt-4 border-t border-gray-200">
                    <button className={`flex items-center gap-3 px-3 py-2 w-full hover:bg-white ${collapsed ? "justify-center" : ""}`}>
                        <BellIcon className="h-5 w-5" />
                        {!collapsed && <span>Notification</span>}
                    </button>
                    <button className={`flex items-center gap-3 px-3 py-2 w-full hover:bg-white ${collapsed ? "justify-center" : ""}`}>
                        <QuestionMarkCircleIcon className="h-5 w-5" />
                        {!collapsed && <span>Support</span>}
                    </button>
                    <div className={`flex items-center gap-3 px-3 py-2 ${collapsed ? "justify-center" : ""}`}>
                        <div className="h-6 w-6 rounded-full bg-yellow-600" />
                        {!collapsed && <span>Sidiat Bruma</span>}
                        {collapsed && <span className="ml-1">›</span>}
                    </div>
                </div>

            </div>

            {/* Floating Panels */}
            {activePanel === "Discover" && (
                <div className="absolute left-20 top-0 h-screen text-gray-800 w-52 bg-gray-100 shadow-md rounded-tr-xl rounded-br-xl p-4 z-10">
                    <h2 className="text-lg font-semibold mb-4">Discover</h2>
                    <div className="space-y-2">
                        <button className="flex items-center gap-2 px-3 py-2 rounded bg-white text-blue-600 font-medium w-full">
                            <UserGroupIcon className="h-5 w-5" />
                            People
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white w-full text-black">
                            <BuildingOffice2Icon className="h-5 w-5" />
                            Companies
                        </button>
                    </div>
                </div>
            )}

            {activePanel === "Email Verifier" && (
                <div className="absolute left-20 text-gray-800 top-0 h-screen w-52 bg-gray-100 shadow-md rounded-tr-xl rounded-br-xl p-4 z-10">
                    <h2 className="text-lg font-semibold mb-4">Email Verifier</h2>
                    <div className="space-y-2">
                        <button className="flex items-center gap-2 px-3 py-2 rounded bg-white text-blue-600 font-medium w-full">
                            <InboxIcon className="h-5 w-5" />
                            Single Verification
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white w-full text-black">
                            <RectangleStackIcon className="h-5 w-5" />
                            Bulk Verification
                        </button>
                    </div>
                </div>
            )}

            {activePanel === "Leads" && (
                <div className="absolute left-20 top- text-gray-800 h-screen w-64 bg-gray-100 shadow-md rounded-tr-xl rounded-br-xl p-4 z-10 overflow-y-auto">
                    <h2 className="text-lg font-semibold mb-4">Leads</h2>

                    {/* Companies Section */}
                    <div className="mb-4">
                        <div className="flex items-center justify-between text-sm font-medium text-gray-700">
                            <div className="flex items-center gap-2">
                                <BuildingOffice2Icon className="h-4 w-4" />
                                Companies
                            </div>
                            <span className="text-xs text-gray-500">1</span>
                        </div>
                        <button className="flex items-center gap-2 px-3 py-2 mt-2 rounded bg-white text-blue-600 font-medium w-full">
                            <BuildingOffice2Icon className="h-4 w-4" />
                            Companies
                            <span className="ml-auto text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">1</span>
                        </button>
                    </div>

                    {/* People Section */}
                    <div className="mb-4">
                        <div className="flex items-center justify-between text-sm font-medium text-gray-700 mb-1">
                            <div className="flex items-center gap-2">
                                <UserGroupIcon className="h-4 w-4" />
                                People
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-xs text-gray-500">3</span>
                                <button className="h-6 w-6 flex items-center justify-center rounded bg-white border text-xs">Q</button>
                                <button className="h-6 w-6 flex items-center justify-center rounded bg-white border">
                                    <PlusIcon className="h-3 w-3" />
                                </button>
                            </div>
                        </div>
                        <div className="pl-4 space-y-1">
                            <button className="flex justify-between text-sm text-black hover:underline w-full">
                                All People <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">6</span>
                            </button>
                            <button className="flex justify-between text-sm text-black hover:underline w-full">
                                Import from Com.. <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">3</span>
                            </button>
                            <button className="flex justify-between text-sm text-black hover:underline w-full">
                                Josie’s Leads <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">2</span>
                            </button>
                        </div>
                    </div>

                    {/* Integrations */}
                    <div className="mb-4">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                            <Cog8ToothIcon className="h-4 w-4" />
                            Integrations
                        </div>
                        <p className="text-xs text-gray-400 mt-1">No CRM connected</p>
                        <button className="text-xs text-blue-600 mt-2 underline">+ New application</button>
                    </div>

                    {/* Settings */}
                    <div className="mt-4">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-2">
                            <Cog8ToothIcon className="h-4 w-4" />
                            Settings
                        </div>
                        <div className="pl-4 text-sm text-black space-y-1">
                            <div>Leads Import</div>
                            <div>Custom Attributes</div>
                            <div>Automatic Verify</div>
                        </div>
                    </div>
                </div>
            )}

            {activePanel === "Campaigns" && (
                <div className="absolute left-20 top-0 text-gray-800 h-screen w-64 bg-gray-100 shadow-md rounded-tr-xl rounded-br-xl p-4 z-10">
                    <h2 className="text-lg font-semibold mb-4">Campaigns</h2>

                    <div className="space-y-2">
                        <button className="flex items-center gap-2 px-3 py-2 rounded bg-white text-blue-600 font-medium w-full">
                            <MegaphoneIcon className="h-5 w-5" />
                            Campaigns
                        </button>

                        <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white w-full">
                            <InboxIcon className="h-5 w-5" />
                            Inbox
                            <span className="ml-auto text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">1</span>
                        </button>

                        <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white w-full">
                            <UserGroupIcon className="h-5 w-5" />
                            Engagement
                        </button>

                        <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white w-full">
                            <ChartBarIcon className="h-5 w-5" />
                            Reporting
                        </button>

                        <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white w-full">
                            <QueueListIcon className="h-5 w-5" />
                            Queue
                        </button>

                        <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white w-full">
                            <Cog6ToothIcon className="h-5 w-5" />
                            Settings
                        </button>

                        <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white w-full">
                            <DocumentDuplicateIcon className="h-5 w-5" />
                            Templates
                        </button>

                        <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white w-full">
                            <AdjustmentsHorizontalIcon className="h-5 w-5" />
                            Unsubscriptions
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}
