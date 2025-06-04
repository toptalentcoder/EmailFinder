"use client";

import { useState } from "react";
import { FaDownload, FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import LeadScraperPage from './page';

const activities = ["Accounting Firm"];
const countries = ["United states"];
const divisions1 = ["New York"];
const divisions2 = ["Queens County"];
const cities = ["Queens"];

const results = [
  {
    name: "Jw accounting",
    city: "Queens",
    phone: "(718) 672-2270",
    map: true,
    website: "Jw-accounting.com",
    email: "No email found",
    socials: { link: true, facebook: true, x: true },
  },
  {
    name: "NASH-BEREIT",
    city: "Queens",
    phone: "+34 658 60 37 66",
    map: false,
    website: "-",
    email: "-",
    socials: { link: true, facebook: true, x: true },
  },
  {
    name: "H&R Block",
    city: "Queens",
    phone: "(718) 225-8409",
    map: true,
    website: "hrblock.com",
    email: "-",
    socials: { link: true, facebook: true, x: true },
  },
  {
    name: "Lead The Way Bookkeeping",
    city: "Queens",
    phone: "+34 658 60 37 66",
    map: true,
    website: "bookkeeping.com",
    email: "admin@bookkeeping.com",
    socials: { link: true, facebook: true, x: true },
  },
];

export default function LeadScraperPage({
    collapsed,
    setCollapsed,
}: {
    collapsed: boolean;
    setCollapsed: (val: boolean) => void;
}) {
  const [activity, setActivity] = useState("");
  const [country, setCountry] = useState("");
  const [level1, setLevel1] = useState("");
  const [level2, setLevel2] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="p-6 text-gray-800">
      <div className="flex items-center justify-between mb-4">
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
                <h1 className="text-2xl font-semibold ml-2">Lead Scraper</h1>
            </div>
        <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <FaDownload /> My Export
        </button>
      </div>

      <div className="bg-gray-100 p-0.5 rounded-xl shadow">
        <div className="px-4 py-2">
          <h2 className="text-md font-semibold mb-2">Scrap Search</h2>
        </div>
        <div className="grid grid-cols-6 gap-4 bg-white p-5 rounded-xl">
          <div>
            <div className="text-sm py-1">Activity</div>
            <select className="text-sm p-2 rounded border">
              <option>search activity</option>
              {activities.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </div>

          <div>
            <div className="text-sm py-1">Country</div>
            <select className="text-sm p-2 rounded border">
              <option>search country</option>
              {countries.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <div className="text-sm py-1">Level 1 Division</div>
            <select className="text-sm p-2 rounded border">
              <option>search level 1</option>
              {divisions1.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>

          <div>
            <div className="text-sm py-1">Level 2 Division</div>
            <select className="text-sm p-2 rounded border">
              <option>search level 2</option>
              {divisions2.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>

          <div>
            <div className="text-sm py-1">City</div>
            <select className="text-sm p-2 rounded border">
              <option>search city</option>
              {cities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <div className="text-sm py-1 invisible">Search</div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
              <FaSearch /> Search
            </button>
          </div>

        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-2">4 Result Found</p>
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-2">Name</th>
                <th className="p-2">City</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Google Map Data</th>
                <th className="p-2">Website</th>
                <th className="p-2">Email</th>
                <th className="p-2">Website Data</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-2">{r.name}</td>
                  <td className="p-2">{r.city}</td>
                  <td className="p-2">{r.phone}</td>
                  <td className="p-2">{r.map ? "⭐ 👁️ 📍" : "⛔ ⛔ ⛔"}</td>
                  <td className="p-2">{r.website}</td>
                  <td className="p-2">{r.email}</td>
                  <td className="p-2">{r.socials.link ? "📄" : ""} {r.socials.facebook ? "📘" : ""} {r.socials.x ? "❌" : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <button className="text-sm border px-3 py-1 rounded">‹ Previous</button>
            <span className="text-sm">1</span>
            <span className="text-sm">2</span>
            <span className="text-sm text-gray-400">…</span>
            <button className="text-sm border px-3 py-1 rounded">Next ›</button>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-sm border px-3 py-1 rounded flex items-center gap-1">
              <FiFilter /> Filter
            </button>
            <button className="text-sm border px-3 py-1 rounded">Export CSV</button>
          </div>
        </div>
      </div>
    </div>
  );
}
