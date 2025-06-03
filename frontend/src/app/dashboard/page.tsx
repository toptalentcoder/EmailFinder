"use client";

import { useState } from "react";
import Sidebar from "@/components/common/Sidebar";

export default function Dashboard(){

    const [selectedMenu, setSelectedMenu] = useState("Dashboard");
    const [selectedSubmenu, setSelectedSubmenu] = useState<string | null>(null);

    return(
        <div className="flex">
            <Sidebar
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
                selectedSubmenu={selectedSubmenu}
                setSelectedSubmenu={setSelectedSubmenu}
            />

            <div className="flex-1 p-8 bg-white">

                {/* Pages for floating submenus */}
                {selectedSubmenu === "People" && <h1>People Page</h1>}
                {selectedSubmenu === "Companies" && <h1>Companies Page</h1>}
                {selectedSubmenu === "All People" && <h1>All People Page</h1>}
                {selectedSubmenu === "Import from Companies" && <h1>Import from Companies Page</h1>}
                {selectedSubmenu === "Josie’s Leads" && <h1>Josie’s Leads Page</h1>}
                {selectedSubmenu === "Single Verification" && <h1>Single Email Verification Page</h1>}
                {selectedSubmenu === "Bulk Verification" && <h1>Bulk Email Verification Page</h1>}
                {selectedSubmenu === "Campaigns" && <h1>Campaigns Page</h1>}
                {selectedSubmenu === "Inbox" && <h1>Inbox Page</h1>}
                {selectedSubmenu === "Engagement" && <h1>Engagement Page</h1>}
                {selectedSubmenu === "Reporting" && <h1>Reporting Page</h1>}
                {selectedSubmenu === "Queue" && <h1>Queue Page</h1>}
                {selectedSubmenu === "Templates" && <h1>Templates Page</h1>}
                {selectedSubmenu === "Unsubscriptions" && <h1>Unsubscriptions Page</h1>}

                {/* Pages for main menu */}
                {selectedMenu === "Dashboard" && <h1>Dashboard Page</h1>}
                {selectedMenu === "Lead Scraper" && <h1>Lead Scraper Page</h1>}
                {selectedMenu === "Email Finder" && <h1>Email Finder Page</h1>}
                {selectedMenu === "Updates" && <h1>Updates Page</h1>}
                {selectedMenu === "Integration" && <h1>Integration Page</h1>}
                {selectedMenu === "API" && <h1>API Page</h1>}

            </div>

        </div>
    )
}