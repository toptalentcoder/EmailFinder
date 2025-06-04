"use client";

import { useState } from "react";

export default function DashboardMenu({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
}) {
  return (
    <div className="flex flex-col gap-6 p-6 text-black bg-gray-50 max-h-screen overflow-y-auto">
      {/* Top Summary Cards */}
      <div className="grid grid-cols-4 gap-4 min-w-1/8">
        <SummaryCard title="Leads Found" value="2,543" change="+12%" subChange="+156 this week" />
        <SummaryCard title="Email Found" value="1,876" change="+8%" subChange="+92 this week" />
        <SummaryCard title="Verified Emails" value="1,432" change="+5%" subChange="+64 this week" />
        <SummaryCard title="Enrichment Rate" value="76.2%" change="-3%" subChange="Target: 80%" isNegative />
      </div>

      {/* Funnel & Chart */}
      <div className="grid grid-cols-2 gap-6 min-w-1/4">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Lead Generation Funnel</h2>
          <div className="space-y-2">
            {[
              ["Lead Founds", 2543],
              ["Contact Info", 2102],
              ["Verified Emails", 1432],
              ["Enriched", 987],
              ["Qualified", 645],
            ].map(([label, count]) => (
              <div key={label} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md font-medium">
                {label}: {count}
              </div>
            ))}
          </div>
          <div className="text-sm mt-4 text-gray-600">
            Conversation rate: 25.4%
            <span className="text-green-600 ml-2">+7.9% from last month</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center justify-center">
          <h2 className="font-semibold mb-4">Email Verification Results</h2>
          <div className="w-40 h-40 relative">
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-[16px] border-green-500 border-t-orange-400 border-r-red-500"></div>
            <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
              76.3%
              <br />
              Deliverable
            </div>
          </div>
          <div className="mt-4 text-sm text-center space-y-1">
            <div>
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span> Deliverable: 1,432
            </div>
            <div>
              <span className="inline-block w-3 h-3 bg-orange-400 rounded-full mr-2"></span> Risky: 287
            </div>
            <div>
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span> Invalid: 157
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action */}
      <div className="bg-white p-6 rounded-xl shadow min-w-1/4">
        <h2 className="font-semibold text-lg mb-4">Quick Action</h2>
        <div className="space-y-4">
          <ActionItem
            title="Find leads and email addresses"
            desc="Use our B2B lead database and powerful market segmentation features."
            button="Start Prospecting"
          />
          <ActionItem
            title="Verify email address"
            desc="Verify individual email address with the most complete email checker."
            button="Start Verifying"
          />
          <ActionItem
            title="Send cold email campaigns"
            desc="Connect your email to create, personalize, and send campaigns at scale."
            button="Start a Campaign"
          />
        </div>
      </div>

      {/* Collapse Button */}
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setCollapsed(!collapsed)}
        >
          Click Me
        </button>
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
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <p className="text-xl font-semibold mt-1">{value}</p>
      <p className={`text-sm mt-2 ${isNegative ? "text-red-500" : "text-green-600"}`}>
        {change} <span className="text-gray-500">from last month</span>
      </p>
      <p className="text-xs text-gray-400">{subChange}</p>
    </div>
  );
}

function ActionItem({
  title,
  desc,
  button,
}: {
  title: string;
  desc: string;
  button: string;
}) {
  return (
    <div className="border rounded-lg p-4 flex items-center justify-between">
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
      <button className="bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-700">
        {button}
      </button>
    </div>
  );
}
