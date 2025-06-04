// app/lead-scraper/page.tsx (or your route file)
"use client";

import { useState } from "react";
import { DownloadIcon, SearchIcon } from "lucide-react";

export default function LeadScraperPage() {
  return (
    <div className="flex">
      <div className="flex-1 bg-white p-6 relative min-h-screen rounded-xl mt-[6px]">
        {/* Top bar */}
        <div className="top-4 left-4 flex items-center gap-2">
          <div className="w-4 h-4 bg-[#22272B] rounded" />
          <span className="text-base font-medium text-[#1D2125]">Lead Scraper</span>
        </div>

        {/* Export Button */}
        <div className="top-2 right-4">
          <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-b from-[#0069FF] to-[#0457F2] border border-[#3053F2] rounded-md shadow-sm">
            <DownloadIcon size={14} strokeWidth={1.5} />
            My Export
          </button>
        </div>

        {/* Scrap Search Box */}
        <div className="top-[62px] left-1/2 transform -translate-x-1/2 w-[1159px] bg-[#F8F8F8] rounded-lg p-4 shadow-sm">
          <span className="text-sm font-medium text-[#1D2125] mb-2 block">Scrap Search</span>

          <div className="mt-4 bg-white p-4 rounded-md shadow-md flex gap-3 flex-wrap">
            <Dropdown label="Activity" placeholder="search activity" width="w-[245px]" />
            <Dropdown label="Country" placeholder="search country" width="w-[203px]" />
            <Dropdown label="Level 1 Division" placeholder="search level 1" width="w-[186px]" />
            <Dropdown label="Level 2 Division" placeholder="search level 2" width="w-[184px]" />
            <Dropdown label="City" placeholder="search city" width="w-[176px]" />
            <button className="flex items-center gap-2 px-3 py-2 bg-white border border-[#EBEBEB] shadow-sm text-sm font-medium rounded-md">
              <SearchIcon size={16} className="text-[#22272B]" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dropdown({ label, placeholder, width }: { label: string; placeholder: string; width: string }) {
  return (
    <div className={`flex flex-col gap-1 ${width}`}>
      <label className="text-xs font-medium text-[#1D2125]">{label}</label>
      <div className="flex items-center justify-between px-3 py-2 bg-[#F8F8F8] border border-[#EBEBEB] rounded-md text-xs font-medium text-[#888888]">
        {placeholder}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="#898B8D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
