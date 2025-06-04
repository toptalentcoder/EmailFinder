"use client";

import { useState, useRef, useEffect } from "react";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CgViewComfortable } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import SideFilterbar from "./SideFilter";
import MainContent from "./MainContent";

interface PeoplePageProps {
  togglePanel: () => void;
}

export default function PeoplePage({ togglePanel }: PeoplePageProps) {

  const [collapsed, setCollapsed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleToggle = () => {
    setCollapsed(prev => !prev);    // local toggle for icon display
    togglePanel();                  // call external panel toggle
  };

  return (
    <div className="min-h-screen text-sm text-gray-800 font-sans">

      {/* Header with Collapse Button */}
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
        <h1 className="text-2xl font-semibold ml-2">People</h1>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4 ml-8 mr-8">
          <div className="flex items-center gap-2">
            <Menu>
              <MenuButton>
                <div className="flex items-center gap-2 bg-white hover:bg-gray-200 cursor-pointer border border-gray-300 rounded-lg px-3 py-1">
                  <CgViewComfortable className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Default View</span>
                  <IoIosArrowDown/>
                </div>
              </MenuButton>
              <MenuItems
                anchor="bottom start"
                className="[--anchor-gap:8px] [--anchor-padding:8px] rounded-lg bg-white shadow-2xl z-50 border border-gray-200 min-w-96"
              >
                <MenuItem>
                  <div className="text-gray-800 px-4 py-1 hover:bg-gray-100 cursor-pointer">Saved Searches</div>
                </MenuItem>
                <MenuItem>
                  <div className="flex items-center gap-2 px-4 py-1 hover:bg-gray-100 cursor-pointer">
                    <CgViewComfortable className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-800">Default View</span>
                    <div className="bg-gray-400 rounded-2xl px-2 py-0.5">System</div>
                  </div>
                </MenuItem>
                <MenuItem>
                    <div className="flex items-center gap-2 px-4 py-1 hover:bg-gray-100 cursor-pointer">
                      <CgViewComfortable className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-800">Great Leads</span>
                  </div>
                </MenuItem>
              </MenuItems>
            </Menu>

            <div className="flex items-center gap-2 bg-white hover:bg-gray-200 cursor-pointer border border-gray-300 rounded-lg px-3 py-1">
              <HiOutlineAdjustmentsHorizontal className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">Hide Filter</span>
            </div>

            <div
              className="flex items-center gap-2 bg-white cursor-pointer border border-gray-300 rounded-lg px-3 py-1 min-w-52"
              onClick={() => setIsEditing(true)}
            >
              <CiSearch className="w-5 h-5 text-gray-500" />
              {isEditing ? (
                <input
                  ref={inputRef}
                  type="text"
                  className="w-full outline-none text-gray-700"
                  placeholder="Type to search..."
                  onBlur={() => setIsEditing(false)}
                />
              ) : (
                <span className="text-gray-600">Search</span>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button
                className="bg-white text-gray-800 border border-gray-400 px-3 py-1 rounded-l-lg cursor-pointer flex items-center space-x-3 text-sm hover:bg-gray-300"
            >
              <span>Save Search</span>
            </button>
            <Menu>
                <MenuButton className="text-gray-200 cursor-pointer rounded-r-lg bg-white pl-3 hover:bg-gray-300 border border-gray-400">
                    <div className='flex items-center space-x-2 text-gray-800 py-2 text-md font-medium mr-3'>
                        <IoIosArrowDown/>
                    </div>
                </MenuButton>
                <MenuItems
                    anchor="bottom end"
                    className="[--anchor-gap:8px] [--anchor-padding:8px] rounded-md bg-white shadow-2xl z-50 mt-2 border border-gray-200 min-w-92"
                >
                    <MenuItem key={"savedSearchName"} as="div">
                        <div
                            className="flex items-center gap-2 px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault(); // prevents menu from closing
                            }}
                        >
                            Saved Search name
                        </div>
                    </MenuItem>
                    <MenuItem key={"SearchName"} as="div">
                        <div
                            className="flex items-center gap-2 px-3 py-0.5 text-sm bg-gray-100 border border-gray-400 mx-3 mb-5 rounded-lg"
                            onClick={(e) => e.preventDefault()} // keeps menu open
                        >
                            <input
                                type="text"
                                placeholder="Choose a search name"
                                className="w-full px-2 py-1 text-gray-700 bg-transparent outline-none"
                            />
                        </div>
                    </MenuItem>

                    <MenuItem key={"CreateSearch"} as="div">
                        <div
                            className="flex items-center gap-2 px-5 py-2 text-sm text-gray-700 justify-end"
                            onClick={(e) => {
                                e.preventDefault(); // prevents menu from closing
                            }}
                        >
                            <div className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-3 py-1 cursor-pointer rounded-lg">Cancel</div>
                            <div className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 cursor-pointer rounded-lg">Create Search</div>
                        </div>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>

        </div>

        <div className="flex-1 flex">
          {/* Sidebar Filter */}
          <SideFilterbar/>

          {/* Main Content */}
          <MainContent />
        </div>
      </div>
    </div>
  );
}
